import React from "react";
import { Switch, Route } from "react-router-dom";
import Profile from "./profile";
import About from "./about";

import Projects from "./projects";
import Contact from "./contact";

const Main = () => (
  <Switch>
    <Route path="/about" component={About} />
    <Route path="/projects" component={Projects} />
    <Route path="/contact" component={Contact} />
    <Route exact path="/" component={Profile} />
  </Switch>
);
export default Main;
