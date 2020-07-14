import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

export const Column = ({
  className,
  id,
  children,
  spacing,
  breakpoints,
  widths,
  offsets,
  maxColumnCount = 12,
}) => {
  console.log(children);
  return (
    <Wrapper
      className={className}
      id={id}
      maxColumnCount={maxColumnCount}
      spacingX={spacing[0]}
      spacingY={typeof spacing[1] === 'number' ? spacing[1] : spacing[0]}
      breakpointOne={breakpoints && breakpoints.length >= 1 && breakpoints[0]}
      breakpointTwo={
        breakpoints &&
        breakpoints.length >= 1 &&
        breakpoints[1] &&
        breakpoints[1]
      }
      breakpointThree={
        breakpoints &&
        breakpoints.length >= 1 &&
        breakpoints[2] &&
        breakpoints[2]
      }
      widthOne={widths && widths.length > 0 ? widths[0] : 'auto'}
      widthTwo={
        widths && widths.length > 0
          ? widths[1]
            ? widths[1]
            : widths[0]
          : 'auto'
      }
      widthThree={
        widths && widths.length > 0
          ? widths[2]
            ? widths[2]
            : widths[1]
          : 'auto'
      }
      offsetOne={offsets && offsets.length > 0 ? offsets[0] : null}
      offsetTwo={
        offsets && offsets.length > 0
          ? offsets[1]
            ? offsets[1]
            : offsets[0]
          : null
      }
      offsetThree={
        offsets && offsets.length > 0
          ? offsets[2]
            ? offsets[2]
            : offsets[1]
          : null
      }
    >
      {children}
    </Wrapper>
  );
};

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
  // min-width: ${(props) => (props.maxColumnCount / 12) * 100}% !important;
  width: 100%;
  > * {
    width: 100% !important;
  }
  flex: 1 1 0;
  flex-basis: ${(props) => (12 / props.maxColumnCount / 12) * 100}% !important;
  padding: ${(props) => props.spacingY}px ${(props) => props.spacingX}px;

  @media(min-width: ${(props) => props.breakpointOne}px) and (max-width: ${(
  props
) => props.breakpointTwo || 9999}px) {
    width: ${(props) =>
      props.widthOne !== 'auto' ? `${(props.widthOne / 12) * 100}%` : null};
    flex: ${(props) => (props.widthOne !== 'auto' ? 'none !important' : null)};
    margin-left: ${(props) =>
      props.offsetOne ? `${(props.offsetOne / 12) * 100}%` : null} !important;
  }

  @media(min-width: ${(props) => props.breakpointTwo}px) and (max-width: ${(
  props
) => props.breakpointThree || 9999}px) {
    width: ${(props) =>
      props.widthTwo !== 'auto' ? `${(props.widthTwo / 12) * 100}%` : null};
    flex: ${(props) => (props.widthTwo !== 'auto' ? 'none !important' : null)};
    margin-left: ${(props) =>
      props.offsetTwo ? `${(props.offsetTwo / 12) * 100}%` : null} !important;
  }

  @media(min-width: ${(props) =>
    props.breakpointThree}px) and (max-width: 99999px) {
    width: ${(props) =>
      props.widthThree !== 'auto' ? `${(props.widthThree / 12) * 100}%` : null};
    flex: ${(props) =>
      props.widthThree !== 'auto' ? 'none !important' : null};
    margin-left: ${(props) =>
      props.offsetThree
        ? `${(props.offsetThree / 12) * 100}%`
        : null} !important;
  }
`;
