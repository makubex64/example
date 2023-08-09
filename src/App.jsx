import Navbar       from "./components/Navbar";
import Home         from './components/Home';
import About        from './components/About'
import Projects     from "./components/Projects";
import Skills       from "./components/Skills";


function App() {
  

  return (
    <>
      <main id="home" className="text-gray-400 bg-gray-900 body-font" >
      
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      
      
    </main>
    

    </>
  )
}

export default App
