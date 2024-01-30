import "./App.scss";
import NavMenu from "./Components/NavMenu";
import Title from "./Components/Title";
import ProjectContainer from "./Components/ProjectContainer";
import React, { useState, useRef } from "react";
//use ref allows me to scroll to different sections

function App() {
  const resultRef = useRef(null);
  return (
    <div className="app">
      <NavMenu resultRef={resultRef} />
      <Title resultRef={resultRef} />
      <ProjectContainer ref={resultRef} />
    </div>
  );
}

export default App;
