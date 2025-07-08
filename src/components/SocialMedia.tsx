import { Github, Linkedin, Mail, Twitter, Instagram } from 'lucide-react';

const SocialMedia = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/sujitghale',
      color: 'hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/sujitghale',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/sujitghale',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/sujitghale',
      color: 'hover:text-pink-400'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:sujit@example.com',
      color: 'hover:text-green-400'
    }
  ];

  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="terminal-prompt text-lg font-mono">
        {'>'} CONNECT_WITH_ME
      </div>
      
      <div className="flex space-x-4">
        {socialLinks.map((social) => {
          const IconComponent = social.icon;
          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon p-3 rounded-lg terminal-text border transition-all duration-300 group"
              aria-label={`Visit ${social.name} profile`}
            >
              <IconComponent size={24} className="transition-transform duration-300 group-hover:scale-110" />
            </a>
          );
        })}
      </div>
      
      <div className="text-sm terminal-text opacity-80 font-mono text-center">
        printf("Let's build something amazing together!");
      </div>
    </div>
  );
};

export default SocialMedia;