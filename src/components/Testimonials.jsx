import {testimonials} from "../Data-Json/Testimonials"

export default function Testimonials(){
    return(
        <section className="py-20" id="testimonials">
      <div className="container px-5 py-20 mx-auto text-center">
        
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Testimonios de clientes
        </h1>
        <div className="flex flex-wrap m-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                
                <p className="leading-relaxed mb-6">{testimonial.quote}</p>
                <div className="inline-flex items-center">
                  <img
                    style={{width:55, height:55}}
                    alt="testimonial"
                    src={testimonial.image}
                    className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {testimonial.name}
                    </span>
                    <span className="text-gray-500 text-sm uppercase">
                      {testimonial.company}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    )
}