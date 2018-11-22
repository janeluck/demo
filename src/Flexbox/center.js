import React from "react";
import ReactDOM from "react-dom";
import "./center.css";

export default  class FlexboxCenter extends React.Component {
    render() {
      return (
        <div className="demo-flexbox-parent">
          <div className="demo-flexbox-conten">1</div>
          <div className="demo-flexbox-conten">2</div>
        </div>
      );
    }
  }
 