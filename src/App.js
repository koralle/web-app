import React from 'react';
import './App.css';
import SideMenu from './components/sidemenu/index';
import Footer from './components/footer/footer';
import Article from './components/editor/index';

const App = () => {
  return (
    <div className="app-container">
      <div className="app-sidemenu">
        <SideMenu />
      </div>
      <div className="app-contents">
        <Article />
        <Footer />
      </div>
    </div>
  );
}

export default App;
