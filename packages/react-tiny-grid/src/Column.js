import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

export const Column = ({
  children,
  spacingX,
  spacingY,
  breakpoints,
  widths,
  maxColumnSize,
  demo,
  alignBottom,
  style,
}) => (
  <Wrapper
    style={style}
    demo={demo}
    maxColumnSize={maxColumnSize}
    spacingX={spacingX}
    spacingY={spacingY}
    breakpointOne={breakpoints[0]}
    breakpointTwo={breakpoints[1] && breakpoints[1]}
    breakpointThree={breakpoints[2] && breakpoints[2]}
    widthOne={widths[0]}
    widthTwo={widths[1] && widths[1]}
    widthThree={widths[2] && widths[2]}
    alignBottom={alignBottom}
  >
    {demo ? (
      <Demo>
        <Info>
          <strong>
            {breakpoints[0]}
            px:
          </strong>{' '}
          {widths[0]}
        </Info>
        <Info>
          <strong>
            {breakpoints[1]}
            px:
          </strong>{' '}
          {widths[1]}
        </Info>
      </Demo>
    ) : (
      children
    )}
  </Wrapper>
);

const Demo = styled.div`
  width: 100%;
  height: 100px;
  background: ${(props) => props.theme.color.primary};
  color: white;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-items: flex-end;
`;

const Info = styled.div``;

const Wrapper = styled.div`
  // min-width: ${(props) => (props.maxColumnSize / 12) * 100}% !important;
  width: 100%;
  > * {
    width: 100% !important;
  }
  flex: 1 1 0;
  padding: ${(props) => props.spacingY}px ${(props) => props.spacingX}px;
  ${(props) =>
    props.alignBottom &&
    css`
      align-items: flex-end;
    `}

  ${(props) =>
    props.widthOne !== 'auto'
      ? `
    @media (min-width: ${props.breakpointOne}px) and (max-width: ${
          props.breakpointTwo || 9999
        }px) {
    width: ${(props.widthOne / 12) * 100}% !important;
    padding: ${props.spacingY}px ${props.spacingX}px !important;
    margin: 0 !important;
    display: flex !important;
    flex: none !important;
  }
  `
      : ''}

  ${(props) =>
    props.widthTwo !== 'auto'
      ? `
        @media (min-width: ${props.breakpointTwo}px) {
          width: ${(props.widthTwo / 12) * 100}% !important;
          padding: ${props.spacingY}px ${props.spacingX}px!important;
          margin: 0 !important;
          display: flex !important;
          flex: none !important;
        }
      `
      : ''}

  ${(props) =>
    props.widthThree !== 'auto'
      ? `
        @media (min-width: ${props.breakpointThree}px) {
          width: ${(props.widthThree / 12) * 100}% !important;
          padding: ${props.spacingY}px ${props.spacingX}px !important;
          margin: 0 !important;
          display: flex !important;
          flex: none !important;
        }
      `
      : ''}

  ${(props) =>
    props.widthOne === 'auto'
      ? `
    @media (min-width: ${props.breakpointOne}px) and (max-width: ${
          props.breakpointTwo !== undefined ? props.breakpointTwo : 2400
        }px) {
    // min-width: 50%;
    flex: 1 1 0;
  }
  `
      : ''}

  ${(props) =>
    props.widthTwo === 'auto'
      ? `
    @media (min-width: ${props.breakpointTwo}px) {
    // max-width: 50% !important;
    min-width: 50%;
    flex: 1 1 0;
  }
  `
      : ''}
`;
