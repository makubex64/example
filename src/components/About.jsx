import Person from '../assets/person.png'
import { CommandLineIcon } from "@heroicons/react/24/outline";


export default function About(){

	return(
		<section className="text-gray-400 bg-gray-900 body-font  py-20" id="about">
		<div className="container mx-auto flex flex-row py-20 mb-2 items-center text-center ">



		<div className="flex flex-wrap">
		  <div className="about-1 md:max-lg:w-2/5  lg:w-1/3  flex items-center ">
				<img className="myself-Image"  src={Person} />
		  </div>

		  <div className="about-2 pl-12 pr-12  md:max-lg:w-3/5 lg:w-2/3 flex flex-col justify-center ">
				
				<h1 className="mt-2 text-white font-medium text-xl ">
				Frontend React 
				<span className="ml-2 text-cyan-500 text-brillo font-bold"> 
				 HOOKS 
				 <CommandLineIcon className="ml-2 h-6 w-6 inline text-cyan-500 " />  
				</span>
				</h1>

		    	
		    	<p className="    leading-normal mt-10  mx-auto leading-relaxed text-base ">
		            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
		            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
		            fuga dolore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui laborum quasi, incidunt dolore iste nostrum cupiditate voluptas? Laborum, voluptas natus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui laborum quasi, incidunt dolore iste nostrum cupiditate voluptas? Laborum, voluptas natus?
		        </p> 
		  </div>
		</div>
			

		</div>
			
		</section>
		)
}