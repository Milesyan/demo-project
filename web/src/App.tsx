import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Routes from "./routes";
import { Button } from 'antd';
import Navigation from "component/Navigation";


function App() {
  return (
    <Router>
      <div>
        <Navigation>
          <Switch>
            {Routes}
          </Switch>
        </Navigation>
      </div>
    </Router>
  );
}

export default App;
