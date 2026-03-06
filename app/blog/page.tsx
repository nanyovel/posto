import type { Metadata } from "next";
import Image from "next/image";
import { BlogGrid } from "@/components/blog/blog-grid";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Inspiracion, tendencias y consejos de diseno de interiores del equipo de Posto Design.",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <Image
          src="/images/blog/blog-hero.jpg"
          alt="Mesa de trabajo de diseno de interiores con muestras y planos"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary-foreground/60 mb-4">
                Blog
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight text-balance">
                Ideas e inspiracion para tus espacios
              </h1>
            </div>
            <div className="lg:pb-2">
              <p className="text-base md:text-lg text-primary-foreground/80 leading-relaxed max-w-md">
                Tendencias, consejos practicos y reflexiones sobre el arte del
                diseno de interiores, directamente desde nuestro estudio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 lg:py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <BlogGrid />
        </div>
      </section>
    </>
  );
}
