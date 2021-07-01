import React from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import GetAppIcon from "@material-ui/icons/GetApp";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Form from "react-bootstrap/Form";
import { darkThemes, lightThemes } from "../lib/editor";

function Tools({ handleDownload, handleRun, modeToggle, theme: t, setTheme }) {
  const themeOptions = modeToggle ? darkThemes : lightThemes;
  return (
    <div className="tooltip-container">
      <OverlayTrigger
        key="top"
        placement="top"
        overlay={
          <Tooltip id="tooltip-top">
            <strong>Run</strong>
          </Tooltip>
        }
      >
        <PlayArrowIcon
          onClick={handleRun}
          className="tools-icon"
          style={{ fontSize: "2rem" }}
        />
      </OverlayTrigger>

      <OverlayTrigger
        key="download"
        placement="top"
        overlay={
          <Tooltip id="tooltip-download">
            <strong>Download</strong>
          </Tooltip>
        }
      >
        <GetAppIcon
          className="tools-icon"
          onClick={handleDownload}
          style={{ fontSize: "2rem" }}
        />
      </OverlayTrigger>
      <Form.Group
        style={{
          display: "inline-block",
          float: "right",
          margin: 0,
        }}
      >
        <Form.Control
          as="select"
          size="sm"
          style={{
            color: modeToggle ? "white" : "#1b1b1b",
            backgroundColor: modeToggle ? "#1b1b1b" : "white",
          }}
          onChange={(e) => setTheme(e.target.value)}
        >
          {themeOptions.map(({ caption, theme }, idx) => (
            <option key={idx + theme} value={theme}>
              {caption}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
    </div>
  );
}

export default Tools;
