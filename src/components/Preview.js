import React from "react";
import Col from "react-bootstrap/Col";

function Preview({ previewNode, modeToggle, fileURL }) {
  return (
    <Col id="preview-container" sm={12} md={6}>
      <div className="tooltip-container">
      </div>
      <div
        id="preview"
        style={{ width: "100%", height: "100%" }}
        className="card-div"
      >
        <iframe
          ref={previewNode}
          style={{
            height: "100%",
            width: "100%",
            border: modeToggle ? "1px solid white" : "1px solid #141414",
            backgroundColor: modeToggle ? "#141414" : "transparent",
            borderRadius: "5px",
          }}
          // srcDoc={text}
          title="W3Schools Free Online Web Tutorials"
        ></iframe>
      </div>
    </Col>
  );
}

export default Preview;
