import React from "react";
import ReactDOM from "react-dom";
import "./layout1.css";
import image from "../uploads/unnatural.jpg";

export default class Layout1 extends React.PureComponent {
  render() {
    return (
      <div className="demo-layout1">
        <div className="parent">
          <img src={image} alt="unnatural" className="img" />
          <p>
          The lemon, Citrus limon (L.) Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern
          </p>
        </div>
      </div>
    );
  }
}
