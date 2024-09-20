import Person              from '../assets/person.png'
import { CommandLineIcon } from "@heroicons/react/24/outline";
import Atropos from 'atropos/react';
import 'atropos/css';


export default function About(){

	return(
		<section className="text-gray-400 bg-gray-900 body-font py-20 " id="about">
		<div className="container mx-auto flex flex-row py-20 mb-2 items-center text-center bg-cyan-500">



		<div className="flex flex-wrap">
		  <div className="about-1 w-1/2  flex items-center ">

		  <Atropos
		   shadow={false}
		   highlight={true}
		   rotateXInvert={true}
		   rotateYInvert={true}
		   duration = {500}
		  >
				<img className="myself-Image " data-atropos-offset="1" src={Person} />
      </Atropos>

		  </div>

		  <div className="w-1/2 about-2 pl-12 pr-12   flex flex-col justify-center ">
				
				<h1 className="mt-2 text-white font-medium text-3xl ">
				Acerca de mi como Diseñador 
				<span className="ml-2 text-cyan-500 text-brillo font-bold"> 
				 UX/UI
				 <CommandLineIcon className="ml-2 h-6 w-6 inline text-cyan-500 " />  
				</span>
				</h1>

		    	
		    	<p className=" allsides-8 text-left   leading-normal mt-10  mx-auto leading-relaxed text-base ">
				Como diseñador UX/UI, me apasiona crear experiencias digitales que sean tanto 
				estéticamente agradables, minimalistas y con una funcionalidad intuitiva. 
				He trabajado en proyectos como E-commerce para sitios web y para aplicaciones mobile, 
				Landing Page entre otros. Utilizo mi conocimiento en investigación de usuarios, 
				diseño de wireframes y prototipos para crear interfaces intuitivas y visualmente atractivas. 
				Uso metodologías como Design Thinkin y Double Diamond, UX Discovery para investigaciones
				mas flexibles, he usado Design System y Atomic Design junto con Design Token para la 
				escalabilidad y consistencia de proyectos de diseño, he usado herramientas para hacer 
				procesos de diseño como Whimsical para hacer tareas y flujos de usuarios, de igual manera 
				con FigJam de Figma y Miro, y mi herramienta favorita es Figma.
		        </p> 
		  </div>
		</div>
			

		</div>
			
		</section>
		)
}