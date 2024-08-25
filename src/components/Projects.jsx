import { projects } from "../Data-Json/Data-Json";
import { motion } from 'framer-motion';


export default function Projects(){
    return(
     
 <section id="projects" className="text-gray-400 bg-gray-900 body-font py-20">

      <div className="container my-12 mx-auto px-4 md:px-12 text-center ">
        <div className="flex flex-wrap  lg:-mx-4 ">
          
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

     

      <div className="container mx-auto px-10 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Mis Proyectos UX/UI</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:shadow-cyan-500/40 transition-shadow duration-300 ease-in-out"
            whileHover={{ y: -5 }}
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-6 bg-gray-800 ">
              <h3 className="font-bold text-xl mb-2 text-white">{project.title}</h3>
              <p className="text-white text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
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