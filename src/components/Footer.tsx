import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faLinkedinIn, faGithub);

const FooterContainer = styled.footer`
  left: 0;
  right: 0;
  bottom: 0;
  padding: 20px 40px;
  background: rgb(254, 239, 199);
  background: linear-gradient(
    90deg,
    rgba(254, 239, 199, 1) 35%,
    rgba(213, 199, 254, 1) 100%
  );
  text-align: center;
`;

const FooterText = styled.p`
  color: #86868b;
  font-size: 12px;
`;

const IconContainer = styled.div`
  margin-top: 5px;
`;

const Link = styled.a`
  color: #515154;
  &:hover {
    cursor: pointer;
  }
  & + & {
    margin-left: 5px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>Copyright © 2021 Nam Hyunmyung</FooterText>
      <IconContainer>
        <Link href="https://www.linkedin.com/in/hyunmyung-nam/">
          <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
        </Link>
        <Link href="https://github.com/codeminnam">
          <FontAwesomeIcon icon={['fab', 'github']} />
        </Link>
      </IconContainer>
    </FooterContainer>
  );
};

export default Footer;
