import React from "react";
import ReactDOM from "react-dom";
import "./layoutTwoColumns.css";


export default class LayoutTwolumns extends React.PureComponent {
  render() {
    return (
      <div className="demo-layoutTwoColumns">
        <div className="demo-layoutTwoColumns-left">
            left
        </div>

        <div className="demo-layoutTwoColumns-right">
            right
        </div>
        <div>
       
        </div>
      </div>
    );
  }
}
