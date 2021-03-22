import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  background: #ffffff;
`;

const HeroContainer = styled.div`
  padding: 0 30px;
  max-width: 960px;
  margin: 0 auto;
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 150px 0;
`;

const HeroNameContainer = styled.div``;

const HeroDescContainer = styled.div`
  text-align: center;
`;

const NameText = styled.strong`
  background-color: #fff;
  font-size: 33px;
`;

const FrontText = styled.strong`
  display: inline-block;
  margin-bottom: 10px;
`;

const DescText = styled.p`
  width: 400px;
  margin: 0 auto;
`;

const DownloadButton = styled.button`
  border: none;
  margin-top: 10px;
  cursor: pointer;
  background-color: #fe7d6e;
  color: #ffffff;
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroContainer>
        <HeroContent>
          <HeroNameContainer>
            <NameText>NAM HYUNMYUNG</NameText>
            <p>
              ...Or simply <strong>Min</strong>! This is how my friends call me.
            </p>
          </HeroNameContainer>
          <HeroDescContainer>
            <FrontText>FRONT-END DEVELOPER</FrontText>
            <DescText>
              I build digital products. I primarily focus on writing clean and
              efficient code. Also, I am passionate with creating the best user
              experiences beyond devices and products. A great team player but
              also make high performance when working individually. I'm
              currently looking for new opportunities overseas.
            </DescText>
            <DownloadButton>DOWNLOAD CV</DownloadButton>
          </HeroDescContainer>
        </HeroContent>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
