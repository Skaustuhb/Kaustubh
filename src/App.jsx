import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Focus from "./components/Focus";
import Education from "./components/Education";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-ink-900">
      <NavBar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Focus />
        <Education />
      </main>
      <Footer />
    </div>
  );
}
