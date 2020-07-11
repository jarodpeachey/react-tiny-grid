/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import styled from 'styled-components';
import './style.css';
import { Row, Column } from 'react-tiny-grid';

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
          fontSize: 15,
          background: '#000000dd',
          padding: 16,
          borderRadius: 5,
          color: '#ffffff',
          margin: '16px 0',
        }}
      >
        &lt;Row breakpoints=&#123;&#91;769&#93;&#125;&gt; &#127;&#127;&#127;
        <br />
        &#127;&#127; &lt;Column /&gt;
        <br />
        &#127;&#127; &lt;Column /&gt;
        <br />
        &#127;&#127; &lt;Column /&gt;
        <br />
        &lt;/Row&gt;
      </div>
      <h2>Auto Widths</h2>
      <p>
        For a grid that's auto-responsive, just wrap your Columns in a Row
        component and let the magic happen!
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
      <br />
      <br />
      <h2>Custom Spacing</h2>
      <p>
        You can customize the spacing between each column using the{' '}
        <code>spacing</code> prop. For example:{' '}
        <code>
          spacing=
          {'{[x, y]}'}
        </code>
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
        <Row maxColumnCount={3} spacing={[6, 2]}>
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
        &lt;Row spacing=
        {'{[6, 2]}'}
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
      <br />
      <br />
      <h2>Max Column Count</h2>
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
      <br />
      <br />
      <h2>Custom Column Widths</h2>
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
      <br />
      <br />
      <h2>Multiple Breakpoints</h2>
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
      <br />
      <br />
      <h2>Column Offsets</h2>
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
      {/* <h2>Custom Flex Direction</h2>
      <p>
        You can change the flex direction for each of the breakpoints you define
        in the <code>breakpoints</code> array by using the{' '}
        <code>flexDirections</code> prop.
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
        <Row
          breakpoints={[576, 769, 1000]}
          flexDirections={['row', 'column', 'row']}
        >
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
      </div> */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Row breakpoints={[576]}>
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
      <Row breakpoints={[576, 800]}>
        <Column widths={[3, 1]}>
          <Demo>3, 1</Demo>
        </Column>
        <Column widths={[5, 11]}>
          <Demo>5, 11</Demo>
        </Column>
        <Column widths={[4, 2]}>
          <Demo>2</Demo>
        </Column>
        <Column widths={[4, 10]}>
          <Demo>4, 10</Demo>
        </Column>
        <Column widths={[3, 3]}>
          <Demo>3, 3</Demo>
        </Column>
        <Column widths={[5, 9]}>
          <Demo>5, 9</Demo>
        </Column>
        <Column widths={[5, 4]}>
          <Demo>5, 4</Demo>
        </Column>
        <Column widths={[3, 8]}>
          <Demo>3, 8</Demo>
        </Column>
        <Column widths={[4, 5]}>
          <Demo>4, 5</Demo>
        </Column>
        <Column widths={[4, 7]}>
          <Demo>4, 7</Demo>
        </Column>
        <Column widths={[3, 6]}>
          <Demo>3, 6</Demo>
        </Column>
        <Column widths={[5, 6]}>
          <Demo>5, 6</Demo>
        </Column>
        <Column widths={[3, 7]}>
          <Demo>3, 7</Demo>
        </Column>
        <Column widths={[6, 5]}>
          <Demo>6, 5</Demo>
        </Column>
        <Column widths={[3, 8]}>
          <Demo>3, 8</Demo>
        </Column>
        <Column widths={[5, 4]}>
          <Demo>5, 4</Demo>
        </Column>
        <Column widths={[3, 9]}>
          <Demo>3, 9</Demo>
        </Column>
        <Column widths={[4, 3]}>
          <Demo>4, 3</Demo>
        </Column>
        <Column widths={[4, 10]}>
          <Demo>4, 10</Demo>
        </Column>
        <Column widths={[5, 2]}>
          <Demo>5, 2</Demo>
        </Column>
        <Column widths={[3, 11]}>
          <Demo>3, 11</Demo>
        </Column>
        <Column widths={[12, 1]}>
          <Demo>12, 1</Demo>
        </Column>
      </Row>
    </div>
  </>
);

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

ReactDOM.render(<Routes />, document.getElementById('root'));
