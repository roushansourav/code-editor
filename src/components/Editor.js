import React from "react";
import Col from "react-bootstrap/Col";

import FileSaver from "file-saver";

import Tools from "./Tools";

function Editor({
  previewNode,
  editor,
  editorNode,
  modeToggle,
  theme,
  setTheme,
}) {
  const code = "<!--write your code here-->";

  const handleRun = (e) => {
    e.preventDefault();
    const element = previewNode.current;
    element.setAttribute("srcdoc", editor.current.getSession().getValue());
  };

  const handleDownload = (e) => {
    e.preventDefault();
    const value = editor.current.getSession().getValue();
    const blob = new Blob([value], { type: "text/plain" });
    FileSaver.saveAs(blob, "download.txt");
  };

  return (
    <Col id="editor-container" sm={12} md={6}>
      <Tools {...{ handleDownload, handleRun, modeToggle, theme, setTheme }} />
      <div id="editor" ref={editorNode} className="card-div">
        {code}
      </div>
    </Col>
  );
}

export default Editor;
