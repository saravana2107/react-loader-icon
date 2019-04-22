import React from "react";
import PropTypes from "prop-types";
import {
  Balls,
  Bars,
  Bubbles,
  Cubes,
  Cylon,
  Spin,
  SpinningBubbles,
  Spokes
} from "./Loaders";

class Loader extends React.Component {
  render() {
    let { size, color, type, className, style } = this.props;

    size = size || 64;
    color = color || "black";
    type = type || "spinningBubbles";

    const styleObject = {
      width: size,
      height: size,
      fill: color,
      margin: "0 auto"
    };

    return (
      <div
        className={className}
        style={Object.assign({}, styleObject, style || {})}
      >
        {type === "balls" && <Balls />}
        {type === "bars" && <Bars />}
        {type === "bubbles" && <Bubbles />}
        {type === "cubes" && <Cubes />}
        {type === "cylon" && <Cylon />}
        {type === "spin" && <Spin />}
        {type === "spinningBubbles" && <SpinningBubbles />}
        {type === "spokes" && <Spokes />}
      </div>
    );
  }
}

Loader.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  type: PropTypes.oneOf([
    "balls",
    "bars",
    "bubbles",
    "cubes",
    "cylon",
    "spin",
    "spinningBubbles",
    "spokes"
  ]),
  className: PropTypes.string,
  style: PropTypes.object
};

export default Loader;
