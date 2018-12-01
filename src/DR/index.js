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

  shouldComponentUpdate(){
      console.log('shouldComponentUpdate')
      return true
  }

  componentWillUpdate(){
    console.log('componentWillUpdate')
  }
  render() {
    
    return (
      <div>
       <p>{this.state.value}</p>   
       <A  text='inner a'/>
       <button onClick={()=>{
           this.forceUpdate()
       }}>forceUpdate</button>
       <button onClick={()=>{
           this.setState({
               value: Math.random()
           })
       }}>normal update</button>
      </div>
    );
  }
}

export default DR