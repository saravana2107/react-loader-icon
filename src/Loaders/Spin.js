import React from "react";
import SVG from "./SVG";

class Spin extends React.Component {
  render() {
    return (
      <SVG>
        <path
          opacity=".25"
          d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"
        />
        <path
          d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z"
          transform="rotate(348.917 16 16)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 16 16"
            to="360 16 16"
            dur="0.8s"
            repeatCount="indefinite"
          />
        </path>
      </SVG>
    );
  }
}

export default Spin;
