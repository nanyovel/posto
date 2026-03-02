"use client";

import { useState } from "react";
import { blogPosts, getCategories } from "@/lib/blog-data";
import { BlogCard } from "@/components/blog/blog-card";
import { BlogFilters } from "@/components/blog/blog-filters";

export function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const categories = getCategories();

  const filteredPosts =
    activeCategory === "Todos"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  const [featuredPost, ...restPosts] = filteredPosts;

  return (
    <div className="flex flex-col gap-12">
      <BlogFilters
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {featuredPost && (
        <BlogCard post={featuredPost} featured />
      )}

      {restPosts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
