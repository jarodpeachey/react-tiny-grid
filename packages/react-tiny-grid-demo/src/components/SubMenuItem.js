import React, { useState } from 'react';
import styled from 'styled-components';

const SubMenuItem = ({ children, className, id }) => (
  <Wrapper className={className} id={id}>
    {children}
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  a {
    display: block;
    width: 100%;
    color: initial;
    padding: 8px 24px;
    text-decoration: none;
    background: none;
    transition-duration: 0.15s !important;
    color: initial;
    font-weight: normal !important;
    width: 100%;
    border-radius: 0px;
    margin: 0;
    width: 100%;
    cursor: pointer;
    :hover {
      background: ${(props) => props.theme.color.primary}10;
    }
    :active {
      background: ${(props) => props.theme.color.primary};
      color: white !important;
    }
  }
`;

export default SubMenuItem;
