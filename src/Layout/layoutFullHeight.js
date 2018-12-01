import React from "react";
import ReactDOM from "react-dom";
import "./layoutFullHeight.css";

export default class extends React.Component {
  render() {
    return (
      <div className="demo-layout-FullHeight">
        <div className="demo-layout-FullHeight-a" />
        <div className="demo-layout-FullHeight-b" />
      </div>
    );
  }
}
