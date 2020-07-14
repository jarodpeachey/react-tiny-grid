import React from 'react';
import styled from 'styled-components';
import { Column, Row } from '@react-tiny-grid/core';

const MaxColumnCount = ({ children }) => {
  return (
    <Wrapper id="max-column-count" className="py-4">
      <h4 className="mt-none">Max Column Count</h4>
      <p>
        To limit how many columns are displayed in a single row, pass in a{' '}
        <code>maxColumnCount</code> prop with a value from 1-12.
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
        <Row maxColumnCount={3}>
          <Column>
            <Demo style={{ padding: '12px 32px' }}>Auto</Demo>
          </Column>
          <Column>
            <Demo style={{ padding: '12px 32px' }}>Auto</Demo>
          </Column>
          <Column>
            <Demo style={{ padding: '12px 32px' }}>Auto</Demo>
          </Column>
          <Column>
            <Demo style={{ padding: '12px 32px' }}>Auto</Demo>
          </Column>
          <Column>
            <Demo style={{ padding: '12px 32px' }}>Auto</Demo>
          </Column>
          <Column>
            <Demo style={{ padding: '12px 32px' }}>Auto</Demo>
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
        &lt;Row maxColumnCount=
        {'{3}'}
        &gt; &#127;&#127;&#127;
        <br />
        &#127;&#127; &lt;Column /&gt;
        <br />
        &#127;&#127; &lt;Column /&gt;
        <br />
        &#127;&#127; &lt;Column /&gt;
        <br />
        &#127;&#127; &lt;Column /&gt;
        <br />
        &#127;&#127; &lt;Column /&gt;
        <br />
        &#127;&#127; &lt;Column /&gt;
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

export default MaxColumnCount;
