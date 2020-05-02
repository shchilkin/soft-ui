import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Generator from "./Components/Generator/Generator";
import PageCover from "./Components/Generator/Generator_Components/Layout/PageCover";
import ThemeState from "./contexts/theme/ThemeState";
import NavigationBar from "./Components/Navbar/NavigationBar.component";
import StagesState from "./contexts/Stages/StagesState";
import ShowcaseState from "./contexts/showcase/ShowcaseState";
import './custom-styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Pages/Home";

function App() {
  return (
      <ThemeState>
          <StagesState>
              <ShowcaseState>
                  <Router>
                      <PageCover>
                         <NavigationBar />
                         <switch>
                             <Route exact path={'/generator'} component={Generator}/>
                             <Route exact path={'/'} component={Home}/>
                         </switch>
                      </PageCover>
                  </Router>
              </ShowcaseState>
          </StagesState>
      </ThemeState>
  );
}

export default App;
