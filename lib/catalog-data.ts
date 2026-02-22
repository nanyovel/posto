export type Product = {
  id: string;
  name: string;
  category: string;
  image: string;
  alt: string;
  price: string;
  description: string;
  materials: string[];
  dimensions: string;
  colors: string[];
};

export const categories = [
  { id: "todos", label: "Todos" },
  { id: "cocinas", label: "Cocinas" },
  { id: "salas", label: "Salas" },
  { id: "comedores", label: "Comedores" },
  { id: "dormitorios", label: "Dormitorios" },
  { id: "oficinas", label: "Oficinas" },
  { id: "banos", label: "Baños" },
];

export const products: Product[] = [
  {
    id: "cocina-moderna-negra",
    name: "Cocina Moderna Negra",
    category: "cocinas",
    image: "/images/catalog/cocina-moderna.jpg",
    alt: "Cocina moderna con gabinetes negros mate y encimera de cuarzo blanco",
    price: "Desde $185,000 MXN",
    description:
      "Isla de cocina con gabinetes en negro mate, encimera de cuarzo blanco tipo cascada y tiradores integrados en laton. Un diseno audaz que combina funcionalidad y estetica de vanguardia.",
    materials: ["MDF lacado negro mate", "Cuarzo blanco", "Laton cepillado"],
    dimensions: "280 x 120 x 90 cm (isla)",
    colors: ["Negro mate", "Blanco cuarzo"],
  },
  {
    id: "cocina-clasica-blanca",
    name: "Cocina Clasica Blanca",
    category: "cocinas",
    image: "/images/catalog/cocina-clasica.jpg",
    alt: "Cocina clasica con gabinetes blancos shaker y encimera de marmol",
    price: "Desde $210,000 MXN",
    description:
      "Cocina integral con gabinetes estilo shaker en blanco, encimera de marmol Calacatta, griferia y herrajes en laton. Isla central con bancos tapizados en negro. Elegancia atemporal.",
    materials: ["Madera solida lacada", "Marmol Calacatta", "Laton pulido"],
    dimensions: "450 x 320 cm (completa)",
    colors: ["Blanco", "Marmol veteado", "Negro"],
  },
  {
    id: "cocina-minimalista",
    name: "Cocina Minimalista Gris",
    category: "cocinas",
    image: "/images/catalog/cocina-minimalista.jpg",
    alt: "Cocina minimalista con gabinetes gris oscuro sin tiradores",
    price: "Desde $165,000 MXN",
    description:
      "Cocina de linea minimalista con gabinetes sin tiradores en gris antracita, electrodomesticos integrados y encimera de porcelanico ultradelgado. Iluminacion LED lineal bajo muebles.",
    materials: ["Melamina premium", "Porcelanico", "Aluminio anodizado"],
    dimensions: "380 x 280 cm (completa)",
    colors: ["Gris antracita", "Blanco nieve"],
  },
  {
    id: "sala-contemporanea",
    name: "Sala Contemporanea L",
    category: "salas",
    image: "/images/catalog/sala-contemporanea.jpg",
    alt: "Sala contemporanea con sofa seccional gris oscuro en forma de L",
    price: "Desde $95,000 MXN",
    description:
      "Set de sala contemporanea con sofa seccional en forma de L tapizado en tela charcoal, mesa de centro en marmol blanco, lampara de piso negra y mesa auxiliar minimalista. Comodidad y sofisticacion.",
    materials: [
      "Tela bouclé charcoal",
      "Marmol blanco Carrara",
      "Acero negro mate",
    ],
    dimensions: "320 x 220 cm (sofa seccional)",
    colors: ["Charcoal", "Blanco marmol", "Negro"],
  },
  {
    id: "sala-elegante",
    name: "Sala Elegante Crema",
    category: "salas",
    image: "/images/catalog/sala-elegante.jpg",
    alt: "Sala elegante con sofa de terciopelo crema y sillones de acento negro",
    price: "Desde $120,000 MXN",
    description:
      "Conjunto de sala con sofa de tres plazas en terciopelo crema, par de sillones de acento en negro, mesa de centro en vidrio y laton, y obra de arte abstracta incluida. Lujo refinado.",
    materials: [
      "Terciopelo italiano",
      "Cuero negro",
      "Vidrio templado",
      "Laton",
    ],
    dimensions: "240 x 95 cm (sofa principal)",
    colors: ["Crema", "Negro", "Dorado"],
  },
  {
    id: "sala-modular",
    name: "Sala Modular Gris",
    category: "salas",
    image: "/images/catalog/sala-modular.jpg",
    alt: "Sofa modular gris claro en configuracion U con patas de metal negro",
    price: "Desde $78,000 MXN",
    description:
      "Sofa modular configurable en forma de U, tapizado en tela gris claro con patas en metal negro. Incluye mesa auxiliar en madera. Ideal para espacios amplios que requieren flexibilidad.",
    materials: ["Tela antimanchas", "Estructura metalica", "Madera de roble"],
    dimensions: "360 x 260 cm (configuracion U)",
    colors: ["Gris claro", "Negro", "Roble natural"],
  },
  {
    id: "comedor-marmol",
    name: "Comedor Marmol Bianco",
    category: "comedores",
    image: "/images/catalog/comedor-marmol.jpg",
    alt: "Mesa de comedor rectangular de marmol blanco con sillas tapizadas negras",
    price: "Desde $135,000 MXN",
    description:
      "Mesa de comedor rectangular en marmol blanco con base escultorica, acompanada de seis sillas tapizadas en negro con patas en laton. Incluye lampara colgante moderna. Para 6-8 comensales.",
    materials: ["Marmol Bianco Carrara", "Terciopelo negro", "Laton"],
    dimensions: "220 x 100 x 75 cm (mesa)",
    colors: ["Blanco marmol", "Negro", "Dorado"],
  },
  {
    id: "comedor-madera-nogal",
    name: "Comedor Nogal Contemporaneo",
    category: "comedores",
    image: "/images/catalog/comedor-madera.jpg",
    alt: "Mesa de comedor de madera de nogal oscuro con sillas de cuero tan",
    price: "Desde $110,000 MXN",
    description:
      "Mesa de comedor en nogal oscuro macizo con lineas limpias y modernas, acompanada de seis sillas en cuero cognac. Candelabro minimalista incluido. Calidez y contemporaneidad para 6-8 comensales.",
    materials: ["Nogal macizo", "Cuero genuino cognac", "Acero negro"],
    dimensions: "240 x 100 x 75 cm (mesa)",
    colors: ["Nogal oscuro", "Cognac", "Negro"],
  },
  {
    id: "dormitorio-lujo",
    name: "Dormitorio Suite Charcoal",
    category: "dormitorios",
    image: "/images/catalog/dormitorio-lujo.jpg",
    alt: "Cama king size con cabecera tapizada en charcoal y mesas de noche con acentos dorados",
    price: "Desde $145,000 MXN",
    description:
      "Suite de dormitorio con cama king size tapizada en tela charcoal con cabecera capitoneada alta, par de mesas de noche con acentos en laton, y ropa de cama blanca premium. Elegancia sin esfuerzo.",
    materials: ["Tela bouclé charcoal", "Madera lacada", "Laton cepillado"],
    dimensions: "200 x 210 cm (cama king)",
    colors: ["Charcoal", "Blanco", "Dorado"],
  },
  {
    id: "dormitorio-minimal",
    name: "Dormitorio Zen Natural",
    category: "dormitorios",
    image: "/images/catalog/dormitorio-minimal.jpg",
    alt: "Cama de plataforma baja en roble con ropa de cama de lino blanco",
    price: "Desde $89,000 MXN",
    description:
      "Dormitorio de estetica japandi con cama de plataforma baja en roble claro, ropa de cama en lino blanco, mesas de noche flotantes y lamparas colgantes minimalistas. Serenidad y simplicidad.",
    materials: ["Roble macizo claro", "Lino natural", "Metal negro mate"],
    dimensions: "180 x 200 cm (cama queen)",
    colors: ["Roble claro", "Blanco lino", "Negro mate"],
  },
  {
    id: "oficina-ejecutiva",
    name: "Oficina Ejecutiva Nogal",
    category: "oficinas",
    image: "/images/catalog/oficina-ejecutiva.jpg",
    alt: "Escritorio ejecutivo en nogal oscuro con silla de cuero negro",
    price: "Desde $98,000 MXN",
    description:
      "Set de oficina ejecutiva con escritorio en nogal oscuro con superficie de cuero negro, silla ergonomica en cuero premium negro y lampara de escritorio en laton. Productividad con estilo.",
    materials: ["Nogal oscuro macizo", "Cuero italiano negro", "Laton antiguo"],
    dimensions: "180 x 80 x 76 cm (escritorio)",
    colors: ["Nogal oscuro", "Negro", "Laton"],
  },
  {
    id: "bano-vanity-flotante",
    name: "Vanity Flotante Premium",
    category: "banos",
    image: "/images/catalog/bano-vanity.jpg",
    alt: "Mueble de bano flotante en madera oscura con tapa de marmol y espejo redondo",
    price: "Desde $68,000 MXN",
    description:
      "Mueble de bano flotante en madera oscura con cubierta de marmol blanco, griferia negra mate, espejo redondo con marco en laton y apliques de pared. Refinamiento para cada detalle.",
    materials: [
      "Madera de fresno oscuro",
      "Marmol blanco",
      "Laton pulido",
      "Acero negro mate",
    ],
    dimensions: "120 x 50 x 55 cm (mueble)",
    colors: ["Madera oscura", "Blanco marmol", "Dorado", "Negro mate"],
  },
];
