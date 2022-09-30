// import logo from './logo.svg';
import React from 'react';
import './App.css';

import Header from '../src/components/Header';
import Navigation from '../src/components/Navigation';
import PageContainer from './components/PageContainer';
import Footer from './components/Footer';

function App() {
  const pages = ['About', 'Portfolio', 'Contact', 'Resume'];
  const [currentPage, setCurrentPage] = useState({page});

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
