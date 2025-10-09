import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import dentalexperts from '../assets/dentalexperts.jpeg';
import nishani from '../assets/nishani.png';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import ajay from '../assets/ajay.png';
import deepam from '../assets/deepam.png';
import heliyan from '../assets/heliyan.png';
import jan from '../assets/jan.png';
import anastasia from '../assets/anastasia.png';
import zoe from '../assets/zoe.png';
import claire from '../assets/claire.png';

// Team member data
const teamMembers = [
  {
    name: "Nishani Jayasuriya",
    slug: "Nishani-Jayasuriya",
    title: "Dentist: Nishani Joyasuriya BDS GDC 82268",
    image: nishani,
    bio: `I qualified in 1999 at the Royal London Hospital (Whitechapel) with 1 went there to experience as life in a place that is very multi-racial and a hive of activity.

I am a Dentist who provides NHS and some Private Dentistry. I am particularly interested in preventative Dentistry and Endodontics (Root Canal Treatment).

As a mother in the preschool home, abroad play, volunteer in school.

It's always been my passion to restore people's teeth and ensure that they are fit and healthy with no underlying chronic infections and my experience covers 15 years as a Dentist.

I adore the countryside, I love to go cycling and really need to take part in charitable events. I like sewing and watching the occasional good box set!

I adore kids and would love to go visit places like The Eden Project and Capability Browns parks! I absolutely love my work with kids. I trained it well when my preschool children were involved and look forward to restoring oral health in the NHS!`
  },
  {
    name: "Ajay Mathur",
    slug: "Ajay-Mathur",
    title: "Dentist: Ajay Mathur BSc BDS (Lond) 2003, MJDF RCS (Eng) 2010 GDC 82275",
    image: ajay,
    bio: `I graduated from King's College London in 2003 and also have an intercalated degree in Pharmacology.

I completed the Vocational Training Scheme in 2004, and went on to undertake a very wide spectrum of dentistry in both the NHS and Private sector in the UK and Channel Islands.

I have worked in practices in Surrey, Wales and Devon and have studied extensively in the fields of restorative dentistry, in Essex, Surrey, Birmingham and Harley Street, London. I also studied periodontology in Singapore as a Guest Student of The National University of Singapore, Dental Faculty.

In addition to general dentistry, I have a special interest in surgery and have undertaken surgical training at Guy's Hospital, London. I have also been trained in Invisalign treatment and carried out further training courses specializing in this.

I have been working at The Pantiles Dental Practice since 2011 and I thoroughly enjoy the team environment and the great balance of doing dentistry using good quality materials, all whilst providing the care you deserve.

Outside work I love spending time with my family and enjoy watching cricket, listening to and playing music.`
  },
  {
    name: "Deepam Patel",
    slug: "Deepam-Patel",
    title: "Dentist: Deepam Patel BDS, MFGDP(UK), DipImpDent RCS(Eng), GradDipClinDent (Dentistry) GDC 80980",
    image: deepam,
    bio: `Deepam Patel BSc(Hons), BDS(Hons), MJDF(RCS Eng), DipImpDentRCS(Eng), MSc(Lond), MRD(RCS Eng)

Deepam qualified with Honours from Kings College London in 1996 and later obtained a Masters degree in Restorative Dentistry from Guy's College of Kings College London in 2010.

He undertook further postgraduate training in Periodontology at the Eastman Dental Institute and additionally has Membership of the Royal College of Surgeons England in General Dentistry and a Diploma in Implant Dentistry.

He joined this practice in 1998 and has led the Implant provision at our practice since 2006. With over 20 years of dedicated experience in placing and restoring implants, he utilizes the latest digital technology.

His passion for excellence and attention to detail along with over 23 years of experience in general and cosmetic dentistry has earned him a well deserved reputation.

His dedication to providing high class care has resulted in him being chosen to lead the team of dentists at this practice who will provide you or your loved ones the very highest standard of care.`
  },
  {
    name: "Heliyan Peiris",
    slug: "Heliyan-Peiris",
    title: "Practice Manager: Heliyan Peris",
    image: heliyan,
    bio: `I joined the great team here at The Pantiles Dental practice in march 2018.

I am with the team to ensure the smooth running of the practice, providing support to both you, the patients and the team, ensuring the practice runs smoothly and all regulations are adhered to.

In addition to our exceptional team, I am here to make you feel welcome and ensure that you are satisfied with our service. Please do not hesitate to ask if there's anything you would like to know.

When I am not at the practice, I am a proud mum to two boys. I enjoy spending time with my family, friends and traveling.`
  },
  {
    name: "Jan West",
    slug: "Jan-West",
    title: "Hygienist: Jan West EDH GDC 1949",
    image: jan,
    bio: `I qualified as a Dental Hygienist from Guy's Hospital University of London in 1983 and my career in dentistry started when I trained as a Dental Nurse in 1973. In that time I have worked both in General Dental Practice and Hospital.

I look closely with each dentist to ensure that every patient of oral hygiene is properly planned and delivered.

I love being part of this team and working here amongst so many inspiring and dedicated people.`
  },
  {
    name: "Anastasija Mamaja",
    slug: "Anastasija-Mamaja",
    title: "Dental Nurse: Anastasia Mamaja GDC 304290",
    image: anastasia,
    bio: `Hi! I started at The Pantiles in June 2021, and I'm training to become a fully qualified Dental Nurse through Surrey Adult Learning (AALL). Even though I'm new to the field, I really enjoy it!

I have one cat called Callie who never stops demanding treats and a play session. In my spare time, I love going on walks with my little friend, dancing, playing games and binge watching movies.

When I'm not working, I enjoy spending time with my friends, exploring new places and trying new foods outside.

I am open-minded, a huge part of what I do is centring for the skilled dental nurse team that we have.`
  },
  {
    name: "Zoe Ann Allen",
    slug: "Zoe-Ann-Allen",
    title: "Dental Nurse: Zoe Ann Allen GDC 147274",
    image: zoe,
    bio: `I joined this practice in 2007 after over 20 years of experience in the dental profession. My career in dentistry started in 1987 when I trained as a Dental Nurse at Musgrove Park Hospital Lyme Regis Surgery.

My husband and I have two children.

In my spare time I enjoy gardening, music, cross stitch and organising events for local village and visiting other churches.`
  },
  {
    name: "Claire Overend",
    slug: "Claire-Overend",
    title: "Receptionist/ Dental Nurse: Claire Overend",
    image: claire,
    bio: `I started working for The Pantiles Dental in 2006 and can't believe how quickly the time has gone.

In my spare time, I love spending time with my kids, my children, family and friends and I have 2 dogs who I love taking out on walks.

I love working in such a happy environment with a wonderful team.`
  }
];

