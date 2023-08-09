import Person from '../assets/person.png'

export default function About(){

	return(
		<section className="text-gray-400 bg-gray-900 body-font  py-20" id="about">
		<div className="py-20 mb-20 items-center text-center ">


		<div className="grid grid-cols-2 gap-4">
		  <div>
		    <img  src={Person} />
		  </div>
		  <div className="flex flex-col justify-center">
		    <h1 className="mt-2 text-white font-medium text-xl ">Frontend React <span className="text-cyan-500  text-brillo font-bold">HOOKS </span>  </h1>

          	<p className="mt-10 px-20 mx-auto leading-relaxed text-base flex">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui laborum quasi, incidunt dolore iste nostrum cupiditate voluptas? Laborum, voluptas natus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui laborum quasi, incidunt dolore iste nostrum cupiditate voluptas? Laborum, voluptas natus?
          </p> 
		  </div>
		</div>

		<div className="flex items-center ">
				
			
			          
		</div>

			

		</div>
			
		</section>
		)
}