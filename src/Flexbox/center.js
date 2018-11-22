import React from "react";
import ReactDOM from "react-dom";
import "./center.css";

export default  class FlexboxCenter extends React.Component {
    render() {
      return (
        <div className="demo-flexbox-center-parent">
          <div className="demo-flexbox-center-content">1</div>
          <div className="demo-flexbox-center-content">2</div>
        </div>
      );
    }
  }
 