import React from 'react';
import styled from 'styled-components';

const TechStackContainer = styled.div``;
const TechStackContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-bottom: 40px;
`;

const SubTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const BarIcon = styled.img`
  margin: 0 auto;
  width: 100px;
`;

const TechStackDesc = styled.div``;

const TechStack = () => {
  return (
    <TechStackContainer>
      <TechStackContent>
        <SubTitle>
          <BarIcon src="https://cdn.imweb.me/upload/S201705275929298354dd3/cc4012cf81b0c.png" />
          <strong>Tech Stacks</strong>
        </SubTitle>
        <TechStackDesc>
          <p>
            <strong>Front-end:</strong> Javascript(ES6), React, Redux, Axios,
            Typescript, CSS-in-JS, HTML5, CSS3
          </p>
          <p>
            <strong>Back-end:</strong> REST API, GraphQL, Java, Spring Boot,
            MySQL, Gradle, Thymeleaf, JSP, Linux(CentOS)
          </p>
          <p>
            <strong>Others:</strong> Team management and version control(GIT /
            GitHub, Trello, Slack, JIRA, Redmine), ESLint, Prettier
          </p>
        </TechStackDesc>
      </TechStackContent>
    </TechStackContainer>
  );
};

export default TechStack;
