import React from 'react'
import profil from '../assets/images/Me.png'
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'

function Acueille() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen px-6 pt-20 sm:px-10 lg:px-20 py-10 flex flex-col lg:flex-row items-center justify-between bg-gray-950"
    >
      {/* Texte */}
      <div className="gap-6 flex flex-col items-start text-center lg:text-left">
        <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-300">
          Je suis MBOULOUKOUE Thychel Esdras
        </p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-gray-200">
          Développeur Web <br /> 
          <span className="text-blue-500">& Mobile</span>
        </h2>
        <p className="text-base sm:text-lg text-gray-300 max-w-xl">
          Passionné par la création d'applications web et mobile modernes et performantes. <br /> 
          Spécialisé en React.js et Flutter avec Firebase pour la gestion des données et Git/GitHub pour la collaboration.
        </p>

        {/* Boutons compétences */}
        <div className="flex flex-wrap gap-2">
          {["React", "Flutter", "Firebase", "Git", "JavaScript"].map((skill) => (
            <button 
              key={skill} 
              className="bg-none border border-gray-200 py-1.5 px-3 rounded-md text-gray-300 hover:bg-blue-500 hover:border-blue-500 cursor-pointer text-sm sm:text-base"
            >
              {skill}
            </button>
          ))}
        </div>

        {/* Boutons actions */}
        <div className="gap-4 flex flex-wrap">
          <button className="bg-blue-500 border-none py-2 px-4 rounded-md text-gray-300 hover:bg-blue-600 cursor-pointer text-sm sm:text-base">
            Voir mes projets
          </button>
          <button className="bg-white border-none py-2 px-4 rounded-md text-gray-950 hover:bg-gray-200 cursor-pointer text-sm sm:text-base">
            Contactez-moi
          </button>
        </div>
      </div>

      {/* Image profil */}
      <div className="mt-10 lg:mt-0 lg:ml-20 flex justify-center">
        <img 
          src={profil} 
          alt="profil" 
          className="w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full object-cover"
        />
      </div>

      {/* Icônes sociales */}
      <div className="fixed bg-blue-500 rounded-r-md bottom-1/3 sm:bottom-20 p-2.5 left-0 flex flex-col items-center gap-4">
        <a href="mailto:imambouloukoue@gmail.com" className="text-gray-300 hover:text-gray-950">
          <Mail className="w-6 h-6"/>
        </a>
        <a href="https://github.com/konig2220" className="text-gray-300 hover:text-gray-950">
          <Github className="w-6 h-6"/>
        </a>
        <a href="https://www.linkedin.com/in/monprofil" className="text-gray-300 hover:text-gray-950">
          <Linkedin className="w-6 h-6"/>
        </a>
      </div>

      {/* Flèche vers section suivante */}
      <div>
        <a href="#about" className="hidden md:block absolute bottom-6 right-6 text-gray-300 hover:text-blue-500 animate-bounce">
          <ArrowDown className="w-6 h-7"/>
        </a>
      </div>
    </section>
  )
}

export default Acueille