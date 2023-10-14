import {ServicesData} from '../Data-Json/ServicesData'
import {useState}     from 'react'

console.log(ServicesData)


export default function Services (){

	const [isHovered, setIsHovered] = useState(false);


	return(

			<section className="py-20" >
			<div className=" container  px-5  mx-auto mb-0 ">

				<div className="text-center  ">
          
		          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
		           Services
		          </h1>
		          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
		            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
		            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
		            possimus est.
		          </p>
		        </div>


			</div>

			<div className="py-20 sm:max-md:grid-cols-1   grid md:max-lg:grid-cols-2  lg:grid-cols-3 justify-items-center">


			

			{
				ServicesData.map(service=>{
					return(

							<div className=" w-80 h-80 mb-20">
								<h1 className="px-4 text-3xl font-medium title-font mb-4 text-white text-center">
								{service.name}
								</h1>
								<hr className="h-px my-8 bg-gray-500 border-0 dark:bg-cyan-900" />

							  	<article className="border border-indigo-600 relative isolate flex flex-col justify-end overflow-hidden  px-4 pb-7 pt-40 max-w-sm mx-auto mt-20">
							    <img src={service.image} class="absolute inset-0 h-full w-full object-cover" />
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

			  



			  
			  
			  
			










				{/*


	          	ServicesData.map(service=>{
	          		return(
		          			<div
						      className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden"
						      onMouseEnter={() => setIsHovered(true)}
						      onMouseLeave={() => setIsHovered(false)}
						    >
						      <div
						        className="relative h-48 bg-cover bg-center"
						        style={{
						          backgroundImage: `url(${service.image})`,
						        }}
						      >
						        {isHovered && (
						          <div className="absolute inset-0 bg-black opacity-25"></div>
						        )}
						        <div className="absolute inset-0 flex items-center justify-center">
						          <h2 className="text-2xl font-bold text-white">Título de la tarjeta</h2>
						        </div>
						      </div>
						      <div className="px-4 py-2">
						        {isHovered ? (
						          <p className="text-gray-700">Descripción de la tarjeta cuando se pasa el ratón por encima.</p>
						        ) : null}
						      </div>
						    </div>
	          			)
	          	})
	          */}
			</div>
				
			</section>

		)
}