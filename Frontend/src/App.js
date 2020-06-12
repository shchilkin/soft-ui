import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Generator from "./Components/Generator/Generator";
import ThemeState from "./contexts/theme/ThemeState";
import NavigationBar from "./Components/Navbar/NavigationBar.component";
import StagesState from "./contexts/Stages/StagesState";
import ShowcaseState from "./contexts/showcase/ShowcaseState";
import './custom-styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Pages/Home";
import Test from "./Pages/Test"

function App() {
  return (
      <ThemeState>
          <StagesState>
              <ShowcaseState>
                  <Router>
                     <NavigationBar />
                     <Switch>
                         <Route exact path={'/generator'} component={Generator}/>
                         <Route exact path={'/test'} component={Test}/>
                         <Route exact path={'/'} component={Home}/>
                     </Switch>
                  </Router>
              </ShowcaseState>
          </StagesState>
      </ThemeState>
  );
}

export default App;
