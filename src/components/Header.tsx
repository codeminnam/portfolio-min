import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Link, animateScroll as scroll } from 'react-scroll';

library.add(faBars, faTimes);

const HeaderContainer = styled.header``;

const NavigationBar = styled.nav`
  position: relative;
  overflow: hidden;
  display: flex;
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
  }
`;

const NavMenu = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 10px;
  text-align: center;
  width: 70vw;
  margin-top: 30px;
  padding-left: 0;
  justify-content: end;
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

const NavLinks = styled.li`
  cursor: pointer;
  @media screen and (max-width: 768px) {
    text-align: center;
    width: 100%;
    display: table;
    padding: 10px;
  }
`;

const Header = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <HeaderContainer>
      <NavigationBar>
        <LogoContainer>
          <Logo>FRONT-END DEVELOPER | MIN</Logo>
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
          <NavLinks>
            <Link
              to="hero-section"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Home
            </Link>
          </NavLinks>
          <NavLinks>
            <Link
              to="about-section"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              About
            </Link>
          </NavLinks>
          <NavLinks>
            <Link
              to="portfolio-section"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Portfolio
            </Link>
          </NavLinks>
        </NavMenu>
      </NavigationBar>
    </HeaderContainer>
  );
};

export default Header;
