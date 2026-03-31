import Image from "next/image";
import Link from "next/link";
import QRCode from "qrcode";
import { CoverageMap, type CoverageZone } from "@/components/CoverageMap";
import { CoverageZones } from "@/components/CoverageZones";
import { PlanCards } from "@/components/PlanCards";
import {
  PAYMENT_ROUTE,
  SITE_BASE_URL,
  SITE_NAME,
  SOCIAL_LINKS,
  SOCIAL_ROUTE,
  WHATSAPP_URL,
} from "@/lib/site-content";


const galleryMedia = [
  { type: "image" as const, src: "/campo-torre-dia.jpg",     tag: "Instalacion" },
  { type: "image" as const, src: "/equipo-instalado-luz.jpg", tag: "Equipos" },
  { type: "image" as const, src: "/campo-torre-nublado.jpg",  tag: "Soporte" },
  { type: "video" as const, src: "/campo-video.mp4",          tag: "En campo" },
  { type: "image" as const, src: "/campo-antena.jpg",         tag: "Antena" },
  { type: "image" as const, src: "/equipo-instalado-dia.jpg", tag: "Cobertura" },
];

const workCategories = [
  "Instalacion residencial de fibra y punto a punto",
  "Internet empresarial y coworking",
  "Reubicacion y cambio de domicilio",
  "Mantenimiento preventivo y correctivo",
  "Diagnostico de senal y factibilidad",
  "Soporte tecnico con seguimiento personalizado",
];

const values = [
  "Velocidad real garantizada",
  "Instalacion limpia y profesional",
  "Soporte humano 24/7",
  "Precios transparentes",
  "Cobertura verificada",
  "Compromiso post-instalacion",
];

const coverageZones: CoverageZone[] = [
  {
    id: "centro",
    name: "Centro",
    x: 210,
    y: 174,
    radius: 58,
    fill: "rgba(218, 31, 92, 0.38)",
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
    fill: "rgba(95, 36, 118, 0.32)",
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
    fill: "rgba(233, 103, 143, 0.40)",
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
    fill: "rgba(155, 97, 172, 0.34)",
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
    fill: "rgba(95, 36, 118, 0.28)",
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
    fill: "rgba(218, 31, 92, 0.20)",
    descriptor:
      "Cobertura referencial con validacion previa por visibilidad, distancia y disponibilidad de infraestructura.",
    responseTime: "Bajo estudio",
  },
];

const swotCards = [
  {
    badge: "Fortalezas",
    badgeColor: "text-[#DA1F5C] bg-[rgba(218,31,92,0.10)] border-[rgba(218,31,92,0.22)]",
    title: "Trato directo, seguimiento cercano y ejecucion ordenada.",
    copy:
      "PowerLink se apoya en acompanamiento humano, explicacion clara al cliente y una presencia de campo que transmite confianza desde la primer llamada.",
    tone:
      "bg-[linear-gradient(145deg,rgba(218,31,92,0.08),rgba(245,194,206,0.18),rgba(255,255,255,0.96))] border-[rgba(218,31,92,0.18)]",
  },
  {
    badge: "Oportunidades",
    badgeColor: "text-[#5F2476] bg-[rgba(95,36,118,0.10)] border-[rgba(95,36,118,0.22)]",
    title: "Crecimiento en negocios locales, residenciales y zonas mixtas.",
    copy:
      "La web capta solicitudes por cobertura, soporte y cambios de domicilio sin depender de planes fijos publicados. El bot de WhatsApp filtra y convierte.",
    tone:
      "bg-[linear-gradient(145deg,rgba(95,36,118,0.08),rgba(212,182,221,0.22),rgba(255,255,255,0.96))] border-[rgba(95,36,118,0.18)]",
  },
  {
    badge: "Debilidades",
    badgeColor: "text-[#C0305A] bg-[rgba(233,103,143,0.10)] border-[rgba(233,103,143,0.22)]",
    title: "La factibilidad cambia por saturacion, altura y condiciones del sitio.",
    copy:
      "Por eso la cotizacion permanece dinamica y el bot de WhatsApp funciona como filtro inicial antes de confirmar el servicio al cliente.",
    tone:
      "bg-[linear-gradient(145deg,rgba(233,103,143,0.08),rgba(245,194,206,0.16),rgba(255,255,255,0.96))] border-[rgba(233,103,143,0.18)]",
  },
  {
    badge: "Amenazas",
    badgeColor: "text-[#5F2476] bg-[rgba(155,97,172,0.10)] border-[rgba(155,97,172,0.22)]",
    title: "Terreno, clima y operadores agresivos pueden alterar la promesa comercial.",
    copy:
      "La respuesta de PowerLink es mostrar cobertura ilustrativa, diagnostico previo y mensajes prudentes en todos los puntos de contacto con el prospecto.",
    tone:
      "bg-[linear-gradient(145deg,rgba(155,97,172,0.08),rgba(212,182,221,0.18),rgba(255,255,255,0.96))] border-[rgba(155,97,172,0.18)]",
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

function InstagramIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}

function TikTokIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.77a4.85 4.85 0 01-1.01-.08z" />
    </svg>
  );
}

