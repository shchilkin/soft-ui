import React from 'react';
import NavigationBar from "./Components/Navbar/NavigationBar.component";
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeState from "./contexts/theme/ThemeState";
import Generator from "./Components/Generator/Generator";
import './custom-styles.css'

function App() {
  return (
      <ThemeState>
         <NavigationBar />
         <Generator />
      </ThemeState>
  );
}

export default App;
