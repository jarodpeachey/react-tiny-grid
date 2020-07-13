import React from 'react';
import styled from 'styled-components';
import { Column, Row } from '@react-tiny-grid/core';

const MultipleBreakpoints = ({ children }) => {
  return (
    <Wrapper id="multiple-breakpoints" className="py-4">
      <h4>Multiple Breakpoints</h4>
      <p>
        You can set up to three breakpoints to create a unique layout for each
        screen size.
      </p>
      <div
        style={{
          background: '#f7f7f7cc',
          padding: 16,
          borderRadius: 5,
          border: '1px solid #e8e8e8',
          borderBottomRightRadius: 0,
          borderBottomLeftRadius: 0,
          margin: '16px 0',
          marginBottom: 0,
        }}
      >
        <Row breakpoints={[576, 769, 1000]}>
          <Column widths={[3, 2, 8]}>
            <Demo>
              <div>576px: 3</div>
              <div>769px: 2</div>
              <div>1000px: 8</div>
            </Demo>
          </Column>
          <Column widths={[5, 10, 4]}>
            <Demo>
              <div>576px: 5</div>
              <div>769px: 10</div>
              <div>1000px: 4</div>
            </Demo>
          </Column>
          <Column widths={[4, 3, 2]}>
            <Demo>
              <div>576px: 4</div>
              <div>769px: 3</div>
              <div>1000px: 2</div>
            </Demo>
          </Column>
          <Column widths={[4, 9, 7]}>
            <Demo>
              <div>576px: 4</div>
              <div>769px: 9</div>
              <div>1000px: 7</div>
            </Demo>
          </Column>
          <Column widths={[5, 7, 3]}>
            <Demo>
              <div>576px: 5</div>
              <div>769px: 7</div>
              <div>1000px: 3</div>
            </Demo>
          </Column>
          <Column widths={[3, 5, 12]}>
            <Demo>
              <div>576px: 3</div>
              <div>769px: 5</div>
              <div>1000px: 12</div>
            </Demo>
          </Column>
        </Row>
      </div>
      <div
        style={{
          fontFamily: 'monospace',
          fontSize: 15,
          background: '#000000dd',
          padding: 16,
          borderRadius: 5,
          color: '#ffffff',
          margin: '16px 0',
          marginTop: 0,
          borderTopRightRadius: 0,
          borderTopLeftRadius: 0,
        }}
      >
        &lt;Row breakpoints=
        {'{[576, 769, 1000]}'}
        &gt; &#127;&#127;&#127;
        <br />
        &#127;&#127; &lt;Column widths=
        {'{[3, 2, 8]}'} /&gt;
        <br />
        &#127;&#127; &lt;Column widths=
        {'{[5, 10, 4]}'} /&gt;
        <br />
        &#127;&#127; &lt;Column widths=
        {'{[4, 3, 2]}'} /&gt;
        <br />
        &#127;&#127; &lt;Column widths=
        {'{[4, 9, 7]}'} /&gt;
        <br />
        &#127;&#127; &lt;Column widths=
        {'{[5, 7, 3]}'} /&gt;
        <br />
        &#127;&#127; &lt;Column widths=
        {'{[3, 5, 12]}'} /&gt;
        <br />
        &lt;/Row&gt;
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

const Demo = styled.div`
  background: #546cde;
  color: white;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-radius: 5px;
`;

export default MultipleBreakpoints;
