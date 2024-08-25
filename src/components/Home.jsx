import AtomComponent from "./AtomComponent"
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import cv from "../assets/CV.pdf"





export default function Home(){ 
    return(
      <section>
      <div className="container mx-auto  flex px-10 py-40  md:flex-row flex-col items-center">
        <div className=" div-1 lg:flex-grow  lg:pr-40 md:pr-8 flex flex-col md:items-start md:text-left   items-center text-center">
          
          <p className="font-medium text-white">Hello World, <span className="text-cyan-500">soy</span></p>
          
          <h3 className="text-cyan-500 text-4xl font-bold ">Jorge Adarmes</h3>
          <h1 className="mt-2 text-white font-medium text-xl "> UX/UI Desiner & Frontend React <span className="text-cyan-500  text-brillo font-bold">HOOKS <CodeBracketIcon className="h-6 w-6 inline text-cyan-500 font-bold" /></span>  </h1>



          
          <p className="mb-8 mt-5  text-slate-300">
            Me dedico a la creación de productos digitales que resuelven problemas reales y generan un impacto positivo centrados en el usuario.
          </p>
          
          <div className="flex justify-center ">
          
            <a
              target="_blank"
              href="https://www.behance.net/jorge_adarmes"
              className="github flex items-center justify-center font-medium  py-2 px-8 bg-cyan-500 hover:shadow-cyan-600 transition duration-200 shadow-lg shadow-cyan-500/50  text-white  rounded-none ">
              <i className="bi bi-behance"></i>
              <span className="text-sm">hance </span>
            </a>

            <button className="cv flex items-center justify-center font-medium py-2 px-8 rounded-none ml-4  text-white border-2 border-cyan-600 hover:shadow-cyan-600 transition duration-200 shadow-lg shadow-cyan-500/50 "> 
            <a href={cv} download className="text-sm font-semibold">
            <i className="bi bi-download mr-2"></i>
            <span className="text-sm font-semibold"> Download CV</span>
            </a> 
            </button>
            
          </div>
        </div>

        <div className="div-2 lg:max-w-lg lg:w-full md:w-1/2 w-5/6 dolce">
        <AtomComponent/>
        </div>

      </div>

      
    </section>
    )
}