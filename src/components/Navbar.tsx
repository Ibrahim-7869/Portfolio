import { useState, useEffect } from 'react';
import { Menu, X, Terminal, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-[#1a1a1a]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollTo('#hero')}
            className="group flex items-center gap-3 font-mono text-sm"
          >
            <Terminal className="w-5 h-5 text-[#ff6b35]" />
            <span className="text-white">
              <span className="text-[#525252]">{'<'}</span>MIBRAHIM
              <span className="text-[#525252]">{'/>'}</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, i) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className="group relative font-mono text-xs tracking-wider text-[#525252] hover:text-white transition-colors"
              >
                <span className="text-[#ff6b35] mr-1">{String(i + 1).padStart(2, '0')}</span>
                {item.label.toUpperCase()}
              </button>
            ))}

            <div className="w-px h-4 bg-[#262626]" />

            <button
              onClick={toggleTheme}
              className="p-2 text-[#525252] hover:text-[#ff6b35] transition-colors"
            >
              {theme === 'dark' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#525252] hover:text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#0a0a0a] border-t border-[#1a1a1a] px-8 py-6">
          {navItems.map((item, i) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              className="block w-full text-left py-4 font-mono text-sm text-[#525252] hover:text-white transition-colors"
            >
              <span className="text-[#ff6b35] mr-3">{String(i + 1).padStart(2, '0')}</span>
              {item.label.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
