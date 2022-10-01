import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Resume from "./components/Pages/Resume";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Projects from "./components/Pages/Projects";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      
      <Router>
        <Header />
          <Routes>
            <Route path="/About" exact element={ <About/>} />
            <Route path="/Projects" exact element={ <Projects/> } />
            <Route path="/Contact" exact element={ <Contact/> } />
            <Route path="/Resume" exact element={ <Resume/> } />
          </Routes>
      </Router>
      <br />
      <Footer />
      
    </div>
  );
}

export default App;