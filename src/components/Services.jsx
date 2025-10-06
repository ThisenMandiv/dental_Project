import React from 'react'

const Services = () => {
  const services = [
    {
      title: "INVISALIGN DENTIST",
      description: "World's Most Advanced Clear Aligner System And An Alternative To Fixed Braces.",
      bgColor: "bg-blue-50",
      textColor: "text-blue-800"
    },
    {
      title: "Cosmetic Dentistry", 
      description: "Achieve the perfect Hollywood smile with our range of cosmetic treatments.",
      bgColor: "bg-purple-50",
      textColor: "text-purple-800"
    },
    {
      title: "Dental Implants",
      description: "Replace missing teeth with permanent, natural-looking implants.",
      bgColor: "bg-green-50", 
      textColor: "text-green-800"
    },
    {
      title: "General Dentistry",
      description: "Comprehensive dental care for the whole family.",
      bgColor: "bg-orange-50",
      textColor: "text-orange-800"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          A Wide Range Of Services For Your Smile
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className={`${service.bgColor} rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300`}>
              <h3 className={`text-xl font-bold mb-4 ${service.textColor}`}>{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button className={`${service.textColor} font-semibold hover:underline`}>
                Read More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services