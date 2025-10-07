import React from 'react';

// Team member data
const teamMembers = [
  {
    name: "Dentist: Nishani Joyasuriya BDS GDC 82268",
    image: "/path-to-your-assets/nishani.jpg", // Replace with your actual path
    bio: `I qualified in 1999 at the Royal London Hospital (Whitechapel) with 1 went there to experience as life in a place that is very multi-racial and a hive of activity.

I am a Dentist who provides NHS and some Private Dentistry. I am particularly interested in preventative Dentistry and Endodontics (Root Canal Treatment).

As a mother in the preschool home, abroad play, volunteer in school.

It's always been my passion to restore people's teeth and ensure that they are fit and healthy with no underlying chronic infections and my experience covers 15 years as a Dentist.

I adore the countryside, I love to go cycling and really need to take part in charitable events. I like sewing and watching the occasional good box set!

I adore kids and would love to go visit places like The Eden Project and Capability Browns parks! I absolutely love my work with kids. I trained it well when my preschool children were involved and look forward to restoring oral health in the NHS!`
  },
  {
    name: "Dentist: Ajay Mathur BSc BDS (Lond) 2003, MJDF RCS (Eng) 2010 GDC 82275",
    image: "/path-to-your-assets/ajay.jpg", // Replace with your actual path
    bio: `I graduated from King's College London in 2003 and also have an intercalated degree in Pharmacology.

I completed the Vocational Training Scheme in 2004, and went on to undertake a very wide spectrum of dentistry in both the NHS and Private sector in the UK and Channel Islands.

I have worked in practices in Surrey, Wales and Devon and have studied extensively in the fields of restorative dentistry, in Essex, Surrey, Birmingham and Harley Street, London. I also studied periodontology in Singapore as a Guest Student of The National University of Singapore, Dental Faculty.

In addition to general dentistry, I have a special interest in surgery and have undertaken surgical training at Guy's Hospital, London. I have also been trained in Invisalign treatment and carried out further training courses specializing in this.

I have been working at The Pantiles Dental Practice since 2011 and I thoroughly enjoy the team environment and the great balance of doing dentistry using good quality materials, all whilst providing the care you deserve.

Outside work I love spending time with my family and enjoy watching cricket, listening to and playing music.`
  },
  {
    name: "Dentist: Deepam Patel BDS, MFGDP(UK), DipImpDent RCS(Eng), GradDipClinDent (Dentistry) GDC 80980",
    image: "/path-to-your-assets/deepam.jpg", // Replace with your actual path
    bio: `Deepam Patel BSc(Hons), BDS(Hons), MJDF(RCS Eng), DipImpDentRCS(Eng), MSc(Lond), MRD(RCS Eng)

Deepam qualified with Honours from Kings College London in 1996 and later obtained a Masters degree in Restorative Dentistry from Guy's College of Kings College London in 2010.

He undertook further postgraduate training in Periodontology at the Eastman Dental Institute and additionally has Membership of the Royal College of Surgeons England in General Dentistry and a Diploma in Implant Dentistry.

He joined this practice in 1998 and has led the Implant provision at our practice since 2006. With over 20 years of dedicated experience in placing and restoring implants, he utilizes the latest digital technology.

His passion for excellence and attention to detail along with over 23 years of experience in general and cosmetic dentistry has earned him a well deserved reputation.

His dedication to providing high class care has resulted in him being chosen to lead the team of dentists at this practice who will provide you or your loved ones the very highest standard of care.`
  },
  {
    name: "Practice Manager: Heliyan Peris",
    image: "/path-to-your-assets/heliyan.jpg", // Replace with your actual path
    bio: `I joined the great team here at The Pantiles Dental practice in march 2018.

I am with the team to ensure the smooth running of the practice, providing support to both you, the patients and the team, ensuring the practice runs smoothly and all regulations are adhered to.

In addition to our exceptional team, I am here to make you feel welcome and ensure that you are satisfied with our service. Please do not hesitate to ask if there's anything you would like to know.

When I am not at the practice, I am a proud mum to two boys. I enjoy spending time with my family, friends and traveling.`
  },
  {
    name: "Hygienist: Jan West EDH GDC 1949",
    image: "/path-to-your-assets/jan.jpg", // Replace with your actual path
    bio: `I qualified as a Dental Hygienist from Guy's Hospital University of London in 1983 and my career in dentistry started when I trained as a Dental Nurse in 1973. In that time I have worked both in General Dental Practice and Hospital.

I look closely with each dentist to ensure that every patient of oral hygiene is properly planned and delivered.

I love being part of this team and working here amongst so many inspiring and dedicated people.`
  },
  {
    name: "Dental Nurse: Anastasia Mamaja GDC 304290",
    image: "/path-to-your-assets/anastasia.jpg", // Replace with your actual path
    bio: `Hi! I started at The Pantiles in June 2021, and I'm training to become a fully qualified Dental Nurse through Surrey Adult Learning (AALL). Even though I'm new to the field, I really enjoy it!

I have one cat called Callie who never stops demanding treats and a play session. In my spare time, I love going on walks with my little friend, dancing, playing games and binge watching movies.

When I'm not working, I enjoy spending time with my friends, exploring new places and trying new foods outside.

I am open-minded, a huge part of what I do is centring for the skilled dental nurse team that we have.`
  },
  {
    name: "Dental Nurse: Zoe Ann Allen GDC 147274",
    image: "/path-to-your-assets/zoe.jpg", // Replace with your actual path
    bio: `I joined this practice in 2007 after over 20 years of experience in the dental profession. My career in dentistry started in 1987 when I trained as a Dental Nurse at Musgrove Park Hospital Lyme Regis Surgery.

My husband and I have two children.

In my spare time I enjoy gardening, music, cross stitch and organising events for local village and visiting other churches.`
  },
  {
    name: "Receptionist/ Dental Nurse: Claire Overend",
    image: "/path-to-your-assets/claire.jpg", // Replace with your actual path
    bio: `I started working for The Pantiles Dental in 2006 and can't believe how quickly the time has gone.

In my spare time, I love spending time with my kids, my children, family and friends and I have 2 dogs who I love taking out on walks.

I love working in such a happy environment with a wonderful team.`
  }
];

