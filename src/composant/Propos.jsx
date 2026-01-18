import { Code, Smartphone, Palette, Zap } from 'lucide-react';
import React from 'react';

function Propos() {
  const items = [
    {
      id: 1,
      title: "Développement Frontend",
      content: "Création d'interfaces web modernes et responsive avec React.js, HTML, CSS et JavaScript",
      icon: Code,
    },
    {
      id: 2,
      title: "Applications Mobiles",
      content: "Développement d'applications mobiles performantes et intuitives avec Flutter",
      icon: Smartphone,
    },
    {
      id: 3,
      title: "UI/UX Design",
      content: "Conception d'interfaces utilisateur esthétiques avec attention aux détails et à l'expérience utilisateur",
      icon: Palette,
    },
    {
      id: 4,
      title: "Performance et Optimisation",
      content: "Optimisation frontend avec Firebase pour des expériences fluides et réactives",
      icon: Zap,
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen px-6 pt-20 sm:px-10 lg:px-20 py-10 flex flex-col items-center justify-center bg-gray-900 text-gray-300"
    >
      <h2 className="text-3xl font-bold mb-6">À propos de moi</h2>
      <p className="text-lg max-w-2xl text-center mb-10">
        Développeur frontend passionné avec plus de 5 ans d'expérience dans la création d'interfaces web et mobiles. 
        Je transforme des idées en applications visuellement attractives 
        et performantes, en utilisant Firebase pour la gestion des données et Git/GitHub pour la collaboration en équipe.
      </p>

      {/* Grille responsive */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {items.map((item) => (
          <div
            key={item.id}
            className="group bg-gray-950 rounded-xl p-6 border border-gray-600 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2"
          >
            <div className="w-14 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors">
              <item.icon className="w-7 h-7 text-blue-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
            <p className="text-gray-400 leading-relaxed">{item.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Propos;