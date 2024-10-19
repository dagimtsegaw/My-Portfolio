import React, { Component } from "react";
import Avatar from "../../Components/Avatar/Avatar";
import SkillsMenu from "./SkillsMenu";

export default class Skills extends Component {
  render() {
    //acesss the avatar from the avatar component
    return (
      <>
        <Avatar page="skills" />
        <SkillsMenu />
      </>
    );
  }
}
