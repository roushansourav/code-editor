import React, { useEffect, useRef } from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import ace from "ace-builds";
import "ace-builds/webpack-resolver";
import twilightTheme from "ace-builds/src-noconflict/theme-twilight";
import { Mode } from "ace-builds/src-noconflict/mode-html";

function Editor({
  modeToggle,
  setModeToggle,
  setFileURL,
  setText,
  previewNode,
  text,
  fileURL,
}) {
  const code = "<!--write your code here-->";
  const editorNode = useRef(null);
  const editor = useRef(null);

  const handleRun = (e) => {
    e.preventDefault();
    const element = previewNode.current;
    element.setAttribute("srcdoc", text);
  };

  useEffect(() => {
    if (editorNode.current) {
      editor.current = ace.edit(editorNode.current);
      editor.current.session.setMode(new Mode());
      editor.current.setShowPrintMargin(false);
      editor.current.session.on("change", function (delta) {
        const value = editor.current.getSession().getValue();
        setText(value);
        if (value) {
          const file = new Blob([value], { type: "text/plain" });
          const url = URL.createObjectURL(file);
          setFileURL(url);
        }
      });
    }
  }, []);

  useEffect(() => {
    if (modeToggle) editor.current.setTheme(twilightTheme);
    else editor.current.setTheme();
  }, [modeToggle]);

  return (
    <Col id="editor-container" sm={12} md={6}>
      <div className="tooltip-container">
        <Button variant="success" className="btn" onClick={handleRun}>
          Run
        </Button>

        <a href={fileURL} download="code.txt" target="_blank" rel="noreferrer">
          <Button variant="success" className="btn">
            Download
          </Button>
        </a>
      </div>
      <div id="editor" ref={editorNode} className="card-div">
        {code}
      </div>
    </Col>
  );
}

export default Editor;
