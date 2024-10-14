import React from "react";
import classNames from "classnames";
import "./abotMenu.css";

const AboutMenuItem = ({ title, onClick, active }) => {
  return (
    <div className={classNames("item", { active })} onClick={onClick}>
      <h2 className="title">{title}</h2>
    </div>
  );
};

export default AboutMenuItem;
