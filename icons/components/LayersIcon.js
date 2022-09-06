const React = require("react");

function LayersIcon({
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
    d: "M1 10.49v19L17.47 39l16.45-9.5V10.49L17.47 1 1 10.49Z",
    stroke: "currentColor",
    strokeWidth: 1.31,
    strokeMiterlimit: 10,
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m1 10.49 16.48 9.76 16.44-9.76",
    stroke: "currentColor",
    strokeWidth: 1.31,
    strokeMiterlimit: 10,
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m1 19.88 16.48 9.76 16.44-9.76",
    stroke: "currentColor",
    strokeWidth: 1.31,
    strokeMiterlimit: 10,
    strokeLinecap: "round"
  }));
}

const ForwardRef = React.forwardRef(LayersIcon);
module.exports = ForwardRef;