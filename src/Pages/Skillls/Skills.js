import React, { Component } from "react";
import Avatar from "../../Components/Avatar/Avatar";
import SkillsMenu from "./SkillsMenu";

export default class Skills extends Component {
  render() {
    return (
      <>
        <Avatar page="skills" />
        <SkillsMenu />
      </>
    );
  }
}
