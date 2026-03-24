import Image from "next/image";
import Link from "next/link";
import QRCode from "qrcode";
import { CoverageMap, type CoverageZone } from "@/components/CoverageMap";
import {
  PAYMENT_ROUTE,
  SITE_BASE_URL,
  SITE_NAME,
  SOCIAL_LINKS,
  SOCIAL_ROUTE,
  WHATSAPP_URL,
} from "@/lib/site-content";

const metrics = [
  { value: "12+", label: "anos acompanando instalaciones y soporte en campo" },
  { value: "6", label: "coberturas ilustrativas listas para cotizacion dinamica" },
  { value: "<24 h", label: "respuesta comercial estimada via bot de WhatsApp" },
];

const serviceShowcase = [
  {
    title: "Instalaciones que se explican y se entregan limpias",
    description:
      "Alta residencial, reubicacion, alineacion de equipos y puesta en marcha con comunicacion clara para la clienta final.",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80",
    className: "lg:col-span-7 lg:row-span-2",
    align: "large" as const,
  },
  {
    title: "Cobertura para casas, locales y puntos operativos",
    description:
      "Diagnosticos de factibilidad, extension por zonas y seguimiento postinstalacion con soporte directo.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    className: "lg:col-span-5",
    align: "compact" as const,
  },
  {
    title: "Atencion tecnica, mantenimiento y cambios de domicilio",
    description:
      "Trabajos correctivos, preventivos y reubicaciones programadas sin exponer planes fijos que luego queden obsoletos.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    className: "lg:col-span-5",
    align: "compact" as const,
  },
];

const workCategories = [
  "Instalacion residencial y empresarial",
  "Reubicacion y cambio de domicilio",
  "Mantenimiento correctivo y preventivo",
  "Diagnostico de senal y factibilidad",
  "Soporte tecnico con seguimiento humano",
  "Levantamiento para ampliacion de cobertura",
];

const values = [
  "Respuesta honesta",
  "Instalacion limpia",
  "Seguimiento postventa",
  "Lenguaje claro para el cliente",
  "Cobertura responsable",
  "Cotizacion contextual",
];

const coverageZones: CoverageZone[] = [
  {
    id: "centro",
    name: "Centro",
    x: 210,
    y: 174,
    radius: 58,
    fill: "rgba(63, 124, 148, 0.5)",
    descriptor:
      "Sector con alta densidad comercial y solicitudes de respuesta rapida para negocios, despachos y puntos de venta.",
    responseTime: "4 a 8 horas",
  },
  {
    id: "norte",
    name: "Norte",
    x: 356,
    y: 136,
    radius: 68,
    fill: "rgba(194, 145, 87, 0.38)",
    descriptor:
      "Zona habitacional y mixto-comercial con demanda recurrente de instalaciones iniciales y ajustes por crecimiento.",
    responseTime: "Mismo dia",
  },
  {
    id: "sur",
    name: "Sur",
    x: 450,
    y: 264,
    radius: 66,
    fill: "rgba(67, 138, 170, 0.42)",
    descriptor:
      "Cobertura demo con foco en residenciales, fraccionamientos y mantenimiento por cambio de ubicacion de equipos.",
    responseTime: "8 a 24 horas",
  },
  {
    id: "poniente",
    name: "Poniente",
    x: 286,
    y: 320,
    radius: 62,
    fill: "rgba(105, 153, 102, 0.36)",
    descriptor:
      "Area de crecimiento gradual donde se priorizan visitas de factibilidad para garantizar promesas realistas.",
    responseTime: "24 horas",
  },
  {
    id: "corredor",
    name: "Corredor",
    x: 556,
    y: 172,
    radius: 74,
    fill: "rgba(34, 87, 123, 0.34)",
    descriptor:
      "Zona ilustrativa para prospectos empresariales y operaciones con horarios definidos de instalacion.",
    responseTime: "Cita programada",
  },
  {
    id: "periferia",
    name: "Periferia",
    x: 620,
    y: 316,
    radius: 88,
    fill: "rgba(194, 145, 87, 0.28)",
    descriptor:
      "Cobertura referencial con validacion previa por visibilidad, distancia y disponibilidad de infraestructura.",
    responseTime: "Bajo estudio",
  },
];

