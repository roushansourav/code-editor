import aceEditor from "ace-builds";
import "ace-builds/webpack-resolver";
aceEditor.mode = require("ace-builds/src-noconflict/mode-html").Mode;
aceEditor.twilight = require("ace-builds/src-noconflict/theme-twilight");
aceEditor.solarized_light = require("ace-builds/src-noconflict/theme-solarized_light");

export default aceEditor;
