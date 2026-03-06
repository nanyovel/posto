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
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-background px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-7 flex flex-col justify-center">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
                Blog
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] text-balance">
                Ideas e inspiracion para tus espacios
              </h1>
              <div className="mt-8 flex items-center gap-6">
                <div className="h-px w-16 bg-foreground/20" />
                <p className="text-sm text-muted-foreground max-w-xs">
                  Tendencias, consejos y reflexiones sobre el arte del diseno de interiores
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/blog/blog-hero.jpg"
                  alt="Mesa de trabajo de diseno de interiores"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
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
