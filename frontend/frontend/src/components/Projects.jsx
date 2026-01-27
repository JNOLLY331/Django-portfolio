import React, { useEffect, useState } from 'react';
import { Github, ExternalLink, Box } from 'lucide-react';
import { portfolioAPI } from '../services/api';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await portfolioAPI.getProjects();
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section id="projects" className="py-24 bg-[#020617]">
        <div className="max-w-7xl mx-auto text-center">
          <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-24 bg-[#020617] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-white mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full opacity-50"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] hover:border-primary/20"
            >
              {/* Project Image Container */}
              <div className="h-64 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center gap-4">
                  {project.github_url && (
                    <a href={project.github_url} className="p-3 bg-white text-dark rounded-full hover:scale-110 transition-transform"><Github size={20}/></a>
                  )}
                  {project.live_url && (
                    <a href={project.live_url} className="p-3 bg-primary text-white rounded-full hover:scale-110 transition-transform"><ExternalLink size={20}/></a>
                  )}
                </div>
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center"><Box size={48} className="text-slate-700"/></div>
                )}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-20 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">Featured</div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.split(',').map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-white/5 border border-white/10 text-slate-300 text-xs font-medium rounded-lg">
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;