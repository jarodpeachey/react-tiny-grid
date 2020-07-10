import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import styled from 'styled-components';
import './style.css';
import { Row } from 'react-tiny-grid';

const Routes = () => (
  <>
    <h1>Hello</h1>
    <Row spacing={[12]} breakpoints={[769]}>
      <div widths={[6]}>
        <Demo>Demo</Demo>
      </div>
      <div widths={[6]}>
        <Demo>Demo</Demo>
      </div>
      <div widths={[6]}>
        <Demo>Demo</Demo>
      </div>
      <div widths={[6]}>
        <Demo>Demo</Demo>
      </div>
      <div widths={[6]}>
        <Demo>Demo</Demo>
      </div>
      <div widths={[6]}>
        <Demo>Demo</Demo>
      </div>
      <div widths={[6]}>
        <Demo>Demo</Demo>
      </div>
      <div widths={[6]}>
        <Demo>Demo</Demo>
      </div>
      <div widths={[6]}>
        <Demo>Demo</Demo>
      </div>
      <div widths={[6]}>
        <Demo>Demo</Demo>
      </div>
      <div widths={[6]}>
        <Demo>Demo</Demo>
      </div>
    </Row>
  </>
);

const Demo = styled.div`
  background: purple;
  color: white;
  font-size: 14px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-radius: 7px;
`;

ReactDOM.render(<Routes />, document.getElementById('root'));
