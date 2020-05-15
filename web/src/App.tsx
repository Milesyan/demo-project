import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Routes from "./routes";
import { Button } from 'antd';


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <Button type='primary'>Home</Button>
              </Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          {Routes}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
