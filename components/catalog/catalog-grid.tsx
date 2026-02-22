"use client"

import { useState } from "react"
import { products } from "@/lib/catalog-data"
import { CatalogFilters } from "./catalog-filters"
import { ProductCard } from "./product-card"

export function CatalogGrid() {
  const [activeCategory, setActiveCategory] = useState("todos")

  const filteredProducts =
    activeCategory === "todos"
      ? products
      : products.filter((p) => p.category === activeCategory)

  return (
    <>
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-7xl">
          <CatalogFilters
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>
      </section>

      <section className="px-6 pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          {filteredProducts.length === 0 ? (
            <p className="text-center text-muted-foreground py-20 text-sm">
              No hay productos en esta categoria por el momento.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
