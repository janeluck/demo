import React from "react";
import ReactDOM from "react-dom";
import "./layout1.css";
import image from "../uploads/unnatural.jpg";

export default class Layout1 extends React.PureComponent {
  render() {
    return (
      <div className="demo-layout1">
        <div className="div1">
          <img src={image} alt="unnatural" className="img" />
          <p>
            The lemon, Citrus limon (L.) Osbeck, is a species of small evergreen
            tree in the flowering plant family Rutaceae, native to South Asia,
            primarily North eastern
          </p>
        </div>

        <div className="div2">
          <img src={image} alt="unnatural" className="img" />
          <p>
            The lemon is a species of small evergreen tree in the flowering
            plant family Rutaceae
          </p>
        </div>
        <p>浮动实现的“文字环绕图片效果”，未清除浮动：</p>
        <div>
          <img src={image} alt="unnatural" className="img" />
          <p>
            The lemon is a species of small evergreen tree in the flowering
            plant family Rutaceae The lemon, Citrus limon (L.) Osbeck, is a
            species of small evergreen tree in the flowering plant family
            Rutaceae, native to South Asia, primarily North eastern The lemon,
            Citrus limon (L.) Osbeck, is a species of small evergreen tree in
            the flowering plant family Rutaceae, native to South Asia, primarily
            North eastern The lemon, Citrus limon (L.) Osbeck, is a species of
            small evergreen tree in the flowering plant family Rutaceae, native
            to South Asia, primarily North eastern The lemon, Citrus limon (L.)
            Osbeck, is a species of small evergreen tree in the flowering plant
            family Rutaceae, native to South Asia, primarily North eastern The
            lemon, Citrus limon (L.) Osbeck, is a species of small evergreen
            tree in the flowering plant family Rutaceae, native to South Asia,
            primarily North eastern The lemon, Citrus limon (L.) Osbeck, is a
            species of small evergreen tree in the flowering plant family
            Rutaceae, native to South Asia, primarily North eastern The lemon,
            Citrus limon (L.) Osbeck, is a species of small evergreen tree in
            the flowering plant family Rutaceae, native to South Asia, primarily
            North eastern
          </p>
        </div>
      </div>
    );
  }
}
