import Link from "next/link";
import { ArrowRight, Home, Building2, Palette, Wrench } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residencial",
    description:
      "Transformamos hogares en refugios de elegancia y confort, adaptados a tu estilo de vida unico.",
  },
  {
    icon: Building2,
    title: "Comercial",
    description:
      "Diseños de oficinas, restaurantes y espacios comerciales que impulsan la experiencia de marca.",
  },
  {
    icon: Palette,
    title: "Consultorias",
    description:
      "Asesoria personalizada en seleccion de materiales, paletas de color y distribucion espacial.",
  },
  {
    icon: Wrench,
    title: "Remodelaciones",
    description:
      "Renovaciones integrales que dan nueva vida a tus espacios con atencion al detalle.",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-24 lg:py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Nuestros Servicios
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
            Soluciones integrales de diseño
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group p-8 border border-border hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                <Icon className="h-8 w-8 mb-6 text-muted-foreground group-hover:text-primary-foreground/70 transition-colors" />
                <h3 className="font-serif text-xl font-bold mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/70 leading-relaxed transition-colors">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] font-medium text-foreground hover:text-muted-foreground transition-colors"
          >
            Explorar todos los servicios
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
