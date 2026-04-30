import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Signature Pieces', path: '/signature-pieces' },
  { label: 'Inquire', path: '/inquire' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? 'bg-cream border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 md:h-20">
        <Link
          to="/"
          className={`font-heading text-sm tracking-[0.2em] uppercase transition-colors duration-300 ${
            scrolled || !isHome ? 'text-ink' : 'text-white'
          }`}
        >
          The Ever After Edit
        </Link>

        <nav className="hidden md:flex items-center gap-6 lg:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xs tracking-widest uppercase font-body transition-colors duration-300 ${
                location.pathname === link.path
                  ? scrolled || !isHome
                    ? 'text-accent'
                    : 'text-accent'
                  : scrolled || !isHome
                  ? 'text-ink-secondary hover:text-ink'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className={`md:hidden transition-colors duration-300 ${
            scrolled || !isHome ? 'text-ink' : 'text-white'
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-cream border-b border-border">
          <nav className="flex flex-col px-6 py-6 gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs tracking-widest uppercase font-body transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-accent'
                    : 'text-ink-secondary hover:text-ink'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
