import React from 'react';
import styled, { css } from 'styled-components';

const Hidden = ({ children, className, id, show, hide }) => {
  return (
    <>
      <Wrapper className={className} id={id} show={show} hide={hide}>
        {children}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  ${(props) =>
    props.show &&
    props.hide &&
    props.show > props.hide &&
    css`
      display: block;
      @media (min-width: ${props.hide}px) {
        display: none;
        visibility: hidden;
      }
      @media (min-width: ${props.show}px) {
        display: block;
        visibility: visible;
      }
    `};
  ${(props) =>
    props.show &&
    props.hide &&
    props.show < props.hide &&
    css`
      display: none;
      visibility: hidden;
      @media (min-width: ${props.show}px) {
        display: block;
        visibility: visible;
      }
      @media (min-width: ${props.hide}px) {
        display: none;
        visibility: hidden;
      }
    `};
  ${(props) =>
    !(props.show && props.hide) &&
    css`
      display: ${props.hide ? 'block' : 'none'};
      @media (min-width: ${props.show}px) {
        display: block;
        visibility: visible;
      }
      @media (min-width: ${props.hide}px) {
        display: none;
        visibility: hidden;
      }
    `};
`;
const HideWrapper = styled.div`
  display: block;
  visibility: visible;
  @media (min-width: ${(props) => props.hide}px) {
    display: none;
    visibility: hidden;
  }
`;

export default Hidden;
