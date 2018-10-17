import React from "react";
import ReactDOM from "react-dom";
import "./layout1.css";

export default class Layout1 extends React.PureComponent {
  render() {
    return (
      <div className="app-layout1">
        <div className="header">Header</div>
        <div className="content">content</div>
        <div className="footer">Footer</div>
      </div>
    );
  }
}
