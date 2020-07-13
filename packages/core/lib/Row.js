"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Row = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Column = require("./Column");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Row = function Row(_ref) {
  var children = _ref.children,
      className = _ref.className,
      id = _ref.id,
      _ref$breakpoints = _ref.breakpoints,
      breakpoints = _ref$breakpoints === void 0 ? [0] : _ref$breakpoints,
      _ref$spacing = _ref.spacing,
      spacing = _ref$spacing === void 0 ? [12] : _ref$spacing,
      flexDirections = _ref.flexDirections,
      maxColumnCount = _ref.maxColumnCount;
  return /*#__PURE__*/_react["default"].createElement(Wrapper, {
    className: className,
    id: id,
    breakpoint: breakpoints[0],
    breakpointTwo: breakpoints[1] || breakpoints[0],
    spacingX: spacing[0],
    spacingY: typeof spacing[1] === 'number' ? spacing[1] : spacing[0],
    flexDirections: flexDirections || null,
    maxColumnCount: maxColumnCount
  }, _react["default"].Children.toArray(children).map(function (item) {
    return item && /*#__PURE__*/_react["default"].createElement(_Column.Column, {
      key: "column-".concat(className, "-").concat(id, "-").concat(Math.random()),
      breakpoints: breakpoints,
      spacingX: spacing[0],
      spacingY: typeof spacing[1] === 'number' ? spacing[1] : spacing[0],
      widths: item.props.widths,
      offsets: item.props.offsets,
      maxColumnCount: maxColumnCount,
      className: item.props.className,
      id: item.props.id
    }, item.props.children);
  }));
};

exports.Row = Row;

var Wrapper = _styledComponents["default"].div.withConfig({
  displayName: "Row__Wrapper",
  componentId: "sc-11joboe-0"
})(["", ";margin:0 -", "px 0 -", "px;width:", ";@media (min-width:", "px){flex-direction:", ";display:flex;justify-content:flex-start;flex-wrap:wrap;margin:", ";}"], function (props) {
  return props.customStyles && (0, _styledComponents.css)(["", ""], props.customStyles);
}, function (props) {
  return props.spacingX;
}, function (props) {
  return props.spacingX;
}, function (props) {
  return props.standardWidth ? '100%' : "calc(100% + ".concat(props.spacingX * 2, "px)");
}, function (props) {
  return props.breakpoint;
}, function (props) {
  return props.flexDirections ? props.flexDirections[0] || 'row' : 'row';
}, function (props) {
  return props.standardWidth ? '0' : "0 -".concat(props.spacingX, "px 0 -").concat(props.spacingX, "px");
}); // ${(props) =>
//   props.flexDirections &&
//   props.flexDirections[1] &&
//   css`
// @media (min-width: ${props.breakpointTwo}px) {
//   flex-direction: ${
//     props.flexDirections ? props.flexDirections[1] || 'row' : 'row'
//   };
//   display: flex;
//   justify-content: flex-start;
//   flex-wrap: wrap;
//   margin: 0 -${props.spacingX}px 0 -${props.spacingX}px;
// `};
// ${(props) =>
//   props.flexDirections &&
//   props.flexDirections[2] &&
//   css`
// @media (min-width: ${props.breakpointThree}px) {
//   flex-direction: ${
//     props.flexDirections ? props.flexDirections[2] || 'row' : 'row'
//   };
//   display: flex;
//   justify-content: flex-start;
//   flex-wrap: wrap;
//   margin: 0 -${props.spacingX}px 0 -${props.spacingX}px;
// `};