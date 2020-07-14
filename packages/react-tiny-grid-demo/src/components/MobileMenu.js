import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const MobileMenu = ({ children, className, id, open, customStyles }) => {
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

  console.log(children.length);
  return (
    <>
      {/* <MobileMenuToggle
        scrolled={scroll}
        onClick={() => toggleFunction()}
        open={open}
      >
        <MobileMenuRotate open={open}>
          <span />
          <span />
          <span />
        </MobileMenuRotate>
      </MobileMenuToggle> */}
      <Wrapper
        children={children.length}
        scrolled={scroll > 50}
        className={`${className}`}
        id={`${id} mobile-menu`}
        customStyles={customStyles}
        open={open}
      >
        <InnerWrapper scrolled={scroll > 50} open={open}>
          {children}
        </InnerWrapper>
      </Wrapper>
      <Background open={open} />
    </>
  );
};

const Wrapper = styled.div`
  position: fixed;
  // top: 0;
  left: 0;
  width: calc(100% - 40px);
  left: 20px;
  top: ${props => props.scrolled ? '70px' : '84px'};
  overflow: hidden;
  border-radius: 16px;
  transition-delay: 0s !important;
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.open ? '1' : '0')};
  // transform: translateY(${(props) => (props.open ? '0' : '-100%')});
  transform: scale(${(props) => (props.open ? 1 : 0.85)});
  z-index: 998;
  transition: all .2s;
  box-shadow: rgba(50, 50, 93, 0.11) 0px 4px 6px, rgba(0, 0, 0, 0.08) 0px 1px 3px;

  ${(props) => props.customStyles}
`;

const InnerWrapper = styled.div`
  overflow-y: auto;
  height: 100%;
  padding: 12px;
  background: #ffffff;
`;

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.color.gray.nine}30;
  z-index: 0;
  top: 0;
  left: 0;
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.open ? '1' : '0')};
  transition: .15s;
`;

// max-height: calc(
//   400px -
//     ${(props) =>
//       props.scrolled ? 'calc(75px + 8px)' : 'calc(107px + 8px)'}
// );
// height: calc(
//   400px -
//     ${(props) =>
//       props.scrolled ? 'calc(75px + 8px)' : 'calc(107px + 8px)'}
// );

const Bottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 12px;
  width: 100%;
  display: block;
  background: orange;
  box-shadow: 0px -4px 20px -12px #00000080;
  z-index: 99999999;
`;

export default MobileMenu;