function getSocialIcon(name: string, className?: string) {
  if (name === "Instagram") return <InstagramIcon className={className} />;
  if (name === "Facebook") return <FacebookIcon className={className} />;
  if (name === "TikTok") return <TikTokIcon className={className} />;
  return null;
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


export default async function Home() {
  const socialQrData = await QRCode.toDataURL(`${SITE_BASE_URL}${SOCIAL_ROUTE}`, {
    width: 320,
    margin: 1,
    color: {
      dark: "#5F2476",
      light: "#FFF8FA",
    },
  });

  const whatsappQrData = await QRCode.toDataURL("https://wa.me/message/UIJWX4SPVN64L1", {
    width: 320,
    margin: 1,
    color: {
      dark: "#DA1F5C",
      light: "#FFF8FA",
    },
  });

  return (
    <main className="relative">
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
          <div className="panel-surface flex items-center justify-between rounded-full px-4 py-3 sm:px-6">
            <div className="flex items-center">
              <div className="overflow-hidden rounded-2xl bg-white shadow-[0_4px_20px_-4px_rgba(95,36,118,0.25)] px-2 py-1">
                <Image src="/powerlink-logo.jpeg" alt="PowerLink" width={140} height={52} className="h-[52px] w-auto object-contain" />
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
              <a href="#pago" className="transition hover:text-[var(--color-ink)]">
                Pago
              </a>
            </nav>

            <Link
              href={WHATSAPP_URL}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-pink-dark)] px-4 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] transition hover:-translate-y-0.5 hover:bg-[var(--color-purple-dark)]"
              style={{ color: "#ffffff" }}
            >
              <WhatsAppIcon />
              Pulse para más información
            </Link>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden px-4 pb-18 pt-32 sm:px-6 sm:pb-24 sm:pt-40 lg:px-8">
        <div className="grid-aura" />
        <div className="grain" />

        <div className="mx-auto max-w-7xl">
          <div className="panel-surface hero-mesh relative overflow-hidden rounded-[2.8rem] px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_top_right,rgba(95,36,118,0.12),transparent_54%)]" />

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.06fr)_minmax(22rem,0.94fr)] lg:items-end">
              <div className="relative">
                <div className="eyebrow">Conectividad con respaldo profesional</div>
                <h1 className="font-display mt-6 max-w-4xl text-balance text-[clamp(2.6rem,6vw,5.4rem)] leading-[0.9] tracking-[-0.06em] text-[var(--color-ink)]">
                  Conectividad que se instala, se explica y se mantiene.
                </h1>

                <div className="mt-6 max-w-2xl rounded-[1.6rem] border border-[rgba(218,31,92,0.14)] bg-white/80 px-5 py-4">
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[var(--color-pink-dark)]">
                    Descripcion del negocio
                  </p>
                  <p className="mt-2 text-[1rem] leading-8 text-[var(--color-ink)]">
                    Negocio local originario de Ciudad Mendoza, Veracruz, Mexico, dedicado a llevar el servicio de internet a comunidades de dificil acceso o aquellas en las que las grandes companias aun no tienen cobertura.
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={WHATSAPP_URL}
                    target="_blank"
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--color-pink-dark)] px-7 py-4 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-[var(--color-purple-dark)]"
                    style={{ color: "#ffffff" }}
                  >
                    <WhatsAppIcon />
                    Solicitar cobertura por WhatsApp
                  </Link>
                  <Link
                    href={PAYMENT_ROUTE}
                    className="inline-flex items-center justify-center gap-3 rounded-full border border-[rgba(218,31,92,0.20)] bg-white/80 px-7 py-4 text-sm font-semibold text-[var(--color-ink)] transition hover:-translate-y-0.5 hover:border-[rgba(218,31,92,0.36)]"
                  >
                    <PaymentIcon />
                    Realizar su pago
                  </Link>
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-slate)]">Síguenos</span>
                  {SOCIAL_LINKS.map((social) => (
                    <Link
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      className={`inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r ${social.accent} px-6 py-3.5 text-sm font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:text-white`}
                      style={{ color: "#ffffff" }}
                    >
                      {getSocialIcon(social.name, "h-5 w-5")}
                      {social.name}
                    </Link>
                  ))}
                </div>

                {/* QR WhatsApp en hero */}
                <div className="mt-6 flex items-center gap-5 rounded-[1.8rem] border border-[rgba(218,31,92,0.16)] bg-white/80 px-5 py-4">
                  <div className="flex-none overflow-hidden rounded-[1.2rem] border border-[rgba(218,31,92,0.12)] bg-[#fff8fa] p-2">
                    <Image
                      src={whatsappQrData}
                      alt="QR WhatsApp PowerLink"
                      width={96}
                      height={96}
                      className="h-24 w-24 rounded-lg"
                    />
                  </div>
                  <div>
                    <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[var(--color-pink-dark)]">WhatsApp directo</p>
                    <p className="mt-1 text-sm font-semibold text-[var(--color-ink)]">Escanea y contáctanos</p>
                    <p className="mt-1 text-xs leading-6 text-[var(--color-slate)]">Cotización, cobertura y agenda de instalación</p>
                  </div>
                </div>

                <div className="mt-8 overflow-hidden rounded-[2rem] border border-[rgba(218,31,92,0.10)] bg-white/60 backdrop-blur-sm">
                  <div className="flex items-start gap-4 border-b border-[rgba(16,32,51,0.06)] px-5 py-4">
                    <div className="mt-0.5 h-2 w-2 flex-none rounded-full bg-gradient-to-br from-[#DA1F5C] to-[#5F2476]" />
                    <div>
                      <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[var(--color-pink-dark)]">Identidad</p>
                      <p className="mt-1 text-sm font-semibold text-[var(--color-ink)]">Marca fuerte, técnica y confiable · "Enlace de poder"</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 border-b border-[rgba(16,32,51,0.06)] px-5 py-4">
                    <div className="mt-0.5 h-2 w-2 flex-none rounded-full bg-gradient-to-br from-[#5F2476] to-[#9B61AC]" />
                    <div>
                      <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[var(--color-purple-dark)]">Misión</p>
                      <p className="mt-1 text-sm leading-6 text-[var(--color-slate)]">Llevar conectividad de calidad a las comunidades donde otros no llegan, con servicio confiable, accesible y humano.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 border-b border-[rgba(16,32,51,0.06)] px-5 py-4">
                    <div className="mt-0.5 h-2 w-2 flex-none rounded-full bg-gradient-to-br from-[#DA1F5C] to-[#5F2476]" />
                    <div>
                      <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[var(--color-pink-dark)]">Visión</p>
                      <p className="mt-1 text-sm leading-6 text-[var(--color-slate)]">Ser la empresa líder en conectividad para comunidades de difícil acceso en Veracruz, México, reconocida por su compromiso social e innovación constante.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 border-b border-[rgba(16,32,51,0.06)] px-5 py-4">
                    <div className="mt-0.5 h-2 w-2 flex-none rounded-full bg-gradient-to-br from-[#5F2476] to-[#9B61AC]" />
                    <div>
                      <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[var(--color-purple-dark)]">Filosofía</p>
                      <p className="mt-1 text-sm leading-6 text-[var(--color-slate)]">El poder de la conexión: unir personas, negocios e instituciones a través de la tecnología para impulsar el progreso y mejorar la calidad de vida.</p>
                    </div>
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[var(--color-pink-dark)]">Valores</p>
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {["Confiabilidad", "Cercanía", "Innovación", "Solidaridad", "Compromiso social", "Excelencia técnica", "Integridad", "Responsabilidad", "Innovación continua", "Trabajo en equipo"].map((v) => (
                        <span key={v} className="inline-flex items-center rounded-full border border-[rgba(218,31,92,0.16)] bg-white/80 px-3 py-1 text-[0.7rem] font-semibold text-[var(--color-ink)]">{v}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative grid gap-4">
                {/* Card 1 — Link oficinista / presentando */}
                <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(95,36,118,0.16)] bg-white shadow-[0_20px_60px_-20px_rgba(95,36,118,0.22)]">
                  <div className="flex items-center gap-5 px-6 pt-6 pb-4">
                    <div className="flex-none">
                      <Image
                        src="/mascota-present.jpeg"
                        alt="Link presentando PowerLink"
                        width={120}
                        height={140}
                        className="h-[130px] w-auto object-contain drop-shadow-md"
                      />
                    </div>
                    <div>
                      <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[var(--color-purple-dark)]">Conoce a Link</p>
                      <p className="mt-1 text-lg font-bold leading-tight text-[var(--color-ink)]">La voz oficial de PowerLink</p>
                      <p className="mt-2 text-sm leading-7 text-[var(--color-slate)]">Link presenta los servicios, comparte novedades y responde dudas en todas las redes sociales de PowerLink. Síguelo para estar al día.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 border-t border-[rgba(95,36,118,0.10)] bg-white/90 px-5 py-3 backdrop-blur-sm">
                    <div className="h-2 w-2 rounded-full bg-[#5F2476]" />
                    <p className="text-sm font-semibold text-[var(--color-ink)]">Link informa</p>
                    <p className="ml-auto text-xs text-[var(--color-slate)]">Instagram · Facebook · TikTok</p>
                  </div>
                </div>

                {/* Card 2 — Link técnico en campo */}
                <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(218,31,92,0.14)] bg-white shadow-[0_20px_60px_-20px_rgba(218,31,92,0.30)]">
                  <div className="flex items-center gap-5 px-6 pt-6 pb-4">
                    <div className="flex-none">
                      <Image
                        src="/link-mascota.png"
                        alt="Link técnico PowerLink"
                        width={120}
                        height={140}
                        className="h-[130px] w-auto object-contain drop-shadow-lg"
                      />
                    </div>
                    <div>
                      <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[var(--color-pink-dark)]">Link en campo</p>
                      <p className="mt-1 text-lg font-bold leading-tight text-[var(--color-ink)]">El técnico que te conecta</p>
                      <p className="mt-2 text-sm leading-7 text-[var(--color-slate)]">Instalaciones residenciales, empresariales y puntos comerciales en Veracruz. Link coordina la visita técnica y te acompaña hasta que tu servicio quede funcionando.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 border-t border-[rgba(218,31,92,0.10)] bg-white/90 px-5 py-3 backdrop-blur-sm">
                    <div className="h-2 w-2 rounded-full bg-[#DA1F5C]" />
                    <p className="text-sm font-semibold text-[var(--color-ink)]">Link te orienta</p>
                    <p className="ml-auto text-xs text-[var(--color-slate)]">Síguenos en redes</p>
                  </div>
                </div>

                <CoverageZones />

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Planes */}
      <section id="planes" className="px-4 py-18 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            tag="Planes disponibles"
            title="Elige el plan que mejor se adapte a tu hogar o negocio."
            description="Contamos con opciones de instalacion y reconexion para cada necesidad. Pasa el cursor sobre cada plan para ver como contactarnos."
          />

          <PlanCards whatsappUrl={WHATSAPP_URL} />

          {/* Banner incluido en todos los planes */}
          <div className="mt-10 flex flex-col gap-3 rounded-[2rem] border border-[rgba(95,36,118,0.18)] bg-[linear-gradient(145deg,rgba(95,36,118,0.06),rgba(212,182,221,0.18),rgba(255,255,255,0.96))] px-7 py-6 sm:flex-row sm:items-center sm:gap-8">
            <div className="h-2 w-2 flex-none rounded-full bg-gradient-to-br from-[#DA1F5C] to-[#5F2476]" />
            <p className="text-sm font-bold text-[var(--color-ink)]">En cualquiera de los planes se incluye:</p>
            <div className="flex flex-wrap gap-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(95,36,118,0.16)] bg-white/80 px-4 py-2 text-sm font-semibold text-[var(--color-ink)]">
                🕘 Horario de atención a clientes 👫
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(218,31,92,0.16)] bg-white/80 px-4 py-2 text-sm font-semibold text-[var(--color-ink)]">
                👷🏻🧑🏻‍🔧 Servicios técnicos gratuitos
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Banda de colores de marca */}
      <div className="flex h-2 w-full">
        <div className="flex-1 bg-[#DA1F5C]" />
        <div className="flex-1 bg-[#E9678F]" />
        <div className="flex-1 bg-[#F5C2CE]" />
        <div className="flex-1 bg-[#D4B6DD]" />
        <div className="flex-1 bg-[#9B61AC]" />
        <div className="flex-1 bg-[#5F2476]" />
        <div className="flex-1 bg-[#000000]" />
      </div>


      <section id="empresa" className="px-4 py-18 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            tag="Empresa"
            title="Una empresa que transmite operacion real y conectividad confiable."
            description="PowerLink no exhibe paquetes rigidos. Presenta quienes son, como trabajan y por que conviene escribirles para recibir una cotizacion actualizada y real."
          />

          {/* Plan estratégico */}
          <div className="mt-8 rounded-[2rem] border border-[rgba(95,36,118,0.18)] bg-[linear-gradient(145deg,rgba(95,36,118,0.06),rgba(212,182,221,0.16),rgba(255,255,255,0.96))] px-7 py-7 sm:px-8 sm:py-8">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-[var(--color-purple-dark)]">Plan Estratégico del Servicio de Internet</p>
            <p className="mt-4 text-base leading-8 text-[var(--color-slate)]">
              En un mercado de conectividad en comunidades de difícil acceso, internet <span className="font-bold text-[var(--color-ink)]">POWERLINK</span> se encuentra en un constante proceso de expansión sostenida, impulsado por la creciente necesidad de un servicio de internet confiable, veloz y de alta calidad.
            </p>
            <p className="mt-3 text-base leading-8 text-[var(--color-slate)]">
              Trabajando con equipos por <span className="font-semibold text-[var(--color-ink)]">Fibra Óptica</span> o <span className="font-semibold text-[var(--color-ink)]">Wireless</span>.
            </p>
          </div>

          {/* Entorno y contexto — Plan de Mercadotecnia §1.1 */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-[1.8rem] border border-[rgba(218,31,92,0.12)] bg-[linear-gradient(145deg,rgba(218,31,92,0.05),rgba(255,255,255,0.94))] px-6 py-6">
              <div className="mb-3 inline-flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#DA1F5C]" />
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[var(--color-pink-dark)]">Mercado en expansión</p>
              </div>
              <p className="text-sm leading-7 text-[var(--color-slate)]">
                Las comunidades de difícil acceso viven una demanda creciente de conectividad. Las grandes compañías de fibra óptica no llegan — esa brecha es la oportunidad de PowerLink.
              </p>
            </div>
            <div className="rounded-[1.8rem] border border-[rgba(95,36,118,0.12)] bg-[linear-gradient(145deg,rgba(95,36,118,0.05),rgba(255,255,255,0.94))] px-6 py-6">
              <div className="mb-3 inline-flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#5F2476]" />
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[var(--color-purple-dark)]">Nueva demanda digital</p>
              </div>
              <p className="text-sm leading-7 text-[var(--color-slate)]">
                Trabajo remoto, educación en línea y digitalización de negocios han convertido el internet en un recurso esencial, incluso en zonas rurales y suburbanas.
              </p>
            </div>
            <div className="rounded-[1.8rem] border border-[rgba(212,182,221,0.28)] bg-[linear-gradient(145deg,rgba(212,182,221,0.10),rgba(255,255,255,0.94))] px-6 py-6">
              <div className="mb-3 inline-flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#9B61AC]" />
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[var(--color-purple-dark)]">Ventaja diferencial</p>
              </div>
              <p className="text-sm leading-7 text-[var(--color-slate)]">
                El usuario ya no solo busca disponibilidad — exige calidad, velocidad y soporte cercano. Quien ofrece atención personalizada y cobertura real se diferencia solo.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.94fr)_minmax(0,0.52fr)]">
            <article className="panel-surface relative overflow-hidden rounded-[2rem] px-6 py-6 sm:px-8 sm:py-8">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-slate)]">
                Mision
              </p>
              <p className="font-display mt-4 text-[clamp(2rem,4vw,3rem)] leading-[0.96] tracking-[-0.04em] text-[var(--color-ink)]">
                Llevar conectividad confiable con una atencion que se siente cercana.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-8 text-[var(--color-slate)]">
                PowerLink acompana desde la primer pregunta hasta la entrega final. La experiencia
                digital y la operacion en campo hablan con la misma voz: orden, claridad y
                expectativas realistas.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <article className="rounded-[1.6rem] border border-[rgba(218,31,92,0.10)] bg-[rgba(255,255,255,0.78)] px-5 py-5">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
                    Vision
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-slate)]">
                    Ser la referencia local de conectividad premium para hogares, negocios y
                    expansiones de zona donde la promesa comercial coincida con la realidad del
                    servicio.
                  </p>
                </article>
                <article className="rounded-[1.6rem] border border-[rgba(218,31,92,0.10)] bg-[rgba(255,255,255,0.78)] px-5 py-5">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
                    Anos de experiencia
                  </p>
                  <p className="font-display mt-3 text-[3.6rem] leading-none tracking-[-0.06em] text-[var(--color-pink-dark)]">
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
                    className="rounded-full border border-[rgba(218,31,92,0.16)] bg-white/78 px-4 py-2 text-sm font-medium text-[var(--color-ink)]"
                  >
                    {value}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid gap-4">
                {workCategories.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-[1.4rem] border border-[rgba(218,31,92,0.08)] bg-white/70 px-4 py-4"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(218,31,92,0.10)] text-[var(--color-pink-dark)]">
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

            {/* Mascota oficina — panel visual empresa */}
            <div className="overflow-hidden rounded-[2rem] bg-[linear-gradient(160deg,rgba(245,194,206,0.30),rgba(212,182,221,0.30))] border border-[rgba(218,31,92,0.12)] shadow-md flex flex-col">
              <div className="relative h-[280px]">
                <Image
                  src="/mascota-oficina.jpeg"
                  alt="Equipo PowerLink en campo"
                  fill
                  className="object-cover object-top"
                  sizes="(min-width:1024px) 18vw, 100vw"
                />
              </div>
              <div className="px-5 py-4 bg-white/80 border-t border-[rgba(218,31,92,0.10)]">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#DA1F5C]">Equipo PowerLink</p>
                <p className="mt-1 text-sm font-medium text-[var(--color-ink)]">Profesionales en campo, listos para ti.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="trabajos" className="px-4 py-18 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            tag="Trabajos que realizan"
            title="Instalaciones reales, entregadas con orden y comunicacion clara."
            description="La galeria presenta los frentes de trabajo de PowerLink. Cada imagen representa un tipo de servicio real que se puede cotizar via WhatsApp o visita tecnica programada."
          />

          {/* Simple masonry-style gallery: 2 cols tablet, 3 cols desktop */}
          <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
            {galleryMedia.map((item) => (
              <figure key={item.src} className="mb-5 break-inside-avoid overflow-hidden rounded-[1.5rem]">
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    className="block w-full rounded-[1.5rem]"
                  />
                ) : (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={item.src}
                    alt={item.tag}
                    className="block w-full rounded-[1.5rem]"
                    loading="lazy"
                  />
                )}
              </figure>
            ))}
          </div>
        </div>
      </section>


      <section id="foda" className="px-4 py-18 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            tag="FODA"
            title="PowerLink entiende su terreno, sus ventajas y sus limites."
            description="El FODA se presenta como parte del discurso comercial: deja claro que la marca conoce su sector, sus ventajas competitivas y por que la cotizacion debe seguir siendo dinamica y verificada."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {swotCards.map((card) => (
              <article
                key={card.badge}
                className={`panel-surface rounded-[2rem] border p-6 sm:p-7 ${card.tone}`}
              >
                <span className={`text-[0.72rem] font-bold uppercase tracking-[0.18em] px-3 py-1 rounded-full border ${card.badgeColor}`}>
                  {card.badge}
                </span>
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
            title="QR social, pago y entrada directa al bot."
            description="La parte operativa queda clara y visible. Todo lo que necesitas para contactar, pagar o seguir a PowerLink esta en un bloque final premium y accionable."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,0.7fr)_minmax(0,0.8fr)]">
            <article className="panel-surface rounded-[2rem] p-6 sm:p-7">
              <div className="flex items-center gap-3 text-[var(--color-purple-dark)]">
                <QrIcon />
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-slate)]">
                  QR para redes sociales
                </p>
              </div>

              <div className="mt-5 flex flex-col items-center gap-3">
                <div className="overflow-hidden rounded-[1.8rem] border border-[rgba(218,31,92,0.16)] bg-[#fff8fa] p-4 w-full max-w-[280px]">
                  <Image
                    src={whatsappQrData}
                    alt="QR de contacto directo por WhatsApp"
                    width={280}
                    height={280}
                    className="h-auto w-full rounded-[1.2rem]"
                  />
                </div>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-pink-dark)]">WhatsApp directo</p>
                <p className="text-xs text-center leading-6 text-[var(--color-slate)]">Escanea y escríbenos para cotización o consulta de cobertura</p>
              </div>

              <div className="mt-5 flex flex-col gap-4">
                {SOCIAL_LINKS.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    className={`flex items-center justify-between rounded-[1.6rem] bg-gradient-to-r ${social.accent} px-6 py-5 shadow-md transition hover:-translate-y-0.5`}
                    style={{ color: "#ffffff" }}
                  >
                    <div>
                      <p className="text-base font-bold" style={{ color: "#ffffff" }}>{social.name}</p>
                      <p className="mt-0.5 text-sm" style={{ color: "#ffffff" }}>{social.handle}</p>
                    </div>
                    <ArrowUpRightIcon />
                  </Link>
                ))}
              </div>
            </article>

            <article className="panel-surface rounded-[2rem] p-6 sm:p-7">
              <div className="flex items-center gap-3 text-[var(--color-pink-dark)]">
                <PaymentIcon />
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-slate)]">
                  Link de pago
                </p>
              </div>

              <h3 className="font-display mt-5 text-[clamp(2rem,3.4vw,3rem)] leading-[0.98] tracking-[-0.04em] text-[var(--color-ink)]">
                Realiza tu pago directamente a PowerLink.
              </h3>
              <p className="mt-4 text-sm leading-8 text-[var(--color-slate)]">
                Se creo una ruta ficticia para presentar cobro seguro, referencia, monto y
                confirmacion visual sin depender de pasarela real en esta etapa.
              </p>

              <Link
                href={PAYMENT_ROUTE}
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[var(--color-pink-dark)] px-6 py-4 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-[var(--color-purple-dark)]"
                style={{ color: "#ffffff" }}
              >
                Realizar su pago
                <ArrowUpRightIcon />
              </Link>

              <div className="mt-8 rounded-[1.6rem] border border-[rgba(218,31,92,0.10)] bg-white/70 p-5">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
                  Ideal para
                </p>
                <p className="mt-2 text-sm leading-7 text-[var(--color-slate)]">
                  Mostrar seriedad comercial aun cuando la pasarela real todavia este en
                  configuracion. El cliente entiende el flujo desde ahora.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-[2rem] border border-[rgba(95,36,118,0.16)] bg-[linear-gradient(155deg,rgba(95,36,118,0.97),rgba(218,31,92,0.90))] text-white shadow-[0_30px_90px_-48px_rgba(95,36,118,0.8)]">
              {/* Mascota purple — imagen grande en card WhatsApp */}
              <div className="relative h-52 overflow-hidden border-b border-white/10">
                <Image
                  src="/mascota-purple.jpeg"
                  alt="Link mascota PowerLink"
                  fill
                  className="object-cover object-top"
                  sizes="(min-width:1024px) 28vw, 100vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_40%,rgba(95,36,118,0.85))]" />
                <div className="absolute bottom-4 left-5 flex items-center gap-2">
                  <WhatsAppIcon />
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-white/90">
                    Bot de WhatsApp
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-7">
              <h3 className="font-display text-[clamp(2.1rem,3.5vw,3rem)] leading-[0.96] tracking-[-0.04em]">
                Link te atiende directo por WhatsApp.
              </h3>
              <p className="mt-4 text-sm leading-8 text-white/90">
                Cuéntale a Link tu zona, si es para hogar o negocio, y el horario que te conviene.
                Desde ahí te llega cobertura, cotización actualizada y el siguiente paso sin rodeos.
              </p>

              <div className="mt-6 space-y-3">
                <div className="rounded-[1.4rem] border border-white/10 bg-white/8 px-4 py-4">
                  <p className="text-sm font-semibold text-white">Así puedes empezar</p>
                  <p className="mt-1 text-sm leading-7 text-white/88">
                    &ldquo;Hola Link, quiero saber si hay cobertura en mi colonia y cuánto cuesta la instalación.&rdquo;
                  </p>
                </div>
                <div className="rounded-[1.4rem] border border-white/10 bg-white/8 px-4 py-4">
                  <p className="text-sm font-semibold text-white">Lo que Link te garantiza</p>
                  <p className="mt-1 text-sm leading-7 text-white/88">
                    Respuesta real, visita técnica coordinada y seguimiento hasta que tu servicio quede funcionando.
                  </p>
                </div>
              </div>

              <Link
                href={WHATSAPP_URL}
                target="_blank"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-[#F5C2CE]"
                style={{ color: "#5F2476" }}
              >
                Abrir bot
                <ArrowUpRightIcon />
              </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Sección datos de pago */}
      <section id="pago" className="px-4 py-18 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            tag="Datos de pago"
            title="Realiza tu pago directo y confirma por WhatsApp."
            description="Transferencia SPEI o depósito en ventanilla. Una vez pagado, envia tu comprobante al WhatsApp para confirmar tu instalacion."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {/* SPEI */}
            <article className="panel-surface rounded-[2rem] border border-[rgba(218,31,92,0.14)] p-7 sm:p-8">
              <span className="inline-flex items-center rounded-full bg-[rgba(218,31,92,0.10)] border border-[rgba(218,31,92,0.22)] px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[var(--color-pink-dark)]">
                Transferencia SPEI
              </span>
              <p className="mt-6 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">Banco</p>
              <p className="mt-1 text-2xl font-bold text-[var(--color-ink)]">Santander</p>
              <p className="mt-5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">CLABE Interbancaria</p>
              <p className="mt-2 rounded-[1.2rem] border border-[rgba(218,31,92,0.14)] bg-[rgba(218,31,92,0.04)] px-4 py-3 font-mono text-[1.3rem] font-bold tracking-[0.06em] text-[var(--color-ink)] break-all">
                014882250104035854
              </p>
              <p className="mt-2 text-[0.68rem] text-[var(--color-slate)]">18 dígitos · copia exacta al hacer la transferencia</p>
            </article>

            {/* Ventanilla */}
            <article className="panel-surface rounded-[2rem] border border-[rgba(95,36,118,0.14)] p-7 sm:p-8">
              <span className="inline-flex items-center rounded-full bg-[rgba(95,36,118,0.10)] border border-[rgba(95,36,118,0.22)] px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[var(--color-purple-dark)]">
                Depósito en ventanilla
              </span>
              <p className="mt-6 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">Banco</p>
              <p className="mt-1 text-2xl font-bold text-[var(--color-ink)]">Santander</p>
              <p className="mt-5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">Número de Cuenta</p>
              <p className="mt-2 rounded-[1.2rem] border border-[rgba(95,36,118,0.14)] bg-[rgba(95,36,118,0.04)] px-4 py-3 font-mono text-[1.3rem] font-bold tracking-[0.06em] text-[var(--color-ink)] break-all">
                5579083043220108
              </p>
              <p className="mt-2 text-[0.68rem] text-[var(--color-slate)]">16 dígitos · presenta en caja con este número</p>
            </article>
          </div>

          {/* Instrucción comprobante */}
          <div className="mt-6 flex items-start gap-3 rounded-[1.6rem] border border-[rgba(218,31,92,0.10)] bg-white/80 px-6 py-5">
            <div className="mt-1.5 h-2.5 w-2.5 flex-none rounded-full bg-[#DA1F5C]" />
            <p className="text-sm leading-8 text-[var(--color-slate)]">
              Una vez realizado el pago, envia foto o captura del comprobante por WhatsApp al{" "}
              <span className="font-bold text-[var(--color-ink)]">+52 272 134 1840</span>{" "}
              indicando tu nombre y colonia para confirmar la instalacion.
            </p>
          </div>
        </div>
      </section>

      {/* Banda inferior de colores */}
      <div className="flex h-1.5 w-full">
        <div className="flex-1 bg-[#000000]" />
        <div className="flex-1 bg-[#5F2476]" />
        <div className="flex-1 bg-[#9B61AC]" />
        <div className="flex-1 bg-[#D4B6DD]" />
        <div className="flex-1 bg-[#F5C2CE]" />
        <div className="flex-1 bg-[#E9678F]" />
        <div className="flex-1 bg-[#DA1F5C]" />
      </div>

      <footer className="bg-[linear-gradient(135deg,rgba(95,36,118,0.06),rgba(218,31,92,0.06),rgba(212,182,221,0.10))] px-4 py-10 text-sm text-[var(--color-slate)] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="overflow-hidden rounded-xl bg-white shadow-sm px-2 py-1">
                <Image src="/powerlink-logo.jpeg" alt="PowerLink" width={110} height={42} className="h-[42px] w-auto object-contain" />
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="#empresa" className="transition hover:text-[#DA1F5C]">Empresa</a>
              <a href="#cobertura" className="transition hover:text-[#DA1F5C]">Coberturas</a>
              <Link href={SOCIAL_ROUTE} className="transition hover:text-[#DA1F5C]">Redes</Link>
              <Link href={PAYMENT_ROUTE} className="transition hover:text-[#DA1F5C]">Realizar pago</Link>
            </div>
          </div>
          <div className="flex flex-col gap-4 border-t border-[rgba(218,31,92,0.10)] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-[var(--color-slate)]">
              {SITE_NAME} &middot; Conectividad residencial y empresarial con soporte humano real.
            </p>
            <div className="flex flex-wrap gap-2">
              {SOCIAL_LINKS.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${social.accent} px-5 py-2.5 text-sm font-bold shadow-sm transition hover:-translate-y-0.5`}
                  style={{ color: "#ffffff" }}
                >
                  {getSocialIcon(social.name, "h-4 w-4")}
                  {social.handle}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
