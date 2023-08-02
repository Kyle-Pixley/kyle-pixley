import React, { useRef } from 'react';
import './App.css';
import { ZIndexFinder } from './Components/ZIndexFinder';
import Nav from "./Components/Nav/Nav.jsx"
import Links from './Components/Links/Links';


function App() {
  const maxZIndex = useRef(0);
  return (
    <ZIndexFinder maxZIndex={maxZIndex.current}>
    <div>
      <Links />
      <Nav maxZIndex={maxZIndex}/>
    </div>
    </ZIndexFinder>
  );
}

export default App;
