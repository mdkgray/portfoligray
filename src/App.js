import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from '../src/components/Header';
import Navigation from '../src/components/Navigation';
// import PageContainer from './components/PageContainer';
import Footer from './components/Footer';
import Resume from "./components/Pages/Resume";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Projects from "./components/Pages/Projects";

function App() {
  return (
    <div className="App">

      <Router>
        <Navigation/>
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