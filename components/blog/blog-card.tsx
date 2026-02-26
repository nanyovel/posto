import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import type { BlogPost } from "@/lib/blog-data";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("es-DO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  if (featured) {
    return (
      <Link href={`/blog/${post.slug}`} className="group block">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-border overflow-hidden">
          <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[400px]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="flex flex-col justify-center p-8 lg:p-12">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {post.category}
            </span>
            <h2 className="mt-3 font-serif text-2xl md:text-3xl font-bold text-foreground leading-tight text-balance group-hover:text-muted-foreground transition-colors">
              {post.title}
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>
            <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground">
              <time dateTime={post.date}>{formattedDate}</time>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {post.readTime}
              </span>
            </div>
            <span className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] font-medium text-foreground group-hover:gap-3 transition-all">
              Leer articulo
              <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="border border-border overflow-hidden h-full flex flex-col">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="flex flex-col flex-1 p-6 lg:p-8">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {post.category}
          </span>
          <h3 className="mt-3 font-serif text-lg md:text-xl font-bold text-foreground leading-tight text-balance group-hover:text-muted-foreground transition-colors">
            {post.title}
          </h3>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
          <div className="mt-auto pt-6 flex items-center gap-4 text-xs text-muted-foreground">
            <time dateTime={post.date}>{formattedDate}</time>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {post.readTime}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
