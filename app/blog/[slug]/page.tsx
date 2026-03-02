import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { getBlogPost, blogPosts } from "@/lib/blog-data";
import { BlogCard } from "@/components/blog/blog-card";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return { title: "Articulo no encontrado" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];

  lines.forEach((line, index) => {
    const trimmed = line.trim();

    if (trimmed.startsWith("## ")) {
      elements.push(
        <h2
          key={index}
          className="font-serif text-2xl font-bold text-foreground mt-10 mb-4"
        >
          {trimmed.replace("## ", "")}
        </h2>
      );
    } else if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
      elements.push(
        <p
          key={index}
          className="text-base font-medium text-foreground leading-relaxed mb-2"
        >
          {trimmed.replace(/\*\*/g, "")}
        </p>
      );
    } else if (trimmed === "") {
      // Skip empty lines
    } else {
      elements.push(
        <p
          key={index}
          className="text-base text-muted-foreground leading-relaxed mb-4"
        >
          {trimmed}
        </p>
      );
    }
  });

  return elements;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString("es-DO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      {/* Article Header */}
      <section className="pt-32 pb-8 lg:pt-40 lg:pb-12 px-6">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al blog
          </Link>

          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {post.category}
          </span>

          <h1 className="mt-3 font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
            {post.title}
          </h1>

          <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
            <span>{post.author}</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <time dateTime={post.date}>{formattedDate}</time>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime} de lectura
            </span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-4xl">
          <div className="relative aspect-[21/9] overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-3xl">
          <div className="prose-custom">{renderContent(post.content)}</div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-24 bg-secondary px-6">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Sigue leyendo
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-balance">
                Articulos relacionados
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.slug} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
