import React, { useEffect, useState } from 'react';
import { portfolioAPI } from '../services/api';

const Skills = () => {
  const [skillsByCategory, setSkillsByCategory] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await portfolioAPI.getSkillsByCategory();
        setSkillsByCategory(response.data);
      } catch (error) {
        console.error('Error fetching skills:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchSkills();
  }, []);

  if (loading) {
  return (
    <section id="skills" className="section-padding bg-dark">
      <div className="max-w-7xl mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-12">Loading Skills...</h2>
      </div>
    </section>
  );
}

return (
  <section id="skills" className="section-padding bg-dark px-6">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
        My <span className="text-gradient">Skills</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(skillsByCategory).map(([category, skills]) => (
          <div
            key={category}
            className="bg-slate-800 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 animate-slide-up"
      >
      <h3 className="text-2xl font-bold text-primary mb-6">
        {category}
      </h3>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.id}>
            <div className="flex justify-between mb-2">
              <span className="text-gray-300 font-medium">
                {skill.name}
              </span>
              <span className="text-gray-400">{skill.proficiency}%</span>
              </div>
            <div className="w-full bg-slate-700 rounded-full h-2.5">
              <div 
                className="bg-gradient-to-r from-primary to-secondary h-2.5 rounded-full transition-all duration-1000"
                style={{ width: `${skill.proficiency}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>
      </div>
    </section>
  );
};

export default Skills;