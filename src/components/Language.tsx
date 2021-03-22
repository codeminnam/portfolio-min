import React from 'react';
import styled from 'styled-components';

const LanguageContainer = styled.div``;
const LanguageContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 40px;
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

const FlagIcon = styled.img`
  margin: 10px auto;
  width: 20px;
`;

const LanguageDesc = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 10px;
  text-align: center;
  margin: 0 auto;
`;

const LanguageItem = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 150px;
`;

const Language = () => {
  return (
    <LanguageContainer>
      <LanguageContent>
        <SubTitle>
          <BarIcon src="https://cdn.imweb.me/upload/S201705275929298354dd3/bd4f7d70c1f45.png" />
          <strong>Language</strong>
        </SubTitle>
        <LanguageDesc>
          <LanguageItem>
            <FlagIcon src="https://www.flaticon.com/svg/vstatic/svg/197/197582.svg?token=exp=1616411427~hmac=bbcadb315b20773baf7aa65be01ffd46" />
            <strong>Korean</strong>
            <p>Native</p>
          </LanguageItem>
          <LanguageItem>
            <FlagIcon src="https://www.flaticon.com/svg/vstatic/svg/197/197374.svg?token=exp=1616411489~hmac=94e0551a8569f0d34f2275791fb2b55b" />
            <strong>English</strong>
            <p>TOEIC 965 (out of 990)</p>
          </LanguageItem>
          <LanguageItem>
            <FlagIcon src="https://www.flaticon.com/svg/vstatic/svg/197/197604.svg?token=exp=1616411518~hmac=fe9a8fbfd8dd08ff36ae9aa563625e56" />
            <strong>Japanese</strong>
            <p>JLPT N1 (highest)</p>
          </LanguageItem>
        </LanguageDesc>
      </LanguageContent>
    </LanguageContainer>
  );
};

export default Language;
