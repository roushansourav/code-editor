import React from "react";
import Switch from "react-switch";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function SwitchWrapper({ handleMode, modeToggle }) {
  return (
    <div style={{ float: "right" }} className="inline-block">
      <OverlayTrigger
        key="mode-switch"
        placement={modeToggle ? "right" : "left"}
        overlay={
          <Tooltip id="tooltip-mode-switch">
            <strong>{modeToggle?'Dark mode':'Light mode'}</strong>
          </Tooltip>
        }
      >
        <Switch
          uncheckedIcon={<Brightness2Icon />}
          checkedIcon={
            <Brightness7Icon style={{ color: "#f9c703", margin: "0 4px" }} />
          }
          onChange={handleMode}
          checked={modeToggle}
          onColor="#5f9ea0"
          offColor="#ffad60"
          offHandleColor="#1f1f1f"
          onHandleColor="#f9c703"
        />
      </OverlayTrigger>
    </div>
  );
}

export default SwitchWrapper;
