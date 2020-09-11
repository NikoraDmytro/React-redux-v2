import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const CornerButton = (props) => (
  <Link to={props.link} className={`cornerButton${props.type}`}>
    {typeof props.content === "object" ? (
      <img src={props.content.src} alt={props.content.alt} />
    ) : (
      <p>{props.content}</p>
    )}
  </Link>
);

export const Header = (props) => {
  const theme = props.backgroundTheme ? props.backgroundTheme : "none";
  const logoTheme = props.logoTheme;
  const buttonProps = props.buttonProps;
  return (
    <header className={`Header-${theme}`}>
      <h1 className={`Logo-${logoTheme}`}>S2</h1>
      <div className={`Content`}>{props.content}</div>
      <CornerButton
        content={buttonProps.content}
        link={buttonProps.link}
        type={buttonProps.type}
      />
    </header>
  );
};
