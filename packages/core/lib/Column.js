"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Column = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Column = function Column(_ref) {
  var className = _ref.className,
      id = _ref.id,
      children = _ref.children,
      spacing = _ref.spacing,
      breakpoints = _ref.breakpoints,
      _ref$widths = _ref.widths,
      widths = _ref$widths === void 0 ? ['auto'] : _ref$widths,
      offsets = _ref.offsets,
      _ref$maxColumnCount = _ref.maxColumnCount,
      maxColumnCount = _ref$maxColumnCount === void 0 ? 12 : _ref$maxColumnCount;
  console.log(children);
  return /*#__PURE__*/_react["default"].createElement(Wrapper, {
    className: className,
    id: id,
    maxColumnCount: maxColumnCount,
    spacingX: spacing[0],
    spacingY: typeof spacing[1] === 'number' ? spacing[1] : spacing[0],
    breakpointOne: breakpoints && breakpoints.length >= 1 && breakpoints[0],
    breakpointTwo: breakpoints && breakpoints.length >= 1 && breakpoints[1] && breakpoints[1],
    breakpointThree: breakpoints && breakpoints.length >= 1 && breakpoints[2] && breakpoints[2],
    widthOne: widths && widths.length > 0 ? widths[0] : 'auto',
    widthTwo: widths && widths.length > 0 ? widths[1] ? widths[1] : widths[0] : 'auto',
    widthThree: widths && widths.length > 0 ? widths[2] ? widths[2] : widths[1] : 'auto',
    offsetOne: offsets && offsets.length > 0 ? offsets[0] : null,
    offsetTwo: offsets && offsets.length > 0 ? offsets[1] ? offsets[1] : offsets[0] : null,
    offsetThree: offsets && offsets.length > 0 ? offsets[2] ? offsets[2] : offsets[1] : null
  }, children);
};

exports.Column = Column;

var Demo = _styledComponents["default"].div.withConfig({
  displayName: "Column__Demo",
  componentId: "lyyf5z-0"
})(["width:100%;height:100px;background:", ";color:white;border-radius:4px;display:flex;align-items:center;justify-content:center;flex-direction:column;align-items:flex-end;"], function (props) {
  return props.theme.color.primary;
});

var Info = _styledComponents["default"].div.withConfig({
  displayName: "Column__Info",
  componentId: "lyyf5z-1"
})([""]);

var Wrapper = _styledComponents["default"].div.withConfig({
  displayName: "Column__Wrapper",
  componentId: "lyyf5z-2"
})(["width:100%;> *{width:100% !important;}flex:1 1 0;flex-basis:", "% !important;padding:", "px ", "px;@media(min-width:", "px) and (max-width:", "px){width:", ";flex:", ";margin-left:", " !important;}@media(min-width:", "px) and (max-width:", "px){width:", ";flex:", ";margin-left:", " !important;}@media(min-width:", "px) and (max-width:99999px){width:", ";flex:", ";margin-left:", " !important;}"], function (props) {
  return 12 / props.maxColumnCount / 12 * 100;
}, function (props) {
  return props.spacingY;
}, function (props) {
  return props.spacingX;
}, function (props) {
  return props.breakpointOne;
}, function (props) {
  return props.breakpointTwo || 9999;
}, function (props) {
  return props.widthOne !== 'auto' ? "".concat(props.widthOne / 12 * 100, "%") : null;
}, function (props) {
  return props.widthOne !== 'auto' ? 'none !important' : null;
}, function (props) {
  return props.offsetOne ? "".concat(props.offsetOne / 12 * 100, "%") : null;
}, function (props) {
  return props.breakpointTwo;
}, function (props) {
  return props.breakpointThree || 9999;
}, function (props) {
  return props.widthTwo !== 'auto' ? "".concat(props.widthTwo / 12 * 100, "%") : null;
}, function (props) {
  return props.widthTwo !== 'auto' ? 'none !important' : null;
}, function (props) {
  return props.offsetTwo ? "".concat(props.offsetTwo / 12 * 100, "%") : null;
}, function (props) {
  return props.breakpointThree;
}, function (props) {
  return props.widthThree !== 'auto' ? "".concat(props.widthThree / 12 * 100, "%") : null;
}, function (props) {
  return props.widthThree !== 'auto' ? 'none !important' : null;
}, function (props) {
  return props.offsetThree ? "".concat(props.offsetThree / 12 * 100, "%") : null;
});