// import logo from './logo.svg';
import React from 'react';
import './App.css';

import Header from '../src/components/Header';
import Navigation from '../src/components/Navigation';
import PageContainer from './components/PageContainer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header >
        <Navigation>
          pages=
          setCurrentPage=
          currentPage
        </Navigation> 
      </Header>
      <PageContainer />
      <Footer />
    </div>
  );
}

export default App;
