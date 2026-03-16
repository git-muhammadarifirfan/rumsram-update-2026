import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
} from '../ui/resizable-navbar';
import LogoMark from './LogoMark';

export default function SiteNavbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const reduceMotion = useReducedMotion();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navItems = useMemo(
    () => [
      { name: 'Beranda', link: '/' },
      { name: 'Tentang', link: '/tentang' },
      { name: 'Program', link: '/program' },
      { name: 'Kegiatan', link: '/kegiatan' },
      { name: 'Galeri', link: '/galeri' },
      { name: 'Blog', link: '/blog' },
      { name: 'Kontak', link: '/kontak' },
    ],
    [],
  );

  const go = (link: string) => {
    setIsMobileMenuOpen(false);
    navigate(link);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -14, scale: 0.98 }}
      animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
      }
      className="fixed left-0 right-0 top-5 z-[9999] flex justify-center px-6 xl:px-8"
    >
      <Navbar scrolled={scrolled}>
        <NavBody>
          <button
            onClick={() => go('/')}
            className="group flex items-center gap-3"
            aria-label="Go to home"
          >
            <LogoMark />
            <span className="text-[17px] font-semibold tracking-[-0.03em] text-[#111827]">
              Yayasan <span className="font-normal text-[#303030]">Rumsram</span>
            </span>
          </button>

          <NavItems
            items={navItems.map((it) => ({
              name: it.name,
              link: it.link,
              onClick: () => go(it.link),
              active: location.pathname === it.link,
            }))}
          />

          <div className="flex items-center gap-3">
            <NavbarButton variant="primary" onClick={() => go('/join-us')}>
              Join Us
            </NavbarButton>
          </div>
        </NavBody>

        <MobileNav>
          <div className="relative">
            <MobileNavHeader>
              <button
                onClick={() => go('/')}
                className="group flex items-center gap-3"
                aria-label="Go to home"
              >
                <LogoMark />
                <span className="text-[16px] font-semibold tracking-[-0.03em] text-[#111827]">
                  Yayasan <span className="font-normal text-[#303030]">Rumsram</span>
                </span>
              </button>

              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((v) => !v)}
              />
            </MobileNavHeader>

            <AnimatePresence>
              {isMobileMenuOpen && (
                <>
                  <motion.button
                    type="button"
                    aria-label="Close menu"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="fixed inset-0 z-[9998] bg-black/5 backdrop-blur-[1px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  />

                  <motion.div
                    className="absolute left-0 right-0 top-full z-[9999] mt-3"
                    initial={{ opacity: 0, y: -8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="mx-auto w-full max-w-[420px] overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-[0_18px_40px_rgba(0,0,0,0.1)]">
                      <div className="p-2">
                        {navItems.map((it, idx) => (
                          <button
                            key={idx}
                            onClick={() => go(it.link)}
                            className={`w-full rounded-2xl px-4 py-3 text-left text-[15px] font-medium transition-colors ${
                              location.pathname === it.link
                                ? 'bg-[#0c7a33]/10 text-[#0c7a33]'
                                : 'text-gray-700 hover:bg-black/5'
                            }`}
                          >
                            {it.name}
                          </button>
                        ))}
                      </div>

                      <div className="px-3 pb-3">
                        <button
                          onClick={() => go('/join-us')}
                          className="flex h-12 w-full items-center justify-center rounded-2xl bg-[#0c7a33] font-semibold text-white transition-colors hover:bg-[#0a672d]"
                        >
                          Join Us
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </MobileNav>
      </Navbar>
    </motion.div>
  );
}
