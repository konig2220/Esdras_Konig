import React from 'react';

function Competences() {
  const skills = {
    frontend: [
      { name: "React.js", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
    ],
    mobile: [
      { name: "Flutter", level: 90 },
      { name: "Dart", level: 85 },
      { name: "Responsive Design", level: 95 },
    ],
    backend: [
      { name: "Firebase", level: 85 },
      { name: "Firestore", level: 90 },
      { name: "Firebase Auth", level: 90 },
    ],
    collaboration: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 85 },
      { name: "Figma", level: 80 },
      { name: "UI/UX Design", level: 80 },
    ],
  };

  const renderSkillBar = (skill) => (
    <div key={skill.name} className="mb-4">
      <div className="flex justify-between text-sm text-gray-300 mb-1">
        <span>{skill.name}</span>
        <span>{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 h-2 rounded-full">
        <div
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="bg-gray-950 text-gray-300 px-6 py-16 sm:px-10 lg:px-20">
      <h2 className="text-3xl font-bold mb-6 text-center">Mes Compétences</h2>
      <p className="text-center text-lg mb-10 max-w-3xl mx-auto">
        Technologies frontend et outils que je maîtrise pour créer des interfaces web et mobiles modernes
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className='bg-gray-950 border border-gray-800 p-3 rounded-lg'>
          <h3 className="text-xl font-semibold mb-4 text-blue-400">Frontend Web</h3>
          {skills.frontend.map(renderSkillBar)}
        </div>
        <div className='bg-gray-950 border border-gray-800 p-3 rounded-lg'>
          <h3 className="text-xl font-semibold mb-4 text-blue-400">Développement Mobile</h3>
          {skills.mobile.map(renderSkillBar)}
        </div>
        <div className='bg-gray-950 border border-gray-800 p-3 rounded-lg'>
          <h3 className="text-xl font-semibold mb-4 text-blue-400">Backend</h3>
          {skills.backend.map(renderSkillBar)}
        </div>
        <div className='bg-gray-950 border border-gray-800 p-3 rounded-lg'>
          <h3 className="text-xl font-semibold mb-4 text-blue-400">Collaboration</h3>
          {skills.collaboration.map(renderSkillBar)}
        </div> 
      </div>

     <div className="mt-10 overflow-hidden">
        <div className="flex gap-6 animate-marquee whitespace-nowrap scrollbar-hide">
        {["React", "Flutter", "Firebase", "Git", "JavaScript", "Github", "HTML5", "CSS3"].map((skill) => (
        <button
            key={skill}
            className="bg-none border border-gray-200 py-1.5 px-3 rounded-md text-gray-300 hover:border-blue-500 hover:text-blue-500 cursor-pointer text-sm sm:text-base"
        >
            {skill}
        </button>
        ))}
    </div>
    </div>
    </section>
  );
}

export default Competences;