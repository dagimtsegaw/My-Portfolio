import React from "react";
import classNames from "classnames";
import "./abotMenu.css";

const AboutSubheading = ({ title, onClick, active, content, menuItem }) => {
  const subContainerClass = `subcontainer-${menuItem}`;
  //the return that will be rendered on the page
  return (
    <div
      className={classNames({ "active-subheading": active })}
      onClick={onClick}
    >
      <h3 onClick={onClick}>{title}</h3>
      <div className="p-contianer">{content}</div>
    </div>
  );
};

export default AboutSubheading;
