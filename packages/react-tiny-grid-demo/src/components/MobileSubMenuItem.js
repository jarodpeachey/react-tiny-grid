import React, { useState } from 'react';
import styled from 'styled-components';

const MobileSubMenuItem = ({ children, className, id }) => (
  <Wrapper className={className} id={id}>
    {children}
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  a {
    display: block;
    width: 100%;
    padding: 8px 24px;
    text-decoration: none;
    cursor: pointer;
    background: none !important;
    transition-duration: 0.15s !important;
    color: initial !important;
    font-weight: normal !important;
    border-radius: 0 !important;
    :hover,
    :focus {
      color: ${(props) => props.theme.color.primary} !important;
    }
  }
`;

export default MobileSubMenuItem;
