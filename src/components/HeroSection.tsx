import TypewriterText from './TypewriterText';
import SocialMedia from './SocialMedia';

const HeroSection = () => {
  const introTexts = [
    "Hi I am Sujit Ghale",
    "I don't know what I am doing"
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="crt-monitor max-w-4xl w-full">
        <div className="crt-screen">
          <div className="space-y-8">
            {/* Terminal Header */}
            <div className="border-b border-terminal-green/30 pb-4">
              <div className="terminal-prompt text-sm font-mono">
                VINTAGE_TERMINAL v1.0.0
              </div>
              <div className="terminal-text text-xs font-mono opacity-70">
                Copyright (c) 2024 Sujit Ghale. All rights reserved.
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-8">
              {/* Terminal Prompt and Introduction */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="terminal-prompt font-mono">sujit@portfolio:~$</span>
                  <span className="terminal-text font-mono">whoami</span>
                </div>
                
                <div className="text-2xl md:text-4xl font-mono font-bold min-h-[3rem] flex items-center">
                  <TypewriterText 
                    texts={introTexts}
                    speed={100}
                    deleteSpeed={50}
                    pauseTime={3000}
                  />
                </div>
              </div>

              {/* System Information */}
              <div className="space-y-2 text-sm font-mono">
                <div className="flex items-center space-x-2">
                  <span className="terminal-prompt">sujit@portfolio:~$</span>
                  <span className="terminal-text">cat about.txt</span>
                </div>
                <div className="terminal-text opacity-80 pl-4">
                  Loading portfolio data...<span className="animate-pulse">█</span>
                </div>
                <div className="terminal-text opacity-80 pl-4">
                  Status: Developer, Dreamer, Digital Craftsman
                </div>
                <div className="terminal-text opacity-80 pl-4">
                  Location: /home/universe/earth/yourLocation
                </div>
                <div className="terminal-text opacity-80 pl-4">
                  Passion: Building amazing digital experiences
                </div>
              </div>

              {/* Command Line Navigation */}
              <div className="space-y-2 text-sm font-mono">
                <div className="flex items-center space-x-2">
                  <span className="terminal-prompt">sujit@portfolio:~$</span>
                  <span className="terminal-text">ls -la sections/</span>
                </div>
                <div className="terminal-text opacity-70 pl-4 space-y-1">
                  <div>drwxr-xr-x  2 sujit sujit 4096 2024-01-01 00:00 about/</div>
                  <div>drwxr-xr-x  2 sujit sujit 4096 2024-01-01 00:00 projects/</div>
                  <div>drwxr-xr-x  2 sujit sujit 4096 2024-01-01 00:00 contact/</div>
                </div>
              </div>

              {/* Social Media Section */}
              <div className="pt-8 border-t border-terminal-green/30">
                <SocialMedia />
              </div>

              {/* Footer prompt */}
              <div className="flex items-center space-x-2 animate-pulse">
                <span className="terminal-prompt font-mono">sujit@portfolio:~$</span>
                <span className="terminal-text font-mono">_</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;