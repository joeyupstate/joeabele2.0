import "./App.scss";
import NavMenu from "./Components/NavMenu";
import Title from "./Components/Title";
import ProjectContainer from "./Components/ProjectContainer";
import Skills from "./Components/Skills";
import React, { useState, useRef } from "react";
//use ref allows me to scroll to different sections
import Email from "./Components/Email";

function App() {
  const resultRef = useRef(null);
  return (
    <div className="app">
      <NavMenu resultRef={resultRef} />
      <Title resultRef={resultRef} />
      <ProjectContainer ref={resultRef} />
      <Skills />
      <Email />
    </div>
  );
}

export default App;
