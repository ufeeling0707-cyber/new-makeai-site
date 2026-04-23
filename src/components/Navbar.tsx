import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { COMPANY_NAME, NAV_ITEMS, LOGO_PATH } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-ai-black/90 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          <div className="flex items-center shrink-0">
            <a href="#" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center group">
              {!logoError ? (
                <img 
                  src={LOGO_PATH} 
                  alt={COMPANY_NAME} 
                  className="h-[29px] w-[138px] object-contain object-left sm:h-8 sm:w-[160px] md:h-10 md:w-[211px] lg:w-[240px]"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <span className="font-bold text-2xl tracking-tighter text-white">{COMPANY_NAME}</span>
              )}
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-4 flex items-baseline space-x-5 lg:ml-6 lg:space-x-7">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-gray-300 hover:text-white hover:text-neon-blue transition-colors px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wide cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-ai-dark border-b border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
