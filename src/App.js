import './App.css';
import Navbar from './Components/Navbar'
import Hero from './Components/hero/Hero';
import Parallax from './Components/parallax/parallax';
import Services from './Components/services/Services';
import Contact from './Components/contact/Contact';
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'

function App() {
  return (
    <div className="App">
      <section id='HomePage'>
        <Navbar></Navbar>
        <Hero></Hero>
      </section>
      <section id='Skills'>
        <Skills></Skills>
      </section>
      <section id='Work/Experience'>
        <Projects></Projects>
      </section>
      <section id='Services'>
        <Services></Services>
      </section>
      <section id='Contact'>
        <Contact></Contact>
      </section>
    </div>
  );
}

export default App;
