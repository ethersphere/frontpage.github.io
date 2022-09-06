import * as React from "react";

function GrowIcon({
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
    d: "M14.61 10.6h5.84M17.54 37.73V19.99M33.9 10.49 17.46 1 1 10.49M1 29.5 17.45 39l16.46-9.5V20L17.45 30.4 1 19.99v9.5ZM33.9 10.49l-16.36 9.5L1 10.5",
    stroke: "currentColor",
    strokeWidth: 1.3,
    strokeMiterlimit: 10,
    strokeLinecap: "round"
  }));
}

const ForwardRef = React.forwardRef(GrowIcon);
export default ForwardRef;