// Animation variants for mobile (vertical animations)
const mobileImageVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const mobileContentVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.2
    }
  }
};

// Animation variants for desktop (horizontal animations)
const desktopImageVariantsLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const desktopContentVariantsRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const desktopImageVariantsRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const desktopContentVariantsLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export default function DentalExpertsPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] sm:h-[600px] md:h-[700px] bg-cover bg-center" style={{ backgroundImage: `url(${dentalexperts})` }}>
        <Header />
        
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        <div className="relative container mx-auto px-4 sm:px-6 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Dental <br className="hidden sm:block" />Experts
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl font-medium"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our Team of Specialists, Dentists, Hygienists And Therapists in Bletchingley. 
              Offer an Extensive Range of Dental Treatments.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Team Members Section with Zig-Zag Layout */}
     {teamMembers.map((member, index) => (
  <section
    id={member.slug}
    key={index}
    className={`py-8 sm:py-12 px-3 sm:px-6 ${index % 2 === 0 ? 'bg-white' : 'bg-blue-50'}`}
  >
    <div className="container mx-auto max-w-6xl">
      <div className={`flex flex-col lg:flex-row gap-4 sm:gap-8 lg:gap-12 items-center ${
        index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
      }`}>
        
        {/* Image */}
        <motion.div 
          className="w-full lg:w-2/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: window.innerWidth < 1024 ? mobileImageVariants.hidden : 
                    (index % 2 === 0 ? desktopImageVariantsLeft.hidden : desktopImageVariantsRight.hidden),
            visible: window.innerWidth < 1024 ? mobileImageVariants.visible : 
                     (index % 2 === 0 ? desktopImageVariantsLeft.visible : desktopImageVariantsRight.visible)
          }}
        >
  <div className="w-full max-w-[180px] sm:max-w-[220px] mx-auto lg:max-w-[250px] aspect-[3/4] bg-gray-200 rounded-lg sm:rounded-2xl overflow-hidden shadow-md sm:shadow-xl">
  <img 
    src={member.image} 
    alt={member.name}
    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
    onError={(e) => {
      e.target.style.display = 'none';
      e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-gray-400 text-4xl sm:text-6xl bg-gray-100">👤</div>';
    }}
  />
</div>

        </motion.div>

        {/* Content */}
        <motion.div 
          className="w-full lg:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: window.innerWidth < 1024 ? mobileContentVariants.hidden : 
                    (index % 2 === 0 ? desktopContentVariantsRight.hidden : desktopContentVariantsLeft.hidden),
            visible: window.innerWidth < 1024 ? mobileContentVariants.visible : 
                     (index % 2 === 0 ? desktopContentVariantsRight.visible : desktopContentVariantsLeft.visible)
          }}
        >
          <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-3 sm:mb-5 text-center lg:text-left">
            {member.title}
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-2 sm:space-y-3 text-sm sm:text-base">
            {member.bio.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="mb-2 sm:mb-3">{paragraph}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
))}


      <Footer/>
    </div>
  );
}
