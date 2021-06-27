import React from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import GetAppIcon from "@material-ui/icons/GetApp";

function Tools({ handleDownload, handleRun }) {
  return (
    <div className="tooltip-container">
      <PlayArrowIcon
        onClick={handleRun}
        className="tools-icon"
        style={{ fontSize: "2rem" }}
      />
      <GetAppIcon
        className="tools-icon"
        onClick={handleDownload}
        style={{ fontSize: "2rem" }}
      />
    </div>
  );
}

export default Tools;
