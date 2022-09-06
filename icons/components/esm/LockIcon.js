import * as React from "react";

function LockIcon({
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
    d: "M17.46 20.92a2.7 2.7 0 1 0 0-5.38 2.7 2.7 0 0 0 0 5.38ZM17.46 21.82v7.83",
    stroke: "currentColor",
    strokeWidth: 1.74,
    strokeMiterlimit: 10,
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1 11.5v19L17.46 40l16.45-9.5v-19L17.46 2 1 11.5Z",
    stroke: "currentColor",
    strokeWidth: 1.74,
    strokeMiterlimit: 10,
    strokeLinecap: "round"
  }));
}

const ForwardRef = React.forwardRef(LockIcon);
export default ForwardRef;