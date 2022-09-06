import * as React from "react";

function HeartIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    viewBox: "0 0 35 42",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M1 11.5v19L17.46 40l16.46-9.5v-19L17.46 2 1 11.5Z",
    stroke: "currentColor",
    strokeWidth: 1.74,
    strokeMiterlimit: 10,
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m22.37 14.53-4.91 2.88-4.9-2.88-4.9 2.88v6.7l4.9 2.83 4.9 2.83 4.9-2.83 4.91-2.84v-6.69l-4.9-2.88Z",
    stroke: "currentColor",
    strokeWidth: 1.74,
    strokeMiterlimit: 10,
    strokeLinecap: "round"
  }));
}

const ForwardRef = React.forwardRef(HeartIcon);
export default ForwardRef;