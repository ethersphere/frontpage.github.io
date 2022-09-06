const React = require("react");

function DowntimeIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    viewBox: "0 0 37 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M17.45 1 1 10.5v19L17.45 39M8.75 25.47l8.7-5.02M17.45 7.1v13.35M26.46 35.6l-.86-1.48M33.9 29.5l-1.47-.85M35.56 20h-1.65M33.9 10.5l-1.47.86M26.31 4.64l-.98 1.73",
    stroke: "currentColor",
    strokeWidth: 1.3,
    strokeMiterlimit: 10,
    strokeLinecap: "round"
  }));
}

const ForwardRef = React.forwardRef(DowntimeIcon);
module.exports = ForwardRef;