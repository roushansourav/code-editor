import aceEditor from "ace-builds";
import "ace-builds/webpack-resolver";
aceEditor.mode = require("ace-builds/src-noconflict/mode-html").Mode;

const { themes } = require("ace-builds/src-noconflict/ext-themelist");
const darkThemes = themes.filter((t) => t.isDark);
const lightThemes = themes.filter((t) => !t.isDark);

aceEditor.lightThemes = lightThemes;
aceEditor.darkThemes = darkThemes;

export const init = (editorNodeRef) => {
  const editor = aceEditor.edit(editorNodeRef.current);
  editor.session.setMode(new aceEditor.mode());
  editor.setShowPrintMargin(false);
  return editor;
};

export { lightThemes, darkThemes };

export default aceEditor;
