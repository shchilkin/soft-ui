import React from 'react';
import Generator from "./Components/Generator/Generator";
import PageCover from "./Components/Generator/Generator_Components/Layout/PageCover";
import ThemeState from "./contexts/theme/ThemeState";
import NavigationBar from "./Components/Navbar/NavigationBar.component";
import StagesState from "./contexts/Stages/StagesState";
import ColorShowcaseState from "./contexts/colorShowcase/ColorShowcaseState";
import './custom-styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <ThemeState>
          <StagesState>
              <ColorShowcaseState>
                  <PageCover>
                     <NavigationBar />
                     <Generator />
                  </PageCover>
              </ColorShowcaseState>
          </StagesState>
      </ThemeState>
  );
}

export default App;
