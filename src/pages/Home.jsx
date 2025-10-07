import React, { useState, useEffect } from 'react'
import { Menu, X, ChevronLeft, ChevronRight } from 'lucide-react'
import HeroBg from '../assets/Hero1.png'
import logo from '../assets/Logo.png'
import HeroBg1 from '../assets/Hero2.png'
import HeroBg2 from '../assets/Hero2.png'

// ✅ HEADER COMPONENT - FIXED HEIGHT
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white/30 backdrop-blur-sm shadow-md fixed w-11/12 top-6 left-1/2 transform -translate-x-1/2 z-50 rounded-full h-16">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center h-full">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-16 h-16 rounded-lg flex items-center justify-center">
            <img
              src={logo}
              alt="Logo"
              className="w-[110px] h-[110px] object-contain"
            />
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8">
          {['Home', 'About Us', 'Services', 'Fees', 'Special Offers', 'Contact Us'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-gray-700 hover:text-blue-600 font-medium transition duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Book Now Button */}
        <button className="hidden lg:block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-blue-800 transition duration-300 shadow-lg text-sm">
          BOOK NOW
        </button>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-gray-700">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 rounded-b-3xl">
          <ul className="flex flex-col px-6 py-4">
            {['Home', 'About Us', 'Services', 'Fees', 'Special Offers', 'Contact Us'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="block text-gray-700 hover:text-blue-600 font-medium py-3 transition duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-full hover:from-blue-700 hover:to-blue-800 transition duration-300">
                BOOK NOW
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

// ✅ HERO SLIDER SECTION
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      background: "linear-gradient(135deg, #1e3a8a 0%, #7e22ce 50%, #1e40af 100%)",
      title: "CREATING BEAUTIFUL SMILES",
      subtitle: "Safe and healthy!",
      buttonText: "BOOK NOW",
      image: HeroBg
    },
    {
      id: 2,
      background: "linear-gradient(135deg, #059669 0%, #0d9488 50%, #0891b2 100%)",
      title: "ARE YOU NEW TO OUR PRACTICES?",
      subtitle: "PREMIUM: 10.00 AM - 20.00 PM",
      buttonText: "BOOK NOW",
      image: HeroBg1
    },
    {
      id: 3,
      background: "linear-gradient(135deg, #7c3aed 0%, #c026d3 50%, #ec4899 100%)",
      title: "COMPOSITE BONDING",
      subtitle: "Suitable • Fresh air",
      buttonText: "BOOK NOW",
      image: HeroBg2
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [currentSlide])

  return (
    <section className="relative min-h-screen overflow-hidden pt-0">
      {/* Slides */}
      <div className="relative w-full h-screen">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              background: slide.background,
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay'
            }}
          >
            <div className="container mx-auto px-6 h-full flex items-center justify-start">
              <div className="text-white max-w-2xl">
                <h1 className="text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-xl mb-8 text-blue-100 leading-relaxed font-medium">
                  {slide.subtitle}
                </p>
                <button className="bg-gradient-to-r from-teal-400 to-cyan-500 text-black px-8 py-4 rounded-full hover:from-teal-500 hover:to-cyan-600 transition duration-300 shadow-2xl text-lg font-semibold">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>



      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-10">
        <div
          className="h-full bg-white transition-all duration-5000 ease-linear"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`
          }}
        />
      </div>
    </section>
  )
}

// ✅ WELCOME SECTION
const Welcome = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-600 mb-2 tracking-wider">WELCOME TO</h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            15 THE PANTILES DENTAL PRACTICE
          </h3>
          <div className="max-w-4xl mx-auto text-gray-600 leading-relaxed space-y-4">
            <p>
              Looking For The Perfect Hollywood Smile? Want A Family-Friendly Dental Practice To Ensure Your Loved Ones Have Happy, Healthy Teeth? Welcome To 15 The Pantiles, Your Local Tunbridge Wells Dentist. Offering Dental Health Services & Cosmetic Procedures. Here At Our Group Practice In Berkshire, We Have Successfully Added Dental Practitioners Who Aren't Just Highly Skilled And Experienced, But Have Access To Some Of The Most Up To Date Technology Available.
            </p>
            <p>
              Whether You're Looking For A Quality NHS Dentist, We Have An Array Of Treatments Available For Every Member Of Your Family To Enjoy. From Routine Dental Check-Ups Through To Cosmetic Dentistry Options Such As Tooth Whitening, Dental Implants, Veneers Or Whitening To Fillings And Stain Removers, Whatever It Is You're Looking For, You Can Rest Assured That Here Is In Safe Hands.
            </p>
          </div>
          <button className="mt-8 border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-600 hover:text-white transition duration-300 font-semibold">
            CONTACT US TODAY
          </button>
        </div>
      </div>
    </section>
  )
}

// ✅ ABOUT SECTION
const About = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-full aspect-square rounded-full overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <div className="w-48 h-48 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              Lorem Ipsum Has Been The Industry's
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed mb-6">
              <p>
                Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentially Unchanged.
              </p>
              <p>
                It Was Popularised In The 1960s With The Release Of Letraset Sheets Containing Lorem Ipsum Passages, And More Recently With Desktop Publishing Software Like Aldus Pagemaker Including Versions Of Lorem Ipsum.
              </p>
            </div>
            <button className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white px-8 py-3 rounded-full hover:from-teal-500 hover:to-cyan-600 transition duration-300 shadow-lg font-semibold">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

// ✅ MAIN PAGE EXPORT
const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Welcome />
      <About />
    </div>
  )
}

export default Home