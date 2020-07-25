import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

export const Column = ({
  className,
  id,
  children,
  spacing,
  breakpoints,
  widths = ['auto'],
  offsets,
  maxColumnCount = 12,
  key,
}) => {
  // Breakpoints
  const breakpointOne = breakpoints[0];
  const breakpointTwo = breakpoints.length >= 1 ? breakpoints[1] : null;
  const breakpointThree = breakpoints.length >= 2 ? breakpoints[2] : null;

  // Widths
  const widthOne = widths[0];
  const widthTwo = widths.length >= 1 ? widths[1] : null;
  const widthThree = widths.length >= 2 ? widths[2] : null;

  // Offsets
  const offsetOne = offsets && offsets.length > 0 ? offsets[0] : null;
  const offsetTwo = offsets && offsets.length >= 1 ? offsets[1] : null;
  const offsetThree = offsets && offsets.length >= 2 ? offsets[2] : null;

  return (
    <Wrapper
      breakpointOne={breakpointOne}
      breakpointTwo={breakpointTwo}
      breakpointThree={breakpointThree}
      widthOne={widthOne}
      widthTwo={widthTwo}
      widthThree={widthThree}
      offsetOne={offsetOne}
      offsetTwo={offsetTwo}
      offsetThree={offsetThree}
      spacingX={spacing[0]}
      spacingY={typeof spacing[1] === 'number' ? spacing[1] : spacing[0]}
      key={key}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  flex: 1 1 0;
  flex-basis: ${(props) => (12 / props.maxColumnCount / 12) * 100}% !important;
  padding: ${(props) => props.spacingY}px ${(props) => props.spacingX}px;

  @media (min-width: ${(props) => props.breakpointOne}px) and (max-width: ${(
      props
    ) => props.breakpointTwo || 9999}px) {
    width: ${(props) =>
      props.widthOne !== 'auto' ? `${(props.widthOne / 12) * 100}%` : null};
    flex: ${(props) => (props.widthOne !== 'auto' ? 'none !important' : null)};
    margin-left: ${(props) =>
      props.offsetOne ? `${(props.offsetOne / 12) * 100}% !important` : null};
  }

  @media (min-width: ${(props) => props.breakpointTwo}px) and (max-width: ${(
      props
    ) => props.breakpointThree || 9999}px) {
    width: ${(props) =>
      props.widthTwo !== 'auto' ? `${(props.widthTwo / 12) * 100}%` : null};
    flex: ${(props) => (props.widthTwo !== 'auto' ? 'none !important' : null)};
    margin-left: ${(props) =>
      props.offsetTwo ? `${(props.offsetTwo / 12) * 100}% !important` : null};
  }

  @media (min-width: ${(props) =>
      props.breakpointThree}px) and (max-width: 99999px) {
    width: ${(props) =>
      props.widthThree !== 'auto' ? `${(props.widthThree / 12) * 100}%` : null};
    flex: ${(props) =>
      props.widthThree !== 'auto' ? 'none !important' : null};
    margin-left: ${(props) =>
      props.offsetThree
        ? `${(props.offsetThree / 12) * 100}% !important`
        : null};
  }
`;
