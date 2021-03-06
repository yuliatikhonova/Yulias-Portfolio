import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
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
              <Route exact path= {process.env.PUBLIC_URL + '/'}>
                <Home />
              </Route>
              <Route exact path={process.env.PUBLIC_URL + '/about'}>
                <About />
              </Route>
              <Route exact path={process.env.PUBLIC_URL + '/portfolio'}>
                <Portfolio />
              </Route>
            </Wrapper>
          </Switch>
        </Router>
      </div>
    
      <Footer />
    </div>
  );
}

export default App;
