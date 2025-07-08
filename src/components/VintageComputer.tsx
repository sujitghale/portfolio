import HomeContent from './sections/HomeContent';
import AboutContent from './sections/AboutContent';
import ProjectsContent from './sections/ProjectsContent';
import ContactContent from './sections/ContactContent';

interface VintageComputerProps {
  activeSection: string;
}

const VintageComputer = ({ activeSection }: VintageComputerProps) => {
  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <HomeContent />;
      case 'about':
        return <AboutContent />;
      case 'projects':
        return <ProjectsContent />;
      case 'contact':
        return <ContactContent />;
      default:
        return <HomeContent />;
    }
  };

  const getSystemStatus = () => {
    switch (activeSection) {
      case 'home':
        return 'SYSTEM.EXE ready for input';
      case 'about':
        return 'ABOUT.EXE loaded successfully';
      case 'projects':
        return 'PROJECTS.EXE executing...';
      case 'contact':
        return 'CONTACT.EXE ready for input';
      default:
        return 'SYSTEM.EXE ready for input';
    }
  };

  return (
    <div className="vintage-computer">
      {/* CRT Monitor */}
      <div className="crt-monitor">
        <div className="crt-screen">
          {renderContent()}
        </div>
      </div>

      {/* Monitor Stand */}
      <div className="monitor-stand">
        <div className="monitor-neck"></div>
        <div className="monitor-base"></div>
      </div>

      {/* Computer Base/Tower */}
      <div className="computer-base">
        {/* Floppy Drives */}
        <div className="floppy-drives">
          <div className="floppy-slot"></div>
          <div className="floppy-slot"></div>
        </div>

        {/* Computer Controls */}
        <div className="computer-controls">
          <div className="brand-label">RETROTECH-1984</div>
          <div className="power-button"></div>
        </div>

        {/* Status Display */}
        <div className="text-xs font-mono terminal-text opacity-60 mt-2">
          CPU: 8086 @ 4.77MHz | RAM: 640KB | HDD: 20MB | {getSystemStatus()}
        </div>
      </div>
    </div>
  );
};

export default VintageComputer;