export default function DentalExpertsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-cover bg-center" style={{backgroundImage: "url('/path-to-your-assets/hero-image.jpg')"}}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Dental Experts</h1>
            <p className="text-xl md:text-2xl font-light">
              Our Team of Specialists, Dentists, Hygienists And Therapists in Bletchingley. 
              Offer an Extensive Range of Dental Treatments.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row gap-8 mb-16 ${
                index % 2 === 0 ? '' : 'md:flex-row-reverse'
              }`}
            >
              {/* Image */}
              <div className="md:w-1/3">
                <div className="w-full aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-gray-400 text-6xl">👤</div>';
                    }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="md:w-2/3">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                  {member.name}
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  {member.bio.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#0A2540] text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Invisalign */}
            <div className="flex items-center justify-center md:justify-start">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">★ Invisalign</div>
                <p className="text-sm text-blue-300">Diamond Apex Provider</p>
              </div>
            </div>

            {/* Straumann */}
            <div className="flex items-center justify-center md:justify-start">
              <div className="text-center">
                <div className="text-2xl font-bold">Straumann</div>
                <p className="text-sm text-gray-300">Implants</p>
              </div>
            </div>

            {/* Enlighten */}
            <div className="flex items-center justify-center md:justify-start">
              <div className="text-center">
                <div className="text-2xl font-bold">⚪ enlighten</div>
                <p className="text-sm text-gray-300">evolution 3</p>
              </div>
            </div>

            {/* Contact */}
            <div className="text-center md:text-left">
              <h3 className="font-bold mb-3">The Pantiles Dental</h3>
              <p className="text-sm text-gray-300 mb-2">High Street, Bletchingley</p>
              <p className="text-sm text-gray-300 mb-2">Surrey RH1 4PA</p>
              <p className="text-sm text-gray-300 mb-2">Tel: 01342 892274</p>
              <p className="text-sm text-blue-300">info@thepantilesdental.co.uk</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-wrap justify-center gap-6 mb-6">
              <a href="#home" className="text-sm hover:text-blue-300 transition">Home</a>
              <a href="#about" className="text-sm hover:text-blue-300 transition">About Us</a>
              <a href="#services" className="text-sm hover:text-blue-300 transition">Services</a>
              <a href="#fees" className="text-sm hover:text-blue-300 transition">Fees</a>
              <a href="#testimonials" className="text-sm hover:text-blue-300 transition">Testimonials</a>
              <a href="#contact" className="text-sm hover:text-blue-300 transition">Contact Us</a>
            </div>
            <p className="text-center text-sm text-gray-400">
              © 2025 The Pantiles Dental Practice. Designed by Ceylon Innovation. Last updated on 21st of March 2025.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}