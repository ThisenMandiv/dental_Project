import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      text: "I can confidently say they're the best! The staff is always welcoming, and Doctors are exceptionally skilled",
      author: "Stella Herman",
      location: "Billericay"
    },
    {
      text: "Gentle and caring approach. Made me feel comfortable throughout my treatment.",
      author: "Beulah Mertz", 
      location: "Chelmsford"
    },
    {
      text: "A wonderful experience! The staff is always welcoming, and Doctors are exceptionally skilled",
      author: "Wilfred Jerde",
      location: "Wisokytown"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What Our Patients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-lg border-l-4 border-blue-500">
              <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
              <div className="text-right">
                <strong className="text-gray-800">{testimonial.author}</strong>
                <br />
                <span className="text-gray-500 text-sm">{testimonial.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials