import "./App.scss";
import NavMenu from "./Components/NavMenu";
import Title from "./Components/Title";
import ProjectContainer from "./Components/ProjectContainer";
import React, { useState, useRef } from "react";

function App() {
  return (
    <div className="app">
      <NavMenu />
      <Title />
      <ProjectContainer />
    </div>
  );
}

export default App;
