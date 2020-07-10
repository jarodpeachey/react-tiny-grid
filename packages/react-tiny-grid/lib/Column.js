"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Column = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var Column = function Column(_ref) {
  var children = _ref.children,
      spacingX = _ref.spacingX,
      spacingY = _ref.spacingY,
      breakpoints = _ref.breakpoints,
      widths = _ref.widths,
      maxColumnSize = _ref.maxColumnSize,
      demo = _ref.demo,
      alignBottom = _ref.alignBottom,
      style = _ref.style;
  return /*#__PURE__*/_react["default"].createElement(Wrapper, {
    style: style,
    demo: demo,
    maxColumnSize: maxColumnSize,
    spacingX: spacingX,
    spacingY: spacingY,
    breakpointOne: breakpoints[0],
    breakpointTwo: breakpoints[1] && breakpoints[1],
    breakpointThree: breakpoints[2] && breakpoints[2],
    widthOne: widths[0],
    widthTwo: widths[1] && widths[1],
    widthThree: widths[2] && widths[2],
    alignBottom: alignBottom
  }, demo ? /*#__PURE__*/_react["default"].createElement(Demo, null, /*#__PURE__*/_react["default"].createElement(Info, null, /*#__PURE__*/_react["default"].createElement("strong", null, breakpoints[0], "px:"), ' ', widths[0]), /*#__PURE__*/_react["default"].createElement(Info, null, /*#__PURE__*/_react["default"].createElement("strong", null, breakpoints[1], "px:"), ' ', widths[1])) : children);
};

exports.Column = Column;

var Demo = _styledComponents["default"].div.withConfig({
  displayName: "Column__Demo",
  componentId: "xu10n0-0"
})(["width:100%;height:100px;background:", ";color:white;border-radius:4px;display:flex;align-items:center;justify-content:center;flex-direction:column;align-items:flex-end;"], function (props) {
  return props.theme.color.primary;
});

var Info = _styledComponents["default"].div.withConfig({
  displayName: "Column__Info",
  componentId: "xu10n0-1"
})([""]);

var Wrapper = _styledComponents["default"].div.withConfig({
  displayName: "Column__Wrapper",
  componentId: "xu10n0-2"
})(["width:100%;> *{width:100% !important;}flex:1 1 0;padding:", "px ", "px;", " ", " ", " ", " ", " ", ""], function (props) {
  return props.spacingY;
}, function (props) {
  return props.spacingX;
}, function (props) {
  return props.alignBottom && (0, _styledComponents.css)(["align-items:flex-end;"]);
}, function (props) {
  return props.widthOne !== 'auto' ? "\n    @media (min-width: ".concat(props.breakpointOne, "px) and (max-width: ").concat(props.breakpointTwo || 9999, "px) {\n    width: ").concat(props.widthOne / 12 * 100, "% !important;\n    padding: ").concat(props.spacingY, "px ").concat(props.spacingX, "px !important;\n    margin: 0 !important;\n    display: flex !important;\n    flex: none !important;\n  }\n  ") : '';
}, function (props) {
  return props.widthTwo !== 'auto' ? "\n        @media (min-width: ".concat(props.breakpointTwo, "px) {\n          width: ").concat(props.widthTwo / 12 * 100, "% !important;\n          padding: ").concat(props.spacingY, "px ").concat(props.spacingX, "px!important;\n          margin: 0 !important;\n          display: flex !important;\n          flex: none !important;\n        }\n      ") : '';
}, function (props) {
  return props.widthThree !== 'auto' ? "\n        @media (min-width: ".concat(props.breakpointThree, "px) {\n          width: ").concat(props.widthThree / 12 * 100, "% !important;\n          padding: ").concat(props.spacingY, "px ").concat(props.spacingX, "px !important;\n          margin: 0 !important;\n          display: flex !important;\n          flex: none !important;\n        }\n      ") : '';
}, function (props) {
  return props.widthOne === 'auto' ? "\n    @media (min-width: ".concat(props.breakpointOne, "px) and (max-width: ").concat(props.breakpointTwo !== undefined ? props.breakpointTwo : 2400, "px) {\n    // min-width: 50%;\n    flex: 1 1 0;\n  }\n  ") : '';
}, function (props) {
  return props.widthTwo === 'auto' ? "\n    @media (min-width: ".concat(props.breakpointTwo, "px) {\n    // max-width: 50% !important;\n    min-width: 50%;\n    flex: 1 1 0;\n  }\n  ") : '';
});