import type { Metadata } from "next";
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
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-secondary px-6">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Blog
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance max-w-3xl">
            Ideas e inspiracion para tus espacios
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Tendencias, consejos practicos y reflexiones sobre el arte del
            diseno de interiores, directamente desde nuestro estudio.
          </p>
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
