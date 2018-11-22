import React, { Component } from "react";
import { LeftNav, RightContent } from "./Layout/layout0";
import { InputButtonPanelExample } from "./InputButtonPanel";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import _ from "lodash";
import routeMap from "./route";
import LayoutTwoColumns from "./Layout/layoutTwoColumns";
import LayoutCenter from "./Layout/layoutCenter";
import LayoutVerticalCenter from "./Layout/layoutVerticalCenter";
import FlexboxCenter from "./Flexbox/center";
require("./uploads/alimama.svg");
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
        {/*       <li>
                <Link to="/layoutTwoColumns">layoutTwoColumns</Link>
              </li>
              <li>
                <Link to="/layoutCenter">layoutCenter</Link>
              </li>
              <li>
                <Link to="/layoutVerticalCenter">LayoutVerticalCenter</Link>
              </li> */}
            </ul>
          </LeftNav>
          <RightContent>
            
            <Route path="/inputButton" component={InputButtonPanelExample} />
            <Route path="/layout/flexboxCenter" component={FlexboxCenter} />
        {/*     <Route path="/layoutTwoColumns" component={LayoutTwoColumns} />
            <Route path="/layoutCenter" component={LayoutCenter} />
            <Route
              path="/layoutVerticalCenter"
              component={LayoutVerticalCenter}
            /> */}


          </RightContent>
        </div>
      </Router>
    );
  }
}

export default App;
