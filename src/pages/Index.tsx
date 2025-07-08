import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Wrapper for horizontal scroll on small screens */}
      <div className="overflow-x-auto">
        <div className="min-w-[640px]"> {/* Minimum width to ensure computer visibility */}
          <HeroSection />
          
          {/* Additional sections for future expansion */}
          <section id="about" className="min-h-screen flex items-center justify-center px-6">
            <div className="vintage-computer">
              <div className="crt-monitor">
                <div className="crt-screen">
                  <div className="terminal-prompt text-2xl font-mono mb-6">{'>'} ABOUT_ME.EXE</div>
                  <div className="terminal-text font-mono space-y-4">
                    <p>// TODO: Add about section content</p>
                    <p>// This section will be expanded in future iterations</p>
                  </div>
                </div>
              </div>
              <div className="monitor-stand">
                <div className="monitor-neck"></div>
                <div className="monitor-base"></div>
              </div>
              <div className="computer-base">
                <div className="floppy-drives">
                  <div className="floppy-slot"></div>
                  <div className="floppy-slot"></div>
                </div>
                <div className="computer-controls">
                  <div className="brand-label">RETROTECH-1984</div>
                  <div className="power-button"></div>
                </div>
                <div className="text-xs font-mono terminal-text opacity-60 mt-2">
                  ABOUT.EXE loaded successfully
                </div>
              </div>
            </div>
          </section>

          <section id="projects" className="min-h-screen flex items-center justify-center px-6">
            <div className="vintage-computer">
              <div className="crt-monitor">
                <div className="crt-screen">
                  <div className="terminal-prompt text-2xl font-mono mb-6">{'>'} PROJECTS.EXE</div>
                  <div className="terminal-text font-mono space-y-4">
                    <p>// TODO: Add projects showcase</p>
                    <p>// This section will display portfolio projects</p>
                  </div>
                </div>
              </div>
              <div className="monitor-stand">
                <div className="monitor-neck"></div>
                <div className="monitor-base"></div>
              </div>
              <div className="computer-base">
                <div className="floppy-drives">
                  <div className="floppy-slot"></div>
                  <div className="floppy-slot"></div>
                </div>
                <div className="computer-controls">
                  <div className="brand-label">RETROTECH-1984</div>
                  <div className="power-button"></div>
                </div>
                <div className="text-xs font-mono terminal-text opacity-60 mt-2">
                  PROJECTS.EXE executing...
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="min-h-screen flex items-center justify-center px-6">
            <div className="vintage-computer">
              <div className="crt-monitor">
                <div className="crt-screen">
                  <div className="terminal-prompt text-2xl font-mono mb-6">{'>'} CONTACT.EXE</div>
                  <div className="terminal-text font-mono space-y-4">
                    <p>// TODO: Add contact form or information</p>
                    <p>// This section will provide contact details</p>
                  </div>
                </div>
              </div>
              <div className="monitor-stand">
                <div className="monitor-neck"></div>
                <div className="monitor-base"></div>
              </div>
              <div className="computer-base">
                <div className="floppy-drives">
                  <div className="floppy-slot"></div>
                  <div className="floppy-slot"></div>
                </div>
                <div className="computer-controls">
                  <div className="brand-label">RETROTECH-1984</div>
                  <div className="power-button"></div>
                </div>
                <div className="text-xs font-mono terminal-text opacity-60 mt-2">
                  CONTACT.EXE ready for input
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Index;
