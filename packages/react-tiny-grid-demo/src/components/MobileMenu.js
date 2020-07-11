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
          <div className="container">{children}</div>
        </InnerWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: fixed;
  // top: 0;
  left: 0;
  width: 100%;
  top: 0;
  transition: max-height 0.3s, background 0.3s;
  overflow: hidden;
  // transform: translateY(${(props) => (props.open ? '0' : '-100%')});
  z-index: 998;
  transition-delay: backdrop-filter 0.5s;
    -webkit-transition: max-height 0.3s ${(props) =>
      props.open ? 'ease-in' : 'ease-out'};
  -moz-transition: max-height 0.3s ${(props) =>
    props.open ? 'ease-in' : 'ease-out'};
  -ms-transition: max-height 0.3s ${(props) =>
    props.open ? 'ease-in' : 'ease-out'};
  -o-transition: max-height 0.3s ${(props) =>
    props.open ? 'ease-in' : 'ease-out'};
  transition: max-height 0.3s ${(props) =>
    props.open ? 'ease-in' : 'ease-out'};
  max-height: ${(props) => (props.open ? '100%' : '0')} !important;
  height: 100%;

  ${(props) => props.customStyles}
`;

const InnerWrapper = styled.div`
  overflow-y: auto;
  height: 100%;
  padding: 12px;
  background: #fffffff9;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.05), 0 2px 4px 0 rgba(0, 0, 0, 0.03),
    0 4px 16px -6px rgba(0, 0, 0, 0.5);
  padding: 12px 0;
  padding-top: ${(props) => (props.scrolled ? '75px' : '107px')};
  > div {
    padding-top: 12px;
    border-top: 2px solid ${(props) => props.theme.color.gray.one};
  }
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
