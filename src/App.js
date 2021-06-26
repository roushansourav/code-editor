import React, { useEffect, useRef, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ace from "ace-builds";
import "ace-builds/webpack-resolver";
import twilightTheme from "ace-builds/src-noconflict/theme-twilight";
import { Mode } from "ace-builds/src-noconflict/mode-html";

function App() {
  const code = "<!--write your code here-->";
  const [text, setText] = useState("");
  const [fileURL, setFileURL] = useState("");
  const [modeToggle, setModeToggle] = useState(false);
  const editorNode = useRef(null);
  const previewNode = useRef(null);
  const editor = useRef(null);

  const handleRun = (e) => {
    e.preventDefault();
    const element = previewNode.current;
    element.setAttribute("srcdoc", text);
  };

  const handleMode = (e) => {
    e.preventDefault();
    setModeToggle(!modeToggle);
  };

  useEffect(() => {
    if (editorNode.current) {
      editor.current = ace.edit(editorNode.current);
      editor.current.session.setMode(new Mode());
      editor.current.setShowPrintMargin(false);
      editor.current.setOptions({
        fontSize: "16px",
      });
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

  console.log(modeToggle);
  return (
    <Container className="App">
      <h1>Welcome to my editor</h1>
      <Button onClick={handleMode}>{modeToggle ? "Light" : "Dark"}</Button>
      <Row>
        <Col sm={12} md={6}>
          <div className="tooltip-container">
            <Button onClick={handleRun}>Run</Button>
          </div>
          <div id="editor" ref={editorNode} className="card-div">
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
          <div
            id="preview"
            style={{ width: "100%", height: "calc(100% - 60px)" }}
            className="card-div"
          >
            <iframe
              ref={previewNode}
              style={{ height: "100%", width: "100%", border: "none" }}
              // srcDoc={text}
              title="W3Schools Free Online Web Tutorials"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
