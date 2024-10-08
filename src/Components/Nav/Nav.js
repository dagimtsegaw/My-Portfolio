import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Link } from "react-router-dom";
import astronautHelmet from "../../assets/astronaut-helmet.png";
import deadEye from "../../assets/dead-eye.png";
import stack from "../../assets/stack.png";
import envelope from "../../assets/envelope.png";

export default function Nav() {
  const location = useLocation();

  const getNavPositionClass = () => {
    switch (location.pathname) {
      case "/":
        return "nav-about";
      case "/skills":
        return "nav-skills";
      case "/projects":
        return "nav-projects";
      case "/contact":
        return "nav-contact";
      default:
        return "";
    }
  };
  const getPageTitle = () => {
    switch (location.pathname) {
      case "/":
        return "ABOUT";
      case "/skills":
        return "SKILLS";
      case "/projects":
        return "PROJECTS";
      case "/contact":
        return "CONTACT";
      default:
        return "";
    }
  };

  const navPositionClass = getNavPositionClass();
  const pageTitle = getPageTitle();
  const isCurrentPage = (navClass) => {
    return navClass === navPositionClass;
  };
  const renderNavLink = (to, imgSrc, navClass, altText) => {
    const isCurrent = isCurrentPage(navClass);
    const linkclass = isCurrentPage ? "nav-link-current" : "nav-link";

    return (
      <Link to={to} className={linkclass}>
        <img src={imgSrc} />
        {isCurrent && <h1 className="page-title">{pageTitle}</h1>}
      </Link>
    );
  };
  return (
    <nav className={`nav ${navPositionClass}`}>
      {renderNavLink(
        "/About",
        astronautHelmet,
        "astronautHelmet icon",
        "nav-about"
      )}
      {renderNavLink("/Skills", deadEye, "deadEye icon", "nav-skills")}
      {renderNavLink("/Projects", stack, "stack icon", "nav-projects")}
      {renderNavLink("/contact", envelope, "envelope icon", "nav-contact")}
    </nav>
  );
}
