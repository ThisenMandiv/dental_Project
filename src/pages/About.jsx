import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="pt-20 bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">About Us</h1>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <p className="text-lg text-gray-700 mb-6">
                Our Team of Association, Demota, Integrated Audit Management & Planning, Ethics and Accountancy Group (PCM) is responsible for the role of a leading member in the Company's decision-making environment.
              </p>
              
              <h2 className="text-2xl font-bold text-blue-800 mb-4">Why Choose Us?</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Experienced and a Friendly Team
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  A full discussion of your dental care
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  We offer same day emergency appointments
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Nervous patients are welcome
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Denplan Excel Accredited (Quality Assurance)
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Wide range of treatment options
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Disabled access all on the ground floor
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Ample free parking
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">Meet The Team Behind the Smile</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "National Jayasuriya Dentist",
                  "Abyr Meltkur Dentist", 
                  "Deepam Patel Dentist",
                  "Helipan Pertin Practice Manager",
                  "Zoe Amulkun Dental Nurse",
                  "Armandip Mamija Dental Nurse",
                  "Jam-Marik Tallum Dental Nurse"
                ].map((member, index) => (
                  <div key={index} className="bg-blue-50 rounded-lg p-4 text-center">
                    <p className="text-blue-800 font-medium">{member}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default About