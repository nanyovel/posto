"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/lib/catalog-data";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/catalogo/${product.id}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden mb-4">
        <Image
          src={product.image}
          alt={product.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary-foreground text-primary px-5 py-2 text-xs uppercase tracking-[0.15em] font-medium flex items-center gap-2">
            Ver Detalle
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-serif text-lg font-bold text-foreground group-hover:text-muted-foreground transition-colors">
            {product.name}
          </h3>
          <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mt-1">
            {product.category === "cocinas"
              ? "Cocinas"
              : product.category === "salas"
              ? "Salas"
              : product.category === "comedores"
              ? "Comedores"
              : product.category === "dormitorios"
              ? "Dormitorios"
              : product.category === "oficinas"
              ? "Oficinas"
              : "Banos"}
          </p>
        </div>
        {/* <p className="text-sm font-medium text-foreground shrink-0">
          {product.price}
        </p> */}
      </div>
    </Link>
  );
}
