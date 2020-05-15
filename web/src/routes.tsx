import React from "react";
import { Route } from "react-router-dom";
import About from "./page/About";
import Home from "./page/Home";

const Routes = [
    <Route path="/about" component={About} key="about" />,
    <Route path="/" component={Home} key="home"/>
]

export default Routes;
