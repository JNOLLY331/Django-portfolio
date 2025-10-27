import React, { useEffect, useState } from 'react';
import { MapPin, Mail, Phone, ArrowRight, Download } from 'lucide-react';
import { portfolioAPI } from '../services/api';

const About = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await portfolioAPI.getProfile();
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };
    fetchProfile();
  }, []);

  return (
    <section id="about" className="py-32 bg-[#020617] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Image Side with Professional Frame */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-secondary rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative aspect-[4/5] bg-slate-900 rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
              {profile?.profile_image ? (
                <img 
                  src={profile.profile_image} 
                  alt={profile.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" 
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-8xl font-black text-white/5 tracking-tighter">ABOUT</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"></div>
              
              {/* Floating Experience Badge */}
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
                <p className="text-sm font-bold text-primary uppercase tracking-widest mb-1">Based in</p>
                <p className="text-xl font-bold text-white flex items-center gap-2">
                  <MapPin size={20} className="text-primary"/> {profile?.location || 'Remote'}
                </p>
              </div>
            </div>
          </div>

          {/* Text Content Side */}
          <div className="space-y-8">
            <h1 className="text-5xl font-black text-gray-300 text-center">ABOUT</h1>
            <div>
              <h2 className="text-sm font-black text-primary uppercase tracking-[0.3em] mb-4">Background</h2>
              <h3 className="text-xl md:text-2xl font-black text-white mb-6">
                Crafting Digital <br/>
                <span className="text-gray-500">Experiences.</span>
              </h3>
              <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
                I am a developer who bridges the gap between complex backend logic and pixel-perfect frontend design. My goal is to build software that isn't just functional, but exceptional.
              </p>
            </div>

            {/* Quick Contact Grid */}
            <div className="grid sm:grid-cols-2 gap-6 py-8 border-y border-white/5">
              {profile?.email && (
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase">Email</p>
                    <a href={`mailto:${profile.email}`} className="text-white font-bold hover:text-primary transition-colors">{profile.email}</a>
                  </div>
                </div>
              )}
              {profile?.phone && (
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase">Phone</p>
                    <p className="text-white font-bold">{profile.phone}</p>
                  </div>
                </div>
              )}
            </div>

            {/* CTA Actions */}
            <div className="flex flex-wrap gap-6 pt-4">
              {profile?.resume && (
                <a 
                  href={profile.resume}
                  download
                  className="flex items-center gap-3 px-8 py-4 bg-white text-dark font-black rounded-full hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 transition-all"
                >
                  Download CV <Download size={20} />
                </a>
              )}
              <a 
                href="#projects" 
                className="flex items-center gap-2 text-white font-bold hover:text-primary transition-colors"
              >
                View Portfolio <ArrowRight size={20} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};


export default About;