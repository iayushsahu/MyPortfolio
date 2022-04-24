import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route
          path="/linkedin"
          component={() => {
            window.location.href = "https://www.linkedin.com/in/iayushsahu/";
            return null;
          }}
        />
        <Route
          path="/location"
          component={() => {
            window.location.href =
              "https://www.google.com/maps/place/ISRO+Colony,+Ayodhya+Nagar,+Bhopal,+Madhya+Pradesh/@23.2764817,77.4638152,15z/data=!3m1!4b1!4m5!3m4!1s0x397c69f5f546c6e3:0x6b77a45c0377628a!8m2!3d23.2745279!4d77.4744994";
            return null;
          }}
        />
        <Route
          path="/github"
          component={() => {
            window.location.href = "https://github.com/iayushsahu";
            return null;
          }}
        />
        <Route
          path="/facebook"
          component={() => {
            window.location.href = "https://www.facebook.com/iAyushsahu22";
            return null;
          }}
        />
        <Route
          path="/instagram"
          component={() => {
            window.location.href = "https://www.instagram.com/iAyushsahu/";
            return null;
          }}
        />
        <Route
          path="/twitter"
          component={() => {
            window.location.href = "https://twitter.com/iAyushsahu";
            return null;
          }}
        />
        <Route
          path="/mail"
          component={() => {
            window.location.href =
              "https://mail.google.com/mail/?view=cm&fs=1&to=sahuayush221000@gmail.com";
            return null;
          }}
        />
        <Route
          path="/hackerrank"
          component={() => {
            window.location.href = "https://www.hackerrank.com/iAyush";
            return null;
          }}
        />
        <Route
          path="/covizine"
          component={() => {
            window.location.href = "https://covizine01.000webhostapp.com";
            return null;
          }}
        />
      </Switch>
    </Router>
  );
};

export default App;
