import React from 'react';
import styled from 'styled-components';
import { theme } from './theme';

const Hero = () => (
  <Wrapper>
    <div className="py-7 container">
      <h1
        className="heading"
        style={{
          color: theme.color.primary,
          marginBottom: 16,
          position: 'relative',
          zIndex: 99,
        }}
      >
        React Tiny Grid
      </h1>
      <p style={{ position: 'relative', zIndex: 99 }} className="subheading">
        A grid system for React built to simplify the quirks of Flexbox.
      </p>
      <pre>
        {'<Row>'}
        <br />
        {'  <Column />'}
        <br />
        {'  <Column />'}
        <br />
        {'</Row>'}
      </pre>
      <a className="button mr-2 mt-2" href="https://github.com/jarodpeachey/react-tiny-grid">
        Github
      </a>
      <a className="button secondary mt-2" href="/">
        Docs
      </a>
    </div>
  </Wrapper>
);

const Wrapper = styled.div`
  background: ${(props) => props.theme.color.primary}10;
  padding-top: 48px;
`;

export default Hero;
