import React from 'react';
import styled from 'styled-components';
import { Column, Row } from '@react-tiny-grid/core';

const ColumnOffsets = ({ children }) => {
  return (
    <Wrapper id="column-offsets" className="py-4">
      <h4>Column Offsets</h4>
      <p>
        You can offset each column a unique amount for each breakpoint. Simply
        pass in an array to the <code>offsets</code> prop that has the same
        number of items as the <code>breakpoints</code> array.
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
        <Row breakpoints={[576, 769]}>
          <Column widths={[4, 4]}>
            <Demo>
              <div>576px: 3</div>
              <div>769px: 1</div>
            </Demo>
          </Column>
          <Column widths={[3, 6]} offsets={[1, 0]}>
            <Demo>
              <div>576px: 1</div>
              <div>769px: 0</div>
            </Demo>
          </Column>
          <Column widths={[3, 7]} offsets={[1, 0]}>
            <Demo>
              <div>576px: 1</div>
              <div>769px: 0</div>
            </Demo>
          </Column>
          <Column widths={[6, 3]} offsets={[4, 1]}>
            <Demo>
              <div>576px: 4</div>
              <div>769px: 1</div>
            </Demo>
          </Column>
          <Column widths={[3, 9]}>
            <Demo>
              <div>576px: 1</div>
              <div>769px: 2</div>
            </Demo>
          </Column>
          <Column widths={[4, 4]}>
            <Demo>
              <div>576px: 1</div>
              <div>769px: 4</div>
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
        {'{[576, 769]}'}
        &gt; &#127;&#127;&#127;
        <br />
        &#127;&#127; &lt;Column widths=
        {'{[4, 4]}'} offsets=
        {'{[1, 0]}'} /&gt;
        <br />
        &#127;&#127; &lt;Column widths=
        {'{[3, 6]}'} offsets=
        {'{[1, 0]}'} /&gt;
        <br />
        &#127;&#127; &lt;Column widths=
        {'{[3, 7]}'} offsets=
        {'{[4, 1]}'} /&gt;
        <br />
        &#127;&#127; &lt;Column widths=
        {'{[6, 3]}'} /&gt;
        <br />
        &#127;&#127; &lt;Column widths=
        {'{[3, 9]}'} /&gt;
        <br />
        &#127;&#127; &lt;Column widths=
        {'{[4, 4]}'} /&gt;
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

export default ColumnOffsets;
