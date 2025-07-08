import { useState } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: '> HOME' },
    { id: 'about', label: '> ABOUT' },
    { id: 'projects', label: '> PROJECTS' },
    { id: 'contact', label: '> CONTACT' }
  ];

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    // Smooth scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="terminal-prompt font-bold text-lg">
            SUJIT_GHALE.EXE
          </div>
          
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`nav-item terminal-text font-mono px-3 py-1 transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'terminal-prompt' 
                    : 'hover:terminal-prompt'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;