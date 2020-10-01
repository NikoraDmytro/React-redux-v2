import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { LandingPage } from "./pages/Landing/LandingPage.js";
import { SignIn } from "./pages/SignIn/SignIn.js";
import { ClientOffice } from "./pages/ClientOffice/ClientOffice.js";
import Store from "./stores/Store.js";

function App() {
  return (
    <Provider store={Store}>
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
    </Provider>
  );
}

export default App;
