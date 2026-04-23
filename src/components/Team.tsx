import React from 'react';
import { TEAM } from '../constants';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
          Meet The <span className="text-neon-blue">Team</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {TEAM.map((member) => (
            <div key={member.id} className="text-center group">
              <div className="relative w-48 h-48 mx-auto mb-6">
                 <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full blur opacity-0 group-hover:opacity-50 transition duration-500"></div>
                 <img 
                  src={member.imageUrl} 
                  alt={member.name}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    // Fallback to a professional avatar generator if local image is missing
                    target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=1f1f1f&color=fff&size=200&font-size=0.33`;
                  }}
                  className="relative w-full h-full rounded-full object-cover border-4 border-gray-800 group-hover:border-white transition-colors duration-300 bg-gray-800"
                 />
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-neon-blue font-medium mb-4">{member.role}</p>
              <div className="space-y-1">
                {member.description.map((desc, i) => (
                  <p key={i} className="text-gray-500 text-sm">{desc}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;