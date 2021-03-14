import React, { useState } from 'react'
import './App.scss';
import Splash from './components/Splash';
import Home from './pages/Home';

function App() {
  const [splash, setSplash] = useState(true)

  setTimeout(() => {
    setSplash(false)
  }, 4000)
  
  return (
    <div className="App">
      {
        splash ? (
          <Splash />
        ) : (
          <Home />
        )
      }
    </div>
  );
}

export default App;
