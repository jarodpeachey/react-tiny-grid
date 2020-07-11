"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Row = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Column = require("./Column");

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
    console.log(item);
    return item && /*#__PURE__*/_react["default"].createElement(_Column.Column, {
      key: "column",
      breakpoints: breakpoints,
      spacingX: spacing[0],
      spacingY: typeof spacing[1] === 'number' ? spacing[1] : spacing[0],
      widths: item.props.widths,
      offsets: item.props.offsets,
      maxColumnCount: maxColumnCount
    }, item.props.children);
  }));
};

exports.Row = Row;

var Wrapper = _styledComponents["default"].div.withConfig({
  displayName: "Row__Wrapper",
  componentId: "qfncuc-0"
})(["", ";margin:0 -", "px 0 -", "px;width:", ";@media (min-width:", "px){flex-direction:", ";display:flex;justify-content:flex-start;flex-wrap:wrap;margin:", ";}", ";"], function (props) {
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
}, function (props) {
  return props.flexDirections && props.flexDirections[1] && (0, _styledComponents.css)(["@media (min-width:", "px){flex-direction:", ";display:flex;justify-content:flex-start;flex-wrap:wrap;margin:0 -", "px 0 -", "px;"], props.breakpointTwo, props.flexDirections ? props.flexDirections[1] || 'row' : 'row', props.spacingX, props.spacingX);
});