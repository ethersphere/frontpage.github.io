const React = require("react");

function ConnectIcon({
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
    d: "M1 29.5 17.45 39l16.46-9.5V10.49L17.45 1 1 10.49M1.09 10.49v19",
    stroke: "currentColor",
    strokeWidth: 1.3,
    strokeMiterlimit: 10,
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.74 13.81v12.36l10.71 6.2 10.7-6.2V13.81l-10.7-6.19-10.71 6.2ZM14.23 17.67v4.65M20.68 17.67v4.65",
    stroke: "currentColor",
    strokeWidth: 1.3,
    strokeMiterlimit: 10,
    strokeLinecap: "round"
  }));
}

const ForwardRef = React.forwardRef(ConnectIcon);
module.exports = ForwardRef;