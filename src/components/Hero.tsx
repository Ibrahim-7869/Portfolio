import { useEffect, useState } from 'react';
import { ArrowRight, Github, Linkedin, Mail, Terminal } from 'lucide-react';

const commands = [
  '$ python -m backend.developer --mode=passionate',
  '$ docker run -d --name career -e AMBITION=high ibrahim/backend',
  '$ kubectl apply -f dreams.yaml',
  '$ git commit -m "Building the future, one API at a time"',
];

export default function Hero() {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const command = commands[currentCommand];

    if (isTyping) {
      if (displayedText.length < command.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(command.slice(0, displayedText.length + 1));
        }, 30 + Math.random() * 30);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 20);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(true);
        setCurrentCommand((prev) => (prev + 1) % commands.length);
      }
    }
  }, [displayedText, isTyping, currentCommand]);

  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-[#0a0a0a] grid-pattern">
      {/* Subtle gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#ff6b35]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#ff6b35]/3 rounded-full blur-3xl" />

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex pt-20">
        {/* Left accent bar */}
        <div className="hidden lg:block w-1 bg-[#ff6b35] absolute left-0 top-0 bottom-0" />

        {/* Content area */}
        <div className="flex-1 flex flex-col justify-center px-8 lg:px-16 xl:px-24 max-w-6xl mx-auto">
          {/* Top meta info */}
          <div className="flex items-center gap-4 mb-12 font-mono text-sm text-[#737373] animate-slide-left">
            <span className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
              AVAILABLE FOR WORK
            </span>
            <span className="text-[#262626]">|</span>
            <span>BAHAWALPUR, PAKISTAN</span>
            <span className="text-[#262626]">|</span>
            <span>7TH SEMESTER CS</span>
          </div>

          {/* Main headline */}
          <div className="animate-slide-left" style={{ animationDelay: '0.1s' }}>
            <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold text-white leading-[0.9] mb-6">
              MUHAMMAD
              <br />
              <span className="text-[#ff6b35]">IBRAHIM</span>
            </h1>
          </div>

          {/* Role terminal */}
          <div className="mb-10 animate-slide-left" style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center gap-4 px-5 py-3 bg-[#141414] border border-[#262626] font-mono text-sm">
              <Terminal className="w-4 h-4 text-[#ff6b35]" />
              <span className="text-[#525252]">$ whoami</span>
              <span className="text-white">backend developer</span>
            </div>
          </div>

          {/* Terminal typing animation */}
          <div className="mb-12 animate-slide-left" style={{ animationDelay: '0.3s' }}>
            <div className="max-w-2xl bg-[#141414] border border-[#262626] p-4 font-mono text-sm">
              <div className="flex items-center gap-2 mb-3 pb-3 border-b border-[#262626]">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                <span className="ml-4 text-[#525252] text-xs">~/projects/career</span>
              </div>
              <div className="text-[#737373]">
                <span className="text-white">{displayedText}</span>
                <span className="animate-blink text-[#ff6b35]">▌</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12 animate-slide-left" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={() => scrollToSection('#projects')}
              className="group flex items-center gap-3 px-8 py-4 bg-[#ff6b35] text-black font-display font-semibold text-sm tracking-wide transition-all hover:gap-5"
            >
              VIEW MY WORK
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="group flex items-center gap-3 px-8 py-4 border border-[#262626] text-white font-display font-semibold text-sm tracking-wide transition-all hover:border-[#ff6b35] hover:text-[#ff6b35]"
            >
              GET IN TOUCH
            </button>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-12 animate-slide-left" style={{ animationDelay: '0.5s' }}>
            <div>
              <div className="text-4xl font-display font-bold text-white mb-1">3.56</div>
              <div className="text-xs font-mono text-[#525252] uppercase tracking-wider">GPA</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-white mb-1">500+</div>
              <div className="text-xs font-mono text-[#525252] uppercase tracking-wider">Users Supported</div>
            </div>
            <div className="hidden sm:block">
              <div className="text-4xl font-display font-bold text-white mb-1">100</div>
              <div className="text-xs font-mono text-[#525252] uppercase tracking-wider">Days of DevOps</div>
            </div>
          </div>
        </div>

        {/* Right side social links - vertical */}
        <div className="hidden lg:flex flex-col items-center justify-end gap-6 pb-32 pr-8">
          <div className="w-px h-32 bg-[#262626]" />
          <a
            href="https://github.com/Ibrahim-7869"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#525252] hover:text-[#ff6b35] transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/muhammed-ibrahim-cs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#525252] hover:text-[#ff6b35] transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=Majidibrahim113@gmail.com" target='_blank'
            className="text-[#525252] hover:text-[#ff6b35] transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
          <div className="w-px h-32 bg-[#262626]" />
        </div>
      </div>
    </section>
  );
}
