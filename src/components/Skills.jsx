import {skills} from "../Data-Json/Data-Json";
import               '../Styles/Skills.css'
import Robot from '../assets/cute-robot-flaying-space.jpg'
import Halo from '../assets/dolce.png'

export default function Skills(){
    return(
        <section className="py-20" id="skills">
      <div className="container py-20 px-5  mx-auto mb-80"> 
        <div className="text-center  ">
          
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
            possimus est.
          </p>
        </div>

        

        <div className=" container mt-80">
        

         <div className="bg-img">

         <img className="robot"  src={Robot} alt=""/>
         <img className="circle-halo"  src={Halo} alt=""/>


         <div className="right-circle ">
          <img className="circle-img "  src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" />
          <img className="circle-img"  src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" />
          <img className="circle-img"  src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" />
          <img className="circle-img"  src="https://img.icons8.com/?size=100&id=EzPCiQUqWWEa&format=png&color=000000" />
          <img className="circle-img"  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" />
          

        </div>

        <div className="left-cirle">        
          <img  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" />
          <img  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" />
          <img  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" />
          <img  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" />
        </div>

         </div>
        
        
        </div>

       
        
          {/*skills.map((skill, index) => (
            <div className="circle-container">
                             
            <img  src={skill} alt={skill} />
             </div>
          ))*/}
        
      </div>
    </section>
    )
}