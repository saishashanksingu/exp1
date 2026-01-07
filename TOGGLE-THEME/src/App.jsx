import { useState } from 'react';
import './App.css';

function App(){
  const [isDark,makeDark]=useState(false);
  const toggleTheme = () =>{
    makeDark(!isDark);
  }

  return(
    <div className={isDark ? "app dark" : "app light"}>
      <h1>Theme toggle SPA</h1>
      <p>Click on the button to switch between light and dark mode</p>

      <button onClick={toggleTheme}>
        {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
}

export default App;