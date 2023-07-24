import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { projects } from "../Data-Json/Data-Json";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};



export default function Projects(){
    return(
      <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full ">
          
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Aplicaciones que he construido
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>     

        </div>
      </div>

      <div className="p-9 ">

        <Carousel        
        responsive={responsive}
        infinite={true}
        keyBoardControl={true}
        customTransition="all 1.5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"

      >

       {projects.map((project) => {
        console.log(project)

        return(
                   <a
                     href={project.link}
                     key={project.image}
                     className="flex space-x-4 max-w-sm ">
                     <div className="flex relative ">
                       <img
                         alt="gallery"
                         className="absolute inset-0 w-full h-full object-cover object-center"
                         src={project.image}
                       />
                       <div className="border-solid border-3 border-cyan-500 absolute  overflow-hidden bg-gradient-to-r from-cyan-950 to-sky-950 transition duration-300  px-10 py-8 relative z-10 w-full border-2 border-gray-800 bg-gray-900 opacity-0 hover:opacity-90">
                         <h2 className="hover:opacity-100  text-sm title-font font-medium text-cyan-400 ">
                           {project.subtitle}
                         </h2>
                         <h1 className="hover:opacity-100 title-font text-lg font-medium text-white mb-3">
                           {project.title}
                         </h1>
                         <p className="hover:opacity-100 leading-relaxed">{project.description}</p>

                         {
                          project.skills.map((skill)=>(
                              <img className="inline-block me-6 mt-3 rounded-md" style={{width:40, height:40}} src={skill} />
                            ))
                         }

       
                       </div>
                     </div>
                   </a>
                 )})}
        </Carousel>

      </div>  

    </section>
    )
}