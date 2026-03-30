import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_NAME, WHATSAPP_URL } from "@/lib/site-content";

export const metadata: Metadata = {
  title: `Pago Demo | ${SITE_NAME}`,
  description: "Portal demo de pago para presentacion comercial.",
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

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M12 3L19 6V11.5C19 16.2 15.86 20.45 12 21.5C8.14 20.45 5 16.2 5 11.5V6L12 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 12L11.3 13.8L14.8 10.3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PaymentIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 10h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M7 15h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function PaymentDemoPage() {
  return (
    <main className="min-h-screen px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <section className="panel-surface rounded-[2.6rem] px-6 py-6 sm:px-8 sm:py-8">
          <div className="eyebrow">Portal demo de cobro</div>
          <h1 className="font-display mt-5 text-[clamp(3rem,6vw,5rem)] leading-[0.9] tracking-[-0.06em] text-[var(--color-ink)]">
            Pago ficticio, flujo profesional.
          </h1>
          <p className="mt-4 text-sm leading-8 text-[var(--color-slate)] sm:text-base">
            Esta pagina muestra como podria verse el proceso de pago sin integrar aun una
            pasarela real. Se creo para que la demo se sienta completa y lista para crecer.
          </p>

          <div className="mt-8 grid gap-4">
            {[
              "Referencia generada al momento",
              "Monto ilustrativo editable",
              "Comprobante y confirmacion visual",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-[1.4rem] border border-[rgba(16,32,51,0.08)] bg-white/76 px-4 py-4 text-sm text-[var(--color-ink)]"
              >
                <ShieldIcon />
                {item}
              </div>
            ))}
          </div>

          {/* Link — helper badge */}
          <div className="mt-6 flex items-center gap-3 rounded-[1.4rem] border border-[rgba(218,31,92,0.10)] bg-white/70 px-4 py-3">
            <div className="h-10 w-10 flex-none overflow-hidden rounded-full border border-[rgba(218,31,92,0.18)] shadow-sm">
              <Image
                src="/mascota-present.jpeg"
                alt="Link, mascota PowerLink"
                width={40}
                height={40}
                className="h-full w-full object-cover object-top"
              />
            </div>
            <p className="text-xs leading-5 text-[var(--color-slate)]">
              Link confirma que este flujo puede conectarse a una pasarela real cuando estes lista.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(16,32,51,0.12)] bg-white/84 px-5 py-3 text-sm font-semibold text-[var(--color-ink)] transition hover:-translate-y-0.5"
            >
              <ArrowLeftIcon />
              Volver al inicio
            </Link>
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              Confirmar por WhatsApp
            </Link>
          </div>
        </section>

        <section className="overflow-hidden rounded-[2.6rem] border border-[rgba(95,36,118,0.22)] bg-[linear-gradient(155deg,rgba(95,36,118,0.97),rgba(218,31,92,0.88))] px-6 py-6 text-white shadow-[0_30px_90px_-48px_rgba(95,36,118,0.9)] sm:px-8 sm:py-8">
          <div className="flex items-center gap-3">
            <PaymentIcon />
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-white/88">
              Resumen de pago
            </p>
          </div>

          <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/8 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-white/80">Cliente</p>
                <p className="mt-1 text-xl font-semibold">Instalacion premium demo</p>
              </div>
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/76">
                Demo
              </span>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-white/85">Referencia</p>
                <p className="mt-1 text-lg font-semibold">ALMA-2403-9087</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-white/85">Concepto</p>
                <p className="mt-1 text-lg font-semibold">Anticipo de instalacion</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-white/85">Monto demo</p>
                <p className="mt-1 text-[2.4rem] font-semibold tracking-[-0.05em]">$ 1,250.00</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-white/85">Vigencia</p>
                <p className="mt-1 text-lg font-semibold">48 horas</p>
              </div>
            </div>

            <div className="mt-8 rounded-[1.6rem] border border-white/10 bg-white/8 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-white/85">Metodos demo</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {["Tarjeta", "Transferencia", "Referencia OXXO"].map((method) => (
                  <span
                    key={method}
                    className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white/84"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-semibold text-[var(--color-ink)] transition hover:-translate-y-0.5"
            >
              Confirmar pago demo
            </button>
          </div>

          <p className="mt-5 text-sm leading-7 text-white/75">
            {SITE_NAME} puede reemplazar despues este flujo por Stripe, Mercado Pago o la pasarela
            que la clienta prefiera. Por ahora comunica orden y seriedad.
          </p>
        </section>
      </div>
    </main>
  );
}
