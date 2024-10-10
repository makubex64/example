import {skills} from "../Data-Json/Data-Json";
import               '../Styles/Skills.css'
import Robot from '../assets/cute-robot-flaying-space.jpg'
import Halo from '../assets/dolce.png'
import Astronauta from "../assets/Skill/astronauta.png";

export default function Skills(){
    return(
    <section className=" " id="skills">

      <span></span>
      <span></span>
      <span></span> 

      <div className="container-bubbles w-full py-20   ">
        
        
        
        <div className="text-center  "> 
                   
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills
          </h1>
          <p className="text-base text-white xl:w-2/4 lg:w-3/4 mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
            possimus est.
          </p>
        </div>

        <div className="container-skills">

          <div className="astronauta">
            <img src={Astronauta} alt="" />
          </div>

  
          <div className="estrella primera"></div>
          <div className="estrella segunda"></div>
          <div className="estrella tercera"></div>
          <div className="estrella cuarta"></div>
          <div className="estrella quinta"></div>
          <div className="estrella sexta"></div>
          <div className="estrella septima"></div>
          <div className="estrella octava"></div>
          <div className="estrella novena"></div>
          <div className="estrella decima"></div>          

         <img className="robot"  src={Robot} alt=""/>
         <img className="circle-halo"  src={Halo} alt=""/>


         <div className="right-circle ">
          <img   src="https://cdn.brandfetch.io/idZHcZ_i7F/w/398/h/398/theme/dark/icon.png?k=bfHSJFAPEG" />
          <img   src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" />
          <img   src="https://cdn.brandfetch.io/idMNEQh7-0/w/400/h/400/theme/dark/icon.jpeg?k=bfHSJFAPEG" />
          <img   src="https://cdn.brandfetch.io/idaD8gW403/w/400/h/400/theme/dark/icon.jpeg?k=bfHSJFAPEG" />
          <img   src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" />
        </div>

        <div className="left-cirle">        
          <img   src="https://cdn.brandfetch.io/miro.com/fallback/transparent/theme/dark/h/512/w/512/icon?t=1720164026367" />
          <img  src="https://cdn.brandfetch.io/id0AgeLF7b/w/400/h/400/theme/dark/icon.png?k=bfHSJFAPEG" />
          <img  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" />
          <img  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" />
        </div>

         </div>        
        
      </div>
    </section>
    )
}