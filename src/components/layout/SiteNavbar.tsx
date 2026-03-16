import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  NavBody,
  NavItems,
  Navbar,
  NavbarButton,
} from '../../ui/resizable-navbar';
import { joinUsRoute, primaryNavigation } from '../../data/navigation';
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

  const go = (link: string) => {
    setIsMobileMenuOpen(false);
    navigate(link);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -14, scale: 0.98 }}
      animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 right-0 top-4 z-[100] flex justify-center px-4 sm:top-5"
    >
      <Navbar scrolled={scrolled}>
        <NavBody>
          <button onClick={() => go('/')} className="group flex items-center gap-3" aria-label="Go to home">
            <LogoMark />
            <span className="text-[17px] font-bold tracking-[-0.03em] text-ink transition-opacity group-hover:opacity-80">
              Yayasan <span className="font-normal">Rumsram</span>
            </span>
          </button>

          <NavItems items={primaryNavigation.map((item) => ({ name: item.label, link: item.path, active: location.pathname === item.path, onClick: () => go(item.path) }))} />

          <div className="flex items-center gap-3">
            <NavbarButton variant="primary" onClick={() => go(joinUsRoute.path)}>
              {joinUsRoute.label}
            </NavbarButton>
          </div>
        </NavBody>

        <MobileNav>
          <div className="relative">
            <MobileNavHeader>
              <button onClick={() => go('/')} className="group flex items-center gap-3" aria-label="Go to home">
                <LogoMark />
                <span className="text-[16px] font-bold tracking-[-0.03em] text-ink transition-opacity group-hover:opacity-80">
                  Yayasan <span className="font-normal">Rumsram</span>
                </span>
              </button>

              <MobileNavToggle isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen((value) => !value)} />
            </MobileNavHeader>

            <AnimatePresence>
              {isMobileMenuOpen && (
                <>
                  <motion.button
                    type="button"
                    aria-label="Close menu"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="fixed inset-0 z-[99] bg-black/10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  />
                  <motion.div
                    className="absolute left-0 right-0 top-full z-[101] mt-3"
                    initial={{ opacity: 0, y: -8, scale: 0.985 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.985 }}
                    transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="mx-auto w-full max-w-[420px] overflow-hidden rounded-[28px] border border-black/6 bg-white shadow-card">
                      <div className="space-y-1 p-2.5">
                        {primaryNavigation.map((item) => (
                          <button
                            key={item.path}
                            onClick={() => go(item.path)}
                            className={[
                              'w-full rounded-2xl px-4 py-3 text-left text-[15px] font-medium transition-colors',
                              location.pathname === item.path ? 'bg-brand/10 text-brand' : 'text-[#334155] hover:bg-black/5',
                            ].join(' ')}
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                      <div className="px-3 pb-3">
                        <button
                          onClick={() => go(joinUsRoute.path)}
                          className="flex h-12 w-full items-center justify-center rounded-2xl bg-brand text-[15px] font-semibold text-white transition-colors hover:bg-[#086429]"
                        >
                          {joinUsRoute.label}
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
