import "./App.css";

import Header from "./components/Header";
import Welcome from "./components/Welcome";
import TechStack from "./components/TechStack";
import Skills from "./components/Skills";
import Companies from "./components/Companies";
import Projects from "./components/Projects";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Welcome />
      <TechStack />
      <Skills />
      <Companies />
      <Projects />
      <GetInTouch />
      <Footer />
    </>
  );
}

export default App;
