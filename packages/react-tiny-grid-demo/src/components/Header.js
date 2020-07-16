import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Header = ({
  children,
  className,
  color,
  scrollColor,
  height,
  scrollHeight,
  fixed,
}) => {
  const [scroll, setScroll] = useState(
    typeof window !== 'undefined' && window.scrollY,
  );
  const onScroll = () => {
    setScroll(typeof window !== 'undefined' && window.scrollY);

    if (typeof window !== 'undefined' && window.scrollY > 50) {
      document.getElementById('header').classList.add('scrolled');
    } else {
      document.getElementById('header').classList.remove('scrolled');
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && window.scrollY > 50) {
      document.getElementById('header').classList.add('scrolled');
    } else {
      document.getElementById('header').classList.remove('scrolled');
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', onScroll);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', onScroll);
      }
    };
  });

  return (
    <Wrapper
      className={className}
      id="header"
      scrolled={typeof window !== 'undefined' && window.scrollY > 50}
      color={color}
      fixed={fixed}
      height={height}
      scrollHeight={scrollHeight}
      scrollColor={scrollColor}
    >
      <Background
        scrolled={typeof window !== 'undefined' && window.scrollY > 50}
        scroll={typeof window !== 'undefined' && window.scrollY}
      />
      <div className="container">
        <InnerContainer
          color={color}
          scrolled={typeof window !== 'undefined' && window.scrollY > 50}
        >
          {children}
        </InnerContainer>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: ${(props) => props.height}px;
  transition: all 0.3s, border-bottom 0.15s ease 0.3s;
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  width: 100%;
  z-index: 999;
  min-height: fit-content;
  background: transparent;
  .menu-item,
  .menu-item > a {
    color: white !important;
  }
  span {
    background: white !important;
  }
  &.scrolled {
    height: ${(props) => props.scrollHeight}px;
    box-shadow: 0 0 4px 0 rgba(17, 22, 26, 0.08),
      0 2px 4px 0 rgba(17, 22, 26, 0.03), 0 4px 8px 0 rgba(17, 22, 26, 0.03);
    background: ${(props) => props.theme.color.primary};
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    .menu-item,
    .menu-item > a {
      color: white !important;
    }
    span {
      background: white !important;
    }
  }
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.3s;
`;

const Close = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: white !important;
`;

const Background = styled.div`
  background: ${(props) => props.theme.color.primary};
  position: absolute;
  top: -150px;
  right: -180px;
  // transform: rotate(10deg);
  height: 300px;
  width: 100vw;
  min-width: 576px;
  z-index: -1;
  max-width: 830px;

  top: -200px;
  height: 300px;
  right: -380px;
  border-radius: 20px;
  @media (min-width: 960px) {
    top: -200px;
    height: 300px;
    right: -300px;
  }
  @media (min-width: 1200px) {
    top: -200px;
    height: 300px;
    right: -240px;
    border-radius: 35px;
  }
  @media (min-width: 1500px) {
    top: -200px;
    height: 300px;
    right: -50px;
    border-radius: 50px;
  }
  transition: 0.3s;
  // margin-top: -${props => props.scroll * 2}px;
  ${props => props.scrolled && css`
    height: 60px !important;
    top: 0 !important;
  `};
`;

Header.propTypes = {
  children: PropTypes.object,
  primary: PropTypes.bool,
  transparent: PropTypes.bool,
  secondary: PropTypes.bool,
};

export default Header;
