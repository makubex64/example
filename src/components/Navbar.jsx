'use client'

import { useState } from 'react'
import { FireIcon, XCircleIcon } from "@heroicons/react/24/outline"
import ContactModal from './ContactModal'

export default function Component() {
  const [isOpen, setIsOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(false)
  }

  const handleOpenModal = () => {
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  return (
    <header className="bg-gray-800 sticky md:sticky top-0 z-10">
      <nav className="flex items-center justify-between p-4">
        <div className="flex items-center flex-shrink-0 text-white">
          <a href="#home" className="font-semibold text-lg flex items-center">
            <FireIcon className="h-6 w-6 text-cyan-600 mr-2" />
            <span>Portfolio</span>
          </a>
        </div>

        <div className="hidden lg:flex items-center justify-center flex-grow">
          <a onClick={handleClick} href="#about" className="text-white hover:text-cyan-400 mx-4">
            About
          </a>
          <a onClick={handleClick} href="#projects" className="text-white hover:text-cyan-400 mx-4">
            Projects
          </a>
          <a onClick={handleClick} href="#skills" className="text-white hover:text-cyan-400 mx-4">
            Skills
          </a>
          <a onClick={handleClick} href="#services" className="text-white hover:text-cyan-400 mx-4">
            Services
          </a>
        </div>

        <div className="flex items-center">
          <button onClick={handleOpenModal} className="hidden lg:inline-flex items-center bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded">
            ¡Contrátame!
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex items-center px-3 py-2 rounded text-white hover:text-cyan-400"
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
      </nav>

      <div className={`lg:hidden bg-gray-700 ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a onClick={handleClick} href="#about" className="block text-white hover:text-cyan-400 px-3 py-2">
            About
          </a>
          <a onClick={handleClick} href="#projects" className="block text-white hover:text-cyan-400 px-3 py-2">
            Projects
          </a>
          <a onClick={handleClick} href="#skills" className="block text-white hover:text-cyan-400 px-3 py-2">
            Skills
          </a>
          <a onClick={handleClick} href="#services" className="block text-white hover:text-cyan-400 px-3 py-2">
            Services
          </a>
          <button onClick={handleOpenModal} className="w-full text-left text-white hover:text-cyan-400 px-3 py-2">
            ¡Contrátame!
          </button>
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-900 relative p-12">
            <XCircleIcon onClick={handleCloseModal} className="h-10 w-6 text-gray-400 absolute top-0 right-0 mt-2 mr-2 cursor-pointer" />
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