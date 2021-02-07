import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Page from "./Containers/Page/Page";
import "./App.scss";

export default function App() {
  return (
    <Router>
      <div className="App">
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        <Switch>
          <Route path="/">
            <Page />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
