import * as React from "react";

function PullIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    viewBox: "0 0 42 50",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M1 13.5v23L20.91 48l19.92-11.5v-23L20.91 2 1 13.5Z",
    stroke: "currentColor",
    strokeWidth: 1.74,
    strokeMiterlimit: 10,
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20.91 2v23l19.92 11.5M10.56 31.26l18.93-11.03M10.56 15.8v15.46l13.39 7.73",
    stroke: "currentColor",
    strokeWidth: 1.74,
    strokeMiterlimit: 10,
    strokeLinecap: "round"
  }));
}

const ForwardRef = React.forwardRef(PullIcon);
export default ForwardRef;