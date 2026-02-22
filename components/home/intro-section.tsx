import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function IntroSection() {
  return (
    <section className="py-24 lg:py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent-foreground font-medium mb-4">
              Nuestra Filosofia
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
              Espacios que cuentan historias
            </h2>
          </div>
          <div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              En Posto Design, creemos que cada espacio tiene una narrativa
              unica. Nuestro enfoque combina la atencion meticulosa al detalle
              con una vision contemporanea, creando ambientes que no solo son
              visualmente impactantes, sino que reflejan la personalidad y el
              estilo de vida de cada cliente.
            </p>
            <Link
              href="/nosotros"
              className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] font-medium text-foreground hover:text-muted-foreground transition-colors"
            >
              Conoce nuestra historia
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-border">
          {[
            { number: "150+", label: "Proyectos Completados" },
            { number: "12", label: "Anos de Experiencia" },
            { number: "35+", label: "Premios y Reconocimientos" },
            { number: "98%", label: "Clientes Satisfechos" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                {stat.number}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
