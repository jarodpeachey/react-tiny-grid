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
    <div className="container mt-5">
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
  );
};

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
