import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/60 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          <div>
            <Link to="/" className="font-heading text-sm tracking-[0.2em] uppercase text-cream block mb-3">
              The Ever After Edit
            </Link>
            <p className="text-xs tracking-wide font-body">Luxury Custom Wedding Signage</p>
          </div>

          <nav className="flex flex-wrap gap-8">
            {[
              { label: 'Home', path: '/' },
              { label: 'About', path: '/about' },
              { label: 'Services', path: '/services' },
              { label: 'Signature Pieces', path: '/signature-pieces' },
              { label: 'Inquire', path: '/inquire' },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-xs tracking-widest uppercase font-body text-cream/60 hover:text-cream transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-body tracking-wide">
            &copy; {new Date().getFullYear()} The Ever After Edit. All rights reserved.
          </p>
          <p className="text-xs font-body tracking-wide">
            Bespoke signage for discerning couples.
          </p>
        </div>
        <p className="mt-6 text-center text-[11px] font-body tracking-wide opacity-40">
          Designed by{' '}
          <a
            href="https://www.rahoperations.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity duration-300"
          >
            RAH Operations
          </a>
        </p>
      </div>
    </footer>
  );
}
