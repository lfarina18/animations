import React, { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import logo from "./logo.svg";
import "./App.css";
import particlesOptions from "./particles.json";
import particlesOptions2 from "./particles2.json";
import { ISourceOptions } from "@tsparticles/engine";

function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <>
      {/* <div style={{ position: "relative", height: "500px" }}> */}
      {init && (
        <Particles
          options={particlesOptions2 as ISourceOptions}
          // className="tsparticles-custom"
        />
      )}
      <div className="App">
        <header className="App-header">
          <img
            src="https://cdn.profesional.ticmas.io/logos/logo%20ticmas%20academy.svg"
            alt="logo"
          />
        </header>
      </div>
      {/* </div> */}
    </>
  );
}

export default App;