const swotCards = [
  {
    badge: "Fortalezas",
    title: "Trato directo, seguimiento cercano y ejecucion ordenada.",
    copy:
      "La propuesta se apoya en acompanamiento humano, explicacion clara al cliente y una presencia de campo que transmite confianza.",
    tone:
      "bg-[linear-gradient(145deg,rgba(255,255,255,0.92),rgba(246,239,229,0.9))] border-[rgba(194,145,87,0.18)]",
  },
  {
    badge: "Oportunidades",
    title: "Crecimiento en negocios locales, residenciales y zonas mixtas.",
    copy:
      "La web puede captar solicitudes por cobertura, soporte y cambios de domicilio sin depender de planes fijos publicados.",
    tone:
      "bg-[linear-gradient(145deg,rgba(236,247,250,0.92),rgba(255,255,255,0.92))] border-[rgba(67,138,170,0.18)]",
  },
  {
    badge: "Debilidades",
    title: "La factibilidad cambia por saturacion, altura y condiciones del sitio.",
    copy:
      "Por eso la cotizacion debe permanecer dinamica y el bot de WhatsApp funciona como filtro inicial antes de confirmar servicio.",
    tone:
      "bg-[linear-gradient(145deg,rgba(255,255,255,0.94),rgba(243,244,246,0.94))] border-[rgba(16,32,51,0.12)]",
  },
  {
    badge: "Amenazas",
    title: "Terreno, clima y operadores agresivos pueden alterar la promesa comercial.",
    copy:
      "La respuesta profesional es mostrar cobertura ilustrativa, diagnostico previo y mensajes prudentes en todos los puntos de contacto.",
    tone:
      "bg-[linear-gradient(145deg,rgba(255,247,242,0.94),rgba(255,255,255,0.94))] border-[rgba(202,105,55,0.14)]",
  },
];

function ArrowUpRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <path
        d="M7 17L17 7M9 7h8v8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
    </svg>
  );
}

function PaymentIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 10h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M7 15h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function QrIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M14 14h2v2h-2zM18 14h3v3h-3zM14 18h3v3h-3zM19 19h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path d="M9 5.5L3.5 7.8v10.7L9 16m0-10.5l6 2m-6-2v10.5m6-8.5l5.5-2.3v10.7L15 18m0-10.5V18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="mt-1 h-4 w-4 flex-none" aria-hidden="true">
      <path
        d="M5 12.5L9.3 16.5L19 7.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SectionHeading({
  tag,
  title,
  description,
}: {
  tag: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="eyebrow">{tag}</div>
      <h2 className="font-display mt-5 text-balance text-[clamp(2.35rem,5vw,4.4rem)] leading-[0.95] tracking-[-0.04em] text-[var(--color-ink)]">
        {title}
      </h2>
      <p className="mt-5 max-w-2xl text-[1rem] leading-8 text-[var(--color-slate)] sm:text-[1.05rem]">
        {description}
      </p>
    </div>
  );
}

function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <article className="panel-surface rounded-[1.6rem] px-5 py-5">
      <p className="font-display text-[clamp(2rem,4vw,3rem)] leading-none tracking-[-0.05em] text-[var(--color-ink)]">
        {value}
      </p>
      <p className="mt-2 text-sm leading-6 text-[var(--color-slate)]">{label}</p>
    </article>
  );
}

