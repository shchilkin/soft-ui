import React from 'react';
import Generator from "./Components/Generator/Generator";
import PageCover from "./Components/Generator/Generator.components/Layout/PageCover";
import ThemeState from "./contexts/theme/ThemeState";
import NavigationBar from "./Components/Navbar/NavigationBar.component";
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom-styles.css'

function App() {
  return (
      <ThemeState>
          <PageCover>
             <NavigationBar />
             <Generator />
          </PageCover>
      </ThemeState>
  );
}

export default App;
