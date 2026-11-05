package httpresponsesender

import (
	"errors"
	"fmt"
	"net/http"
	"net/textproto"

	"github.com/grafana/grafana-plugin-sdk-go/backend"
)

// HTTPResponseSender implements backend.CallResourceResponseSender and
// writes an HTTP response using an http.ResponseWriter given received
// backend.CallResourceResponse(s).
type HTTPResponseSender struct {
	processedStreams int
	w                http.ResponseWriter
	status           int
}

// New creates a new HTTPResponseSender.
func New(w http.ResponseWriter) *HTTPResponseSender {
	if w == nil {
		panic("response writer cannot be nil")
	}

	return &HTTPResponseSender{
		w: w,
	}
}

func (s *HTTPResponseSender) Send(resp *backend.CallResourceResponse) error {
	if resp == nil {
		return errors.New("resp cannot be nil")
	}

	// Expected that headers and status are only part of first stream
	if s.processedStreams == 0 {
		for k, values := range resp.Headers {
			// Convert the keys to the canonical format of MIME headers.
			// This ensures that we can safely add/overwrite headers
			// even if the plugin returns them in non-canonical format
			// and be sure they won't be present multiple times in the response.
			k = textproto.CanonicalMIMEHeaderKey(k)

			for _, v := range values {
				s.w.Header().Add(k, v)
			}
		}

		s.status = resp.Status
		s.w.WriteHeader(resp.Status)
	}

	// Skip writing body for status codes that do not allow one per HTTP spec
	// (1xx informational, 204 No Content, 304 Not Modified). Go 1.26+
	// enforces this and returns an error from ResponseWriter.Write.
	if bodyAllowedForStatus(s.status) {
		if _, err := s.w.Write(resp.Body); err != nil {
			return fmt.Errorf("failed to write resource response: %v", err)
		}
	}

	if flusher, ok := s.w.(http.Flusher); ok {
		flusher.Flush()
	}

	s.processedStreams++
	return nil
}

// bodyAllowedForStatus reports whether a given response status code
// permits a body. See RFC 7230, section 3.3.
func bodyAllowedForStatus(status int) bool {
	switch {
	case status >= 100 && status <= 199:
		return false
	case status == http.StatusNoContent: // 204
		return false
	case status == http.StatusNotModified: // 304
		return false
	}
	return true
}

var _ backend.CallResourceResponseSender = &HTTPResponseSender{}
