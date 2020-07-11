import React from 'react';
import styled from 'styled-components';

const MobileSubMenu = ({ children, className, id }) => (
  <Wrapper className={className} id={id}>
    {children}
  </Wrapper>
);

const Wrapper = styled.div`
  padding: 8px 0;
  width: 100%;
  // box-shadow: ${(props) => props.theme.shadow.one};
`;

export default MobileSubMenu;
