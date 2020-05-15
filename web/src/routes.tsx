import React from "react";
import { Route } from "react-router-dom";
import About from "./page/About";
import Home from "./page/Home";

const Routes = [
    <Route path="/about" component={About} />,
    <Route path="/" component={Home} />
]

export default Routes;
