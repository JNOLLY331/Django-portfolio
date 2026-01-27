import React, { useEffect, useState } from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { portfolioAPI } from '../services/api';

const Expirience = () => {
  const [expiriences, setExpiriences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExpirience = async () => {
      try {
        const response = await portfolioAPI.getExpirience();
        setExpiriences(response.data);
      } catch (error) {
        console.error('Error fetching expirience:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchExpirience();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  if (loading) {
    return (
      <section id="experience" className="section-padding bg-dark">
        <div className="max-w-7xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-12">Loading Experience...</h2>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="section-padding bg-dark">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
          Work <span className="text-gradient">Experience</span>
        </h2>

        <div className="space-y-8">
          {expiriences.map((exp, index) => (
            <div
              key={exp.id}
              className="bg-slate-800 rounded-xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {exp.position}
                  </h3>
                  <p className="text-xl text-primary mb-2">{exp.company}</p>

                  <div className="flex flex-wrap gap-4 text-gray-400 text-sm mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>
                        {formatDate(exp.start_date)} - {' '}
                        {exp.current ? 'Present' : formatDate(exp.end_date)}
                      </span>
                    </div>
                    {exp.location && (
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                {exp.company_logo && (
                  <div className="w-20 h-20 bg-white rounded-lg p-2 flex items-center justify-center">
                    <img
                      src={exp.company_logo}
                      alt={exp.company}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
              </div>

              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                {exp.description}
              </p>

              {exp.current && (
                <div className="mt-4">
                  <span className="inline-block px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-xs">
                    Current Position
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {expiriences.length === 0 && (
          <div className="text-center text-gray-400 py-12">
            <p className="text-xl">No experience data available yet.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Expirience;