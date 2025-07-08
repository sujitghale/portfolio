import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <HeroSection />
      
      {/* Additional sections for future expansion */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6">
        <div className="crt-monitor max-w-4xl w-full">
          <div className="crt-screen">
            <div className="terminal-prompt text-2xl font-mono mb-6">{'>'} ABOUT_ME.EXE</div>
            <div className="terminal-text font-mono space-y-4">
              <p>// TODO: Add about section content</p>
              <p>// This section will be expanded in future iterations</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="min-h-screen flex items-center justify-center px-6">
        <div className="crt-monitor max-w-4xl w-full">
          <div className="crt-screen">
            <div className="terminal-prompt text-2xl font-mono mb-6">{'>'} PROJECTS.EXE</div>
            <div className="terminal-text font-mono space-y-4">
              <p>// TODO: Add projects showcase</p>
              <p>// This section will display portfolio projects</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center px-6">
        <div className="crt-monitor max-w-4xl w-full">
          <div className="crt-screen">
            <div className="terminal-prompt text-2xl font-mono mb-6">{'>'} CONTACT.EXE</div>
            <div className="terminal-text font-mono space-y-4">
              <p>// TODO: Add contact form or information</p>
              <p>// This section will provide contact details</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
