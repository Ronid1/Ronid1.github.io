import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <a id="skills" /><Skills />
      <a id="projects" /><Projects />
      <a id="me" /><About/>
    </>
  );
}

export default App;
