import React from 'react';
import Education from './Education';
import Language from './Language';
import Profile from './Profile';
import TechStack from './TechStack';

const About = () => {
  return (
    <>
      <Profile />
      <TechStack />
      <Education />
      <Language />
    </>
  );
};

export default About;
