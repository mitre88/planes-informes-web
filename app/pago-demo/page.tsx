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

      {/* ── Datos bancarios ── */}
      <div className="mx-auto mb-8 max-w-6xl">
        <div className="mb-5">
          <div className="eyebrow">Datos para pago</div>
          <p className="mt-3 text-sm text-[var(--color-slate)]">
            Realiza tu transferencia o deposito y envia tu comprobante por WhatsApp para confirmar tu servicio.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">

          {/* Transferencia SPEI */}
          <div className="panel-surface rounded-[2rem] border border-[rgba(218,31,92,0.14)] p-6 sm:p-7">
            <div className="flex items-center gap-2 mb-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[rgba(218,31,92,0.10)] border border-[rgba(218,31,92,0.22)] px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[var(--color-pink-dark)]">
                Transferencia SPEI
              </span>
            </div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
              Banco
            </p>
            <p className="mt-1 text-2xl font-bold text-[var(--color-ink)]">Santander</p>

            <p className="mt-5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
              CLABE Interbancaria
            </p>
            <p className="mt-2 rounded-[1.2rem] border border-[rgba(218,31,92,0.14)] bg-[rgba(218,31,92,0.04)] px-4 py-3 font-mono text-[1.45rem] font-bold tracking-[0.06em] text-[var(--color-ink)]">
              014882250104035854
            </p>
            <p className="mt-2 text-[0.68rem] text-[var(--color-slate)]">18 dígitos · copia exacta al hacer la transferencia</p>
          </div>

          {/* Depósito en ventanilla */}
          <div className="panel-surface rounded-[2rem] border border-[rgba(95,36,118,0.14)] p-6 sm:p-7">
            <div className="flex items-center gap-2 mb-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[rgba(95,36,118,0.10)] border border-[rgba(95,36,118,0.22)] px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[var(--color-purple-dark)]">
                Depósito en ventanilla
              </span>
            </div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
              Banco
            </p>
            <p className="mt-1 text-2xl font-bold text-[var(--color-ink)]">Santander</p>

            <p className="mt-5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
              Número de Cuenta
            </p>
            <p className="mt-2 rounded-[1.2rem] border border-[rgba(95,36,118,0.14)] bg-[rgba(95,36,118,0.04)] px-4 py-3 font-mono text-[1.45rem] font-bold tracking-[0.06em] text-[var(--color-ink)]">
              5579083043220108
            </p>
            <p className="mt-2 text-[0.68rem] text-[var(--color-slate)]">16 dígitos · presenta en caja con este número</p>
          </div>

        </div>

        {/* Instrucción de comprobante */}
        <div className="mt-5 flex items-start gap-3 rounded-[1.6rem] border border-[rgba(218,31,92,0.10)] bg-white/80 px-5 py-4">
          <div className="mt-0.5 h-2 w-2 flex-none rounded-full bg-[var(--color-pink-dark)]" />
          <p className="text-sm leading-7 text-[var(--color-slate)]">
            Una vez realizado el pago, envia foto o captura del comprobante por WhatsApp al <span className="font-semibold text-[var(--color-ink)]">+52 272 134 1840</span> indicando tu nombre y colonia para confirmar la instalacion.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl">
        <section className="panel-surface rounded-[2.6rem] px-6 py-6 sm:px-8 sm:py-8">
          <div className="grid gap-4">
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
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-pink-dark)] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--color-purple-dark)]"
            >
              Confirmar por WhatsApp
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
