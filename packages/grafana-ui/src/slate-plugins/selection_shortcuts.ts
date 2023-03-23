import { isKeyHotkey } from 'is-hotkey';
import { Editor as CoreEditor } from 'slate';

import { Plugin } from '@grafana/slate-react';

const isSelectLineHotkey = isKeyHotkey('mod+l');

// Clears the rest of the line after the caret
export function SelectionShortcutsPlugin(): Plugin {
  return {
    onKeyDown(event, editor, next) {
      if (isSelectLineHotkey(event)) {
        event.preventDefault();
        const { focusBlock, document } = editor.value;

        editor.moveAnchorToStartOfBlock();

        const nextBlock = document.getNextBlock(focusBlock.key);
        if (nextBlock) {
          editor.moveFocusToStartOfNextBlock();
        } else {
          editor.moveFocusToEndOfText();
        }
      } else {
        return next();
      }

      return true;
    },
  };
}
