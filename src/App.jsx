import About from "./Pages/About";
import Education from "./Pages/Education";
import Experience from "./Pages/Experience";
// import Footer from "./Pages/Footer";
import Navbar from "./Pages/Navbar";
import Skills from "./Pages/Skills";
import Work from "./Pages/Work";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="font-sans">
      <Navbar />

      <div id="about">
        <About />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="experience">
        <Experience />
      </div>

      <div id="projects">
        <Work />
      </div>

      <div id="education">
        <Education />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
