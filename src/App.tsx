import React from 'react';
import GlobalStyle from './assets/styles/globalStyles';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default App;
