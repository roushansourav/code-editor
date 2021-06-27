import React from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import GetAppIcon from "@material-ui/icons/GetApp";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function Tools({ handleDownload, handleRun }) {
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
    </div>
  );
}

export default Tools;
