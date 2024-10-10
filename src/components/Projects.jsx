import { projects } from "../Data-Json/Data-Json";
import { motion } from 'framer-motion';


export default function Projects(){
    return(
     
 <section id="projects" className="text-gray-400 py-20 bg-gray-900 body-font  ">

      <div className="container   px-20 md:px-12 text-center ">
        <div className="flex flex-wrap  lg:-mx-4 ">
          
          <h1 className="g:w-2/3 mx-auto sm:text-4xl text-3xl font-medium title-font mb-4 text-white ">
            Aplicaciones que he construido
          </h1>

          <p className="lg:w-2/3 mx-auto mt-5 leading-relaxed text-base">
            Aquí te muestro unos de los proyectos que he realizado en 
            base a mi experiencia usando algunas metodologías de UX/UI, se que te encantara!
          </p>     

        </div>
      </div>

     

      <div className="container mx-auto px-10 mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, id) =>{
          console.log(project)
          return(         
            <motion.div
              key={id}
              className="rounded-lg flex flex-col bg-gray-800 overflow-hidden shadow-lg hover:shadow-xl hover:shadow-cyan-500/40 transition-shadow duration-300 ease-in-out"
              whileHover={{ y: -5 }}
            >
              <img 
                src={project.image} 
                alt={project.title}
                width={400}
                height={200} 
                className="w-full  object-cover h-48"
              />
              <div className="p-6 h-full  ">
                <h3 className="font-bold text-xl mb-2 text-white">{project.title}</h3>
                <p className="text-white text-sm mb-4">{project.description}</p>
                <div className="flex  flex-wrap gap-2 ">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="border border-purple-600 px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className=" flex flex-grap gap-2 mt-5">
                  <img width={26} height={26} src={project.Behance} alt="" />
                  <img width={26} height={26} src={project.Figma} alt="" />
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>

    </section>    )
}