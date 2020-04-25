import React from 'react';
import Generator from "./Components/Generator/Generator";
import PageCover from "./Components/Generator/Generator_Components/Layout/PageCover";
import ThemeState from "./contexts/theme/ThemeState";
import NavigationBar from "./Components/Navbar/NavigationBar.component";
import GenerationState from "./contexts/generation(Desktop)/GenerationState";
import './custom-styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <ThemeState>
          <GenerationState>
              <PageCover>
                 <NavigationBar />
                 <Generator />
              </PageCover>
          </GenerationState>
      </ThemeState>
  );
}

export default App;
