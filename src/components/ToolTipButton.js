import React from "react";

function ToolTipButton({ position }) {
  return (
    <div className="tooltip">
      <button className="pressbutton">Press</button>
      <span className={`tooltiptext ${position}`}>Press button</span>
    </div>
  );
}

export default ToolTipButton;
