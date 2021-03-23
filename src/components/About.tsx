import React from 'react';
import styled from 'styled-components';
import Education from './Education';
import Language from './Language';
import TechStack from './TechStack';

const AboutSection = styled.section`
  background-color: #ffffff;
`;
const AboutContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 120px 30px;
`;

const About = () => {
  return (
    <AboutSection id="about-section">
      <AboutContainer>
        <TechStack />
        <Education />
        <Language />
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
