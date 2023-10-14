import {  useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2';


export default function ContactModal ({isOpen, setIsOpen, modalOpen, setModalOpen}){

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
const [formSubmitted, setFormSubmitted] = useState(false);


const [loading, setLoading] = useState(false);

const SERVICE_ID = "service_sgxvmsg";
const TEMPLATE_ID = "template_wbe4kmv";
const PUBLIC_KEY = "_fR8lq1OxRSr2_fI3";


	const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please complete all fields");
      return;
    }

    setIsOpen(!isOpen)

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {

        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        })

      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title:  "Ooops, something went wrong",
          text: error.text,
        })
      });

    e.target.reset()
    setModalOpen(!modalOpen);
  

    
    

  };



	return(

		<>
		<form
          
          onSubmit={handleOnSubmit}
          name="contact"
          className="w-96 max-w-xs   ">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            ¡Let´s Talk!
          </h2>
          <hr/>
          <div className="relative mb-4 mt-5">
            <label  htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              onChange={e => setName(e.target.value)}
              value={name}
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              onChange={e=> setEmail(e.target.value)}
              value={email}
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              onChange={e=> setMessage(e.target.value)}
              value={message}
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
          disabled={formSubmitted}
            type="submit"
            className="w-full text-white bg-cyan-500 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-600 rounded text-lg">
            Send
          </button>
        </form>
		</>

		)
}