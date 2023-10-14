import { projects } from "../Data-Json/Data-Json";


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

     

      <div className="grid gap-4  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2   px-10">

       

       {projects.map((project) => {

        return(
                   <a
                     href={project.link}
                     key={project.image}
                     className="flex my-2 hover:shadow-cyan-600 z-0 transition duration-200 shadow-lg ">
                     <div className="flex relative ">
                       <img
                         alt="gallery"
                         className=" absolute inset-0 w-full h-full object-cover object-center"
                         src={project.image}
                       />
                       <div className="border-solid border-3 border-cyan-500 absolute  overflow-hidden bg-gradient-to-r from-cyan-950 to-sky-950 transition duration-300  px-10 py-8 relative z-10 w-full border-2 border-gray-800 bg-gray-900 opacity-0  hover:opacity-90">
                         <h2 className="hover:opacity-100  text-sm title-font font-medium text-cyan-400 ">
                           {project.subtitle}
                         </h2>
                         <h1 className="hover:opacity-100 title-font text-lg font-medium text-white mb-3">
                           {project.title}
                         </h1>
                         <p className="hover:opacity-100 leading-relaxed">{project.description}</p>

                         {
                          project.skills.map((skill)=>(
                              <img key={skill} className="inline-block me-6 mt-3 rounded-md" style={{width:40, height:40}} src={skill} />
                            ))
                         }

       
                       </div>
                     </div>
                   </a>
                 )})}
       

      </div>  

    </section>    )
}