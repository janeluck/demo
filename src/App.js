import React, { Component } from 'react';
import Layout1 from './Layout/layout1'


class App extends Component {
  render() {
    return (
      <div className="App">
       <div>
         menu
       </div>
       <div>
         content
         <Layout1 />
       </div>
      </div>
    );
  }
}

export default App;
