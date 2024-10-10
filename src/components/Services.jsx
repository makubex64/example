import {ServicesData} from '../Data-Json/Data-Json'
import {useState}     from 'react'

export default function Services (){

	const [isHovered, setIsHovered] = useState(false);


	return(

		<section id="services" className="py-20" >
			
			<div className=" container  px-5  mx-auto mb-0 ">
				<div className="text-center  ">
          
		          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
		           Services
		          </h1>
		          
		        </div>
			</div>

			<div className="allside-container py-20 sm:max-md:grid-cols-1   grid md:max-lg:grid-cols-2  lg:grid-cols-3 justify-items-center">
			
			{
				ServicesData.map((service, id)=>{
					return(

							<div key={id} className="allsides-1 w-80 h-80 mb-20">
								<h6 className="px-4 text-2xl font-medium title-font mb-4 text-white text-center">
								{service.name}
								</h6>
								<hr className="h-px bg-indigo-600 my-4 bg-gray-500 border-0 dark:bg-cyan-900" />

							  	<article className="rounded-lg border border-indigo-600 relative isolate flex flex-col justify-end overflow-hidden  px-4 pb-7 pt-40 max-w-sm mx-auto ">
							    <img src={service.image} className="absolute inset-0 h-full w-full object-cover" />
							    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
							    <h3 className="z-10 mb-5 text-2xl font-bold text-white">Subtitle</h3>
							    <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
							    {service.quote}
							    </div>
							  	</article>							  	

							 </div>

						)
				})
			}
		</div>
</section>

		)
}