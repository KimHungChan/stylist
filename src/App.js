import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Page from "./Containers/Page/Page";
import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/">
            <Page />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
