import React from 'react';
import styled from 'styled-components';
import { Column, Row } from '@react-tiny-grid/core';

const CustomWidths = ({ children }) => {
  return (
    <Wrapper id="custom-widths" className="py-4">
      <h4>Custom Column Widths</h4>
      <p>
        You can define custom column widths via the <code>widths</code> props,
        which accepts an array.
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
        <Row breakpoints={[576]}>
          <Column widths={[4]}>
            <Demo>
              <div>576px: 4</div>
            </Demo>
          </Column>
          <Column widths={[8]}>
            <Demo>
              <div>576px: 8</div>
            </Demo>
          </Column>
          <Column widths={[3]}>
            <Demo>
              <div>576px: 3</div>
            </Demo>
          </Column>
          <Column widths={[9]}>
            <Demo>
              <div>576px: 9</div>
            </Demo>
          </Column>
          <Column widths={[7]}>
            <Demo>
              <div>576px: 7</div>
            </Demo>
          </Column>
          <Column widths={[5]}>
            <Demo>
              <div>576px: 5</div>
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
        {'{[576]}'}
        &gt; &#127;&#127;&#127;
        <br />
        &#127;&#127; &lt;Column widths=
        {'{[4]}'} /&gt;
        <br />
        &#127;&#127; &lt;Column widths=
        {'{[8]}'} /&gt;
        <br />
        &#127;&#127; &lt;Column widths=
        {'{[3]}'} /&gt;
        <br />
        &#127;&#127; &lt;Column widths=
        {'{[9]}'} /&gt;
        <br />
        &#127;&#127; &lt;Column widths=
        {'{[7]}'} /&gt;
        <br />
        &#127;&#127; &lt;Column widths=
        {'{[5]}'} /&gt;
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

export default CustomWidths;
