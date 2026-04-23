import React from 'react';
import { CONTACT, COMPANY_NAME } from '../constants';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-ai-dark border-t border-gray-800 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-neon-blue shrink-0" />
                <div>
                  <h4 className="font-bold text-white">Location</h4>
                  <p className="text-gray-400">{CONTACT.address}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-neon-pink shrink-0" />
                <div>
                  <h4 className="font-bold text-white">Email</h4>
                  <a href={`mailto:${CONTACT.email}`} className="text-gray-400 hover:text-white transition-colors">
                    {CONTACT.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-neon-purple shrink-0" />
                <div>
                  <h4 className="font-bold text-white">Phone</h4>
                  <p className="text-gray-400">{CONTACT.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Globe className="w-6 h-6 text-green-400 shrink-0" />
                <div>
                  <h4 className="font-bold text-white">Website</h4>
                  <a href={`https://${CONTACT.website}`} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    {CONTACT.website}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[300px] w-full bg-gray-800 rounded-xl overflow-hidden border border-gray-700 relative">
            <iframe 
              src={CONTACT.mapEmbedUrl} 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Company Location"
            ></iframe>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;