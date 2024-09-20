import { projects } from "../Data-Json/Data-Json";
import { motion } from 'framer-motion';


export default function Projects(){
    return(
     
 <section id="projects" className="text-gray-400 bg-gray-900 body-font  ">

      <div className="container  px-20 md:px-12 text-center bg-cyan-500">
        <div className="flex flex-wrap  lg:-mx-4 bg-cyan-500">
          
          <h1 className="g:w-2/3 mx-auto sm:text-4xl text-3xl font-medium title-font mb-4 text-white ">
            Aplicaciones que he construido
          </h1>

          <p className="lg:w-2/3 mx-auto mt-5 leading-relaxed text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>     

        </div>
      </div>

     

      <div className="container mx-auto px-10 mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="rounded-lg flex flex-col  bg-red-500 overflow-hidden shadow-lg hover:shadow-xl hover:shadow-cyan-500/40 transition-shadow duration-300 ease-in-out"
            whileHover={{ y: -5 }}
          >
            <img 
              src={project.image} 
              alt={project.title}
              width={400}
              height={200} 
              className="w-full  object-cover h-48"
            />
            <div className="p-6 h-full bg-cyan-800 ">
              <h3 className="font-bold text-xl mb-2 text-white">{project.title}</h3>
              <p className="text-white text-sm mb-4">{project.description}</p>
              <div className="flex  flex-wrap gap-2 bg-cyan-500">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    </section>    )
}