import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Link, animateScroll as scroll } from 'react-scroll';

library.add(faBars, faTimes);

const HeaderContainer = styled.header`
  background: #181818;
`;

const NavigationBar = styled.nav`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  min-height: 80px;
  height: 100%;
  width: 90vw;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const LogoContainer = styled.div`
  justify-self: start;
  margin-top: 30px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    margin: 30px auto;
  }
`;

const Logo = styled.div`
  white-space: nowrap;
  color: #fff;
  font-weight: 900;

  strong {
    color: #ffcbb2;
  }
`;

const MenuIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 15px;
    right: 20px;
    transform: translate(-100%, 60%);
    font-size: 1.2rem;
    cursor: pointer;
    color: #fff;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  text-align: center;
  margin-top: 30px;
  padding-left: 0;
  justify-content: flex-end;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
    width: 100%;
    margin-top: unset;
    &.active {
      display: block;
    }
  }
`;

const NavLinks = styled.li<{ portfolio?: boolean }>`
  cursor: pointer;
  color: ${(props) => (props.portfolio ? '#FFDF99' : '#fff')};
  font-weight: ${(props) => (props.portfolio ? '700' : '400')};
  padding: 0 10px;

  @media screen and (max-width: 768px) {
    text-align: center;
    width: 100%;
    display: table;
    padding: 10px;
    color: #fff;
    font-weight: 400;
  }
`;

const NavDivider = styled.span`
  color: #aaa;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Header = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <HeaderContainer>
      <NavigationBar>
        <LogoContainer>
          <Logo>
            FRONT-END DEVELOPER <strong>MIN</strong>
          </Logo>
          <MenuIcon
            onClick={() => {
              setClicked(!clicked);
            }}
          >
            <FontAwesomeIcon
              icon={clicked ? ['fas', 'times'] : ['fas', 'bars']}
            />
          </MenuIcon>
        </LogoContainer>
        <NavMenu className={clicked ? 'active' : ''}>
          <NavLinks portfolio={true}>
            <Link
              to="portfolio-section"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              PORTFOLIO
            </Link>
          </NavLinks>
          <NavLinks>
            <Link
              to="hero-section"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              HOME
            </Link>
          </NavLinks>
          <NavDivider>|</NavDivider>
          <NavLinks>
            <Link
              to="about-section"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              ABOUT
            </Link>
          </NavLinks>
        </NavMenu>
      </NavigationBar>
    </HeaderContainer>
  );
};

export default Header;
