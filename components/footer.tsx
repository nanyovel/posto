import Link from "next/link";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo/logo-blanco.png"
                alt="Logo Posto Design"
                width={200}
                height={200}
                className="object-cover h-auto"
                priority
              />
              {/* <span className="font-serif text-2xl font-bold tracking-wider">
                NOIR
              </span>
              <span className="text-xs uppercase tracking-[0.3em] opacity-60">
                Studio
              </span> */}
            </Link>
            <p className="mt-4 text-sm leading-relaxed opacity-60">
              Transformamos espacios en experiencias curadas que reflejan la
              esencia de quienes los habitan.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-medium mb-4 opacity-80">
              Navegacion
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { href: "/", label: "Inicio" },
                { href: "/nosotros", label: "Nosotros" },
                { href: "/servicios", label: "Servicios" },
                { href: "/catalogo", label: "Catalogo" },
                { href: "/portafolio", label: "Portafolio" },
                { href: "/blog", label: "Blog" },
                { href: "/contacto", label: "Contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-60 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-medium mb-4 opacity-80">
              Servicios
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                "Residencial",
                "Comercial",
                "Consultorias",
                "Remodelaciones",
              ].map((service) => (
                <li key={service}>
                  <span className="text-sm opacity-60">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-medium mb-4 opacity-80">
              Contacto
            </h3>
            <div className="flex flex-col gap-3 text-sm opacity-60">
              <p>info@postodesign.com</p>
              <p>809-111-2222</p>
              <p>Av. Charles Sumner N° 35, Los Prados, Santo Domingo</p>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.instagram.com/postodesignrd/"
                target="_blank"
                aria-label="Instagram"
                className="opacity-60 hover:opacity-100 transition-opacity"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="opacity-60 hover:opacity-100 transition-opacity"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="opacity-60 hover:opacity-100 transition-opacity"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs opacity-40">
            {"2026 Posto Design. Todos los derechos reservados."}
          </p>
          {/* <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-xs opacity-40 hover:opacity-80 transition-opacity"
            >
              Privacidad
            </Link>
            <Link
              href="#"
              className="text-xs opacity-40 hover:opacity-80 transition-opacity"
            >
              Terminos
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
