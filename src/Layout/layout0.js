import React from "react";
import ReactDOM from "react-dom";
import "./layout0.css";

export  class LeftNav extends React.Component {
    render() {
      return (
        <div className="demo-layout0-leftNav">
          {this.props.children}
        </div>
      );
    }
  }

  export  class RightContent extends React.Component {
    render() {
      return (
        <div className="demo-layout0-rightContent">
          {this.props.children}
        </div>
      );
    }
  }
    