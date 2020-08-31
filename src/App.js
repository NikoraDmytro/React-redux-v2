import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { LandingPage } from "./pages/LandingPage.js";
import { SignIn } from "./pages/SignIn.js";

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/SignIn" component={SignIn} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
