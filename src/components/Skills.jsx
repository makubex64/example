import {skills} from "../Data-Json/Skills";

export default function Skills(){
    return(
        <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Habilidades y Tecnologías
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
            possimus est.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill, index) => (
            <div key={index} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">                
                <img style={{width:40, height:40}} src={skill} alt={skill} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    )
}