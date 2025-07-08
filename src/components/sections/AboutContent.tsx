const AboutContent = () => {
  return (
    <div className="space-y-6">
      <div className="terminal-prompt text-2xl font-mono mb-6">{'>'} ABOUT_ME.EXE</div>
      
      <div className="space-y-4 text-sm font-mono">
        <div className="flex items-center space-x-2">
          <span className="terminal-prompt">sujit@portfolio:~$</span>
          <span className="terminal-text">cat profile.json</span>
        </div>
        
        <div className="terminal-text pl-4 space-y-3">
          <div>{'{'}</div>
          <div className="pl-4">"name": "Sujit Ghale",</div>
          <div className="pl-4">"role": "Full Stack Developer",</div>
          <div className="pl-4">"location": "Earth",</div>
          <div className="pl-4">"languages": ["JavaScript", "TypeScript", "Python"],</div>
          <div className="pl-4">"frameworks": ["React", "Node.js", "Express"],</div>
          <div className="pl-4">"databases": ["MongoDB", "PostgreSQL"],</div>
          <div className="pl-4">"hobbies": ["Coding", "Learning", "Problem Solving"],</div>
          <div className="pl-4">"motto": "I don't know what I am doing, but I do it well"</div>
          <div>{'}'}</div>
        </div>

        <div className="space-y-2 pt-4">
          <div className="flex items-center space-x-2">
            <span className="terminal-prompt">sujit@portfolio:~$</span>
            <span className="terminal-text">history | tail -5</span>
          </div>
          <div className="terminal-text opacity-70 pl-4 space-y-1">
            <div>1001  git commit -m "First portfolio attempt"</div>
            <div>1002  npm install confidence</div>
            <div>1003  sudo apt-get install motivation</div>
            <div>1004  coffee --strength=maximum</div>
            <div>1005  vim reality.txt</div>
          </div>
        </div>

        <div className="flex items-center space-x-2 animate-pulse pt-4">
          <span className="terminal-prompt font-mono">sujit@portfolio:~$</span>
          <span className="terminal-text font-mono">_</span>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;