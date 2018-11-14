import React, { Component } from "react";
import { LeftNav, RightContent } from "./Layout/layout0";
import { InputButtonPanelExample } from "./InputButtonPanel";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import _ from "lodash";
import routeMap from "./route.js";
import LayoutTwoColumns from "./Layout/layoutTwoColumns";
require("./uploads/alimama.svg.js");
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <LeftNav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/inputButton">inputButton</Link>
              </li>
              <li>
                <Link to="/layoutTwoColumns">layoutTwoColumns</Link>
              </li>
            </ul>
          </LeftNav>
          <RightContent>
            <Route path="/inputButton" component={InputButtonPanelExample} />
            <Route path="/layoutTwoColumns" component={LayoutTwoColumns} />
        
          </RightContent>
    
        </div>
      </Router>
    );
  }
}

export default App;
