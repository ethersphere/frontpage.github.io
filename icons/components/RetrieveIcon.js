const React = require("react");

function RetrieveIcon({
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
    d: "M40.83 36.5v-23L20.91 2 1 13.5v23L20.91 48l19.92-11.5ZM20.8 10.44v19.34",
    stroke: "currentColor",
    strokeWidth: 1.74,
    strokeMiterlimit: 10,
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m7.65 23.7 13.2 7.61 13.18-7.61M40.83 36.5l-14.48-8.37M1 36.5l14.4-8.33",
    stroke: "currentColor",
    strokeWidth: 1.74,
    strokeMiterlimit: 10,
    strokeLinecap: "round"
  }));
}

const ForwardRef = React.forwardRef(RetrieveIcon);
module.exports = ForwardRef;