import React from "react";
import SVG from "./SVG";

class SpinningBubbles extends React.Component {
  render() {
    return (
      <SVG>
        <circle cx="16" cy="3" r="2.77267">
          <animate
            attributeName="r"
            values="0;3;0;0"
            dur="1s"
            repeatCount="indefinite"
            begin="0"
            keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
            calcMode="spline"
          />
        </circle>
        <circle transform="rotate(45 16 16)" cx="16" cy="3" r="1.86328">
          <animate
            attributeName="r"
            values="0;3;0;0"
            dur="1s"
            repeatCount="indefinite"
            begin="0.125s"
            keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
            calcMode="spline"
          />
        </circle>
        <circle transform="rotate(90 16 16)" cx="16" cy="3" r="0.265408">
          <animate
            attributeName="r"
            values="0;3;0;0"
            dur="1s"
            repeatCount="indefinite"
            begin="0.25s"
            keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
            calcMode="spline"
          />
        </circle>
        <circle transform="rotate(135 16 16)" cx="16" cy="3" r="0">
          <animate
            attributeName="r"
            values="0;3;0;0"
            dur="1s"
            repeatCount="indefinite"
            begin="0.375s"
            keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
            calcMode="spline"
          />
        </circle>
        <circle transform="rotate(180 16 16)" cx="16" cy="3" r="0">
          <animate
            attributeName="r"
            values="0;3;0;0"
            dur="1s"
            repeatCount="indefinite"
            begin="0.5s"
            keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
            calcMode="spline"
          />
        </circle>
        <circle transform="rotate(225 16 16)" cx="16" cy="3" r="0.0555565">
          <animate
            attributeName="r"
            values="0;3;0;0"
            dur="1s"
            repeatCount="indefinite"
            begin="0.625s"
            keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
            calcMode="spline"
          />
        </circle>
        <circle transform="rotate(270 16 16)" cx="16" cy="3" r="0.755695">
          <animate
            attributeName="r"
            values="0;3;0;0"
            dur="1s"
            repeatCount="indefinite"
            begin="0.75s"
            keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
            calcMode="spline"
          />
        </circle>
        <circle transform="rotate(315 16 16)" cx="16" cy="3" r="2.14946">
          <animate
            attributeName="r"
            values="0;3;0;0"
            dur="1s"
            repeatCount="indefinite"
            begin="0.875s"
            keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
            calcMode="spline"
          />
        </circle>
        <circle transform="rotate(180 16 16)" cx="16" cy="3" r="0">
          <animate
            attributeName="r"
            values="0;3;0;0"
            dur="1s"
            repeatCount="indefinite"
            begin="0.5s"
            keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
            calcMode="spline"
          />
        </circle>
      </SVG>
    );
  }
}

export default SpinningBubbles;
