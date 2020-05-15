import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Routes from "./routes";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
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
