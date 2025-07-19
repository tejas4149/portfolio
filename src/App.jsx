import About from "./assets/Pages/About";
import Education from "./assets/Pages/Education";
import Experience from "./assets/Pages/Experience";
// import Footer from "./assets/Pages/Footer";
import Navbar from "./assets/Pages/Navbar";
import Skills from "./assets/Pages/Skills";
import Work from "./assets/Pages/Work";
import Contact from "./assets/Pages/Contact";

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

      <div id="work">
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
