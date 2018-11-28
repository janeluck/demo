import React, { Component, PureComponent } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import _ from "lodash";


class A extends Component {
    render(){
        console.log('A:')
       // console.log(A)
        console.log(this)
        return  <div>
            <p>A</p>
            <p>{this.props.text}</p>
        </div>
    }
}
// 使用实例
class DR extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }
  componentDidMount(){
    console.log('DR:')
    // console.log(DR)
     console.log(this)
 
     console.log('react element a:')

     console.log(<A text='react element a'/>)
  }

  render() {
 
    return (
      <div>
       <A  text='inner a'/>
      </div>
    );
  }
}

export default DR