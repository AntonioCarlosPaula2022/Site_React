import React from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Aside from './components/Aside';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <Nav />
        <Main />
      </div>
      <Aside />
      <Footer />
    </div>
  );
}

export default App;

