import React from "react";
import ReactDOM from "react-dom";
import "./layout3.css";

export default class Layout3 extends React.PureComponent {
  render() {
    return (
      <div className="demo-layout3">
        <div className="div1">
          <div >100</div>
          <div className="float1">101</div>
          <div>102</div>
          <div>103</div>
          <div>104</div>
          <div>105</div>
          <div>106</div>
          <div>107</div>
          <div>108</div>
        </div>
        <div className="div2">
          <div className="xxx">200</div>
          <div>201</div>
          <div>202</div>
          <div>203</div>
          <div>204</div>
        </div>
      </div>
    );
  }
}
