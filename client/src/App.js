import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Contact } from "./components";
import background from "./assests/background.png";

function App() {
  return (
    <div className="App" style={{  
      backgroundImage: `url(${background})`,
      height: '100vh',
      width: '100vw' }}>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/about" component={ About } />
          <Route path="/contact" component={ Contact } />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
