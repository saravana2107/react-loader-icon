import React from "react";

class SVG extends React.Component {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        {this.props.children}
      </svg>
    );
  }
}

export default SVG;
