import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    title: "Residencia Polanco",
    category: "Residencial",
    image: "/images/project-1.jpg",
    alt: "Modern luxury kitchen with dark cabinetry",
  },
  {
    title: "Loft Condesa",
    category: "Residencial",
    image: "/images/project-2.jpg",
    alt: "Minimalist luxury bedroom",
  },
  {
    title: "Spa Wellness Center",
    category: "Comercial",
    image: "/images/project-3.jpg",
    alt: "Luxury bathroom with marble finishes",
  },
]

export function FeaturedProjects() {
  return (
    <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] opacity-60 mb-4">
              Proyectos Destacados
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance">
              Nuestro trabajo habla por si mismo
            </h2>
          </div>
          <Link
            href="/portafolio"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] font-medium opacity-80 hover:opacity-100 transition-opacity shrink-0"
          >
            Ver todo
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.title}
              href="/portafolio"
              className="group relative aspect-[3/4] overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs uppercase tracking-[0.2em] opacity-60 mb-2">
                  {project.category}
                </p>
                <h3 className="font-serif text-xl md:text-2xl font-bold">
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
