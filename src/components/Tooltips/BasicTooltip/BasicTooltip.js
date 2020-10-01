import React from "react";
import { useState } from "react";
import Info from "../components/img/Info.png";

import "./BasicTooltip.scss";

export const Tooltip = (props) => {
  const [IsVisible, setIsVisible] = useState(false);

  return (
    <div className={`Tooltip ${props.className}`}>
      {props.content}
      <img
        src={Info}
        alt="Info"
        className="helpIcon"
        onMouseOver={() => setIsVisible(!IsVisible)}
      />
      {IsVisible ? (
        <div className="TooltipText">{props.TooltipText}</div>
      ) : null}
    </div>
  );
};
