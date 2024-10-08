import Navbar       from "./components/Navbar";
import Home         from './components/Home';
import About        from './components/About'
import Projects     from "./components/Projects";
import Skills       from "./components/Skills";
import Services     from "./components/Services";
import Footer       from './components/Footer'


function App() {
  

  return (
    <>
      <main id="home" className="bg-gray-900 body-font" >
      
      <Navbar />
      <Home />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Footer />
      
      
    </main>
    

    </>
  )
}

export default App
