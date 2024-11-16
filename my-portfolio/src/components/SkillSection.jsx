import React from 'react';

function StarRating({ rating }) {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index} className={index < rating ? 'text-yellow-400' : 'text-gray-400'}>
      ★
    </span>
  ));
  return <div className="flex justify-center">{stars}</div>;
}

function SkillSection() {
  const skills = [
    {
      name: 'Frontend',
      tools: [
        { toolName: 'React', rating: 5 },
        { toolName: 'Next.js', rating: 4 },
        { toolName: 'Tailwind CSS', rating: 4 },
        { toolName: 'Figma', rating: 3 }
      ]
    },
    {
      name: 'Backend',
      tools: [
        { toolName: 'Node.js', rating: 5 },
        { toolName: 'Express', rating: 4 },
        { toolName: 'MongoDB', rating: 4 }
      ]
    },
    {
      name: 'Languages',
      tools: [{ toolName: 'JavaScript', rating: 5 }]
    }
  ];

  return (
    <section className="bg-[#0d0d1f] text-white py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-8">Technical Proficiencies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="p-6 border border-gray-600 rounded-md">
              <h3 className="text-xl font-semibold mb-4">{skill.name}</h3>
              <ul className="text-left">
                {skill.tools.map((tool, i) => (
                  <li key={i} className="mb-2">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">{tool.toolName}</span>
                      <StarRating rating={tool.rating} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillSection;
