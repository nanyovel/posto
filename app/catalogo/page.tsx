import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CatalogGrid } from "@/components/catalog/catalog-grid";

export const metadata: Metadata = {
  title: "Catalogo",
  description:
    "Explora nuestro catalogo de mobiliario de lujo: cocinas, salas, comedores, dormitorios, oficinas y baños. Diseño exclusivo por Posto Design.",
};

export default function CatalogPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Catalogo de Mobiliario
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Piezas que definen espacios
            </h1>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Nuestra seleccion curada de mobiliario combina artesania
              excepcional con diseño contemporaneo. Cada pieza es elegida para
              transformar tu espacio en un entorno de lujo y confort.
            </p>
          </div>
        </div>
      </section>

      {/* Catalog Grid with Filters */}
      <CatalogGrid />

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-primary text-primary-foreground px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight text-balance">
            ¿Buscas algo personalizado?
          </h2>
          <p className="mt-6 text-base md:text-lg opacity-70 leading-relaxed">
            Diseñamos mobiliario a medida para proyectos que requieren piezas
            unicas. Contactanos para una consulta personalizada.
          </p>
          <Link
            href="/contacto"
            className="mt-10 inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-3 text-sm uppercase tracking-[0.15em] font-medium hover:bg-primary-foreground/90 transition-colors"
          >
            Solicitar Cotizacion
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
