import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { LandingPage } from "./pages/Landing/LandingPage.js";
import { SignIn } from "./pages/SignIn/SignIn.js";
import { ClientOffice } from "./pages/ClientOffice/ClientOffice.js";

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/SignIn" component={SignIn} />
          <Route path="/ClientOffice" component={ClientOffice} />
          <Route path="/ClientOrders" component={ClientOffice} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
