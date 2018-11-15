import React from "react";
import ReactDOM from "react-dom";
import "./layoutFloat.css";

export default class LayoutTwolumns extends React.PureComponent {
  render() {
    return (
      <div>
        <div class="demo-layoutFloat-wrap">
          <div class="demo-layoutFloat-floatLeft demo-layoutFloat-f1" />
          <div class="demo-layoutFloat-floatLeft demo-layoutFloat-f2" />
          <div class="demo-layoutFloat-floatLeft demo-layoutFloat-f3" />
          <div class="demo-layoutFloat-floatLeft" />
          <div class="demo-layoutFloat-floatLeft" />
          <div class="demo-layoutFloat-floatLeft" />
        </div>
        <div class="demo-layoutFloat-wrap">
          <div class="demo-layoutFloat-floatRight" />
        </div>
        <div />
      </div>
    );
  }
}
