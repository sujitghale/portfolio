import SocialMedia from '../SocialMedia';

const ContactContent = () => {
  return (
    <div className="space-y-6">
      <div className="terminal-prompt text-2xl font-mono mb-6">{'>'} CONTACT.EXE</div>
      
      <div className="space-y-4 text-sm font-mono">
        <div className="flex items-center space-x-2">
          <span className="terminal-prompt">sujit@portfolio:~$</span>
          <span className="terminal-text">ping sujit.ghale</span>
        </div>
        
        <div className="terminal-text pl-4 space-y-1">
          <div>PING sujit.ghale (192.168.1.42): 56 data bytes</div>
          <div>64 bytes from sujit.ghale: icmp_seq=0 time=0.1ms</div>
          <div>64 bytes from sujit.ghale: icmp_seq=1 time=0.1ms</div>
          <div>64 bytes from sujit.ghale: icmp_seq=2 time=0.1ms</div>
          <div className="terminal-prompt">--- Connection established! ---</div>
        </div>

        <div className="space-y-3 pt-4">
          <div className="flex items-center space-x-2">
            <span className="terminal-prompt">sujit_ghale@portfolio:~$</span>
            <span className="terminal-text">cat contact_info.txt</span>
          </div>
          
          <div className="terminal-text pl-4 space-y-2">
            <div>📧 Email: sujitghale0110@gmail.com</div>
            <div>🌐 Location: Somewhere on Earth</div>
            <div>⏰ Timezone: Always good time</div>
            <div>📱 Response Time: Usually within 24 hours</div>
            <div>📞 Best Contact Time: whenever you want </div>
          </div>
        </div>

        <div className="pt-6 border-t border-terminal-green/30">
          <SocialMedia />
        </div>

        <div className="space-y-2 pt-4">
          <div className="flex items-center space-x-2">
            <span className="terminal-prompt">sujit@portfolio:~$</span>
            <span className="terminal-text">echo "Let's build something !"</span>
          </div>
          <div className="terminal-text opacity-80 pl-4">
            Let's build something amazing together!
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

export default ContactContent;