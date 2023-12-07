// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Home from '../src/pages/Home';
import Login from '../src/pages/Login';
import AlbumDetail from '../src/pages/AlbumDetails';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #000; /* Fond noir */
    color: #ffd700; /* Texte jaune */
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/albums/:albumId" element={<AlbumDetail />} />
          {/* Ajoutez d'autres routes pour les pages supplémentaires */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
