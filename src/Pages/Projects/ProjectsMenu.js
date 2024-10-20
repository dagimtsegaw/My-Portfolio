import React, { Component } from "react";
import projects from "./projectsData";
import classNames from "classnames";
import "./projectsMenu.css";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeProject: 1,
    };
  }
  //onclick event function that handles when it is clicked
  handleProjectClick = (project) => {
    this.setState({
      activeProject: project,
    });
  };
  ///render content by accssing from the project data
  renderContent = (projects) => {
    return projects.map((project, index) => (
      <div key={index} className={`project-sub-container-${index + 1}`}>
        <h3>{project.title}</h3>
        <img src={project.image} alt={project.tilte} />
        <div>{project.description}</div>
        <div className="link-container">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            GITHUB
          </a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            DEMO
          </a>
        </div>
      </div>
    ));
  };
  //rendering on the project page
  render() {
    const { activeProject } = this.state;
    const projectItems = ["PROJECT ONE", "PROJECT TWO", "PROJECT THREE"];
    return (
      <div className="project-menu">
        <div className="project-items-container">
          {projectItems.map((item, index) => (
            <div
              key={index}
              className={classNames("project-item", {
                activeProject: activeProject === index + 1,
              })}
              onClick={() => this.handleProjectClick(index + 1)}
            >
              <h2 className="title">{item}</h2>
            </div>
          ))}
        </div>
        <div className="project-sub-container">
          {this.renderContent([projects[activeProject]])}
        </div>
      </div>
    );
  }
}
