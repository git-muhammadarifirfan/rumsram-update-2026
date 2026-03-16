import { useEffect, useMemo, useRef, useState } from "react";
import {
  CheckCircle2,
  ArrowRight,
  Send,
  ChevronRight,
  Quote,
  FolderKanban,
  CalendarDays,
  MapPinned,
  MessagesSquare,
} from "lucide-react";
import { Link } from "react-router-dom";

const latestActivities = [
  {
    image: "/assets/SAM_6089.jpg",
    title: "Rumsram Salurkan Bantuan Pendidikan di Jayapura",
    text: "Membangun sistem yang presisi dan terstruktur sesuai dengan metodologi penelitian yang ada gunakan. Layanan ini berfokus pada pengembangan aplikasi berbasis web, mobile, dan desktop.",
    date: "12 Apr 2024",
  },
  {
    image:
      "/assets/Free-Gaza-Circus-Instagram_2-copy-e1716198440429-1800x0-c-center.jpg",
    title: "Program Kesehatan Keliling di Pegunungan Papua",
    text: "Membangun sistem yang presisi dan terstruktur sesuai dengan metodologi penelitian yang relevan di lapangan.",
    date: "08 Apr 2024",
  },
  {
    image: "/assets/Craigieburn-childcare-5-1.jpg",
    title: "Cerita Siswa di Kampung: Masa Depan Kami Lebih Cerah",
    text: "Membangun sistem yang presisi dan terstruktur sesuai dengan metodologi penelitian yang relevan di lapangan.",
    date: "02 Apr 2024",
  },
  {
    image: "/assets/Craigieburn-childcare-3-1.jpg.webp",
    title: "Kolaborasi Komunitas untuk Sanitasi Desa",
    text: "Membangun sistem yang presisi dan terstruktur sesuai dengan metodologi penelitian yang relevan di lapangan.",
    date: "27 Mar 2024",
  },
  {
    image:
      "/assets/group-asian-caucasian-kids-having-fun-park_52137-44305.avif",
    title: "Anak Papua dan Akses Belajar yang Setara",
    text: "Membangun sistem yang presisi dan terstruktur sesuai dengan metodologi penelitian yang relevan di lapangan.",
    date: "19 Mar 2024",
  },
  {
    image: "/assets/SAM_6089.jpg",
    title: "Pendampingan Literasi Berbasis Kampung",
    text: "Membangun sistem yang presisi dan terstruktur sesuai dengan metodologi penelitian yang relevan di lapangan.",
    date: "11 Mar 2024",
  },
];

const workItems = [
  { number: "12", color: "#ff1d16" },
  { number: "32", color: "#2c25ff" },
  { number: "22", color: "#000000" },
  { number: "06", color: "#006a24" },
  { number: "23", color: "#840064" },
];

const quickLinks = [
  {
    icon: FolderKanban,
    label: "Program",
    href: "#focus-program",
  },
  {
    icon: CalendarDays,
    label: "Kegiatan",
    href: "#publikasi-terbaru",
  },
  {
    icon: MapPinned,
    label: "Wilayah Kerja",
    href: "#wilayah-kerja",
  },
  {
    icon: MessagesSquare,
    label: "Hubungi Kami",
    href: "#footer-kontak",
  },
];

const heroStats = [
  { value: 12, suffix: "+", label: "Program Aktif" },
  { value: 35, suffix: "+", label: "Kegiatan Terlaksana" },
  { value: 8, suffix: "", label: "Komunitas Dampingan" },
  { value: 10, suffix: "+", label: "Mitra Kolaborasi" },
];

const aboutPoints = [
  "Program dikelola bersama komunitas",
  "Fokus pada dampak yang terukur dan berkelanjutan",
  "Mendukung literasi, sanitasi, dan ekonomi lokal",
  "Membuka ruang kolaborasi bagi relawan dan donatur",
];