export default async function Home() {
  const socialQrData = await QRCode.toDataURL(`${SITE_BASE_URL}${SOCIAL_ROUTE}`, {
    width: 320,
    margin: 1,
    color: {
      dark: "#102033",
      light: "#F7F2EA",
    },
  });

  return (
    <main className="relative">
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
          <div className="panel-surface flex items-center justify-between rounded-full px-4 py-3 sm:px-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(194,145,87,0.92),rgba(47,113,133,0.88))] text-white shadow-[0_16px_40px_-24px_rgba(16,32,51,0.9)]">
                <span className="font-display text-lg">A</span>
              </div>
              <div>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-slate)]">
                  {SITE_NAME}
                </p>
                <p className="text-xs text-[var(--color-slate)]">
                  Conectividad residencial y empresarial
                </p>
              </div>
            </div>

            <nav className="hidden items-center gap-6 text-[0.74rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)] md:flex">
              <a href="#empresa" className="transition hover:text-[var(--color-ink)]">
                Empresa
              </a>
              <a href="#trabajos" className="transition hover:text-[var(--color-ink)]">
                Trabajos
              </a>
              <a href="#cobertura" className="transition hover:text-[var(--color-ink)]">
                Coberturas
              </a>
              <a href="#foda" className="transition hover:text-[var(--color-ink)]">
                FODA
              </a>
            </nav>

            <Link
              href={WHATSAPP_URL}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-4 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:bg-[color:color-mix(in_oklab,var(--color-ink)_82%,white)]"
            >
              <WhatsAppIcon />
              Bot WhatsApp
            </Link>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden px-4 pb-18 pt-32 sm:px-6 sm:pb-24 sm:pt-40 lg:px-8">
        <div className="grid-aura" />
        <div className="grain" />

        <div className="mx-auto max-w-7xl">
          <div className="panel-surface hero-mesh relative overflow-hidden rounded-[2.8rem] px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_top_right,rgba(67,138,170,0.18),transparent_54%)]" />

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.06fr)_minmax(22rem,0.94fr)] lg:items-end">
              <div className="relative">
                <div className="eyebrow">Demo corporativo para presentacion comercial</div>
                <h1 className="font-display mt-6 max-w-4xl text-balance text-[clamp(3.3rem,8vw,7.2rem)] leading-[0.9] tracking-[-0.06em] text-[var(--color-ink)]">
                  Una web sobria para vender cobertura, atencion y confianza.
                </h1>
                <p className="mt-6 max-w-2xl text-[1.05rem] leading-8 text-[var(--color-slate)] sm:text-[1.12rem]">
                  La web deja de mostrar planes estaticos y pasa a presentar lo que hoy si da
                  valor: mision, vision, valores, experiencia, trabajos que realizan, coberturas
                  y accesos rapidos a redes, pago y bot de WhatsApp.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={WHATSAPP_URL}
                    target="_blank"
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--color-ink)] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[color:color-mix(in_oklab,var(--color-ink)_82%,white)]"
                  >
                    <WhatsAppIcon />
                    Solicitar cobertura por WhatsApp
                  </Link>
                  <Link
                    href={PAYMENT_ROUTE}
                    className="inline-flex items-center justify-center gap-3 rounded-full border border-[rgba(16,32,51,0.12)] bg-white/80 px-7 py-4 text-sm font-semibold text-[var(--color-ink)] transition hover:-translate-y-0.5 hover:border-[rgba(16,32,51,0.24)]"
                  >
                    <PaymentIcon />
                    Abrir portal de pago demo
                  </Link>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {metrics.map((metric) => (
                    <MetricCard key={metric.label} {...metric} />
                  ))}
                </div>
              </div>

              <div className="relative grid gap-4">
                <article className="shimmer-line overflow-hidden rounded-[2rem] border border-[rgba(16,32,51,0.08)] bg-[linear-gradient(160deg,rgba(16,32,51,0.96),rgba(14,63,82,0.94))] p-6 text-white shadow-[0_30px_90px_-48px_rgba(16,32,51,1)]">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-white/58">
                    Estrategia comercial actualizada
                  </p>
                  <h2 className="font-display mt-4 text-[clamp(2rem,4vw,3rem)] leading-[0.95] tracking-[-0.05em]">
                    Los planes ya no viven aqui.
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-white/76">
                    Se cotizan de forma dinamica segun factibilidad, altura, distancia, saturacion
                    y tipo de cliente. La web ahora prepara la venta y el cierre sucede en
                    WhatsApp o durante la visita tecnica.
                  </p>
                  <div className="mt-5 rounded-[1.4rem] border border-white/10 bg-white/8 px-4 py-4">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white/58">
                      Guion recomendado del bot
                    </p>
                    <p className="mt-2 text-sm leading-7 text-white/82">
                      &ldquo;Comparten ubicacion, tipo de servicio y horario de visita; el bot
                      responde con disponibilidad, siguientes pasos y promesa comercial.&rdquo;
                    </p>
                  </div>
                </article>

                <div className="grid gap-4 sm:grid-cols-2">
                  <article className="panel-surface rounded-[1.8rem] p-5">
                    <div className="flex items-center gap-2 text-[var(--color-ember)]">
                      <MapIcon />
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-slate)]">
                        Coberturas
                      </p>
                    </div>
                    <p className="mt-3 text-lg font-semibold text-[var(--color-ink)]">
                      Mapa interactivo con zoom, pan y nota de factibilidad.
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[var(--color-slate)]">
                      Sirve para visualizar zonas atendidas sin comprometer un plan fijo.
                    </p>
                  </article>

                  <article className="panel-surface rounded-[1.8rem] p-5">
                    <div className="flex items-center gap-2 text-[var(--color-ocean)]">
                      <QrIcon />
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-slate)]">
                        Redes y pago
                      </p>
                    </div>
                    <p className="mt-3 text-lg font-semibold text-[var(--color-ink)]">
                      QR a redes sociales y acceso a portal de pago demo.
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[var(--color-slate)]">
                      Dos acciones inmediatas para la clienta sin saturar la portada.
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="empresa" className="px-4 py-18 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            tag="Empresa"
            title="Una narrativa de marca que si transmite operacion real."
            description="La clienta ya no necesita exhibir paquetes rigidos. Necesita una pagina que explique quienes son, como trabajan y por que conviene escribirles para recibir una cotizacion actualizada."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.94fr)]">
            <article className="panel-surface rounded-[2rem] px-6 py-6 sm:px-8 sm:py-8">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-slate)]">
                Mision
              </p>
              <p className="font-display mt-4 text-[clamp(2rem,4vw,3rem)] leading-[0.96] tracking-[-0.04em] text-[var(--color-ink)]">
                Llevar conectividad confiable con una atencion que se siente cercana.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-8 text-[var(--color-slate)]">
                La marca acompana desde la primer pregunta hasta la entrega final. La experiencia
                digital y la operacion en campo hablan con la misma voz: orden, claridad y
                expectativas realistas.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <article className="rounded-[1.6rem] border border-[rgba(16,32,51,0.08)] bg-[rgba(255,255,255,0.78)] px-5 py-5">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
                    Vision
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-slate)]">
                    Ser la referencia local de conectividad premium para hogares, negocios y
                    expansiones de zona donde la promesa comercial coincida con la realidad del
                    servicio.
                  </p>
                </article>
                <article className="rounded-[1.6rem] border border-[rgba(16,32,51,0.08)] bg-[rgba(255,255,255,0.78)] px-5 py-5">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
                    Anos de experiencia
                  </p>
                  <p className="font-display mt-3 text-[3.6rem] leading-none tracking-[-0.06em] text-[var(--color-ink)]">
                    12
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-slate)]">
                    En instalaciones, soporte y acompanamiento comercial orientado a cierre.
                  </p>
                </article>
              </div>
            </article>

            <article className="panel-surface rounded-[2rem] p-6 sm:p-8">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-slate)]">
                Valores y trabajos
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {values.map((value) => (
                  <span
                    key={value}
                    className="rounded-full border border-[rgba(16,32,51,0.12)] bg-white/78 px-4 py-2 text-sm font-medium text-[var(--color-ink)]"
                  >
                    {value}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid gap-4">
                {workCategories.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-[1.4rem] border border-[rgba(16,32,51,0.08)] bg-white/70 px-4 py-4"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(194,145,87,0.14)] text-[var(--color-ember)]">
                      <CheckIcon />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--color-ink)]">{item}</p>
                      <p className="mt-1 text-sm leading-7 text-[var(--color-slate)]">
                        Presentado como servicio real, no como lista generica. Cada frente se
                        dirige al tipo de cliente correcto.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="trabajos" className="px-4 py-18 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            tag="Trabajos que realizan"
            title="Fotos de muestra integradas como prueba visual del servicio."
            description="La galeria sirve para vestir la propuesta, ayudar a la clienta a imaginar la operacion y bajar la sensacion de demo rapido. Las imagenes pueden reemplazarse despues por fotos propias."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:grid-rows-2">
            {serviceShowcase.map((item) => (
              <article
                key={item.title}
                className={`panel-surface overflow-hidden rounded-[2rem] ${item.className}`}
              >
                <div className={`grid h-full gap-0 ${item.align === "large" ? "lg:grid-cols-[1.1fr_0.9fr]" : ""}`}>
                  <div className={`relative min-h-[18rem] ${item.align === "compact" ? "h-72" : "h-full"}`}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes={item.align === "large" ? "(min-width: 1024px) 42vw, 100vw" : "(min-width: 1024px) 28vw, 100vw"}
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(16,32,51,0.34))]" />
                  </div>
                  <div className="flex flex-col justify-between p-6 sm:p-7">
                    <div>
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-slate)]">
                        Operacion visual
                      </p>
                      <h3 className="font-display mt-4 text-[clamp(2rem,3vw,3rem)] leading-[0.96] tracking-[-0.04em] text-[var(--color-ink)]">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-sm leading-8 text-[var(--color-slate)]">
                        {item.description}
                      </p>
                    </div>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-ink)]">
                      Ver como se presenta el servicio
                      <ArrowUpRightIcon />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="cobertura" className="px-4 py-18 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            tag="Coberturas"
            title="Mapa interactivo para acercar, alejar y vender la factibilidad con criterio."
            description="No es un mapa definitivo de ingenieria: es una herramienta comercial clara para explicar zonas de atencion, tiempos de respuesta y limitantes antes de enviar cotizacion o agenda."
          />

          <div className="mt-10">
            <CoverageMap zones={coverageZones} />
          </div>
        </div>
      </section>

      <section id="foda" className="px-4 py-18 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            tag="FODA"
            title="Analisis sintetico para que la clienta vea direccion, no solo decoracion."
            description="El FODA se presenta como parte del discurso comercial: deja claro que la marca entiende su terreno, sus ventajas competitivas y por que la cotizacion debe seguir siendo dinamica."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {swotCards.map((card) => (
              <article
                key={card.badge}
                className={`panel-surface rounded-[2rem] border p-6 sm:p-7 ${card.tone}`}
              >
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-slate)]">
                  {card.badge}
                </p>
                <h3 className="font-display mt-4 text-[clamp(1.9rem,3vw,2.7rem)] leading-[0.98] tracking-[-0.04em] text-[var(--color-ink)]">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm leading-8 text-[var(--color-slate)]">{card.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="px-4 pb-20 pt-18 sm:px-6 sm:pb-24 sm:pt-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            tag="Accesos rapidos"
            title="QR social, pago demo y entrada directa al bot."
            description="La parte operativa queda clara y visible. Todo lo que pediste esta conectado en un bloque final que se siente premium y accionable."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,0.7fr)_minmax(0,0.8fr)]">
            <article className="panel-surface rounded-[2rem] p-6 sm:p-7">
              <div className="flex items-center gap-3 text-[var(--color-ocean)]">
                <QrIcon />
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-slate)]">
                  QR para redes sociales
                </p>
              </div>

              <div className="mt-5 grid gap-5 sm:grid-cols-[14rem_1fr] sm:items-center">
                <div className="overflow-hidden rounded-[1.8rem] border border-[rgba(16,32,51,0.08)] bg-[#f7f2ea] p-4">
                  <Image
                    src={socialQrData}
                    alt="QR hacia la pagina de redes demo"
                    width={280}
                    height={280}
                    className="h-auto w-full rounded-[1.2rem]"
                  />
                </div>

                <div>
                  <p className="text-sm leading-8 text-[var(--color-slate)]">
                    Escanea y abre una pagina de redes creada dentro del sitio. Esto evita links
                    dispersos y convierte el QR en un acceso realmente util para volante, mostrador
                    o visita comercial.
                  </p>

                  <div className="mt-5 space-y-3">
                    {SOCIAL_LINKS.map((social) => (
                      <Link
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        className="flex items-center justify-between rounded-[1.3rem] border border-[rgba(16,32,51,0.08)] bg-white/72 px-4 py-3 transition hover:-translate-y-0.5 hover:border-[rgba(16,32,51,0.16)]"
                      >
                        <div>
                          <p className="text-sm font-semibold text-[var(--color-ink)]">
                            {social.name}
                          </p>
                          <p className="text-xs text-[var(--color-slate)]">{social.handle}</p>
                        </div>
                        <ArrowUpRightIcon />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            <article className="panel-surface rounded-[2rem] p-6 sm:p-7">
              <div className="flex items-center gap-3 text-[var(--color-ember)]">
                <PaymentIcon />
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-slate)]">
                  Link de pago
                </p>
              </div>

              <h3 className="font-display mt-5 text-[clamp(2rem,3.4vw,3rem)] leading-[0.98] tracking-[-0.04em] text-[var(--color-ink)]">
                Portal de pago demo dentro de la misma web.
              </h3>
              <p className="mt-4 text-sm leading-8 text-[var(--color-slate)]">
                Se creo una ruta ficticia para presentar cobro seguro, referencia, monto y
                confirmacion visual sin depender de pasarela real en esta etapa.
              </p>

              <Link
                href={PAYMENT_ROUTE}
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[var(--color-ink)] px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[color:color-mix(in_oklab,var(--color-ink)_82%,white)]"
              >
                Abrir pago demo
                <ArrowUpRightIcon />
              </Link>

              <div className="mt-8 rounded-[1.6rem] border border-[rgba(16,32,51,0.08)] bg-white/70 p-5">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
                  Ideal para
                </p>
                <p className="mt-2 text-sm leading-7 text-[var(--color-slate)]">
                  Mostrar seriedad comercial aun cuando la pasarela real todavia este en
                  configuracion. El cliente entiende el flujo desde ahora.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-[2rem] border border-[rgba(16,32,51,0.08)] bg-[linear-gradient(155deg,rgba(16,32,51,0.98),rgba(14,63,82,0.94))] p-6 text-white shadow-[0_30px_90px_-48px_rgba(16,32,51,1)] sm:p-7">
              <div className="flex items-center gap-3">
                <WhatsAppIcon />
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-white/58">
                  Bot de WhatsApp
                </p>
              </div>

              <h3 className="font-display mt-5 text-[clamp(2.1rem,3.5vw,3rem)] leading-[0.96] tracking-[-0.04em]">
                El cierre comercial entra por aqui.
              </h3>
              <p className="mt-4 text-sm leading-8 text-white/76">
                El bot recibe zona, tipo de servicio y horario sugerido. Desde ahi se envian
                cobertura, seguimiento y paso siguiente sin exponer planes desactualizados.
              </p>

              <div className="mt-6 space-y-3">
                <div className="rounded-[1.4rem] border border-white/10 bg-white/8 px-4 py-4">
                  <p className="text-sm font-semibold text-white">Entrada recomendada</p>
                  <p className="mt-1 text-sm leading-7 text-white/72">
                    &ldquo;Hola, quiero saber si hay cobertura en mi zona y cual es el tiempo de
                    instalacion.&rdquo;
                  </p>
                </div>
                <div className="rounded-[1.4rem] border border-white/10 bg-white/8 px-4 py-4">
                  <p className="text-sm font-semibold text-white">Promesa correcta</p>
                  <p className="mt-1 text-sm leading-7 text-white/72">
                    Cotizacion variable, visita tecnica y seguimiento humano cuando la operacion lo
                    requiera.
                  </p>
                </div>
              </div>

              <Link
                href={WHATSAPP_URL}
                target="_blank"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold text-[var(--color-ink)] transition hover:-translate-y-0.5"
              >
                Abrir bot
                <ArrowUpRightIcon />
              </Link>
            </article>
          </div>
        </div>
      </section>

      <footer className="border-t border-[rgba(16,32,51,0.08)] px-4 py-8 text-sm text-[var(--color-slate)] sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {SITE_NAME} · Presentacion corporativa con coberturas, QR social, FODA y portal demo.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#empresa" className="transition hover:text-[var(--color-ink)]">
              Empresa
            </a>
            <a href="#cobertura" className="transition hover:text-[var(--color-ink)]">
              Coberturas
            </a>
            <Link href={SOCIAL_ROUTE} className="transition hover:text-[var(--color-ink)]">
              Redes
            </Link>
            <Link href={PAYMENT_ROUTE} className="transition hover:text-[var(--color-ink)]">
              Pago demo
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
