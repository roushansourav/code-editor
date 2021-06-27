import aceEditor from "ace-builds";
import "ace-builds/webpack-resolver";
aceEditor.mode = require("ace-builds/src-noconflict/mode-html").Mode;
aceEditor.twilight = require("ace-builds/src-noconflict/theme-twilight");
aceEditor.solarized_light = require("ace-builds/src-noconflict/theme-solarized_light");

export const init = (editorRef, editorNodeRef) => {
  const editor = aceEditor.edit(editorNodeRef.current);
  editor.session.setMode(new aceEditor.mode());
  editor.setShowPrintMargin(false);
  editorRef.current = editor;
};

export default aceEditor;
