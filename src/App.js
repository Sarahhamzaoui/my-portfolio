import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { VideoProvider } from "./context/VideoContext";
import "./App.css";

function App() {
  return (
    <VideoProvider>
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer>&copy; 2025 Hamzaoui sarah </footer>
    </VideoProvider>
  );
}

export default App;
