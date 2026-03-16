import { Link } from 'react-router-dom';

type Props = {
  title: string;
  description: string;
};

export default function PlaceholderPage({ title, description }: Props) {
  return (
    <main className="empty-page">
      <div className="rounded-[32px] border border-black/6 bg-white/80 p-8 shadow-[0_18px_40px_rgba(0,0,0,0.05)] backdrop-blur-sm sm:p-10 lg:p-12">
        <span className="inline-flex rounded-full bg-brand/10 px-4 py-2 text-sm font-semibold text-brand">Template halaman kosong</span>
        <h1 className="mt-6 text-[36px] font-bold tracking-[-0.04em] text-ink sm:text-[48px]">{title}</h1>
        <p className="mt-4 max-w-[720px] text-[16px] leading-8 text-muted sm:text-[18px]">{description}</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {['Hero section', 'Konten utama', 'CTA / formulir', 'Sidebar / filter', 'SEO content', 'FAQ section'].map((item) => (
            <div key={item} className="rounded-2xl border border-dashed border-black/10 bg-page px-5 py-5 text-[15px] text-[#374151]">
              {item}
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link to="/" className="inline-flex h-11 items-center justify-center rounded-xl bg-brand px-5 text-sm font-semibold text-white transition-colors hover:bg-[#086429]">
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </main>
  );
}
