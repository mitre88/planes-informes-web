import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_NAME, WHATSAPP_URL } from "@/lib/site-content";

export const metadata: Metadata = {
  title: `Pago | ${SITE_NAME}`,
  description: "Datos bancarios para realizar tu pago directo a PowerLink.",
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

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
    </svg>
  );
}

export default function PaymentPage() {
  return (
    <main className="min-h-screen px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="panel-surface overflow-hidden rounded-[2.8rem] px-6 py-6 sm:px-8 sm:py-8">

          {/* Header */}
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="overflow-hidden rounded-2xl bg-white shadow-sm px-2 py-1">
                  <Image src="/powerlink-logo.jpeg" alt="PowerLink" width={110} height={42} className="h-[42px] w-auto object-contain" />
                </div>
                <div className="eyebrow">Datos de pago</div>
              </div>
              <h1 className="font-display mt-5 text-[clamp(2.4rem,5vw,4rem)] leading-[0.92] tracking-[-0.05em] text-[var(--color-ink)]">
                Realiza tu pago y confirma por WhatsApp.
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-8 text-[var(--color-slate)] sm:text-base">
                Elige transferencia SPEI o depósito en ventanilla. Una vez pagado, envia tu comprobante al WhatsApp para confirmar tu instalacion.
              </p>
            </div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 self-start rounded-full border border-[rgba(16,32,51,0.12)] bg-white/82 px-5 py-3 text-sm font-semibold text-[var(--color-ink)] transition hover:-translate-y-0.5 flex-none"
            >
              <ArrowLeftIcon />
              Volver
            </Link>
          </div>

          {/* Cards de pago */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2">

            {/* SPEI */}
            <article className="rounded-[2rem] border border-[rgba(218,31,92,0.18)] bg-[linear-gradient(145deg,rgba(218,31,92,0.06),rgba(245,194,206,0.18),rgba(255,255,255,0.94))] p-7 sm:p-8">
              <span className="inline-flex items-center rounded-full bg-[rgba(218,31,92,0.10)] border border-[rgba(218,31,92,0.22)] px-3 py-1.5 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[var(--color-pink-dark)]">
                Transferencia SPEI
              </span>
              <p className="mt-6 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">Banco</p>
              <p className="mt-1 text-2xl font-bold text-[var(--color-ink)]">Santander</p>
              <p className="mt-6 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">CLABE Interbancaria</p>
              <p className="mt-2 rounded-[1.2rem] border border-[rgba(218,31,92,0.16)] bg-white/80 px-4 py-4 font-mono text-[1.35rem] font-bold tracking-[0.05em] text-[var(--color-ink)] break-all">
                014882250104035854
              </p>
              <p className="mt-2 text-xs text-[var(--color-slate)]">18 dígitos · copia exacta al hacer la transferencia</p>
            </article>

            {/* Ventanilla */}
            <article className="rounded-[2rem] border border-[rgba(95,36,118,0.18)] bg-[linear-gradient(145deg,rgba(95,36,118,0.06),rgba(212,182,221,0.22),rgba(255,255,255,0.94))] p-7 sm:p-8">
              <span className="inline-flex items-center rounded-full bg-[rgba(95,36,118,0.10)] border border-[rgba(95,36,118,0.22)] px-3 py-1.5 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[var(--color-purple-dark)]">
                Depósito en ventanilla
              </span>
              <p className="mt-6 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">Banco</p>
              <p className="mt-1 text-2xl font-bold text-[var(--color-ink)]">Santander</p>
              <p className="mt-6 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">Número de Cuenta</p>
              <p className="mt-2 rounded-[1.2rem] border border-[rgba(95,36,118,0.16)] bg-white/80 px-4 py-4 font-mono text-[1.35rem] font-bold tracking-[0.05em] text-[var(--color-ink)] break-all">
                5579083043220108
              </p>
              <p className="mt-2 text-xs text-[var(--color-slate)]">16 dígitos · presenta en caja con este número</p>
            </article>
          </div>

          {/* Instrucción comprobante */}
          <div className="mt-6 flex items-start gap-4 rounded-[1.6rem] border border-[rgba(218,31,92,0.12)] bg-white/80 px-6 py-5">
            <div className="mt-2 h-2.5 w-2.5 flex-none rounded-full bg-[#DA1F5C]" />
            <p className="text-sm leading-8 text-[var(--color-slate)]">
              Una vez realizado el pago, envia foto o captura del comprobante por WhatsApp al{" "}
              <span className="font-bold text-[var(--color-ink)]">+52 272 134 1840</span>{" "}
              indicando tu nombre y colonia para confirmar la instalacion.
            </p>
          </div>

          {/* CTA WhatsApp */}
          <div className="mt-8 overflow-hidden rounded-[2rem] bg-[linear-gradient(155deg,rgba(95,36,118,0.97),rgba(218,31,92,0.90))] px-6 py-6 text-white sm:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-white/72">Siguiente paso</p>
                <p className="mt-2 text-lg font-bold leading-tight">
                  Envía tu comprobante y agenda tu instalacion.
                </p>
              </div>
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                className="inline-flex flex-none items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold transition hover:-translate-y-0.5"
                style={{ color: "#5F2476" }}
              >
                <WhatsAppIcon />
                Confirmar por WhatsApp
              </Link>
            </div>
          </div>

          {/* Mascota helper */}
          <div className="mt-6 flex items-center gap-4 rounded-[1.4rem] border border-[rgba(218,31,92,0.10)] bg-white/70 px-5 py-4">
            <div className="h-12 w-12 flex-none overflow-hidden rounded-full border-2 border-[rgba(218,31,92,0.18)] shadow-sm">
              <Image
                src="/mascota-present.jpeg"
                alt="Mascota PowerLink"
                width={48}
                height={48}
                className="h-full w-full object-cover object-top"
              />
            </div>
            <p className="text-sm leading-7 text-[var(--color-slate)]">
              <span className="font-semibold text-[var(--color-ink)]">Link te confirma:</span>{" "}
              en cuanto recibamos tu comprobante, un asesor te contacta para agendar la instalacion.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
