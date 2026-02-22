"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@postodesign.com",
    href: "mailto:info@postodesign.com",
  },
  {
    icon: Phone,
    label: "Telefono",
    value: "809-111-22222",
    href: "tel:+8091112222",
  },
  {
    icon: MapPin,
    label: "Ubicacion",
    value: "Av. Charles Sumner, N° 35, Los Prados, Santo Domingo",
  },
  {
    icon: Clock,
    label: "Horario",
    value: "Lunes a Viernes: 8:00am - 5:00pm / Sab: 8:00am - 12:00pm",
  },
];

const serviceOptions = [
  "Diseno Residencial",
  "Diseno Comercial",
  "Consultoria",
  "Remodelacion",
  "Iluminacion",
  "Staging Inmobiliario",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Contacto
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Hablemos de tu proyecto
            </h1>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Estamos listos para escuchar tus ideas y ayudarte a crear el
              espacio que siempre has imaginado. Contactanos para una consulta
              inicial.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="px-6 pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="p-12 border border-border text-center">
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-foreground rounded-full">
                    <Send className="h-6 w-6 text-foreground" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                    Mensaje enviado
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
                    Gracias por tu interes. Nuestro equipo revisara tu solicitud
                    y te contactara dentro de las proximas 24 horas.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        service: "",
                        message: "",
                      });
                    }}
                    className="mt-8 text-sm uppercase tracking-[0.15em] font-medium text-foreground hover:text-muted-foreground transition-colors"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="name"
                        className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium"
                      >
                        Nombre completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="border border-border bg-background text-foreground px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="email"
                        className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="border border-border bg-background text-foreground px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="phone"
                        className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium"
                      >
                        Telefono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="border border-border bg-background text-foreground px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors"
                        placeholder="809-111-2222"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="service"
                        className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium"
                      >
                        Servicio de interes
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="border border-border bg-background text-foreground px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors appearance-none"
                      >
                        <option value="">Selecciona un servicio</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="message"
                      className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="border border-border bg-background text-foreground px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors resize-none"
                      placeholder="Cuentanos sobre tu proyecto, tus necesidades y expectativas..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="self-start inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 text-sm uppercase tracking-[0.15em] font-medium hover:bg-primary/90 transition-colors"
                  >
                    Enviar Mensaje
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="bg-secondary p-8 lg:p-10">
                <h3 className="font-serif text-xl font-bold text-foreground mb-8">
                  Informacion de contacto
                </h3>
                <div className="flex flex-col gap-8">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;
                    const Content = (
                      <div className="flex items-start gap-4">
                        <Icon className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1">
                            {item.label}
                          </p>
                          <p className="text-sm text-foreground font-medium">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    );

                    if (item.href) {
                      return (
                        <a
                          key={item.label}
                          href={item.href}
                          className="hover:opacity-70 transition-opacity"
                        >
                          {Content}
                        </a>
                      );
                    }
                    return <div key={item.label}>{Content}</div>;
                  })}
                </div>

                <div className="mt-10 pt-8 border-t border-border">
                  <h4 className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3 font-medium">
                    Siguenos
                  </h4>
                  <div className="flex items-center gap-4">
                    {["Instagram", "Facebook", "LinkedIn", "Pinterest"].map(
                      (social) => (
                        <a
                          key={social}
                          href="#"
                          className="text-sm text-foreground hover:text-muted-foreground transition-colors"
                        >
                          {social}
                        </a>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] opacity-60 mb-4">
                Visitanos
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight text-balance">
                Nuestro estudio te espera
              </h2>
              <p className="mt-4 opacity-70 leading-relaxed">
                Te invitamos a visitar nuestra tienda en Los Prados, Santo
                Domingo, para una experiencia inmersiva de diseno. Agenda tu
                cita y conoce nuestro espacio de trabajo.
              </p>
              <div className="mt-8">
                <p className="text-sm font-medium">Santo Domingo</p>
                <p className="text-sm opacity-70 mt-1">
                  Av. Chales Sumner, N° 35, Los Prados, Santo Domingo
                </p>
              </div>
            </div>
            {/* <div className="aspect-square bg-primary-foreground/10 flex items-center justify-center"> */}
            {/* <div className="text-center"> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.16046400702!2d-69.95734642503815!3d18.476389382608673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf89b1da287a91%3A0xfb44e9dee6105e45!2sPosto%20Design!5e0!3m2!1ses-419!2sdo!4v1771623730468!5m2!1ses-419!2sdo"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            {/* <MapPin className="h-12 w-12 mx-auto opacity-40 mb-4" /> */}
            {/* <p className="text-sm opacity-40 uppercase tracking-[0.15em]"></p> */}
            {/* </div> */}
            {/* </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
