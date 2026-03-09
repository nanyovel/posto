import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/images/hero-living.jpg"
        alt="Luxury modern living room designed by NOIR Studio"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-primary/80" />
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto ">
        <p className="text-xs uppercase tracking-[0.4em] text-primary-foreground/70 mb-6 font-sans">
          Interior Design Studio
        </p>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-none text-balance">
          Donde la elegancia se diseña a tu medida
        </h1>
        <p className="mt-6 text-base md:text-lg text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed font-sans">
          Cada proyecto es único: creamos interiores personalizados,
          sofisticados y funcionales, diseñados especialmente para reflejar tu
          estilo y tus necesidades.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/portafolio"
            className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-3 text-sm uppercase tracking-[0.15em] font-medium hover:bg-primary-foreground/90 transition-colors"
          >
            Ver Portafolio
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 border border-primary-foreground/40 text-primary-foreground px-8 py-3 text-sm uppercase tracking-[0.15em] font-medium hover:bg-primary-foreground/10 transition-colors"
          >
            Contactanos
          </Link>
        </div>
      </div>
    </section>
  );
}
