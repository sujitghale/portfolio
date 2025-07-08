import { useState } from 'react';
import Navigation from '@/components/Navigation';
import VintageComputer from '@/components/VintageComputer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* Single computer section with dynamic content */}
      <div className="overflow-x-auto">
        <div className="min-w-[640px] min-h-screen flex items-center justify-center px-6 pt-20">
          <VintageComputer activeSection={activeSection} />
        </div>
      </div>
    </div>
  );
};

export default Index;
