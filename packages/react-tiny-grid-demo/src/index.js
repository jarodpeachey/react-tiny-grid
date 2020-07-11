import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import styled from 'styled-components';
import './style.css';
import { Row } from 'react-tiny-grid';

const Routes = () => (
  <>
    <div className="container">
      <h1>React Tiny Grid</h1>
      <p>React Tiny Grid is a, well, tiny grid system for React.</p>
      <p>Go figure.</p>
      <p>
        It's built to be super-simple to use. Just pass in an array of
        breakpoints to the Row, and an array of widths to the Column.
      </p>
      <div
        style={{
          fontFamily: 'monospace',
          background: '#000000dd',
          padding: 16,
          borderRadius: 5,
          color: '#ffffffdd',
          margin: '16px 0',
        }}
      >
        &lt;Row breakpoints=&#123;&#91;769, 960&#93;&#125;&gt;
        <br />
        &#127;&#127;&#127;&lt;div widths=&#123;&#91;6, 4&#93;&#125; /&gt;
        <br />
        &#127;&#127;&#127;&lt;div widths=&#123;&#91;6, 4&#93;&#125; /&gt;
        <br />
        &#127;&#127;&#127;&lt;div widths=&#123;&#91;6, 4&#93;&#125; /&gt;
        <br />
        &lt;/Row&gt;
      </div>
      <Row breakpoints={[576, 800]}>
        <div widths={[3, 1]}>
          <Demo>3, 1</Demo>
        </div>
        <div widths={[5, 11]}>
          <Demo>5, 11</Demo>
        </div>
        <div widths={[4, 2]}>
          <Demo>2</Demo>
        </div>
        <div widths={[4, 10]}>
          <Demo>4, 10</Demo>
        </div>
        <div widths={[3, 3]}>
          <Demo>3, 3</Demo>
        </div>
        <div widths={[5, 9]}>
          <Demo>5, 9</Demo>
        </div>
        <div widths={[5, 4]}>
          <Demo>5, 4</Demo>
        </div>
        <div widths={[3, 8]}>
          <Demo>3, 8</Demo>
        </div>
        <div widths={[4, 5]}>
          <Demo>4, 5</Demo>
        </div>
        <div widths={[4, 7]}>
          <Demo>4, 7</Demo>
        </div>
        <div widths={[3, 6]}>
          <Demo>3, 6</Demo>
        </div>
        <div widths={[5, 6]}>
          <Demo>5, 6</Demo>
        </div>
        <div widths={[3, 7]}>
          <Demo>3, 7</Demo>
        </div>
        <div widths={[6, 5]}>
          <Demo>6, 5</Demo>
        </div>
        <div widths={[3, 8]}>
          <Demo>3, 8</Demo>
        </div>
        <div widths={[5, 4]}>
          <Demo>5, 4</Demo>
        </div>
        <div widths={[3, 9]}>
          <Demo>3, 9</Demo>
        </div>
        <div widths={[4, 3]}>
          <Demo>4, 3</Demo>
        </div>
        <div widths={[4, 10]}>
          <Demo>4, 10</Demo>
        </div>
        <div widths={[5, 2]}>
          <Demo>5, 2</Demo>
        </div>
        <div widths={[3, 11]}>
          <Demo>3, 11</Demo>
        </div>
        <div widths={[12, 1]}>
          <Demo>12, 1</Demo>
        </div>
      </Row>
    </div>
  </>
);

const Demo = styled.div`
  background: #546cde;
  color: white;
  font-size: 14px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-radius: 5px;
`;

ReactDOM.render(<Routes />, document.getElementById('root'));
