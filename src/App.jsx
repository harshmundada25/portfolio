import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useScrollReveal from "./hooks/useScrollReveal";

function App() {
  useScrollReveal();
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Education/>
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
