import React from 'react';
import styled from 'styled-components';

const SubMenu = ({ children, className, id }) => (
  <Wrapper className={className} id={id}>
    {children}
  </Wrapper>
);

const Wrapper = styled.div`
  border-radius: ${(props) => props.theme.radius};
  background: #ffffff;
  padding: 8px 0;
  width: 100%;
  box-shadow: ${(props) => props.theme.shadow};
  // box-shadow: ${(props) => props.theme.shadow.one};
`;

export default SubMenu;
