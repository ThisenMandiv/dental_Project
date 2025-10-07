import React from 'react'
import Hero1 from '../assets/Hero1.png' 

const Hero = () => {
  return (
<section
  className="relative bg-gradient-to-r from-blue-600/80 to-purple-700/80 text-white pt-35 pb-16 bg-cover bg-center"
  style={{ backgroundImage: `url(${Hero1})` }}
>
 <div className="container mx-auto pl-4 md:pl-20 py-30 text-left relative z-10">

    <h1 className="text-4xl md:text-5xl font-bold mb-4">CREATING BEAUTIFUL SMILES</h1>

   
    <p className="text-xl mb-8 max-w-2xl ">
      Book your hygiene appointment with our lovely 
and experienced hygienenist for a pearly white smile  
    </p>
  <button className="hero-btn bg-blue-100 hover:bg-blue-200 text-black font-bold py-3 px-8 rounded-4xl transition duration-300 transform hover:scale-105">
    Book Now
  </button>

  </div>

  {/* Optional dark overlay for readability */}

</section>

  )
}

export default Hero