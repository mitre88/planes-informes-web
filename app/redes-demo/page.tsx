import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_NAME, SOCIAL_LINKS, WHATSAPP_URL } from "@/lib/site-content";

export const metadata: Metadata = {
  title: `Redes Demo | ${SITE_NAME}`,
  description: "Acceso de demostracion para redes sociales y contacto de la marca.",
};

function ArrowLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <path
        d="M15 5L8 12L15 19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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

export default function SocialDemoPage() {
  return (
    <main className="min-h-screen px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="panel-surface overflow-hidden rounded-[2.8rem] px-6 py-6 sm:px-8 sm:py-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="eyebrow">Hub social demo</div>
                <div className="h-10 w-10 overflow-hidden rounded-full border border-[rgba(95,36,118,0.18)] shadow-sm">
                  <Image
                    src="/mascota-purple.jpeg"
                    alt="Link, mascota PowerLink"
                    width={40}
                    height={40}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <h1 className="font-display mt-5 text-[clamp(3rem,6vw,5rem)] leading-[0.9] tracking-[-0.06em] text-[var(--color-ink)]">
                Redes sociales listas para compartir.
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-8 text-[var(--color-slate)] sm:text-base">
                Esta ruta existe para que el QR de la portada apunte a una experiencia real dentro
                del sitio. Aqui se concentran redes, contacto y proximos canales comerciales.
              </p>
            </div>

            <Link
              href="/"
              className="inline-flex items-center gap-2 self-start rounded-full border border-[rgba(16,32,51,0.12)] bg-white/82 px-5 py-3 text-sm font-semibold text-[var(--color-ink)] transition hover:-translate-y-0.5"
            >
              <ArrowLeftIcon />
              Volver al inicio
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
            {SOCIAL_LINKS.map((social) => (
              <article
                key={social.name}
                className="panel-surface flex flex-col rounded-[2.2rem] p-8 sm:p-9"
              >
                <div
                  className={`inline-flex self-start rounded-full bg-gradient-to-r ${social.accent} px-5 py-2.5 text-[0.78rem] font-bold uppercase tracking-[0.22em] text-white shadow-md`}
                >
                  {social.name}
                </div>
                <p className="mt-6 text-[1.6rem] font-bold leading-tight text-[var(--color-ink)]">
                  {social.handle}
                </p>
                <p className="mt-4 flex-1 text-base leading-8 text-[var(--color-slate)]">
                  {social.description}
                </p>
                <Link
                  href={social.href}
                  target="_blank"
                  className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r ${social.accent} px-6 py-4 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5`}
                >
                  Abrir {social.name}
                  <ArrowUpRightIcon />
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] border border-[rgba(95,36,118,0.22)] bg-[linear-gradient(155deg,rgba(95,36,118,0.97),rgba(218,31,92,0.88))] px-6 py-6 text-white sm:px-8">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-white/85">
              Contacto rapido
            </p>
            <h2 className="font-display mt-4 text-[clamp(2rem,4vw,3.3rem)] leading-[0.95] tracking-[-0.05em]">
              Si prefieren cerrar desde mensaje, el bot sigue disponible.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-8 text-white/86">
              Este panel mantiene coherencia con la portada: QR, redes y WhatsApp trabajan juntos
              para no perder prospectos entre tantos enlaces.
            </p>
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-[var(--color-ink)] transition hover:-translate-y-0.5"
            >
              Abrir bot de WhatsApp
              <ArrowUpRightIcon />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
