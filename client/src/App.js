import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav"
import Quotes from "./pages/Quotes"


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/quotes"]}>
            <Quotes />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
