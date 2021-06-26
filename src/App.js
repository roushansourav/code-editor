import React, { useEffect, useRef, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
const ace = require("ace-builds");
const twilightTheme = require("ace-builds/src-noconflict/theme-twilight");
const mode = require("ace-builds/src-noconflict/mode-html").Mode;

function App() {
  const code = "<!--write your code here-->";
  const [text, setText] = useState("");
  const [fileURL, setFileURL] = useState("");
  const node = useRef(null);
  const previewNode = useRef(null);

  const handleRun = (e) => {
    e.preventDefault();
    const element = previewNode.current;
    element.setAttribute("srcdoc", text);
  };

  useEffect(() => {
    if (node.current) {
      const editor = ace.edit(node.current);
      editor.setTheme(twilightTheme);
      editor.session.setMode(new mode());
      editor.setShowPrintMargin(false);
      editor.setOptions({ minLines: 200, fontSize: "16px" });
      editor.session.on("change", function (delta) {
        const value = editor.getSession().getValue();
        setText(value);
        if (value) {
          const file = new Blob([value], { type: "text/plain" });
          const url = URL.createObjectURL(file);
          setFileURL(url);
        }
      });
    }
  }, []);

  return (
    <Container className='App'>
      <h1>Welcome to my editor</h1>
      <Row>
        <Col sm={12} md={6}>
          <div className="tooltip-container">
            <Button onClick={handleRun}>Run</Button>
          </div>
          <div id="editor" ref={node}>
            {code}
          </div>
        </Col>
        <Col id="preview-container" sm={12} md={6}>
          <div className="tooltip-container">
            <a
              href={fileURL}
              download="code.txt"
              target="_blank"
              rel="noreferrer"
            >
              Download
            </a>
          </div>
          <iframe
            ref={previewNode}
            id="preview"
            style={{ width: "100%", height: "calc(100% - 50px)" }}
            // srcDoc={text}
            title="W3Schools Free Online Web Tutorials"
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
