import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import RollSheet from "../routes/RollSheet";
import Navigation from "./Navigation";

const AppRouter = ({ isLoggedIn, userObj }) => {
  return (
    <>
      <Router>
        {isLoggedIn && <Navigation userObj={userObj} />}
        <Switch>
          {isLoggedIn ? (
            <>
              <Route exact path="/RollingPaper">
                <Home userObj={userObj}></Home>
              </Route>
              <Route exact path="/RollSheet">
                <RollSheet userObj={userObj} />
              </Route>
            </>
          ) : (
            <>
              <Route exact path="/RollingPaper">
                <Auth />
              </Route>
            </>
          )}
        </Switch>
      </Router>
    </>
  );
};

export default AppRouter;
