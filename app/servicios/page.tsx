import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Home,
  Building2,
  Palette,
  Wrench,
  Lightbulb,
  Layers,
} from "lucide-react";
import Newsletter from "@/components/newLetter";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Descubre los servicios de diseño de interiores de Posto Design: residencial, comercial, consultorias y remodelaciones.",
};

const services = [
  {
    icon: Home,
    title: "Diseño Residencial",
    description:
      "Creamos hogares que reflejan la esencia de quienes los habitan. Desde apartamentos compactos hasta residencias expansivas, cada proyecto recibe nuestra atencion completa.",
    features: [
      "Diseño integral de interiores",
      "Seleccion de mobiliario y accesorios",
      "Iluminacion arquitectonica",
      "Diseño de espacios exteriores",
    ],
  },
  {
    icon: Building2,
    title: "Diseño Comercial",
    description:
      "Espacios comerciales que impulsan la experiencia de marca y optimizan la funcionalidad. Restaurantes, oficinas y hoteles.",
    features: [
      "Branding espacial",
      "Diseño de oficinas corporativas",
      "Interiorismo para restaurantes",
      "Espacios retail y showrooms",
    ],
  },
  {
    icon: Palette,
    title: "Consultorias de Diseño",
    description:
      "Orientacion experta para quienes buscan guia profesional sin un proyecto integral. Sesiones personalizadas con nuestros disenadores.",
    features: [
      "Asesoria en paletas de color",
      "Seleccion de materiales",
      "Optimizacion de espacios",
      "Recomendaciones de mobiliario",
    ],
  },
  {
    icon: Wrench,
    title: "Remodelaciones",
    description:
      "Renovamos y transformamos espacios existentes, dandoles una nueva vida que refleja las necesidades actuales de nuestros clientes.",
    features: [
      "Renovaciones integrales",
      "Actualizacion de acabados",
      "Redistribucion de espacios",
      "Coordinacion de obra",
    ],
  },
  {
    icon: Lightbulb,
    title: "Diseño de Iluminacion",
    description:
      "La iluminacion define la atmosfera de un espacio. Creamos esquemas de luz que realzan la arquitectura y generan ambientes unicos.",
    features: [
      "Iluminacion natural y artificial",
      "Diseño de escenas luminicas",
      "Seleccion de luminarias",
      "Integracion con automatizacion",
    ],
  },
  {
    icon: Layers,
    title: "Staging Inmobiliario",
    description:
      "Preparamos propiedades para venta o renta, creando ambientes atractivos que maximizan el valor percibido del inmueble.",
    features: [
      "Home staging para venta",
      "Decoracion temporal",
      "Fotografia de interiores",
      "Estrategia de presentacion",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Consulta Inicial",
    description:
      "Conocemos tu vision, necesidades y presupuesto en una sesion personalizada donde exploramos las posibilidades.",
  },
  {
    step: "02",
    title: "Concepto de Diseño",
    description:
      "Desarrollamos un concepto creativo con moodboards, paletas de materiales y visualizaciones 3D para tu aprobacion.",
  },
  {
    step: "03",
    title: "Desarrollo del Proyecto",
    description:
      "Creamos planos detallados, especificaciones tecnicas y coordinamos con proveedores para la ejecucion impecable.",
  },
  {
    step: "04",
    title: "Implementacion",
    description:
      "Supervisamos cada fase de la instalacion, asegurando que cada detalle se ejecute conforme al diseño aprobado.",
  },
  {
    step: "05",
    title: "Entrega Final",
    description:
      "Realizamos la entrega del espacio completo, con cada pieza en su lugar y cada detalle perfectamente cuidado.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <Image
          src="/images/services-hero.jpg"
          alt="Luxury dining room showcasing Posto Design"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-primary-foreground/60 mb-4">
              Nuestros Servicios
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight text-balance">
              Soluciones de diseño para cada necesidad
            </h1>
            <p className="mt-6 text-base md:text-lg text-primary-foreground/80 leading-relaxed max-w-2xl">
              Ofrecemos un rango completo de servicios de diseño de interiores,
              desde la concepcion hasta la ejecucion, adaptados a tu vision y
              presupuesto.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 lg:py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/70 leading-relaxed transition-colors mb-6">
                    {service.description}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-xs text-muted-foreground group-hover:text-primary-foreground/60 transition-colors flex items-center gap-2"
                      >
                        <span className="w-1 h-1 bg-muted-foreground group-hover:bg-primary-foreground/60 transition-colors rounded-full shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 lg:py-32 bg-secondary px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Nuestro Proceso
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
              De la vision a la realidad en cinco pasos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((item) => (
              <div key={item.step} className="text-center">
                <span className="font-serif text-4xl font-bold text-border">
                  {item.step}
                </span>
                <h3 className="mt-3 font-serif text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {item.description}
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
            Tu espacio ideal esta a una conversacion de distancia
          </h2>
          <p className="mt-6 text-base md:text-lg opacity-70 leading-relaxed">
            Agenda una consulta gratuita y descubre como podemos transformar tu
            espacio.
          </p>
          <Link
            href="/contacto"
            className="mt-10 inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-3 text-sm uppercase tracking-[0.15em] font-medium hover:bg-primary-foreground/90 transition-colors"
          >
            Agendar Consulta
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
