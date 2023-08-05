import { FireIcon } from "@heroicons/react/24/outline";
import { XCircleIcon } from "@heroicons/react/24/outline";
import {useState} from 'react'
import ContactModal from './ContactModal'


export default function Navbar(){

  const [isOpen, setIsOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(false);
  };


  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };



    return(
    <header id="" className="bg-gray-800 sticky md:sticky top-0 z-10">
      <nav className="flex items-center justify-between flex-wrap p-4">

     <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
      <a href="#home" className="font-semibold text-lg">
      <FireIcon className="h-6 w-6 text-cyan-600 inline" />
      <span>Portfolio</span>
      </a>
     </div>

     <div className="block lg:hidden">
       <button
         onClick={() => setIsOpen(!isOpen)}
         className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
       >
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
         </svg>
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
         </svg>
       </button>
     </div>

     <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`} >
       <div className="text-base font-medium lg:flex-grow dolcepro">
       
         <a onClick={handleClick} href="#about" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
           About
         </a>
         <a onClick={handleClick} href="#projects" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
           Projects
         </a>
         <a onClick={handleClick} href="#skills" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
           Skills
         </a>
         
       </div>
       <div className="block mt-4 lg:inline-block lg:mt-0">
         <button onClick={handleOpenModal}  className="inline-flex items-center bg-cyan-500 border-0 py-2 px-4 text-white">
           ¡Contrátame!
         </button>
       </div>
     </div>

   </nav>


      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-900 relative  p-12 ">
            
            <XCircleIcon onClick={handleCloseModal} className="h-10 w-10 text-gray-400 absolute top-0 right-0 mt-2 mr-2 cursor-pointer  " />

            <ContactModal 
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            modalOpen={modalOpen} 
            setModalOpen={setModalOpen}  
            />

            

          </div>
        </div>
      )}


    </header>
    )
}