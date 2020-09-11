import React from "react";

import VectorImg from "./Vector.png";
import "./Vector.scss";

export const Vector = (props) => {
  const [IsVisible, setIsVisible] = props.state;

  const alternative = IsVisible ? "Свернуть" : "Развернуть";
  const direction = IsVisible ? "Top" : "Bottom";

  return (
    <img
      src={VectorImg}
      alt={alternative}
      className={`Vector${direction}`}
      onClick={() => setIsVisible(!IsVisible)}
    />
  );
};
