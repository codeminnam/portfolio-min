import React from 'react';
import styled from 'styled-components';

const PortfolioContainer = styled.div``;
const PortfolioContent = styled.div`
  padding: 120px 0;
`;

const BarIcon = styled.img`
  margin: 0 auto;
  width: 100px;
`;

const PortfolioDesc = styled.div``;

const Portfolio = () => {
  return (
    <PortfolioContainer>
      <PortfolioContent>
        Portfolio
        <PortfolioDesc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
          ratione omnis reiciendis dolore maxime distinctio, explicabo
          recusandae, perferendis deserunt fugiat repudiandae exercitationem
          iste. Fugit nobis, culpa praesentium dignissimos accusantium sapiente.
        </PortfolioDesc>
      </PortfolioContent>
    </PortfolioContainer>
  );
};

export default Portfolio;
