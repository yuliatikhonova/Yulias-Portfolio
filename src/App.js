import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";


function App() {
  return (
    <div className="container-fluid">
      <Sidebar />
      <div className="main">
        <Router>
          <Navbar />
          <br />
          <Switch>
            <Wrapper>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/portfolio">
                <Portfolio />
              </Route>
            </Wrapper>
          </Switch>
        </Router>
        <br /><br />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
