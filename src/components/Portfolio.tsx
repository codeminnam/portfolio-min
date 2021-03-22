import React from 'react';
import styled from 'styled-components';

const PortfolioSection = styled.section`
  background-color: #ffffff;
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

const PortfolioDesc = styled.div``;

const Portfolio = () => {
  return (
    <PortfolioSection>
      <PortfolioContainer>
        <PortfolioContent>
          <PortfolioTitle>Portfolio</PortfolioTitle>
          <PortfolioDesc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            ratione omnis reiciendis dolore maxime distinctio, explicabo
            recusandae, perferendis deserunt fugiat repudiandae exercitationem
            iste. Fugit nobis, culpa praesentium dignissimos accusantium
            sapiente.
          </PortfolioDesc>
        </PortfolioContent>
      </PortfolioContainer>
    </PortfolioSection>
  );
};

export default Portfolio;
