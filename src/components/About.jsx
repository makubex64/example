import AtomComponent from "./AtomComponent"
import { CodeBracketIcon } from "@heroicons/react/24/outline";





export default function About(){
    return(
        <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-12 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          
          <p className="font-medium text-white">Hello, <span className="text-cyan-500">I´am</span></p>
          <br />
          <h3 className="text-cyan-500 text-4xl font-bold ">Jorge Adarmes</h3>
          <h1 className="mt-2 text-white font-medium text-xl ">Frontend React <span className="text-cyan-500  text-brillo font-bold">HOOKS <CodeBracketIcon className="h-6 w-6 inline text-cyan-500 font-bold" /></span>  </h1>

          <br/>





          
          <p className="mb-8  text-slate-50">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
            Laborum, voluptas natus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
            Laborum, voluptas natus? 
          </p>
          
          <div className="flex justify-center ">
            <a
              href="#contact"
              className=" bg-cyan-500 hover:shadow-cyan-600 transition duration-200 shadow-lg shadow-cyan-500/50  text-white py-2 px-8 rounded-none ">
              <span className="text-sm font-semibold"> Let´s Talk </span>
            </a>

            <button className="rounded-none ml-4 inline-flex text-white border-2 border-cyan-600 hover:shadow-cyan-600 transition duration-200 shadow-lg shadow-cyan-500/50 py-2 px-8"> <span className="text-sm font-semibold">Donwload CV</span> </button>
            
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 dolce">
        <AtomComponent/>
        </div>
      </div>
    </section>
    )
}