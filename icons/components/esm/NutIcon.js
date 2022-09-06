import * as React from "react";

function NutIcon({
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
    d: "M1 11.5v19L17.46 40l16.45-9.5v-19L17.46 2 1 11.5Z",
    stroke: "currentColor",
    strokeWidth: 1.74,
    strokeMiterlimit: 10,
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m1 23.26 16.46 9.51 16.45-9.5",
    stroke: "currentColor",
    strokeWidth: 1.74,
    strokeMiterlimit: 10,
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.46 23.27c4.2 0 7.6-2.82 7.6-6.31 0-3.49-3.4-6.31-7.6-6.31-4.2 0-7.6 2.82-7.6 6.31 0 3.49 3.4 6.31 7.6 6.31Z",
    stroke: "currentColor",
    strokeWidth: 1.74,
    strokeMiterlimit: 10,
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.82 20.2c1.3-1.94 3.78-3.24 6.64-3.24a7.93 7.93 0 0 1 6.58 3.16",
    stroke: "currentColor",
    strokeWidth: 1.74,
    strokeMiterlimit: 10,
    strokeLinecap: "round"
  }));
}

const ForwardRef = React.forwardRef(NutIcon);
export default ForwardRef;