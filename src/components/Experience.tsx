import React from 'react';
import styled from 'styled-components';

const ExperienceSection = styled.section`
  background-color: #f4f5f7;
`;
const ExperienceContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 100px 30px;
`;

const ExperienceTitle = styled.strong`
  background-color: #fec56e;
  display: inline-block;
  margin-bottom: 10px;
`;

const ExperienceContent = styled.div`
  display: flex;
  flex-direction: row;
`;
const ExperienceItem = styled.div`
  max-width: 400px;
  & + & {
    margin-left: 50px;
  }
`;

const Experience = () => {
  return (
    <ExperienceSection>
      <ExperienceContainer>
        <ExperienceTitle>Work Experience</ExperienceTitle>
        <ExperienceContent>
          <ExperienceItem>
            <strong>FRONT-END DEVELOPER</strong>
            <p>Hogarth Worldwide | Seoul, Korea</p>
            <p>AUG 2020 - DEC 2020</p>
            <p>
              - Worked on localization of Apple(https://www.apple.com/kr/) in
              accordance to the client’s coding standards in a fast paced
              environment.
            </p>
          </ExperienceItem>
          <ExperienceItem>
            <strong>BACK-END DEVELOPER & PROJECT LEADER</strong>
            <p>Rakuten Communications | Tokyo, Japan</p>
            <p>MAR 2018 - FEB 2020</p>
            <p>
              - Maintained and developed additional functions, managing
              performance, refactoring and releasing
              SMARTalk(https://smart.fusioncom.co.jp/sfkr/mypage/) in Java.
            </p>
            <p>
              - Executed software application tests and subsequently analyzing
              and documenting the results.
            </p>
          </ExperienceItem>
        </ExperienceContent>
      </ExperienceContainer>
    </ExperienceSection>
  );
};

export default Experience;
