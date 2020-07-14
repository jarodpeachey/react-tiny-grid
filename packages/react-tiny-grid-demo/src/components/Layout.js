import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import './style.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import Header from './Header';
import Hidden from './Hidden';
import MobileMenuToggle from './MobileMenuToggle';
import Menu from './Menu';
import MenuItem from './MenuItem';
import SubMenu from './SubMenu';
import SubMenuItem from './SubMenuItem';
import MobileMenu from './MobileMenu';
import MobileMenuItem from './MobileMenuItem';
import MobileSubMenu from './MobileSubMenu';
import MobileSubMenuItem from './MobileSubMenuItem';
import { theme } from './theme';

import {
  faFeatherAlt,
  faFeather,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SEO from './SEO';

library.add(faFeather, faFeatherAlt, faChevronDown);

const GlobalStyles = createGlobalStyle`
  h1, h2, h3, h4, h5, h6 {
    color: ${(props) => props.theme.color.heading};
    font-weight: 600;
  }
  .heading {
    font-weight: 700;
  }
  .uppercase {
    text-transform: uppercase;
  }
  p, body, html, div, input, span {
    color: ${(props) => props.theme.color.paragraph};
  }
  h1 {
    font-size: ${(props) => props.theme.fontSize.h1}px;
  }
  h2 {
    font-size: ${(props) => props.theme.fontSize.h2}px;
  }
  h3 {
    font-size: ${(props) => props.theme.fontSize.h3}px;
  }
  h4 {
    font-size: ${(props) => props.theme.fontSize.h4}px;
  }
  h5 {
    font-size: ${(props) => props.theme.fontSize.h5}px;
  }
  h6 {
    font-size: ${(props) => props.theme.fontSize.h6}px;
  }
  .subheading {
    font-size: 26px;
  }
  .subtitle {
    font-size: 20px;
  }
  pre {
    background: ${(props) => props.theme.color.heading};
    border-radius: ${(props) => props.theme.radius};
    padding: 14px;
    color: white;
    z-index: 9;
    position: relative;
    font-family: monospace;
    font-size: 14px;
  }
  .button, button {
    background: ${(props) => props.theme.color.primary};
    border: 2px solid ${(props) => props.theme.color.primary};
    border-radius: ${(props) => props.theme.radius};
    padding: 14px 18px;
    font-size: 16px;
    color: white;
    text-decoration: none;
  }
  .button.secondary {
    background: transparent;
    border: 2px solid ${(props) => props.theme.color.primary};
    color: ${(props) => props.theme.color.primary};
    display: inline-block;
  }
  .center {
    text-align: center;
    margin: 0 auto;
  }
  .pt-80 {
    padding-top: 80px;
  }
`;

const Layout = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles theme={theme} />
      <SEO />
      <Wrapper>
        <Header height={90} scrollHeight={60} fixed color="transparent">
          <h2 style={{ margin: '6px 0' }}>
            <FontAwesomeIcon icon="feather-alt" />
          </h2>
          <Hidden hide={769} customStyles="margin-left: auto;">
            <MobileMenuToggle
              open={mobileMenuOpen}
              toggleFunction={() => setMobileMenuOpen(!mobileMenuOpen)}
            />
          </Hidden>
          <Hidden show={769}>
            <Menu>
              <MenuItem>
                <Link to="/">Home</Link>
              </MenuItem>
              <MenuItem submenu>
                <Link to="#docs">Examples</Link>
                <SubMenu>
                  <SubMenuItem>
                    <Link to="#minimal-configuration">Basic Usage</Link>
                  </SubMenuItem>
                  <SubMenuItem>
                    <Link to="#custom-spacing">Custom Spacing</Link>
                  </SubMenuItem>
                  <SubMenuItem>
                    <Link to="#max-column-count">Max Columns</Link>
                  </SubMenuItem>
                  <SubMenuItem>
                    <Link to="#custom-widths">Custom Widths</Link>
                  </SubMenuItem>
                  <SubMenuItem>
                    <Link to="#multiple-breakpoints">Multiple Breakpoints</Link>
                  </SubMenuItem>
                  <SubMenuItem>
                    <Link to="#column-offsets">Column Offsets</Link>
                  </SubMenuItem>
                </SubMenu>
              </MenuItem>
              <MenuItem>
                <Link to="#demo">Demo</Link>
              </MenuItem>
              {/* <MenuItem submenu>
              <Link to="/components">Components</Link>
              <SubMenu>
                <SubMenuItem>
                  <Link to="/components/layout">Layout</Link>
                </SubMenuItem>
                <SubMenuItem>
                  <Link to="/components/inputs">Inputs</Link>
                </SubMenuItem>
                <SubMenuItem>
                  <Link to="/components/display">Display</Link>
                </SubMenuItem>
              </SubMenu>
            </MenuItem> */}
              {/* <MenuItem square>
              <a href="/">
                <FontAwesomeIcon
                  icon="heart"
                  style={{ width: 20, height: 20, fontSize: 24 }}
                />
              </a>
            </MenuItem> */}
            </Menu>
          </Hidden>

          <MobileMenu open={mobileMenuOpen}>
            <MobileMenuItem closeFunction={() => setMobileMenuOpen(false)}>
              <Link to="/">Home</Link>
            </MobileMenuItem>
            <MobileMenuItem submenu>
              <Link to="#docs">Examples</Link>
              <MobileSubMenu>
                <MobileSubMenuItem>
                  <Link to="#minimal-configuration">Basic Usage</Link>
                </MobileSubMenuItem>
                <MobileSubMenuItem>
                  <Link to="#custom-spacing">Custom Spacing</Link>
                </MobileSubMenuItem>
                <MobileSubMenuItem>
                  <Link to="#max-column-count">Max Columns</Link>
                </MobileSubMenuItem>
                <MobileSubMenuItem>
                  <Link to="#custom-widths">Custom Widths</Link>
                </MobileSubMenuItem>
                <MobileSubMenuItem>
                  <Link to="#multiple-breakpoints">Multiple Breakpoints</Link>
                </MobileSubMenuItem>
                <MobileSubMenuItem>
                  <Link to="#column-offsets">Column Offsets</Link>
                </MobileSubMenuItem>
              </MobileSubMenu>
            </MobileMenuItem>
            <MobileMenuItem closeFunction={() => setMobileMenuOpen(false)}>
              <Link to="#demo">Demo</Link>
            </MobileMenuItem>
          </MobileMenu>
        </Header>
        <InnerWrapper>{children}</InnerWrapper>
      </Wrapper>
    </ThemeProvider>
  );
};

const Wrapper = styled.div``;

const InnerWrapper = styled.div``;

export default Layout;
