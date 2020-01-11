import React from 'react';
import './App.css';
import SideMenu from './components/sidemenu/index';
import Footer from './components/footer/footer';
import Article from './components/editor/index';
import Box from '@material-ui/core/Box';

const App = () => {

  return (
    <Box id="app-container">
      <Box id="app-sidemenu">
        <SideMenu />
      </Box>
      <Box id="app-main">
        <Box id="app-article">
          <Article />
        </Box>
        <Box id="app-footer">
          <Footer />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
