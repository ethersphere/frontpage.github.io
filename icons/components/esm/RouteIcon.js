import * as React from "react";

function RouteIcon({
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
    d: "M1 13.5v23L20.92 48l19.91-11.5v-23L20.93 2 1 13.5Z",
    stroke: "currentColor",
    strokeWidth: 1.74,
    strokeMiterlimit: 10,
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m32.88 31.8-11.96-6.9-11.97 6.9M20.92 25V2",
    stroke: "currentColor",
    strokeWidth: 1.74,
    strokeMiterlimit: 10,
    strokeLinecap: "round"
  }));
}

const ForwardRef = React.forwardRef(RouteIcon);
export default ForwardRef;