import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import "../styles/style.css";

const IndexPage = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/current-projects" />
        <Route path="/archived-projects" />
        <Route path="/schedule" />
      </Switch>
    </Router>
  )
};

export default IndexPage;
