import React from "react";
import { useState } from "react";
import { Vector } from "../components/Vector/Vector.js";

import "./DropDown.scss";

export const DropDown = (props) => {
  const [IsVisible, setIsVisible] = useState(false);

  const active = IsVisible ? "active" : null;

  return (
    <div className={`${props.className} DropDown ${active}`}>
      <div className="VisiblePart">
        {props.content}
        <Vector state={[IsVisible, setIsVisible]} />
      </div>
      {IsVisible ? (
        <span className="DropDownText">{props.TooltipText}</span>
      ) : null}
    </div>
  );
};
