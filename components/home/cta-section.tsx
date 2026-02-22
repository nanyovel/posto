import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <Image
        src="/images/services-hero.jpg"
        alt="Luxury dining room interior"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-primary/70" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight text-balance">
          Hablemos de tu proximo proyecto
        </h2>
        <p className="mt-6 text-base md:text-lg text-primary-foreground/80 leading-relaxed max-w-xl mx-auto">
          Cada gran espacio comienza con una conversacion. Cuentanos tu vision y 
          la transformaremos en realidad.
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
  )
}
