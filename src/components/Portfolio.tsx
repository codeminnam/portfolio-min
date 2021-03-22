import React from 'react';
import styled from 'styled-components';

const PortfolioSection = styled.section`
  background-color: #f2f8fa;
`;

const PortfolioContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 120px 30px;
`;

const PortfolioContent = styled.div``;

const PortfolioTitle = styled.strong`
  background-color: #7d6efe;
  color: #ffffff;
  display: inline-block;
  margin-bottom: 10px;
`;

const PortfolioItem = styled.div``;
const ItemTitle = styled.div``;

const Portfolio = () => {
  return (
    <PortfolioSection>
      <PortfolioContainer>
        <PortfolioContent>
          <PortfolioTitle>Portfolio</PortfolioTitle>
          <PortfolioItem>
            <ItemTitle>TS-Booklist</ItemTitle>
            <p>A website you can manage book information fetched from API.</p>
            <p>
              Implemented CRUD in module which contains components, action
              creators, reducer, and saga. Divided and implemented components
              for their own purposes; pages(routing), containers(data
              processing), and components(rendering DOM).
            </p>
            <p>
              ReactJs, Typescript, Redux-saga, REST API, Antd, React Hooks, ES6
            </p>
          </PortfolioItem>
          <PortfolioItem>
            <ItemTitle>Reddit Music Player</ItemTitle>
            <p>
              A music player website fetching genre information from reddit and
              making a playlist.
            </p>
            <p>
              Implemented interaction between genre list, playlist, and youtube
              video player components, with data fetched via graphQL. Mixed
              class and functional components.
            </p>
            <p>ReactJs, GraphQL, ES6</p>
          </PortfolioItem>
          <PortfolioItem>
            <ItemTitle>HonyakunHonyakun</ItemTitle>
            <p>
              An individual OJT project created from scratch: from defining
              requirements through front-end, back-end, and DB development to
              deployment.
            </p>
            <p>
              Wrote requirement documents, designed and created DB, and made MVC
              and Rest controller, with functions including user management,
              dashboard, board, and comment.
            </p>
            <p>Javascript, Java, Spring Boot, REST API, Thymeleaf, MariaDB</p>
          </PortfolioItem>
          <PortfolioItem>
            <ItemTitle>Redux Comment</ItemTitle>
            <p>
              Comment application in which comments are fetched via API with
              pagination.
            </p>
            <p>
              Implemented CRUD that interacts with API server. 3 components -
              comment list, pagination, and form share same state.
            </p>
            <p>
              ReactJs, Redux-thunk, REST API, Styled-components, React Hooks,
              ES6, JSON-server
            </p>
          </PortfolioItem>
        </PortfolioContent>
      </PortfolioContainer>
    </PortfolioSection>
  );
};

export default Portfolio;
