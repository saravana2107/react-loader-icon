import React from "react";
import SVG from "./SVG";

class Cylon extends React.Component {
  render() {
    return (
      <SVG>
        <path transform="translate(0 0)" d="M0 12 V20 H4 V12z">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0; 28 0; 0 0; 0 0"
            dur="1.5s"
            begin="0"
            repeatCount="indefinite"
            keyTimes="0;0.3;0.6;1"
            keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
            calcMode="spline"
          />
        </path>
        <path opacity="0.5" transform="translate(0 0)" d="M0 12 V20 H4 V12z">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0; 28 0; 0 0; 0 0"
            dur="1.5s"
            begin="0.1s"
            repeatCount="indefinite"
            keyTimes="0;0.3;0.6;1"
            keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
            calcMode="spline"
          />
        </path>
        <path opacity="0.25" transform="translate(0 0)" d="M0 12 V20 H4 V12z">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0; 28 0; 0 0; 0 0"
            dur="1.5s"
            begin="0.2s"
            repeatCount="indefinite"
            keyTimes="0;0.3;0.6;1"
            keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
            calcMode="spline"
          />
        </path>
      </SVG>
    );
  }
}

export default Cylon;
