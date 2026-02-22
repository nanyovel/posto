import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce a Posto Design, un estudio de diseño de interiores con mas de 12 anos creando espacios sofisticados y atemporales.",
};

const team = [
  {
    name: "Carolina Mendez",
    role: "Directora Creativa",
    bio: "Con mas de 15 anos de experiencia en diseño de interiores de lujo, Carolina lidera la vision creativa del estudio.",
  },
  {
    name: "Alejandro Ruiz",
    role: "Director de Proyectos",
    bio: "Arquitecto de formacion, Alejandro coordina cada proyecto asegurando la excelencia en cada detalle.",
  },
  {
    name: "Valentina Torres",
    role: "diseñadora Senior",
    bio: "Especialista en espacios residenciales, Valentina aporta una sensibilidad unica a cada hogar que transforma.",
  },
  {
    name: "Diego Fernandez",
    role: "diseñador Comercial",
    bio: "Experto en branding espacial y diseño comercial, Diego crea experiencias inmersivas de marca.",
  },
];

const values = [
  {
    title: "Excelencia",
    description:
      "Cada proyecto recibe nuestra atencion meticulosa. No hacemos concesiones en la calidad ni en los detalles.",
  },
  {
    title: "Innovacion",
    description:
      "Incorporamos las ultimas tendencias y tecnologias manteniendo siempre un enfoque atemporal en nuestros diseños.",
  },
  {
    title: "Colaboracion",
    description:
      "Trabajamos de cerca con nuestros clientes, convirtiendo sus sueños y aspiraciones en realidades tangibles.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Sobre Nosotros
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Diseñamos espacios que perduran en el tiempo
            </h1>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Desde 2020, Posto Design ha sido sinonimo de diseño de interiores
              de lujo en Santo Domingo. Nuestro compromiso con la excelencia y
              la atencion al detalle nos ha posicionado como referentes en la
              industria.
            </p>
          </div>
        </div>
      </section>

      {/* Studio Image */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl">
          <div className="relative aspect-[16/7] overflow-hidden">
            <Image
              src="/images/about-studio.jpg"
              alt="Interior del estudio de diseño Posto Design"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 lg:py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Nuestra Historia
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
                Una pasion que se convirtio en referente del diseño
              </h2>
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-muted-foreground leading-relaxed">
                Todo comenzó con una idea sencilla: los espacios no solo se
                habitan, se sienten. Desde nuestros primeros proyectos
                entendimos que el diseño tiene el poder de transformar la manera
                en que las personas viven, trabajan y comparten. Lo que inició
                como una pasión por la estética y el detalle, se convirtió en un
                compromiso firme con la creación de
                <b> ambientes que transmiten identidad y propósito.</b>
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Con el paso del tiempo, fuimos perfeccionando nuestro estilo y
                ampliando nuestra visión. Aprendimos que cada cliente trae
                consigo una historia única, y que nuestro trabajo es
                interpretarla a través de materiales, texturas, colores y
                formas. Así nacen nuestros diseños: del diálogo, la inspiración
                y el deseo de convertir ideas en espacios reales, funcionales y
                llenos de carácter.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Hoy, gracias a la confianza de nuestros clientes y a la
                dedicación constante de nuestro equipo, nos hemos consolidado
                como un referente en <b>Santo Domingo</b> en el diseño de
                interiores y mobiliario. Seguimos creando con la misma esencia
                del primer día: transformar ideas en espacios que inspiran,
                elevan el valor de cada proyecto y dejan una huella duradera.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-secondary px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Nuestros Valores
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
              Los principios que guian nuestro trabajo
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={value.title} className="text-center p-8">
                <span className="font-serif text-5xl font-bold text-border">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-serif text-xl font-bold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 lg:py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Nuestro Equipo
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
                Las mentes creativas detras de cada proyecto
              </h2>
            </div>
          </div>

          <div className="relative aspect-[16/7] overflow-hidden mb-16">
            <Image
              src="/images/team.jpg"
              alt="Equipo de diseñadores de Posto Design"
              fill
              className="object-cover"
            />
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="border-t border-border pt-6">
                <h3 className="font-serif text-lg font-bold text-foreground">
                  {member.name}
                </h3>
                <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mt-1">
                  {member.role}
                </p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-primary text-primary-foreground px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight text-balance">
            Colaboremos juntos
          </h2>
          <p className="mt-6 text-base md:text-lg opacity-70 leading-relaxed">
            Nos encantaria conocer tu proyecto y explorar como podemos
            transformar tu espacio.
          </p>
          <Link
            href="/contacto"
            className="mt-10 inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-3 text-sm uppercase tracking-[0.15em] font-medium hover:bg-primary-foreground/90 transition-colors"
          >
            Contactanos
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
