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
  const projectRef = useRef(null);
  const emailRef = useRef(null);

  return (
    <div className="app">
      <NavMenu
        resultRef={resultRef}
        projectRef={projectRef}
        emailRef={emailRef}
      />
      <Title resultRef={resultRef} />
      <ProjectContainer ref={resultRef} />
      <Skills ref={projectRef} />
      <Email ref={emailRef} />
    </div>
  );
}

export default App;
