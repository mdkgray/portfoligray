// import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';

import Header from '../src/components/Header';
import Navigation from '../src/components/Navigation';
import PageContainer from './components/PageContainer';
import Footer from './components/Footer';

function App() {
  const [pages] = useState([
    {
      name: "About"
    },
    { name: "Portfolio" },
    { name: "Contact" },
    {
      name: "Resume"
    }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div className="App">
      <Header >
        <Navigation>
          pages={pages},
          setCurrentPage={setCurrentPage},
          currentPage={currentPage}
        </Navigation> 
      </Header>
      <PageContainer
        currentPage={currentPage} 
      />
      <Footer />
    </div>
  );
}

export default App;
