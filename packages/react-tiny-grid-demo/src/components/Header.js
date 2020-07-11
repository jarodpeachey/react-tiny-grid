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
    setScroll(window.scrollY);

    if (window.scrollY > 50) {
      document.getElementById('header').classList.add('scrolled');
    } else {
      document.getElementById('header').classList.remove('scrolled');
    }
  };

  useEffect(() => {
    if (window.scrollY > 50) {
      document.getElementById('header').classList.add('scrolled');
    } else {
      document.getElementById('header').classList.remove('scrolled');
    }

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  });

  return (
    <Wrapper
      className={className}
      id="header"
      scrolled={window.scrollY > 50}
      color={color}
      fixed={fixed}
      height={height}
      scrollHeight={scrollHeight}
      scrollColor={scrollColor}
    >
      <div className="container">
        <InnerContainer color={color} scrolled={window.scrollY > 50}>
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
  &.scrolled {
    height: ${(props) => props.scrollHeight}px;
    box-shadow: 0 0 4px 0 rgba(17, 22, 26, 0.08),
      0 2px 4px 0 rgba(17, 22, 26, 0.03), 0 4px 8px 0 rgba(17, 22, 26, 0.03);
    background: ${(props) => props.theme.color.primary};
    * {
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
  color: white;
`;

Header.propTypes = {
  children: PropTypes.object,
  primary: PropTypes.bool,
  transparent: PropTypes.bool,
  secondary: PropTypes.bool,
};

export default Header;
