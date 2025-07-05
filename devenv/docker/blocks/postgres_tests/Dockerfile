ARG postgres_version=17.5
FROM postgres:${postgres_version}
ADD setup.sql /docker-entrypoint-initdb.d
CMD ["postgres"]
