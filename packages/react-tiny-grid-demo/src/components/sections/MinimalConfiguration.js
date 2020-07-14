import React from 'react';
import styled from 'styled-components';
import { Column, Row } from '@react-tiny-grid/core';

const MinimalConfiguration = ({ children }) => {
  return (
    <Wrapper id="minimal-configuration" className="py-4">
      <h4 className="mb-2">Minimal Configuration</h4>
      <p className="mb-4">
        React Tiny Grid works out of the box, so all you have to do is wrap a{' '}
        <code>Column</code> component with a <code>Row</code> component. The
        magic just happens!
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
        <Row>
          <Column>
            <Demo>Auto</Demo>
          </Column>
          <Column>
            <Demo>Auto</Demo>
          </Column>
          <Column>
            <Demo>Auto</Demo>
          </Column>
          <Column>
            <Demo>Auto</Demo>
          </Column>
          <Column>
            <Demo>Auto</Demo>
          </Column>
          <Column>
            <Demo>Auto</Demo>
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
        &lt;Row&gt; &#127;&#127;&#127;
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
  color: white !important;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-radius: 5px;
`;

export default MinimalConfiguration;
