import * as React from "react";

function UnlimitedIcon({
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
    d: "m22.26 22.78 11.65 6.72V10.49L1 29.49v-19l11.87 6.86",
    stroke: "currentColor",
    strokeWidth: 1.31,
    strokeLinecap: "round",
    strokeLinejoin: "bevel"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.8 31.7 17.46 39l12.03-6.95M1 10.49v19M29.48 7.94 17.45 1 5.35 7.98M33.9 29.5V10.49",
    stroke: "currentColor",
    strokeWidth: 1.31,
    strokeMiterlimit: 10,
    strokeLinecap: "round"
  }));
}

const ForwardRef = React.forwardRef(UnlimitedIcon);
export default ForwardRef;