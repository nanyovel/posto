import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Ruler, Palette, Layers } from "lucide-react";
import { products } from "@/lib/catalog-data";

export async function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) return { title: "Producto no encontrado" };
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    console.log("no❌❌❌❌❌❌❌");
    notFound();
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const categoryLabel =
    product.category === "cocinas"
      ? "Cocinas"
      : product.category === "salas"
      ? "Salas"
      : product.category === "comedores"
      ? "Comedores"
      : product.category === "dormitorios"
      ? "Dormitorios"
      : product.category === "oficinas"
      ? "Oficinas"
      : "Banos";

  return (
    <>
      {/* Breadcrumb */}
      <section className="pt-28 lg:pt-36 px-6">
        <div className="mx-auto max-w-7xl">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs text-muted-foreground"
          >
            <Link
              href="/catalogo"
              className="hover:text-foreground transition-colors"
            >
              Catalogo
            </Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-12 lg:py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Image */}
            <div className="relative aspect-[4/3] lg:aspect-square overflow-hidden">
              <Image
                src={product.image}
                alt={product.alt}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">
                {categoryLabel}
              </p>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
                {product.name}
              </h1>
              {/* <p className="mt-4 text-xl font-medium text-foreground">
                {product.price}
              </p> */}
              <p className="mt-6 text-base text-muted-foreground leading-relaxed">
                {product.description}
              </p>

              {/* Specs */}
              <div className="mt-10 flex flex-col gap-6 border-t border-border pt-8">
                <div className="flex items-start gap-4">
                  <Layers className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1">
                      Materiales
                    </p>
                    <p className="text-sm text-foreground leading-relaxed">
                      {product.materials.join(" / ")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Ruler className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1">
                      Dimensiones
                    </p>
                    <p className="text-sm text-foreground">
                      {product.dimensions}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Palette className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1">
                      Colores disponibles
                    </p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {product.colors.map((color) => (
                        <span
                          key={color}
                          className="text-xs text-foreground border border-border px-3 py-1"
                        >
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3 text-sm uppercase tracking-[0.15em] font-medium hover:bg-primary/90 transition-colors"
                >
                  Solicitar Cotizacion
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/catalogo"
                  className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-8 py-3 text-sm uppercase tracking-[0.15em] font-medium hover:bg-secondary transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Volver al Catalogo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-24 lg:py-32 bg-secondary px-6">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">
                  Tambien te puede interesar
                </p>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                  Productos relacionados
                </h2>
              </div>
              <Link
                href="/catalogo"
                className="hidden md:inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
              >
                Ver todo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((rp) => (
                <Link
                  key={rp.id}
                  href={`/catalogo/${rp.id}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/3] overflow-hidden mb-4">
                    <Image
                      src={rp.image}
                      alt={rp.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-foreground group-hover:text-muted-foreground transition-colors">
                    {rp.name}
                  </h3>
                  {/* <p className="text-sm text-muted-foreground mt-1">
                    {rp.price}
                  </p> */}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
