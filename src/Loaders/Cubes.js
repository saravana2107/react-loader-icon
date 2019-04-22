import React from "react";
import SVG from "./SVG";

class Cubes extends React.Component {
  render() {
    return (
      <SVG>
        <path transform="translate(2 0)" d="M0 12 V20 H8 V12z">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="-8 0; 2 0; 2 0;"
            dur="0.8s"
            repeatCount="indefinite"
            begin="0"
            keyTimes="0;.25;1"
            keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8"
            calcMode="spline"
          />
        </path>
        <path transform="translate(12 0)" d="M0 12 V20 H8 V12z">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="2 0; 12 0; 12 0;"
            dur="0.8s"
            repeatCount="indefinite"
            begin="0"
            keyTimes="0;.35;1"
            keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8"
            calcMode="spline"
          />
        </path>
        <path transform="translate(22 0)" d="M0 12 V20 H8 V12z">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="12 0; 22 0; 22 0;"
            dur="0.8s"
            repeatCount="indefinite"
            begin="0"
            keyTimes="0;.45;1"
            keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8"
            calcMode="spline"
          />
        </path>
        <path transform="translate(32 0)" d="M0 12 V20 H8 V12z">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="22 0; 32 0; 32 0;"
            dur="0.8s"
            repeatCount="indefinite"
            begin="0"
            keyTimes="0;.55;1"
            keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8"
            calcMode="spline"
          />
        </path>
      </SVG>
    );
  }
}

export default Cubes;
