import React from 'react';
import styled from 'styled-components';

const EducationContainer = styled.div``;
const EducationContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 40px 0;
`;

const SubTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const BarIcon = styled.img`
  margin: 0 auto;
  width: 100px;
`;

const EducationDesc = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 10px;
  text-align: center;
  margin: 0 auto;
`;
const UniversityItem = styled.div`
  width: 200px;
`;

const Education = () => {
  return (
    <EducationContainer>
      <EducationContent>
        <SubTitle>
          <BarIcon src="https://cdn.imweb.me/upload/S201705275929298354dd3/462a2f409e50d.png" />
          <strong>Education</strong>
        </SubTitle>
        <EducationDesc>
          <UniversityItem>
            <strong>Seoul Digital University</strong>
            <p>BA in Software Engineering</p>
            <p>2019 - 2021</p>
            <p>GPA: 4.31 / 4.5</p>
            <p>Online</p>
          </UniversityItem>
          <UniversityItem>
            <strong>Hanyang University</strong>
            <p>BA in Film & Theatre</p>
            <p>2014 - 2016</p>
            <p>GPA: 4.21 / 4.5</p>
            <p>Seoul, Korea</p>
          </UniversityItem>
          <UniversityItem>
            <strong>Soongsil University</strong>
            <p>IT department</p>
            <p>2010 - 2012</p>
            <p>GPA: 4.18 / 4.5</p>
            <p>Seoul, Korea</p>
          </UniversityItem>
        </EducationDesc>
      </EducationContent>
    </EducationContainer>
  );
};

export default Education;
