import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Footer from './components/Footer';
import Resume from "./components/Pages/Resume";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Projects from "./components/Pages/Projects";
import Header from "./components/Header";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  console.log(window.location.pathname);

  return (
    <div className="App">
      <ThemeProvider 
        theme={darkTheme}
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs">
        <CssBaseline />

        <Router>
          <Header />
          <Routes>
            <Route path="/" index element={ <About/>} />
            <Route path="/Projects" element={ <Projects/> } />
            <Route path="/Contact" element={ <Contact/> } />
            <Route path="/Resume" element={ <Resume/> } />
            <Route path="*" element={ <Navigate to="/" replace /> } />
          </Routes>
        </Router>

        <br />
        <Footer />
      </ThemeProvider>      
    </div>
  );
}

export default App;