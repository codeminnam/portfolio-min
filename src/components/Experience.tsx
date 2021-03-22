import React from 'react';
import styled from 'styled-components';

const ExperienceSection = styled.section`
  background-color: #f4f5f7;
`;
const ExperienceContainer = styled.div`
  padding: 0 30px;
  max-width: 960px;
  margin: 0 auto;
  padding: 120px 0;
`;
const ExperienceContent = styled.div``;
const ExperienceDesc = styled.div``;

const Experience = () => {
  return (
    <ExperienceSection>
      <ExperienceContainer>
        <ExperienceContent>
          Experience
          <ExperienceDesc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            ratione omnis reiciendis dolore maxime distinctio, explicabo
            recusandae, perferendis deserunt fugiat repudiandae exercitationem
            iste. Fugit nobis, culpa praesentium dignissimos accusantium
            sapiente.
          </ExperienceDesc>
        </ExperienceContent>
      </ExperienceContainer>
    </ExperienceSection>
  );
};

export default Experience;