const focusPrograms = [
  {
    id: "tanggap-bencana",
    icon: "/assets/Event Accepted.svg",
    title: "Tanggap Darurat Bencana",
    short: "Respons cepat untuk kebutuhan mendesak masyarakat terdampak.",
    description:
      "Yayasan Rumsram mendukung masyarakat terdampak bencana melalui distribusi bantuan dasar, pendampingan lapangan, dan koordinasi kebutuhan darurat agar proses pemulihan berjalan lebih cepat dan manusiawi.",
    relatedPrograms: [
      "Distribusi logistik darurat",
      "Pendampingan keluarga terdampak",
      "Koordinasi kebutuhan lapangan",
    ],
  },
  {
    id: "iklim-risiko",
    icon: "/assets/Worldwide Location.svg",
    title: "Adaptasi Perubahan Iklim & Pengurangan Risiko Bencana",
    short:
      "Penguatan komunitas agar lebih siap menghadapi perubahan lingkungan.",
    description:
      "Kami mendorong kapasitas komunitas dalam memahami risiko, menyusun langkah mitigasi, dan membangun praktik hidup yang lebih adaptif terhadap perubahan iklim serta ancaman bencana di wilayah Papua.",
    relatedPrograms: [
      "Edukasi kesiapsiagaan kampung",
      "Pemetaan risiko berbasis komunitas",
      "Penguatan sanitasi dan lingkungan sehat",
    ],
  },
  {
    id: "ekonomi",
    icon: "/assets/Send To Back.svg",
    title: "Pemberdayaan Ekonomi",
    short: "Mendorong kemandirian keluarga dan kelompok usaha lokal.",
    description:
      "Program ekonomi Yayasan Rumsram berfokus pada penguatan kapasitas usaha kecil, kelompok perempuan, dan komunitas lokal agar memiliki akses pengetahuan, pendampingan, dan peluang pengembangan ekonomi yang berkelanjutan.",
    relatedPrograms: [
      "Pendampingan usaha mikro",
      "Pelatihan kelompok perempuan",
      "Penguatan ekonomi berbasis komunitas",
    ],
  },
];

const testimonials = [
  {
    name: "Warga Dampingan",
    role: "Biak Numfor, Papua",
    image: "/assets/SAM_6089.jpg",
    quote:
      "Program yang dijalankan sangat membantu masyarakat. Pendampingan yang diberikan terasa dekat, jelas, dan benar-benar menjawab kebutuhan kami di lapangan.",
  },
  {
    name: "Mitra Komunitas",
    role: "Papua",
    image: "/assets/Craigieburn-childcare-3-1.jpg.webp",
    quote:
      "Kami merasa dilibatkan, bukan hanya menerima bantuan. Cara kerja Yayasan Rumsram membangun kepercayaan dan membuat program lebih berdampak.",
  },
  {
    name: "Penerima Manfaat",
    role: "Wilayah Pegunungan Papua",
    image:
      "/assets/group-asian-caucasian-kids-having-fun-park_52137-44305.avif",
    quote:
      "Anak-anak dan keluarga di kampung sangat merasakan perubahan. Kehadiran program membuat kami punya harapan dan semangat yang lebih besar.",
  },
  {
    name: "Relawan Lapangan",
    role: "Papua Barat",
    image: "/assets/Craigieburn-childcare-5-1.jpg",
    quote:
      "Kolaborasi di lapangan berjalan baik karena tim sangat terbuka, rapi, dan cepat menyesuaikan kebutuhan masyarakat.",
  },
  {
    name: "Tokoh Komunitas",
    role: "Biak",
    image:
      "/assets/Free-Gaza-Circus-Instagram_2-copy-e1716198440429-1800x0-c-center.jpg",
    quote:
      "Kami melihat perubahan yang nyata. Program tidak hanya datang sesaat, tetapi memberi arah untuk keberlanjutan.",
  },
  {
    name: "Orang Tua Siswa",
    role: "Papua",
    image: "/assets/SAM_6089.jpg",
    quote:
      "Anak-anak menjadi lebih semangat belajar dan kami sebagai orang tua merasa didukung dalam proses pendampingan.",
  },
];

const handleSmoothScroll = (
  e: React.MouseEvent<HTMLAnchorElement>,
  targetId: string
) => {
  e.preventDefault();

  const el = document.querySelector(targetId);
  if (!el) return;

  const yOffset = -110; // sesuaikan kalau ada navbar fixed
  const y =
    el.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
};

{quickLinks.map((item) => {
  const Icon = item.icon;

  return (
    <a
      key={item.label}
      href={item.href}
      onClick={(e) => handleSmoothScroll(e, item.href)}
      className="group flex min-w-[112px] flex-col items-center text-center text-white"
    >
      <div className="flex h-[62px] w-[62px] items-center justify-center rounded-[18px] bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-white/16">
        <Icon className="h-8 w-8 text-white" strokeWidth={2.1} />
      </div>
      <span className="mt-3 text-[15px] font-semibold leading-tight tracking-[-0.02em] text-white lg:text-[16px]">
        {item.label}
      </span>
    </a>
  );
})}

