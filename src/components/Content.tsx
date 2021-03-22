import React from 'react';
import styled from 'styled-components';
import About from './About';
import Experience from './Experience';
import Hero from './Hero';
import Portfolio from './Portfolio';

const ContentContainer = styled.div``;

const Content = () => {
  return (
    <ContentContainer>
      <Hero />
      <Experience />
      <About />
      <Portfolio />
    </ContentContainer>
  );
};

export default Content;
