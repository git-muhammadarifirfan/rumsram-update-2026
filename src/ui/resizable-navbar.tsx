import type { ReactNode } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export type NavItem = {
  name: string;
  link: string;
  active?: boolean;
  onClick?: () => void;
};

export function Navbar({
  children,
  scrolled = false,
}: {
  children: React.ReactNode;
  scrolled?: boolean;
}) {
  return (
    <motion.div
      initial={{ y: -14, opacity: 0, scale: 0.985 }}
      animate={{
        y: 0,
        opacity: 1,
        scale: 1,
        maxWidth: scrolled ? 1240 : 1380,
      }}
      transition={{ type: "spring", stiffness: 260, damping: 26 }}
      className="w-full"
      style={{ width: "100%" }}
    >
      <div
        className={`w-full rounded-full border border-black/5 backdrop-blur-md transition-all duration-300 ${
          scrolled
            ? "bg-white/95 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
            : "bg-white/85 shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
        }`}
      >
        {children}
      </div>
    </motion.div>
  );
}

export function NavBody({ children }: { children: ReactNode }) {
  return <div className="hidden min-h-[68px] items-center justify-between px-5 lg:px-7 md:flex">{children}</div>;
}

export function NavItems({ items }: { items: NavItem[] }) {
  return (
    <div className="flex items-center gap-7 lg:gap-8">
      {items.map((item) => (
        <button
          key={item.link}
          onClick={item.onClick}
          className={[
            'group relative py-1 text-[14px] font-medium tracking-[-0.01em] transition-colors',
            item.active ? 'text-ink' : 'text-[#2c3138] hover:text-brand',
          ].join(' ')}
        >
          {item.name}
          <span
            className={[
              'absolute -bottom-[3px] left-0 h-[2px] rounded-full bg-brand transition-all duration-300',
              item.active ? 'w-full' : 'w-0 group-hover:w-full',
            ].join(' ')}
          />
        </button>
      ))}
    </div>
  );
}

export function NavbarButton({ children, onClick, variant = 'primary' }: { children: ReactNode; onClick?: () => void; variant?: 'primary' | 'secondary' }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'inline-flex h-11 items-center justify-center rounded-xl px-5 text-[14px] font-semibold transition-colors',
        variant === 'primary'
          ? 'bg-brand text-white shadow-[0_10px_18px_rgba(11,122,53,0.18)] hover:bg-[#086429]'
          : 'border border-black/8 bg-white text-ink hover:bg-black hover:text-white',
      ].join(' ')}
    >
      {children}
    </button>
  );
}

export function MobileNav({ children }: { children: ReactNode }) {
  return <div className="px-4 py-3 md:hidden">{children}</div>;
}

export function MobileNavHeader({ children }: { children: ReactNode }) {
  return <div className="flex min-h-[48px] items-center justify-between gap-3">{children}</div>;
}

export function MobileNavToggle({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/7 bg-white text-ink transition-colors hover:bg-black hover:text-white"
      aria-label="Toggle menu"
    >
      {isOpen ? <X size={20} /> : <Menu size={20} />}
    </button>
  );
}