{quickLinks.map((item) => {
  const Icon = item.icon;

  return (
    <a
      key={item.label}
      href={item.href}
      onClick={(e) => handleSmoothScroll(e, item.href)}
      className="group flex flex-col items-center text-center"
    >
      <div className="flex h-[62px] w-[62px] items-center justify-center rounded-[18px] bg-brand transition-transform duration-300 group-hover:-translate-y-0.5">
        <Icon className="h-7 w-7 text-white" strokeWidth={2.1} />
      </div>
      <span className="mt-2.5 text-[15px] font-semibold tracking-[-0.02em] text-brand">
        {item.label}
      </span>
    </a>
  );
})}


function CountUp({
  end,
  suffix = "",
  duration = 1600,
  start = false,
}: {
  end: number;
  suffix?: string;
  duration?: number;
  start?: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTimestamp: number | null = null;
    let frame = 0;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const current = Math.floor(progress * end);

      setCount(current);

      if (progress < 1) {
        frame = window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    frame = window.requestAnimationFrame(step);

    return () => window.cancelAnimationFrame(frame);
  }, [end, duration, start]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function HomePage() {
  const galleryItems = latestActivities.slice(0, 6);
  const newsItems = latestActivities.slice(0, 4);

  const [activeFocusIndex, setActiveFocusIndex] = useState(0);
  const activeFocus = focusPrograms[activeFocusIndex];

  const statsRef = useRef<HTMLDivElement | null>(null);
  const [startCount, setStartCount] = useState(false);

  const marqueeItems = useMemo(() => [...testimonials, ...testimonials], []);

  useEffect(() => {
    const node = statsRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveFocusIndex((prev) => (prev + 1) % focusPrograms.length);
    }, 1500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <main className="overflow-x-hidden bg-white text-[#161616]">
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes testimonial-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .testimonial-marquee-track {
          width: max-content;
          animation: testimonial-marquee 18s linear infinite;
          will-change: transform;
        }

        .testimonial-marquee-wrap:hover .testimonial-marquee-track {
          animation-play-state: paused;
        }
      `}</style>

      {/* HERO + QUICK NAV + STATS */}
      <section className="bg-white pt-32 sm:pt-36 lg:mt-5 lg:pt-24">
        <div className="mx-auto max-w-[1360px] px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1260px]">
            <div className="relative overflow-hidden rounded-[30px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] sm:rounded-[34px]">
              <img
                src="/assets/Free-Gaza-Circus-Instagram_2-copy-e1716198440429-1800x0-c-center.jpg"
                alt="Anak-anak Papua"
                className="h-[430px] w-full object-cover sm:h-[520px] lg:h-[620px]"
              />

              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.66)_0%,rgba(0,0,0,.44)_34%,rgba(0,0,0,.18)_68%,rgba(0,0,0,.10)_100%)]" />

              <div className="absolute inset-x-0 top-1/2 -translate-y-[58%] px-8 text-white sm:px-12 lg:px-14">
                <div className="max-w-[640px]">
                  <h1 className="text-[36px] font-bold leading-[1.02] tracking-[-0.06em] sm:text-[54px] lg:text-[72px]">
                    Share your love to make someone&apos;s life better.
                  </h1>

                  <p className="mt-5 max-w-[560px] text-[17px] leading-[1.65] tracking-[-0.02em] text-white/92 sm:text-[18px] lg:text-[20px]">
                    Bersama Yayasan Rumsram, kita mendorong pendidikan literasi,
                    air bersih, ekonomi mikro, dan penguatan masyarakat adat.
                  </p>
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-16 hidden px-8 sm:block lg:px-14">
                <div className="mx-auto flex max-w-[760px] items-center justify-center gap-5 lg:gap-8">
                  {quickLinks.map((item) => {
                    const Icon = item.icon;

                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        className="group flex min-w-[112px] flex-col items-center text-center text-white"
                      >
                        <div className="flex h-[62px] w-[62px] items-center justify-center rounded-[18px] bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-white/16">
                          <Icon
                            className="h-8 w-8 text-white"
                            strokeWidth={2.1}
                          />
                        </div>
                        <span className="mt-3 text-[15px] font-semibold leading-tight tracking-[-0.02em] text-white lg:text-[16px]">
                          {item.label}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/55" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/55" />
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-[1180px] pt-8 sm:hidden">
            <div className="grid grid-cols-2 gap-x-4 gap-y-6">
              {quickLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group flex flex-col items-center text-center"
                  >
                    <div className="flex h-[62px] w-[62px] items-center justify-center rounded-[18px] bg-brand transition-transform duration-300 group-hover:-translate-y-0.5">
                      <Icon className="h-7 w-7 text-white" strokeWidth={2.1} />
                    </div>
                    <span className="mt-2.5 text-[15px] font-semibold tracking-[-0.02em] text-brand">
                      {item.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          <div
            ref={statsRef}
            className="mx-auto max-w-[1120px] pb-10 pt-12 sm:pb-14 sm:pt-14 lg:pb-4"
          >
            <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-x-6">
              {heroStats.map((item) => (
                <article key={item.label} className="text-center">
                  <div className="text-[42px] font-bold leading-none tracking-[-0.05em] text-brand sm:text-[50px] lg:text-[58px]">
                    <CountUp
                      end={item.value}
                      suffix={item.suffix}
                      start={startCount}
                    />
                  </div>
                  <p className="mt-3 text-[16px] font-medium tracking-[-0.02em] text-[#1d6b3b] sm:text-[17px]">
                    {item.label}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PUBLIKASI TERBARU */}
      <section
        id="publikasi-terbaru"
        className=" bg-navy py-14 sm:py-16 lg:mb-20 lg:mt-20"
      >
        <div className="mx-auto max-w-[1360px] px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[900px] text-center">
            <h2 className="text-[34px] font-bold leading-[1.08] tracking-[-0.05em] text-white sm:text-[44px] lg:text-[52px]">
              Publikasi Terbaru
            </h2>
            <p className="mx-auto mt-4 max-w-[760px] text-[15px] leading-7 text-white sm:text-[16px] sm:leading-8">
              Dokumentasi kegiatan dan berita terbaru kami disusun agar
              pengunjung bisa langsung menangkap program lapangan.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-[1240px] gap-6 lg:mb-20 lg:grid-cols-[1.18fr_.82fr]">
            <article className="rounded-[24px] bg-white p-5 shadow-[0_16px_40px_rgba(0,0,0,0.08)] sm:p-6">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <h3 className="text-[24px] font-bold tracking-[-0.04em] text-[#143847] sm:text-[28px]">
                    Galeri Kegiatan
                  </h3>
                  <span className="mt-2 block h-[2px] w-24 rounded-full bg-[#caa864]" />
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-4">
                {galleryItems.slice(0, 4).map((item, index) => (
                  <article
                    key={`${item.title}-${index}`}
                    className="group overflow-hidden rounded-[16px] bg-white"
                  >
                    <div className="overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-[180px] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03] sm:h-[205px]"
                      />
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-5 flex justify-start">
                <Link
                  to="/galeri"
                  className="inline-flex items-center gap-2 rounded-full border border-[#d9ddd7] px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.03em] text-[#24424a] transition-colors hover:bg-[#f3f6f2]"
                >
                  Lihat Semua Foto
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>

            <article className="rounded-[24px] bg-white p-5 shadow-[0_16px_40px_rgba(0,0,0,0.08)] sm:p-6">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <h3 className="text-[24px] font-bold tracking-[-0.04em] text-[#143847] sm:text-[28px]">
                    Media &amp; Berita
                  </h3>
                  <span className="mt-2 block h-[2px] w-24 rounded-full bg-[#caa864]" />
                </div>
              </div>

              <div className="mt-5 space-y-4">
                {newsItems.slice(0, 3).map((item, index) => (
                  <article
                    key={`${item.title}-${index}`}
                    className="flex items-start gap-4 rounded-[16px] border border-[#ecece7] bg-white p-3.5 transition-colors hover:bg-[#fafaf7]"
                  >
                    <div className="h-[92px] w-[110px] shrink-0 overflow-hidden rounded-[12px] bg-white">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="min-w-0">
                      <h4 className="line-clamp-2 text-[17px] font-semibold leading-[1.35] tracking-[-0.02em] text-[#1b2f38]">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-[12px] text-[#8b8f95]">
                        {item.date}
                      </p>
                      <p className="mt-2 line-clamp-2 text-[14px] leading-[1.6] text-[#66707a]">
                        {item.text}
                      </p>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-5 flex justify-start">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 rounded-full border border-[#d9ddd7] px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.03em] text-[#24424a] transition-colors hover:bg-[#f3f6f2]"
                >
                  Lihat Semua Berita
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-white py-16 sm:py-20 lg:mb-20">
        <div className="mx-auto grid max-w-[1360px] items-center gap-14 bg-white px-5 sm:px-6 lg:mt-6 lg:grid-cols-[1.02fr_.98fr] lg:gap-20 lg:px-8">
          <div className="relative mx-auto w-full max-w-[640px] bg-white">
            <div className="relative pb-10 lg:pb-14">
              <span className="absolute -left-4 top-10 z-10 h-[78px] w-[78px] rounded-full bg-brand sm:h-[88px] sm:w-[88px] lg:-left-7 lg:top-14 lg:h-[96px] lg:w-[96px]" />

              <div className="overflow-hidden rounded-[22px] bg-white shadow-[0_16px_34px_rgba(0,0,0,0.08)]">
                <img
                  className="h-[420px] w-full object-cover grayscale sm:h-[500px] lg:h-[560px]"
                  src="/assets/group-asian-caucasian-kids-having-fun-park_52137-44305.avif"
                  alt="Anak-anak"
                />
              </div>

              <div className="absolute -bottom-2 right-0 w-[42%] overflow-hidden rounded-[18px] border-[6px] border-white bg-white shadow-[0_16px_30px_rgba(0,0,0,0.10)] lg:-bottom-4">
                <img
                  className="h-[210px] w-full object-cover grayscale sm:h-[250px] lg:h-[310px]"
                  src="/assets/SAM_6089.jpg"
                  alt="Ibu dan anak"
                />
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[600px] bg-white">
            <span className="text-[16px] font-semibold tracking-[-0.02em] text-lilac sm:text-[17px]">
              Siapakah kita?
            </span>

            <h2 className="mt-3 max-w-[580px] text-[38px] font-bold leading-[1.08] tracking-[-0.05em] text-ink sm:text-[50px] lg:text-[60px]">
              Yayasan Rumsram Biak Papua
            </h2>

            <span className="mt-5 block h-[4px] w-[68px] rounded-full bg-brand" />

            <p className="mt-7 max-w-[560px] text-[16px] leading-[1.85] text-[#6d7077] sm:text-[17px] lg:text-[18px]">
              Yayasan Rumsram hadir bersama masyarakat untuk memperkuat
              pendidikan, kesehatan, sanitasi, ekonomi lokal, dan pengelolaan
              program berbasis komunitas di Papua. Kami mendorong perubahan yang
              terukur, transparan, dan berkelanjutan.
            </p>

            <ul className="mt-8 space-y-4">
              {aboutPoints.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[16px] font-semibold leading-[1.55] tracking-[-0.02em] text-ink sm:text-[17px] lg:text-[18px]"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9">
              <Link
                to="/join-us"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-brand px-9 text-[15px] font-semibold text-white shadow-[0_10px_18px_rgba(11,122,53,0.18)] transition-colors hover:bg-[#086429]"
              >
                Join Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOKUS PROGRAM + TESTIMONI */}
      <section id="focus-program" className="bg-navy py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1360px] px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[980px] text-center">
            <span className="text-[15px] font-medium tracking-[-0.02em] text-white/78">
              Fokus Program Yayasan Rumsram
            </span>

            <h2 className="mt-3 text-[34px] font-bold leading-[1.08] tracking-[-0.05em] text-white sm:text-[44px] lg:text-[54px]">
              Fokus Intervensi yang Relevan
              <span className="block text-brand">untuk Masyarakat Papua</span>
            </h2>

            <p className="mx-auto mt-5 max-w-[760px] text-[15px] leading-7 text-white/72 sm:text-[16px] sm:leading-8">
              Kami bekerja melalui fokus program yang dirancang sesuai kebutuhan
              nyata di lapangan. Fokus utama akan berubah otomatis, namun tetap
              bisa dipilih manual sesuai kebutuhan pengunjung.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {focusPrograms.map((item, index) => {
                const isActive = activeFocusIndex === index;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveFocusIndex(index)}
                    className={`group rounded-[24px] border text-left transition-all duration-500 ${
                      isActive
                        ? "border-brand bg-white text-[#17313b] shadow-[0_18px_40px_rgba(0,0,0,0.14)]"
                        : "border-white/70 bg-[#112856] text-white hover:border-white hover:bg-[#153161]"
                    }`}
                  >
                    <div className="flex h-full flex-col p-5 sm:p-6">
                      <div
                        className={`flex h-[62px] w-[62px] items-center justify-center rounded-2xl ${
                          isActive ? "bg-[#eef8f1]" : "bg-white/10"
                        }`}
                      >
                        <img
                          src={item.icon}
                          alt=""
                          aria-hidden="true"
                          className="h-9 w-9 object-contain"
                        />
                      </div>

                      <h3
                        className={`mt-5 text-[18px] font-semibold leading-[1.35] tracking-[-0.03em] ${
                          isActive ? "text-[#17313b]" : "text-white"
                        }`}
                      >
                        {item.title}
                      </h3>

                      <p
                        className={`mt-3 text-[14px] leading-7 ${
                          isActive ? "text-[#62707a]" : "text-white/75"
                        }`}
                      >
                        {item.short}
                      </p>

                      <div
                        className={`mt-5 inline-flex items-center gap-2 text-[13px] font-semibold ${
                          isActive ? "text-brand" : "text-white/90"
                        }`}
                      >
                        Lihat detail
                        <ChevronRight className="h-4 w-4" />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.14)] sm:p-8 lg:p-10">
              <div className="flex items-center gap-3">
                <div className="flex h-[58px] w-[58px] items-center justify-center rounded-2xl bg-[#eef8f1]">
                  <img
                    src={activeFocus.icon}
                    alt=""
                    aria-hidden="true"
                    className="h-8 w-8 object-contain"
                  />
                </div>

                <div>
                  <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-brand/80">
                    Fokus Utama
                  </span>
                  <h3 className="mt-1 text-[24px] font-bold leading-[1.2] tracking-[-0.04em] text-[#16313a] sm:text-[30px]">
                    {activeFocus.title}
                  </h3>
                </div>
              </div>

              <p className="mt-6 max-w-[720px] text-[15px] leading-8 text-[#64707a] transition-all duration-500 sm:text-[16px]">
                {activeFocus.description}
              </p>

              <div className="mt-8">
                <h4 className="text-[16px] font-semibold tracking-[-0.02em] text-[#17313b]">
                  Program Terkait
                </h4>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {activeFocus.relatedPrograms.map((program) => (
                    <div
                      key={program}
                      className="flex items-start gap-3 rounded-[16px] border border-[#eceee9] bg-[#fafbf8] px-4 py-4 transition-all duration-500"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                      <span className="text-[14px] font-medium leading-6 text-[#31464e] sm:text-[15px]">
                        {program}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/program"
                  className="inline-flex h-12 items-center justify-center rounded-xl bg-brand px-6 text-[14px] font-semibold text-white transition-colors hover:bg-[#086429]"
                >
                  Lihat Semua Program
                </Link>

                <Link
                  to="/join-us"
                  className="inline-flex h-12 items-center justify-center rounded-xl border border-[#dfe4de] px-6 text-[14px] font-semibold text-[#18323b] transition-colors hover:bg-[#f6f8f4]"
                >
                  Join Us
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16 sm:mt-20 lg:mt-24">
            <div className="mx-auto max-w-[880px] text-center">
              <span className="text-[15px] font-medium tracking-[-0.02em] text-white/78">
                Testimoni
              </span>

              <h2 className="mt-3 text-[32px] font-bold leading-[1.08] tracking-[-0.05em] text-white sm:text-[42px] lg:text-[50px]">
                Suara dari Lapangan
              </h2>

              <p className="mx-auto mt-4 max-w-[700px] text-[15px] leading-7 text-white/70 sm:text-[16px] sm:leading-8">
                Testimoni bergerak otomatis secara halus ke kiri, dan akan tetap
                cocok meskipun jumlah testimoni bertambah banyak.
              </p>
            </div>

            <div className="testimonial-marquee-wrap mt-10 overflow-hidden">
              <div className="testimonial-marquee-track flex gap-6">
                {marqueeItems.map((item, index) => (
                  <article
                    key={`${item.name}-${index}`}
                    className="w-[320px] shrink-0 rounded-[24px] bg-white p-6 shadow-[0_16px_40px_rgba(0,0,0,0.12)] sm:w-[360px] sm:p-7"
                  >
                    <div className="flex items-center gap-4">
                      <div className="h-[72px] w-[72px] overflow-hidden rounded-full ring-4 ring-[#f2f5ef]">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div>
                        <h3 className="text-[18px] font-semibold tracking-[-0.03em] text-[#17313b]">
                          {item.name}
                        </h3>
                        <p className="mt-1 text-[14px] text-[#7b8690]">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6">
                      <Quote className="h-8 w-8 text-brand/70" />
                    </div>

                    <p className="mt-4 text-[15px] leading-8 text-[#62707a]">
                      “{item.quote}”
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WILAYAH KERJA */}
      <section id="wilayah-kerja" className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1360px] px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[820px] text-center">
            <h2 className="text-[34px] font-bold leading-[1.1] tracking-[-0.05em] text-ink sm:text-[46px] lg:text-[56px]">
              Wilayah Kerja
            </h2>
            <h3 className="mt-2 text-[28px] font-normal leading-[1.14] tracking-[-0.04em] text-brand sm:text-[40px] lg:text-[48px]">
              Yayasan Rumsram Biak Papua
            </h3>
          </div>

          <div className="mt-12 grid items-center gap-10 lg:grid-cols-[280px_1fr] lg:gap-20">
            <div className="space-y-5">
              {workItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 rounded-[18px] border border-[#ecebe6] bg-white px-4 py-3"
                >
                  <span
                    className="inline-flex h-[44px] w-[44px] items-center justify-center rounded-full text-[16px] font-bold text-white"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.number}
                  </span>

                  <div className="leading-tight">
                    <strong className="block text-[16px] font-semibold tracking-[-0.03em] text-ink">
                      Nama Program
                    </strong>
                    <span className="mt-1 block text-[15px] text-[#5e6470]">
                      Daerah
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-[22px] bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.05)] sm:p-5 lg:p-6">
              <img
                src="/assets/map.png"
                alt="Peta wilayah kerja Papua"
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="footer-kontak" className="bg-navy py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-[1360px] gap-12 px-5 sm:px-6 lg:grid-cols-[1.3fr_.72fr_.72fr_.78fr] lg:gap-10 lg:px-8">
          <div>
            <div className="flex flex-wrap gap-x-7 gap-y-3 text-[15px] text-white/95 sm:text-[16px]">
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
              <a href="#">Linkedin</a>
              <a href="#">Pinterest</a>
            </div>

            <h3 className="mt-16 max-w-[430px] text-[32px] font-semibold leading-[1.25] tracking-[-0.03em]">
              Wir halten dich auf dem laufenden
            </h3>

            <div className="mt-10 flex items-center justify-between gap-4 border-b border-white/20 pb-4 text-[18px] text-white/85">
              <span>Deine E-Mail Adresse</span>
              <Send className="h-7 w-7" />
            </div>
          </div>

          <div className="space-y-5">
            <h4 className="text-[18px] font-semibold">Quick links</h4>
            <div className="flex flex-col gap-4 text-[16px] text-white/78">
              <a href="#">So gehts</a>
              <a href="#">Erfahrung</a>
              <a href="#">Aligner</a>
              <a href="#">Preise</a>
              <a href="#">Standorte</a>
            </div>
          </div>

          <div className="space-y-5">
            <h4 className="text-[18px] font-semibold">Newz</h4>
            <div className="flex flex-col gap-4 text-[16px] text-white/78">
              <a href="#">Blog</a>
              <a href="#">FAQ</a>
              <a href="#">Lift Media</a>
              <a href="#">Offene Stellen</a>
              <a href="#">Presse kit</a>
            </div>
          </div>

          <div className="space-y-5">
            <h4 className="text-[18px] font-semibold">Behandlung</h4>
            <div className="flex flex-col gap-4 text-[16px] text-white/78">
              <a href="#">Gratis Termin</a>
              <a href="#">Freunde einladen</a>
              <a href="#">Patienteninformationen</a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 flex max-w-[1360px] flex-col gap-8 border-t border-white/10 px-5 pt-8 text-[15px] text-white/78 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2026 Yayasan Rumsram. All right reserved</p>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <a href="#">Datenschutz</a>
            <a href="#">Impressum</a>
            <a href="#">Cookie Policy</a>
            <a href="#">AGBs</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
