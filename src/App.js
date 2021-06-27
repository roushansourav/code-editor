import React, { useRef, useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Editor from "./components/Editor";
import Preview from "./components/Preview";
import Switch from "./components/Switch";
import aceEditor, { init } from "./lib/editor";

function App() {
  const [text, setText] = useState("");
  const [fileURL, setFileURL] = useState("");
  const [modeToggle, setModeToggle] = useState(false);
  const previewNode = useRef(null);
  const editorNode = useRef(null);
  const editor = useRef(null);

  const handleMode = () => {
    setModeToggle(!modeToggle);
  };

  useEffect(() => {
    init(editor, editorNode);
  }, []);

  useEffect(() => {
    if (modeToggle) editor.current.setTheme(aceEditor.twilight);
    else editor.current.setTheme(aceEditor.solarized_light);
  }, [modeToggle, editor]);

  return (
    <Container
      className="App"
      style={{
        backgroundColor: modeToggle ? "black" : "white",
        color: modeToggle ? "white" : "black",
      }}
    >
      <div>
        <h4 className="inline-block">Welcome to my editor</h4>{" "}
        <div style={{ float: "right" }} className="inline-block">
          <Switch {...{ handleMode, modeToggle }} />
        </div>
      </div>

      <Row style={{ height: "100%" }}>
        <Editor
          {...{
            text,
            setFileURL,
            setModeToggle,
            setText,
            modeToggle,
            previewNode,
            fileURL,
            editor,
            editorNode,
          }}
        />
        <Preview {...{ previewNode, modeToggle }} />
      </Row>
    </Container>
  );
}

export default App;
