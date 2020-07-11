import React from 'react';
import styled from 'styled-components';

const MobileMenuToggle = ({
  children,
  className,
  id,
  customStyles,
  toggleFunction,
  open,
}) => {
  const customToggle = () => {
    if (open) {
      document.getElementById('header').classList.remove('open');
    } else {
      document.getElementById('header').classList.add('open');
    }

    toggleFunction();
  };
  return (
    <Wrapper
      className={className}
      id={id}
      customStyles={customStyles}
      onClick={customToggle}
      open={open}
    >
      <MobileMenuRotate open={open}>
        <span />
        <span />
        <span />
      </MobileMenuRotate>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;
  z-index: 9999;
  width: 30px;
  height: 30px;
  @media (max-width: 768px) {
    display: block;
  }
  transform: rotate(0deg);
    transition: all .15s ease-out;
  cursor: pointer;
  margin-left: auto;
  position: ${(props) => (props.open ? 'relative' : 'static')};
  // right: ${(props) => (props.open ? '12px' : 'none')};
  span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: ${(props) =>
      props.open ? props.theme.color.heading: 'white'};
    border-radius: 20px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: ${(props) =>
      props.open ? 'all 0.15s ease-in' : 'all 0.15s ease-out'};
  }

  span:nth-child(1) {
    top: ${(props) => (props.open ? 'calc(50% - 1px)' : '10%')};
  }
  span:nth-child(2) {
    top: calc(50% - 2px);
    left: 0;
    transform-origin: left center;
        opacity: ${(props) => (props.open ? 0 : 1)};
  }
  span:nth-child(3) {
    top: ${(props) => (props.open ? '0' : 'calc(90% - 4px)')};
    left: ${(props) => (props.open ? 'calc(50% - 1px)' : '0')};
    transform-origin: left center;
    width: 100%;
    height: ${(props) => (props.open ? '100%' : '2px')};
    width: ${(props) => (props.open ? '2px' : '100%')};
    transform-origin: left center;
    // transform: ${(props) => (props.open ? 'rotate(90deg)' : 'none')};
  }
  ${(props) => props.customStyles};
`;

const MobileMenuRotate = styled.div`
  height: 100%;
  width: 100%;
  transition: ${(props) =>
    props.open ? 'all 0.15s ease-in-out' : 'all 0.15s ease-in-out'};
  transform: ${(props) => (props.open ? 'rotate(-45deg)' : 'none')};
`;
export default MobileMenuToggle;
