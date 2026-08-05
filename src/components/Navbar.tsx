import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Journey', href: '#journey' },
  { name: 'Certifications', href: '#certificates' },
  { name: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'skills', 'projects', 'education', 'journey', 'certificates', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      const targetEl = document.querySelector(href);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
        setMobileOpen(false);
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-[9000] px-4 pt-4 sm:px-6 lg:px-8"
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all duration-300 ${
          scrolled
            ? 'border border-[#7C3AED]/30 bg-[#0F172A]/85 shadow-[0_12px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl'
            : 'border border-white/10 bg-[#08111F]/70 backdrop-blur-md'
        }`}
      >
        {/* Brand Logo */}
        <a
          href="/"
          className="group relative flex items-center gap-2.5 font-mono text-base font-extrabold tracking-wider text-[#F8FAFC]"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-[#7C3AED] to-[#38BDF8] text-xs font-black text-white shadow-[0_0_15px_rgba(124,58,237,0.5)]">
            SH
          </div>
          <span className="transition-colors group-hover:text-[#38BDF8]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            sithara<span className="text-[#7C3AED]">.me</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-colors ${
                  isActive ? 'text-[#F8FAFC]' : 'text-[#CBD5E1] hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#38BDF8] shadow-[0_0_10px_rgba(124,58,237,0.8)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Action Button */}
        <div className="hidden items-center gap-3 sm:flex">
          <a
            href="/assets/cv/Sithara Hansamali.pdf"
            download="Sithara Hansamali.pdf"
            className="group inline-flex items-center gap-2 rounded-full border border-[#7C3AED]/40 bg-[#7C3AED]/10 px-4 py-1.5 text-xs font-bold text-[#F8FAFC] transition-all hover:border-[#7C3AED] hover:bg-[#7C3AED] hover:shadow-[0_0_20px_rgba(124,58,237,0.4)]"
          >
            <Download className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 text-[#38BDF8]" />
            <span>CV</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#CBD5E1] transition-colors hover:border-[#7C3AED] hover:text-white md:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-2 overflow-hidden rounded-3xl border border-[#7C3AED]/30 bg-[#0F172A]/95 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="rounded-xl px-4 py-2.5 text-sm font-semibold text-[#CBD5E1] transition-colors hover:bg-[#7C3AED]/15 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
              <div className="mt-3 pt-3 border-t border-white/10">
                <a
                  href="/assets/cv/Sithara Hansamali.pdf"
                  download="Sithara Hansamali.pdf"
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#6D28D9] to-[#2563EB] px-4 py-2.5 text-sm font-bold text-white shadow-lg"
                >
                  <Download className="h-4 w-4" />
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
