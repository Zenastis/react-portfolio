import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Aboutme from "./components/pages/aboutme";
import Contactme from "./components/pages/contactme";
import Home from "./components/pages/home";
import Projects from "./components/pages/projects";
import Materialui from "./components/materialui";
import Pagefooter from "./components/pagefooter";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
       <Switch>
         <Materialui/>
       <div>
         <Route exact path="/" component={Home} />
         <Route exact path="/Home" component={Home} />
         <Route exact path="/about" component={Aboutme} />
         <Route exact path="/portfolio" component={Projects} />
         <Route exact path="/contact" component={Contactme} />
       </div>
      </Switch>
     </Router>
     <Pagefooter/>
    </div>
  );
}

export default App;
