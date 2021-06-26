import React, { useRef, useState } from "react";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Editor from "./components/Editor";
import Preview from "./components/Preview";

function App() {
  const [text, setText] = useState("");
  const [fileURL, setFileURL] = useState("");
  const [modeToggle, setModeToggle] = useState(false);
  const previewNode = useRef(null);

  const handleMode = (e) => {
    e.preventDefault();
    setModeToggle(!modeToggle);
  };

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
        <Button className="inline-block" onClick={handleMode}>
          {modeToggle ? "Light" : "Dark"}
        </Button>
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
          }}
        />
        <Preview {...{ previewNode, modeToggle }} />
      </Row>
    </Container>
  );
}

export default App;
