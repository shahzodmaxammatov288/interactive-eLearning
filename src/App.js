import React from "react";
import Nav from "./components/Nav";
//! Global style
import GlobalStyle from "./components/GlobalStyle";
//! import pages
import AboutUs from "./pages/AboutUs";
import Courses from "./pages/Courses";
import ContactUs from "./pages/ContactUs";
import CourseDetail from "./pages/CourseDetail";
//! Router
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/courses" exact>
          <Courses />
        </Route>
        <Route path="/courses/:id">
          <CourseDetail />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
