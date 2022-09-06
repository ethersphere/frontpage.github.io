const React = require("react");

function UploadIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    viewBox: "0 0 35 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M1 10.49v19L17.45 39l16.46-9.5V10.49L17.45 1 1 10.49ZM17.47 21.04V10.49M13.79 11.56 8.3 14.71",
    stroke: "currentColor",
    strokeWidth: 1.31,
    strokeMiterlimit: 10,
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21.12 11.56-3.67-2.13-3.66 2.13M26.58 14.71l-5.46-3.15M8.76 24.62a9.95 9.95 0 0 0 17.44 0",
    stroke: "currentColor",
    strokeWidth: 1.31,
    strokeMiterlimit: 10,
    strokeLinecap: "round"
  }));
}

const ForwardRef = React.forwardRef(UploadIcon);
module.exports = ForwardRef;