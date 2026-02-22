"use client"

import { cn } from "@/lib/utils"
import { categories } from "@/lib/catalog-data"

interface CatalogFiltersProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function CatalogFilters({
  activeCategory,
  onCategoryChange,
}: CatalogFiltersProps) {
  return (
    <div className="flex flex-wrap items-center gap-4 border-b border-border pb-4">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onCategoryChange(cat.id)}
          className={cn(
            "text-sm uppercase tracking-[0.15em] py-2 px-1 transition-colors",
            activeCategory === cat.id
              ? "text-foreground font-medium border-b-2 border-foreground -mb-[17px] pb-[15px]"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {cat.label}
        </button>
      ))}
    </div>
  )
}
