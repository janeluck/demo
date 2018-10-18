import React, { Component } from 'react';
import Layout1 from './Layout/layout3'
import {InputButtonPanelExample} from './InputButtonPanel'

class App extends Component {
  render() {
    return (
      <div className="App">
       <div>
         menu
       </div>
       <div>
       <InputButtonPanelExample />
       </div>
      </div>
    );
  }
}

export default App;
