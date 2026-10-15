/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface AccommodationOption {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  capacity: string;
  beds: string;
  description: string;
  features: string[];
  rateBreakfast: number;
  rateFullBoard: number;
  image: string;
  tagline: string;
}

export interface FishingPackage {
  id: string;
  duration: string;
  fishingDays: string;
  rateDoble: number;
  rateTriple: number;
  highlights: string[];
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const SITE_DATA = {
  brand: {
    name: "Puerto Yacarey",
    tagline: "Fishing Lodge · Alto Paraná",
    location: "Ruta Nacional N°12, KM 1098. Itatí, Corrientes, Argentina",
    phone: "+54 379 463-4101",
    phoneClean: "5493794634101",
    email: "cabanaspuertoyacarey@gmail.com",
    coordinates: { lat: -27.2713, lng: -58.2435 },
  },
  
  accommodations: [
    {
      id: "rustica",
      name: "Área Rústica",
      subtitle: "Cabañas de Madera en el Bosque Nativo",
      category: "Inmersión Natural",
      capacity: "2, 4 o 5 personas",
      beds: "1 o 2 habitaciones privadas",
      description: "Construcción sustentable en maderas nobles locales, diseñadas para fundirse armoniosamente con la vegetación autóctona y la brisa del Paraná. Un refugio sereno y sombreado para desconectar.",
      features: [
        "Aire acondicionado split frío/calor",
        "Televisión satelital DirecTV",
        "Frigobar de cortesía",
        "Ropa blanca de algodón y toallas de alta densidad",
        "Galería exterior con vista al monte nativo",
        "Acceso pleno a piscina, quincho y playa privada"
      ],
      rateBreakfast: 85000,
      rateFullBoard: 150000,
      image: "/src/assets/images/cabana_rustica_bosque_1792077454574.jpg",
      tagline: "El aroma a madera viva y el susurro de la arboleda ribereña."
    },
    {
      id: "moderna",
      name: "Área Moderna",
      subtitle: "Suites Panorámicas junto a la Piscina",
      category: "Confort Contemporáneo",
      capacity: "Hasta 6 personas",
      beds: "Equipadas con 3 cómodas camas dobles",
      description: "Departamentos de arquitectura limpia y amplios ventanales de piso a techo con vistas directas a la piscina sin fin y el espejo de agua del Río Paraná. Luz natural, amplitud y diseño sobrio.",
      features: [
        "Amplios ventanales termoacústicos con vista al río",
        "Aire acondicionado de última generación",
        "Televisión satelital DirecTV",
        "Frigobar ejecutivo",
        "Ropa blanca premium y toallas de piscina",
        "Salida directa al solárium y piscina infinita"
      ],
      rateBreakfast: 85000,
      rateFullBoard: 150000,
      image: "/src/assets/images/suite_moderna_piscina_1792077476099.jpg",
      tagline: "Ventanales abiertos al horizonte del río y la calma de la piscina."
    },
    {
      id: "punta-de-piedra",
      name: "Cabaña Punta de Piedra",
      subtitle: "Unidad Insignia sobre el Promontorio Rocoso",
      category: "Exclusividad 360°",
      capacity: "Mínimo 5, máximo 9 huéspedes",
      beds: "Distribución flexible en múltiples ambientes",
      description: "Nuestra unidad más icónica, emplazada en altura sobre un promontorio rocoso natural con vista panorámica 360° a los atardeceres del Alto Paraná. Privacidad absoluta y perspectiva inigualable.",
      features: [
        "Emplazamiento único sobre el promontorio de piedra",
        "Deck voladizo con mirador 360° hacia el río",
        "Espacios generosos para familias o grupos de pescadores",
        "Aire acondicionado en todos los ambientes",
        "DirecTV, frigobar y servicio diario de blanquería",
        "La mejor postal del atardecer correntino"
      ],
      rateBreakfast: 99000,
      rateFullBoard: 165000,
      image: "/src/assets/images/punta_de_piedra_lodge_1792077474746.jpg",
      tagline: "Una perspectiva privilegiada donde el río y el cielo se funden."
    }
  ] as AccommodationOption[],

  fishingPackages: [
    {
      id: "pack-2n",
      duration: "2 Noches de Estadía",
      fishingDays: "1.5 Días Completos de Pesca",
      rateDoble: 500000,
      rateTriple: 400000,
      highlights: [
        "2 noches de alojamiento exclusivo",
        "Pensión completa con bebidas libres durante las comidas",
        "1 jornada y media de navegación con guía profesional",
        "Conservadora de a bordo con 18 cervezas, hielo, aguas y gaseosas",
        "Equipos completos de alta gama (caña, reel, multifilamento)",
        "Picada campestre a bordo en el río"
      ],
      description: "La escapada de fin de semana ideal para adentrarse en los mejores pozos y correderas del Alto Paraná con logística impecable."
    },
    {
      id: "pack-3n",
      duration: "3 Noches de Estadía",
      fishingDays: "2.5 Días Completos de Pesca",
      rateDoble: 85000, // wait: from brief base doble 850.000
      rateTriple: 690000,
      highlights: [
        "3 noches de alojamiento en lodge",
        "Pensión completa con gastronomía regional y bebidas en comidas",
        "2 jornadas y media intensivas tras el Dorado y Surubí",
        "Lancha tracker equipada con motor de última generación y guía baqueano",
        "Conservadora a bordo con 18 cervezas, gaseosas, aguas y hielo",
        "Equipos de fly fishing o baitcasting incluidos"
      ],
      description: "El equilibrio perfecto entre jornadas intensas de captura, descanso en el lodge y atardeceres inolvidables junto al fuego."
    },
    {
      id: "pack-4n",
      duration: "4 Noches de Estadía",
      fishingDays: "3.5 Días Completos de Pesca",
      rateDoble: 999500,
      rateTriple: 850000,
      highlights: [
        "4 noches de estadía completa con máxima desconexión",
        "Pensión completa de primer nivel",
        "3 jornadas y media de expedición guiada por el Alto Paraná",
        "Rotación estratégica por diferentes bancos, piedras e islas",
        "Conservadora equipada diariamente (18 cervezas, bebidas y refrigerios)",
        "Equipamiento técnico completo sin costo adicional"
      ],
      description: "La expedición definitiva para pescadores deportivos apasionados que buscan los trofeos del Alto Paraná."
    }
  ],

  // Override correct package 3n rate
  fishingPackagesFixed: [
    {
      id: "pack-2n",
      duration: "2 Noches",
      fishingDays: "1.5 Días de Pesca",
      rateDoble: 500000,
      rateTriple: 400000,
      description: "Escapada táctica: 2 noches en lodge, pensión completa, lancha con guía y 1.5 jornadas en los mejores pesqueros."
    },
    {
      id: "pack-3n",
      duration: "3 Noches",
      fishingDays: "2.5 Días de Pesca",
      rateDoble: 850000,
      rateTriple: 690000,
      description: "La experiencia insignia: 3 noches de relax, pensión completa y 2.5 jornadas tras los grandes dorados del río."
    },
    {
      id: "pack-4n",
      duration: "4 Noches",
      fishingDays: "3.5 Días de Pesca",
      rateDoble: 999500,
      rateTriple: 850000,
      description: "Inmersión total: 4 noches, pensión completa y 3.5 jornadas de pesca explorando los rincones más salvajes del Alto Paraná."
    }
  ],

  faqs: [
    {
      id: "faq-1",
      question: "¿Puedo utilizar todas las instalaciones sin importar el sector donde me aloje?",
      answer: "Sí, sin ninguna distinción. El acceso a la piscina infinita, la playa privada sobre el Paraná, el salón comedor panorámico, el quincho regional y todos los espacios verdes comunes es total e idéntico para todos los huéspedes, independientemente de si eligen Cabaña Rústica, Suite Moderna o Cabaña Punta de Piedra. Toda la propiedad está concebida para su disfrute integral.",
      category: "Instalaciones"
    },
    {
      id: "faq-2",
      question: "¿Cuál es la política para menores?",
      answer: "Los niños de 0 a 4 años se alojan SIN CARGO (gratis). Para menores de 5 a 12 años aplica un 50% DE DESCUENTO sobre la tarifa de alojamiento regular (incluye desayuno; no incluye servicio completo de pensión, el cual puede solicitarse de forma personalizada). Priorizamos un ambiente sereno y seguro para compartir en familia.",
      category: "Políticas"
    },
    {
      id: "faq-3",
      question: "¿Cuáles son las tarifas vigentes y qué incluyen?",
      answer: "El alojamiento diario por persona ofrece dos modalidades: Solo Desayuno ($85.000 en Área Rústica o Suites Modernas / $99.000 en Punta de Piedra) y Servicio Completo con pensión ($150.000 en Rústica/Moderna / $165.000 en Punta de Piedra, incluyendo desayuno, almuerzo, cena y bebidas durante las comidas). Por su parte, los Paquetes de Pesca Deportiva Todo Incluido van desde $400.000 por persona e integran estadía, pensión completa con bebidas, lancha con guía, conservadora equipada con 18 cervezas y refrigerios, y equipos de pesca de primera marca.",
      category: "Tarifas"
    },
    {
      id: "faq-4",
      question: "¿Cuáles son los horarios de Check-in y Check-out?",
      answer: "El Check-in se realiza a partir de las 14:00 hs (sin excepción), para garantizar que su unidad esté higienizada y preparada bajo nuestros más altos estándares. El Check-out es hasta las 10:00 hs. En caso de requerir guardar equipaje mientras aguarda su traslado o finaliza una jornada náutica, contamos con custodia de equipaje sin costo.",
      category: "Horarios"
    },
    {
      id: "faq-5",
      question: "¿Qué diferencia hay entre el Área Rústica y el Área Moderna?",
      answer: "La diferencia radica en el estilo arquitectónico y su entorno inmediato. El Área Rústica está construida en maderas nobles integradas al bosque nativo con galerías sombreadas y espíritu cálido de cabaña tradicional isleña (capacidad 2 a 5 personas). El Área Moderna ofrece suites de líneas contemporáneas, grandes paños vidriados con vista abierta al río y salida inmediata al solárium y piscina (capacidad hasta 6 personas con 3 camas dobles). Ambas disponen del mismo confort técnico: aire acondicionado, DirecTV, frigobar y blanquería premium.",
      category: "Alojamiento"
    },
    {
      id: "faq-6",
      question: "¿Qué incluye el Paquete de Pesca Todo Incluido y qué debo llevar?",
      answer: "El paquete incluye todo el soporte logístico y técnico: alojamiento, pensión completa con bebidas libres en las comidas, lancha con motor de última generación, guía baqueano matriculado, conservadora a bordo con hielo, aguas, gaseosas y 18 cervezas frías por jornada, además de equipo completo de caña, reel y multifilamento de alta gama. Lo único que no incluye son las carnadas vivas y la licencia de pesca provincial (que se tramita fácilmente y nuestro asesor puede asistirlo con anterioridad). Se recomienda traer protección solar, anteojos polarizados y ropa técnica de secado rápido.",
      category: "Pesca"
    }
  ] as FAQItem[],

  modulesGoogleSites: [
    {
      step: 1,
      title: "MÓDULO 1: HERO / PANTALLA DE INICIO",
      role: "Portada de Alto Impacto & Primer Encuentro Visual",
      copywriting: {
        kicker: "ALTO PARANÁ · ITATÍ, CORRIENTES",
        headline: "La inmensidad del río. La calma de un refugio exclusivo.",
        subheadline: "Un lodge privado sobre las costas del Alto Paraná donde la pesca deportiva de clase mundial, la arquitectura en sintonía con la selva y el descanso sobrio conviven en perfecta armonía.",
        microProof: "Costa sobre el Río Paraná · Gran Playa de Arena · Pesca Deportiva · Piscina Infinita",
        calloutAction: "Desliza para explorar la experiencia del lodge"
      },
      videoEmbedCode: `<video width="100%" height="auto" autoplay loop muted playsinline style="max-width: 100%; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.4); display: block; margin: 0 auto;">
  <source src="https://i.imgur.com/oRJnasx.mp4" type="video/mp4">
  Tu navegador no soporta video HTML5.
</video>`,
      videoUrl: "https://i.imgur.com/oRJnasx.mp4",
      designNotes: "En Google Sites, utiliza un contenedor de ancho completo o 1 columna centrada. Inserta el fragmento HTML mediante 'Insertar > Incorporar > Código HTML'. No agregues botones estridentes aquí; el objetivo del Hero es detener el pulgar y sumergir en el río."
    },
    {
      step: 2,
      title: "MÓDULO 2: NOSOTROS (EL ORIGEN)",
      role: "Micro-Storytelling & Filosofía de Conservación",
      copywriting: {
        kicker: "NUESTRO ORIGEN & PROPÓSITO",
        headline: "Nacidos del amor por el río y la naturaleza viva.",
        bodyParagraph1: "Puerto Yacarey nació del sueño compartido de dos primos profundamente enamorados del Alto Paraná, de la pesca deportiva y de los silencios milenarios del monte correntino.",
        bodyParagraph2: "Lejos del turismo masivo, concebimos este espacio como un santuario donde conviven pescadores apasionados, familias que buscan desconectar del ruido urbano y la fauna autóctona en estado puro: monos carayá que cruzan las copas al amanecer, carpinchos pastando en la orilla, yacarés y cientos de especies de aves que custodian la costa.",
        bodyParagraph3: "Cada rincón fue construido respetando el suelo, preservando los árboles nativos y celebrando la generosidad de uno de los ríos más caudalosos y vivos del planeta."
      },
      videoEmbedCode: `<!-- Marcador para Módulo 2: Video Narrativo del Entorno / Imgur -->
<video width="100%" height="auto" autoplay loop muted playsinline style="max-width: 100%; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.35); display: block; margin: 0 auto;">
  <source src="https://i.imgur.com/REEMPLAZAR_VIDEO_ORIGEN.mp4" type="video/mp4">
  Tu navegador no soporta video HTML5.
</video>`,
      videoUrl: "",
      designNotes: "Alineación justificada a la izquierda con generoso espaciado entre párrafos. Tipografía serif editorial para el titular y sans-serif con interlineado 1.7 para la lectura descansada en móvil."
    },
    {
      step: 3,
      title: "MÓDULO 3: ALOJAMIENTO (CABAÑAS & SUITES)",
      role: "Diferenciación de Infraestructura & Tarifario Transparente",
      copywriting: {
        kicker: "DESCANSO & CONFORT",
        headline: "Tres maneras de habitar el río.",
        subheadline: "Unidades independientes pensadas para diferentes estilos de viaje, todas con aire acondicionado, DirecTV, frigobar, blanquería blanca y acceso total e idéntico a las instalaciones del complejo.",
        unidades: [
          {
            nombre: "Área Rústica — Cabañas en el Bosque",
            detalle: "Construcción sustentable en madera, inmersa en la naturaleza autóctona. Capacidad: 2, 4 o 5 personas (1 o 2 habitaciones).",
            tarifas: "Solo Desayuno: $85.000 / día por persona | Servicio Completo con Bebidas: $150.000 / día por persona"
          },
          {
            nombre: "Área Moderna — Suites junto a la Piscina",
            detalle: "Departamentos contemporáneos con amplios ventanales, luz natural y vista abierta a la piscina y el río. Capacidad: Hasta 6 personas (3 camas dobles).",
            tarifas: "Solo Desayuno: $85.000 / día por persona | Servicio Completo con Bebidas: $150.000 / día por persona"
          },
          {
            nombre: "Cabaña Punta de Piedra — Unidad Premium",
            detalle: "Exclusiva cabaña en madera sobre el promontorio rocoso con vista panorámica 360° al horizonte del río. Ocupación mínima 5, máxima 9 huéspedes.",
            tarifas: "Solo Desayuno: $99.000 / día por persona | Servicio Completo con Bebidas: $165.000 / día por persona"
          }
        ],
        politicaMenores: "POLÍTICA DE MENORES: Menores de 0 a 4 años se alojan SIN CARGO (Gratis). Menores de 5 a 12 años cuentan con 50% DE DESCUENTO (incluye desayuno / no incluye servicio completo)."
      },
      videoEmbedCode: `<video width="100%" height="auto" autoplay loop muted playsinline style="max-width: 100%; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.35); display: block; margin: 0 auto;">
  <source src="https://i.imgur.com/REEMPLAZAR_VIDEO_ALOJAMIENTO.mp4" type="video/mp4">
  Tu navegador no soporta video HTML5.
</video>`,
      videoUrl: "",
      designNotes: "Utiliza un bloque visual con tarjetas individuales para cada opción. Destaca claramente la política de menores para filtrar consultas habituales antes de que lleguen al WhatsApp."
    },
    {
      step: 4,
      title: "MÓDULO 4: PESCA DEPORTIVA & EXPERIENCIAS NÁUTICAS",
      role: "La Pasión del Paraná & Paquetes Todo Incluido",
      copywriting: {
        kicker: "PESCA DEPORTIVA EN EL ALTO PARANÁ",
        headline: "El reino del Dorado y el Surubí.",
        subheadline: "Aguas míticas, correderas de piedra y bancos de arena donde acechan los gigantes de agua dulce. Salidas con guías baqueanos que conocen cada centímetro del cauce.",
        modalidades: "Fly Fishing (Mosca) · Baitcasting · Spinning · Carnada Viva",
        paquetesTitle: "PAQUETES TODO INCLUIDO (Por Persona):",
        paquetes: [
          {
            nombre: "2 Noches + 1.5 Días de Pesca",
            precios: "Base Doble: $500.000 | Base Triple: $400.000"
          },
          {
            nombre: "3 Noches + 2.5 Días de Pesca",
            precios: "Base Doble: $850.000 | Base Triple: $690.000"
          },
          {
            nombre: "4 Noches + 3.5 Días de Pesca",
            precios: "Base Doble: $999.500 | Base Triple: $850.000"
          }
        ],
        inclusiones: "INCLUYE: Alojamiento en el lodge, pensión completa con bebidas libres durante las comidas, lancha con combustible y guía baqueano matriculado, conservadora a bordo con hielo, aguas, gaseosas y 18 cervezas frías por jornada, equipos completos de pesca (cañas, reeles, multifilamento).\n\nNO INCLUYE: Carnadas vivas ni licencias provinciales de pesca (gestionables con asistencia previa).",
        horarios: "HORARIOS OFICIALES: Check-in a partir de las 14:00 hs (sin excepción) · Check-out hasta las 10:00 hs."
      },
      videoEmbedCode: `<video width="100%" height="auto" autoplay loop muted playsinline style="max-width: 100%; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.35); display: block; margin: 0 auto;">
  <source src="https://i.imgur.com/REEMPLAZAR_VIDEO_PESCA.mp4" type="video/mp4">
  Tu navegador no soporta video HTML5.
</video>`,
      videoUrl: "",
      designNotes: "El desglose de qué incluye y qué no debe ser transparente y sin letra chica. Esto genera confianza inmediata y filtra usuarios que no conocen la dinámica de una expedición de pesca seria."
    },
    {
      step: 5,
      title: "MÓDULO 5: GASTRONOMÍA & RELAX",
      role: "Sabores Regionales & Placer Junto al Agua",
      copywriting: {
        kicker: "EXPERIENCIA SENSORIAL",
        headline: "Sabores autóctonos y el sosiego del río.",
        subheadline: "La jornada no termina con el último pique; se corona en torno a una buena mesa.",
        puntos: [
          "Salón Comedor & Esparcimiento: Grandes ventanales vidriados con vista abierta al río para desayunar al amanecer o brindar al atardecer.",
          "Quincho Regional: El corazón de la cocina criolla, asados a la estaca, pescados de río con recetas tradicionales y vinos argentinos seleccionados.",
          "Piscina Infinita sobre el Paraná: Deck de madera y reposeras con vista sin obstáculos al río.",
          "Paseos Náuticos & Safaris Fotográficos: Para acompañantes o jornadas de descanso contemplando monos, aves y bancos de arena vírgenes."
        ]
      },
      videoEmbedCode: `<video width="100%" height="auto" autoplay loop muted playsinline style="max-width: 100%; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.35); display: block; margin: 0 auto;">
  <source src="https://i.imgur.com/REEMPLAZAR_VIDEO_GASTRONOMIA.mp4" type="video/mp4">
  Tu navegador no soporta video HTML5.
</video>`,
      videoUrl: "",
      designNotes: "Combina el módulo de video con un listado limpio con viñetas elegantes. Este módulo atrae tanto al pescador como a la familia o acompañante que busca relax absoluto."
    },
    {
      step: 6,
      title: "MÓDULO 6: PREGUNTAS FRECUENTES (FAQ ACORDEÓN)",
      role: "Filtrado Proactivo & Resolución Previa de Objeciones",
      copywriting: {
        kicker: "CLARIDAD ANTE TODO",
        headline: "Preguntas Frecuentes",
        subheadline: "Respuestas directas a las consultas más comunes para planificar su estadía con total tranquilidad."
      },
      videoEmbedCode: `<!-- Código HTML Embed para Acordeón FAQ en Google Sites -->
<style>
  .faq-container { font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif; max-width: 100%; margin: 0 auto; color: #1e293b; }
  .faq-card { border: 1px solid #e2e8f0; border-radius: 12px; margin-bottom: 12px; background: #ffffff; overflow: hidden; transition: all 0.2s ease; }
  .faq-card:hover { border-color: #cbd5e1; box-shadow: 0 4px 12px rgba(0,0,0,0.03); }
  .faq-summary { padding: 18px 20px; font-weight: 600; font-size: 15px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; list-style: none; color: #0f172a; }
  .faq-summary::-webkit-details-marker { display: none; }
  .faq-summary:after { content: '+'; font-size: 20px; font-weight: 400; color: #94a3b8; transition: transform 0.2s; }
  details[open] .faq-summary:after { content: '−'; color: #b45309; }
  .faq-content { padding: 0 20px 20px; font-size: 14px; line-height: 1.65; color: #475569; border-top: 1px solid #f1f5f9; padding-top: 14px; }
</style>

<div class="faq-container">
  <details class="faq-card">
    <summary class="faq-summary">¿Puedo utilizar todas las instalaciones sin importar el sector donde me aloje?</summary>
    <div class="faq-content">Totalmente. El acceso a la piscina sin fin, la playa de arena privada, el salón comedor, el quincho regional y todos los espacios verdes comunes es libre e idéntico para todos nuestros huéspedes, sin importar si su reserva es en Cabaña Rústica, Suite Moderna o Cabaña Punta de Piedra.</div>
  </details>

  <details class="faq-card">
    <summary class="faq-summary">¿Cuál es la política para menores?</summary>
    <div class="faq-content">Menores de 0 a 4 años: Alojamiento SIN CARGO (Gratis). Menores de 5 a 12 años: 50% DE DESCUENTO (incluye desayuno diario; no incluye servicio completo de pensión, el cual puede coordinarse de forma personalizada).</div>
  </details>

  <details class="faq-card">
    <summary class="faq-summary">¿Cuáles son las tarifas vigentes y qué incluyen?</summary>
    <div class="faq-content">Alojamiento diario por persona: Solo Desayuno $85.000 ($99.000 en Punta de Piedra) y Servicio Completo con Bebidas en comidas $150.000 ($165.000 en Punta de Piedra). Los Paquetes de Pesca Todo Incluido inician desde $400.000 por persona e integran estadía, pensión completa, lancha con guía, conservadora con 18 cervezas frías y equipo completo.</div>
  </details>

  <details class="faq-card">
    <summary class="faq-summary">¿Cuáles son los horarios de Check-in y Check-out?</summary>
    <div class="faq-content">Check-in: a partir de las 14:00 hs (sin excepción, para garantizar la excelencia en preparación y desinfección de cada unidad). Check-out: hasta las 10:00 hs. Disponemos de custodia de equipaje si sus horarios de traslado o de navegación así lo requieren.</div>
  </details>

  <details class="faq-card">
    <summary class="faq-summary">¿Qué diferencia hay entre el Área Rústica y el Área Moderna?</summary>
    <div class="faq-content">El Área Rústica presenta cabañas en maderas nobles inmersas en el bosque nativo con galerías sombreadas (2 a 5 personas). El Área Moderna ofrece departamentos contemporáneos con grandes ventanales vidriados con vista al río y a la piscina (hasta 6 personas con 3 camas dobles). Ambas disponen del mismo nivel de equipamiento: aire acondicionado, DirecTV, frigobar y blanquería.</div>
  </details>

  <details class="faq-card">
    <summary class="faq-summary">¿Qué incluye el Paquete de Pesca Todo Incluido y qué debo llevar?</summary>
    <div class="faq-content">Incluye hospedaje, comidas con bebidas libres, lancha con guía matriculado, conservadora a bordo con hielo, aguas, gaseosas y 18 cervezas, más cañas, reeles y multifilamento. Lo único que no incluye son las carnadas vivas y la licencia de pesca de Corrientes (asistida previamente). Sugerimos traer lentes polarizados, protector solar y ropa con protección UV.</div>
  </details>
</div>`,
      videoUrl: "",
      designNotes: "Google Sites cuenta con el componente nativo 'Texto contraíble' (Collapsible group), o bien puedes insertar directamente este código HTML embed que ya incluye estilos responsivos limpios de estilo luxury."
    },
    {
      step: 7,
      title: "MÓDULO 7: UBICACIÓN, MAPA Y CÓMO LLEGAR",
      role: "Georreferenciación & Logística de Traslado",
      copywriting: {
        kicker: "UBICACIÓN PRIVILEGIADA",
        headline: "En el corazón del Alto Paraná.",
        subheadline: "Un punto estratégico sobre el KM 1098 de la Ruta Nacional 12, con acceso pavimentado directo y la tranquilidad de una costa privada.",
        direccion: "Ruta Nacional N°12, KM 1098. Itatí, Corrientes, Argentina.",
        comoLlegar: [
          "Vehículo particular: Acceso directo y señalizado sobre la Ruta Nacional N°12, totalmente asfaltada.",
          "Vía aérea: Vuelos diarios a los Aeropuertos de Corrientes Capital (CNQ - 75 km) o Resistencia, Chaco (RES - 95 km). Podemos coordinar su traslado privado puerta a puerta con chofer.",
          "Ómnibus: Servicios directos hasta la terminal de Itatí o Corrientes Capital con transfer programado."
        ],
        distancias: "Corrientes Capital: 75 km · Resistencia: 95 km · Paso de la Patria: 45 km · Basílica de Itatí: 12 km"
      },
      videoEmbedCode: `<!-- Código HTML Embed para Google Maps Interactivo en Google Sites -->
<div style="width: 100%; height: 350px; border-radius: 12px; overflow: hidden; box-shadow: 0 8px 24px rgba(0,0,0,0.15);">
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3542.4340798369527!2d-58.2435!3d-27.2713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDE2JzE2LjciUyA1OMKwMTQnMzYuNiJX!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar" 
    width="100%" 
    height="100%" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade">
  </iframe>
</div>`,
      videoUrl: "",
      designNotes: "En Google Sites puedes usar el bloque nativo 'Mapa' y buscar 'Itatí, Corrientes RN12 KM 1098' o insertar este iframe responsivo que calza perfecto en pantalla móvil."
    },
    {
      step: 8,
      title: "MÓDULO 8: ATENCIÓN PERSONALIZADA Y RESERVAS (FILTRO FINAL)",
      role: "Conversión de Alto Valor & Contacto Directo con Especialista",
      copywriting: {
        kicker: "PLANIFICACIÓN A MEDIDA",
        headline: "Hablemos de su próxima estadía en el río.",
        subheadline: "No utilizamos respuestas automáticas ni bots estandarizados. Cada reserva en Puerto Yacarey se coordina personalmente con un Asesor Especialista que conoce las mareas, el pique y las opciones de hospedaje para diseñar un itinerario a la medida de sus expectativas.",
        microCerteza: "Atención personalizada por un especialista del lodge · Respuesta directa en el día",
        ctaPrincipal: "Hablar con un Especialista de Reservas",
        ctaSecundario: "Solicitar Disponibilidad a un Asesor",
        datosContacto: "WhatsApp Directo: +54 379 463-4101 · Email: cabanaspuertoyacarey@gmail.com",
        prefilledWhatsAppMsg: "Hola, estuve viendo la propuesta de Puerto Yacarey en el sitio web y me gustaría coordinar disponibilidad y asesoramiento para una estadía personalizada."
      },
      videoEmbedCode: `<!-- Código de Botón Luxury para Google Sites -->
<div style="text-align: center; padding: 24px 0;">
  <a href="https://wa.me/5493794634101?text=Hola,%20quisiera%20asesoramiento%20personalizado%20para%20coordinar%20una%20reserva%20en%20Puerto%20Yacarey." 
     target="_blank" 
     style="display: inline-block; background-color: #0f2421; color: #f8fafc; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 15px; font-weight: 600; text-decoration: none; padding: 18px 32px; border-radius: 9999px; box-shadow: 0 10px 25px -5px rgba(15, 36, 33, 0.4); border: 1px solid #c99a4e; transition: transform 0.2s, background-color 0.2s;">
    Hablar con un Especialista de Reservas →
  </a>
  <div style="margin-top: 12px; font-size: 12px; color: #64748b; font-family: sans-serif;">
    Atención directa por un asesor del lodge · Sin intermediarios ni bots
  </div>
</div>`,
      videoUrl: "",
      designNotes: "El botón debe destacar por su elegancia y no por el verde chillón genérico de WhatsApp. Usamos un tono verde selva profundo (#0F2421) con reborde dorado Paraná (#C99A4E) que denota exclusividad y servicio boutique."
    }
  ]
};
