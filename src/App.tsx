import React from 'react';
import GlobalStyle from './assets/styles/globalStyles';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
