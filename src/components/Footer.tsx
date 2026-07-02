import { Github, Linkedin, Mail, Terminal, ArrowUp } from 'lucide-react';

const socials = [
  { 
    name: 'GitHub', 
    href: 'https://github.com/Ibrahim-7869', 
    icon: Github,
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  { 
    name: 'LinkedIn', 
    href: 'https://linkedin.com/in/muhammed-ibrahim-cs', 
    icon: Linkedin,
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  { 
    name: 'Email', 
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=Majidibrahim113@gmail.com', 
    icon: Mail,
    target: '_blank',
    rel: 'noopener noreferrer'
  },
];

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1a1a1a]">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left - Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <Terminal className="w-5 h-5 text-[#ff6b35]" />
              <span className="font-mono text-sm text-white">
                <span className="text-[#525252]">{'<'}</span>MIBRAHIM
                <span className="text-[#525252]">{'/>'}</span>
              </span>
            </div>
            <p className="text-[#525252] text-sm leading-relaxed mb-6">
              Backend Developer & DevOps Enthusiast building scalable systems and cloud-native infrastructure.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#141414] border border-[#262626] flex items-center justify-center text-[#525252] hover:border-[#ff6b35] hover:text-[#ff6b35] transition-colors"
                  aria-label={s.name}
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Center - Navigation */}
          <div className="lg:col-span-4">
            <div className="font-mono text-xs text-[#525252] uppercase mb-4">Navigation</div>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link, i) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className="flex items-center gap-2 text-[#737373] font-mono text-sm hover:text-[#ff6b35] transition-colors text-left"
                >
                  <span className="text-[#404040]">{String(i + 1).padStart(2, '0')}</span>
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Right - Contact info */}
          <div className="lg:col-span-4">
            <div className="font-mono text-xs text-[#525252] uppercase mb-4">Contact</div>
            <div className="space-y-3 text-sm">
              <div className="text-[#737373]">
                <span className="text-[#525252]">Email:</span>{' '}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=Majidibrahim113@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ff6b35] transition-colors"
                >
                  Majidibrahim113@gmail.com
                </a>
              </div>
              <div className="text-[#737373]">
                <span className="text-[#525252]">Phone:</span>{' '}
                <a href="tel:+923256397906" className="hover:text-[#ff6b35] transition-colors">
                  +92 325 6397906
                </a>
              </div>
              <div className="text-[#737373]">
                <span className="text-[#525252]">Location:</span> Bahawalpur, Pakistan
              </div>
            </div>

            {/* Status */}
            <div className="mt-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="font-mono text-xs text-green-500">AVAILABLE FOR WORK</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-mono text-xs text-[#404040]">
            {year} MUHAMMAD IBRAHIM. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-[#404040]">
              BUILT WITH REACT + TAILWIND + SUPABASE
            </span>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-[#141414] border border-[#262626] flex items-center justify-center text-[#525252] hover:border-[#ff6b35] hover:text-[#ff6b35] transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
