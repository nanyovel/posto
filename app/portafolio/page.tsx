"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = ["Todos", "Residencial", "Comercial", "Remodelacion"];

const projects = [
  {
    title: "Residencia Polanco",
    category: "Residencial",
    image: "/images/project-1.jpg",
    alt: "Cocina moderna de lujo con gabinetes oscuros y encimeras de mármol.",
    year: "2025",
    location: "Piantini, Santo Domingo",
    description:
      "Cocina y areas sociales con acabados premium en una residencia de 450m2.",
  },
  {
    title: "Loft Condesa",
    category: "Residencial",
    image: "/images/project-2.jpg",
    alt: "Dormitorio de lujo minimalista con tonos neutros.",
    year: "2025",
    location: "Jarabacoa, La Vega",
    description:
      "Loft contemporaneo que fusiona espacios abiertos con intimidad residencial.",
  },
  {
    title: "Spa Wellness Center",
    category: "Comercial",
    image: "/images/project-3.jpg",
    alt: "Baño de spa de lujo con mármol blanco y accesorios negros.",
    year: "2024",
    location: "Punta Cana, La Altagracia",
    description:
      "Centro de bienestar de 800m2 con diseno basado en la serenidad y el lujo.",
  },
  {
    title: "Oficina Ejecutiva",
    category: "Comercial",
    image: "/images/project-4.jpg",
    alt: "Oficina ejecutiva moderna con madera oscura y cuero.",
    year: "2024",
    location: "Naco, Santo Domingo",
    description:
      "Oficina ejecutiva que combina funcionalidad con elegancia corporativa.",
  },
  {
    title: "Penthouse Interlomas",
    category: "Remodelacion",
    image: "/images/project-5.jpg",
    alt: "Ático de lujo con vistas panorámicas a la ciudad.",
    year: "2024",
    location: "Los Padros, Santo Domingo",
    description:
      "Remodelacion integral de un penthouse con vistas panoramicas a la ciudad.",
  },
  {
    title: "Hotel Boutique Centro",
    category: "Comercial",
    image: "/images/project-6.jpg",
    alt: "Lobby de hotel de lujo con mármol negro y arte contemporáneo.",
    year: "2023",
    location: "El Millon, Santo Domingo",
    description:
      "Lobby y areas comunes de un hotel boutique de 24 habitaciones.",
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProjects =
    activeCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Portafolio
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Nuestros proyectos mas destacados
            </h1>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Cada espacio que diseñamos es una historia unica. Explora una
              seleccion de nuestros trabajos mas representativos.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center gap-4 border-b border-border pb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "text-sm uppercase tracking-[0.15em] py-2 px-1 transition-colors",
                  activeCategory === cat
                    ? "text-foreground font-medium border-b-2 border-foreground -mb-[17px] pb-[15px]"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.title} className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden mb-6">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground group-hover:text-muted-foreground transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {project.description}
                    </p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                      {project.category}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {project.year}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  {project.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-primary text-primary-foreground px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight text-balance">
            Tu proyecto podria ser el siguiente
          </h2>
          <p className="mt-6 text-base md:text-lg opacity-70 leading-relaxed">
            Nos encantaria agregar tu espacio a nuestra galeria de proyectos
            exitosos.
          </p>
          <Link
            href="/contacto"
            className="mt-10 inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-3 text-sm uppercase tracking-[0.15em] font-medium hover:bg-primary-foreground/90 transition-colors"
          >
            Iniciar Proyecto
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
