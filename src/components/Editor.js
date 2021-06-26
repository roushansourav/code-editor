import React from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import FileSaver from "file-saver";

function Editor({
  modeToggle,
  setModeToggle,
  setFileURL,
  setText,
  previewNode,
  text,
  fileURL,
  editor,
  editorNode,
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
      <div className="tooltip-container">
        <Button variant="success" className="btn" onClick={handleRun}>
          Run
        </Button>

        <Button variant="success" className="btn" onClick={handleDownload}>
          Download
        </Button>
      </div>
      <div id="editor" ref={editorNode} className="card-div">
        {code}
      </div>
    </Col>
  );
}

export default Editor;
