import React from 'react';
import styled from 'styled-components';

const Menu = ({ children, className }) => (
  <Wrapper id="menu" className={className}>
    {children}
  </Wrapper>
);

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
`;

const Close = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: white !important;
`;

export default Menu;
