import React from 'react';
import styled from 'styled-components';
import '../components/style.css';
import { Row, Column } from '@react-tiny-grid/core';
import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import Sticky from 'react-sticky-el';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import { theme } from '../components/theme';
import Hidden from '../components/Hidden';
import MinimalConfiguration from '../components/sections/MinimalConfiguration';
import CustomSpacing from '../components/sections/CustomSpacing';
import MaxColumnCount from '../components/sections/MaxColumnCount';
import CustomWidths from '../components/sections/CustomWidths';
import MultipleBreakpoints from '../components/sections/MultipleBreakpoints';
import ColumnOffsets from '../components/sections/ColumnOffsets';

const IndexPage = () => {
  return (
    /* eslint-disable react/jsx-one-expression-per-line */

    <Layout>
      <Background />
      <Hero />
      <div style={{ background: 'white' }}>
        <div
          className="container mt-4"
          style={{ position: 'relative', zIndex: 99 }}
        >
          <Row spacing={[24]} breakpoints={[1000, 1500]}>
            <Column widths={[8, 9]}>
              <h4 className="mt-none">Get Started</h4>
              <p>Install the package via NPM or Yarn.</p>
              <pre>$ npm install --save @react-tiny-grid/core</pre>
              <pre>$ yarn add @react-tiny-grid/core</pre>
              <MinimalConfiguration />
              <CustomSpacing />
              <MaxColumnCount />
              <CustomWidths />
              <MultipleBreakpoints />
              <ColumnOffsets />
              <h4 id="demo">Demo</h4>
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
            </Column>
            <Column widths={[4, 3]} className="mt-80">
              <Hidden show={1000}>
                <Sticky className="pt-80" stickyStyle={{ paddingTop: 80 }}>
                  <div
                    style={{
                      background: 'white',
                      borderRadius: theme.radius,
                      // boxShadow:
                      // '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)',
                      border: '1px solid #e8e8e8',
                      width: '100%',
                      padding: '18px',
                    }}
                  >
                    <h6 className="uppercase m-none mb-2">Usage</h6>
                    <SidebarLink href="#minimal-configuration">
                      Basic Configuration
                    </SidebarLink>
                    <SidebarLink href="#custom-spacing">
                      Custom Spacing
                    </SidebarLink>
                    <SidebarLink href="#max-column-count">
                      Max Columns
                    </SidebarLink>
                    <SidebarLink href="#custom-widths">
                      Custom Widths
                    </SidebarLink>
                    <SidebarLink href="#multiple-breakpoints">
                      Multiple Breakpoints
                    </SidebarLink>
                    <SidebarLink href="#column-offsets">
                      Column Offsets
                    </SidebarLink>
                  </div>
                </Sticky>
              </Hidden>
            </Column>
          </Row>
        </div>
      </div>
      <div
        style={{
          background: theme.color.primary,

          color: 'white',
        }}
      >
        <div
          className="container"
          style={{ paddingTop: 30, paddingBottom: 30 }}
        >
          Built and maintained by{' '}
          <a
            href="https://twitter.com/jarodpeachey"
            style={{
              textDecoration: 'none',
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            Jarod Peachey
          </a>
        </div>
      </div>
    </Layout>
  );
};

const Background = styled.div`
  background: ${(props) => props.theme.color.primary};
  border-radius: 100% 53% 86% 100% / 64% 69% 100% 100%;
  position: absolute;
  top: -20vw;
  right: -180px;
  transform: rotate(10deg);
  height: 40vw;
  width: 100vw;
  z-index: -1;
  max-width: 830px;
`;

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

const SidebarLink = styled.a`
  display: block;
  text-decoration: none;
  padding: 8px 0;
  color: ${(props) => props.theme.color.paragraph};
  :hover {
    color: ${(props) => props.theme.color.primary};
  }
`;

export default IndexPage;
