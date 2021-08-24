import React from 'react';
import AboutUs from './pages/AboutUs';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';

export default function App() {
  return (
    <div className="App">
        <GlobalStyle/>
        <Nav />
        <AboutUs />
    </div>
  );
}


