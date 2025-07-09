const ProjectsContent = () => {
  return (
    <div className="space-y-6">
      <div className="terminal-prompt text-2xl font-mono mb-6">{'>'} PROJECTS.EXE</div>
      
      <div className="space-y-4 text-sm font-mono">
        <div className="flex items-center space-x-2">
          <span className="terminal-prompt">sujit@portfolio:~$</span>
          <span className="terminal-text">ls -la ./projects/</span>
        </div>
        
        <div className="terminal-text opacity-70 pl-4 space-y-1">
          <div>total 42</div>
          <div>drwxr-xr-x  8 sujit sujit 4096 Jan  1 2024 .</div>
          <div>drwxr-xr-x  3 sujit sujit 4096 Jan  1 2024 ..</div>
          <div>-rw-r--r--  1 sujit sujit 2048 Jan  1 2024 awesome-web-app/</div>
          <div>-rw-r--r--  1 sujit sujit 1024 Jan  1 2024 cool-mobile-app/</div>
          <div>-rw-r--r--  1 sujit sujit 3072 Jan  1 2024 innovative-tool/</div>
          <div>-rw-r--r--  1 sujit sujit  512 Jan  1 2024 secret-project/</div>
        </div>

        <div className="space-y-3 pt-4">
          <div className="flex items-center space-x-2">
            <span className="terminal-prompt">sujit@portfolio:~$</span>
            <span className="terminal-text">cat project_status.log</span>
          </div>
          
          <div className="terminal-text pl-4 space-y-2">
            <div>[INFO] Project 1: parkease</div>
            <div>[INFO] Project 2: coneflix</div>
            <div>[INFO] Project 3: autoclock</div>
            <div>[WARN] Project 4: Coming Soon™ ⏳</div>
            <div>[SUCCESS] Portfolio: You are here! 📍</div>
          </div>
        </div>

        <div className="space-y-2 pt-4">
          <div className="flex items-center space-x-2">
            <span className="terminal-prompt">sujit@portfolio:~$</span>
            <span className="terminal-text">echo "More projects loading..."</span>
          </div>
          <div className="terminal-text opacity-80 pl-4">
            More projects loading...<span className="animate-pulse">█</span>
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

export default ProjectsContent;