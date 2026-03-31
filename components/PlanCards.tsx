"use client";

import { useState } from "react";
import Link from "next/link";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
    </svg>
  );
}

function PlanCard({
  front,
  back,
  buttonAccent,
}: {
  front: React.ReactNode;
  back: React.ReactNode;
  buttonAccent: string;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="[perspective:1000px]"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className={`relative min-h-[560px] transition-transform duration-700 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Frente */}
        <div className="absolute inset-0 [backface-visibility:hidden] flex flex-col">
          <div className="flex-1">{front}</div>
          <button
            type="button"
            onClick={() => setFlipped(true)}
            className={`mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r ${buttonAccent} px-6 py-3.5 text-sm font-bold text-white shadow-md transition hover:-translate-y-0.5`}
            style={{ color: "#ffffff" }}
          >
            Más información
          </button>
        </div>
        {/* Reverso */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          {back}
        </div>
      </div>
    </div>
  );
}

export function PlanCards({ whatsappUrl }: { whatsappUrl: string }) {
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-3">

      {/* Plan 1 — Duo 2x1 */}
      <PlanCard
        buttonAccent="from-[#DA1F5C] via-[#E9678F] to-[#9B61AC]"
        front={
          <article className="h-full rounded-[2rem] border border-[rgba(218,31,92,0.22)] bg-[linear-gradient(145deg,rgba(218,31,92,0.07),rgba(245,194,206,0.20),rgba(255,255,255,0.96))] p-7 flex flex-col">
            <span className="inline-flex self-start items-center rounded-full bg-[rgba(218,31,92,0.12)] border border-[rgba(218,31,92,0.24)] px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[var(--color-pink-dark)]">
              Plan 1
            </span>
            <h3 className="font-display mt-5 text-[1.7rem] leading-tight tracking-[-0.04em] text-[var(--color-ink)]">
              Plan Duo 2×1
            </h3>
            <p className="mt-1 text-sm font-semibold text-[var(--color-pink-dark)]">Dos módems al costo de uno</p>
            <div className="mt-5 space-y-2">
              <div className="flex justify-between rounded-[1rem] border border-[rgba(218,31,92,0.12)] bg-white/70 px-4 py-3">
                <span className="text-sm font-semibold text-[var(--color-slate)]">Instalación</span>
                <span className="text-sm font-bold text-[var(--color-ink)]">$1,800.00</span>
              </div>
              <div className="flex justify-between rounded-[1rem] border border-[rgba(218,31,92,0.12)] bg-white/70 px-4 py-3">
                <span className="text-sm font-semibold text-[var(--color-slate)]">Reconexión</span>
                <span className="text-sm font-bold text-[var(--color-ink)]">$1,000.00</span>
              </div>
            </div>
            <div className="mt-5 rounded-[1.2rem] border border-[rgba(218,31,92,0.16)] bg-[rgba(218,31,92,0.05)] px-4 py-4">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[var(--color-pink-dark)]">Incluye 1 mes gratis</p>
              <p className="mt-2 text-sm font-bold text-[var(--color-ink)]">40 MB — $500.00/mes</p>
            </div>
            <ul className="mt-5 space-y-2 flex-1">
              <li className="flex items-start gap-2 text-sm leading-7 text-[var(--color-slate)]">
                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-[#DA1F5C]" />
                Instalación: se otorgan 2 módems
              </li>
              <li className="flex items-start gap-2 text-sm leading-7 text-[var(--color-slate)]">
                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-[#DA1F5C]" />
                Reconexión: 1 módem para ampliar cobertura en tu hogar
              </li>
            </ul>
          </article>
        }
        back={
          <div className="h-full rounded-[2rem] bg-[linear-gradient(155deg,rgba(95,36,118,0.97),rgba(218,31,92,0.90))] p-7 flex flex-col items-center justify-center gap-6 text-white text-center">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-white/80">Plan Duo 2×1</p>
            <h3 className="font-display text-[2rem] leading-tight tracking-[-0.04em]">¿Te interesa este plan?</h3>
            <p className="text-sm leading-8 text-white/88">Escríbenos por WhatsApp y un asesor te da todos los detalles y agenda tu instalacion.</p>
            <Link
              href={whatsappUrl}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold transition hover:-translate-y-0.5"
              style={{ color: "#5F2476" }}
            >
              <WhatsAppIcon />
              Deseo recibir más información
            </Link>
          </div>
        }
      />

      {/* Plan 2 — Mensualidad a elegir */}
      <PlanCard
        buttonAccent="from-[#5F2476] to-[#9B61AC]"
        front={
          <article className="h-full rounded-[2rem] border border-[rgba(95,36,118,0.22)] bg-[linear-gradient(145deg,rgba(95,36,118,0.07),rgba(212,182,221,0.22),rgba(255,255,255,0.96))] p-7 flex flex-col">
            <span className="inline-flex self-start items-center rounded-full bg-[rgba(95,36,118,0.12)] border border-[rgba(95,36,118,0.24)] px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[var(--color-purple-dark)]">
              Plan 2
            </span>
            <h3 className="font-display mt-5 text-[1.7rem] leading-tight tracking-[-0.04em] text-[var(--color-ink)]">
              Mensualidad a elegir
            </h3>
            <p className="mt-1 text-sm font-semibold text-[var(--color-purple-dark)]">Instalación o reconexión con el plan que quieras</p>
            <div className="mt-5 space-y-2">
              <div className="flex justify-between rounded-[1rem] border border-[rgba(95,36,118,0.12)] bg-white/70 px-4 py-3">
                <span className="text-sm font-semibold text-[var(--color-slate)]">Instalación</span>
                <span className="text-sm font-bold text-[var(--color-ink)]">$1,500.00</span>
              </div>
              <div className="flex justify-between rounded-[1rem] border border-[rgba(95,36,118,0.12)] bg-white/70 px-4 py-3">
                <span className="text-sm font-semibold text-[var(--color-slate)]">Reconexión</span>
                <span className="text-sm font-bold text-[var(--color-ink)]">$800.00</span>
              </div>
            </div>
            <div className="mt-5 rounded-[1.2rem] border border-[rgba(95,36,118,0.16)] bg-[rgba(95,36,118,0.05)] px-4 py-4">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[var(--color-purple-dark)]">Incluye 1 mes gratis · Plan mensual</p>
              <div className="mt-3 space-y-1.5">
                <div className="flex justify-between text-sm">
                  <span className="font-semibold text-[var(--color-slate)]">30 MB</span>
                  <span className="font-bold text-[var(--color-ink)]">$350.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-semibold text-[var(--color-slate)]">40 MB</span>
                  <span className="font-bold text-[var(--color-ink)]">$500.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-semibold text-[var(--color-slate)]">50 MB</span>
                  <span className="font-bold text-[var(--color-ink)]">$700.00</span>
                </div>
              </div>
            </div>
            <ul className="mt-5 flex-1">
              <li className="flex items-start gap-2 text-sm leading-7 text-[var(--color-slate)]">
                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-[#5F2476]" />
                1 solo módem incluido
              </li>
            </ul>
          </article>
        }
        back={
          <div className="h-full rounded-[2rem] bg-[linear-gradient(155deg,rgba(95,36,118,0.97),rgba(155,97,172,0.90))] p-7 flex flex-col items-center justify-center gap-6 text-white text-center">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-white/80">Mensualidad a elegir</p>
            <h3 className="font-display text-[2rem] leading-tight tracking-[-0.04em]">¿Te interesa este plan?</h3>
            <p className="text-sm leading-8 text-white/88">Escríbenos por WhatsApp y elige la velocidad que mejor se ajuste a tu presupuesto.</p>
            <Link
              href={whatsappUrl}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold transition hover:-translate-y-0.5"
              style={{ color: "#5F2476" }}
            >
              <WhatsAppIcon />
              Deseo recibir más información
            </Link>
          </div>
        }
      />

      {/* Plan 3 — Instalación Gratis */}
      <PlanCard
        buttonAccent="from-[#DA1F5C] via-[#E9678F] to-[#5F2476]"
        front={
          <article className="h-full rounded-[2rem] border border-[rgba(218,31,92,0.28)] bg-[linear-gradient(145deg,rgba(218,31,92,0.10),rgba(245,194,206,0.28),rgba(255,255,255,0.96))] p-7 flex flex-col">
            <span className="inline-flex self-start items-center rounded-full bg-[rgba(218,31,92,0.14)] border border-[rgba(218,31,92,0.30)] px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[var(--color-pink-dark)]">
              Plan 3 · Más Popular
            </span>
            <h3 className="font-display mt-5 text-[1.7rem] leading-tight tracking-[-0.04em] text-[var(--color-ink)]">
              Instalación o Reconexión Gratis
            </h3>
            <p className="mt-1 text-sm font-semibold text-[var(--color-pink-dark)]">Solo paga tu primera mensualidad</p>
            <div className="mt-5 rounded-[1.2rem] border-2 border-[rgba(218,31,92,0.30)] bg-[rgba(218,31,92,0.06)] px-4 py-5">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[var(--color-pink-dark)]">Instalación gratis · Plan mensual</p>
              <div className="mt-3 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-semibold text-[var(--color-slate)]">40 MB</span>
                  <span className="text-lg font-bold text-[var(--color-ink)]">$500.00</span>
                </div>
              </div>
            </div>
            <ul className="mt-5 flex-1">
              <li className="flex items-start gap-2 text-sm leading-7 text-[var(--color-slate)]">
                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-[#DA1F5C]" />
                1 solo módem incluido
              </li>
              <li className="flex items-start gap-2 text-sm leading-7 text-[var(--color-slate)]">
                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-[#DA1F5C]" />
                Sin costo de instalacion o reconexion
              </li>
            </ul>
          </article>
        }
        back={
          <div className="h-full rounded-[2rem] bg-[linear-gradient(155deg,rgba(218,31,92,0.97),rgba(95,36,118,0.90))] p-7 flex flex-col items-center justify-center gap-6 text-white text-center">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-white/80">Instalación o Reconexión Gratis</p>
            <h3 className="font-display text-[2rem] leading-tight tracking-[-0.04em]">¿Te interesa este plan?</h3>
            <p className="text-sm leading-8 text-white/88">Sin costo de instalacion. Escríbenos y arrancamos cuando gustes.</p>
            <Link
              href={whatsappUrl}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold transition hover:-translate-y-0.5"
              style={{ color: "#DA1F5C" }}
            >
              <WhatsAppIcon />
              Deseo recibir más información
            </Link>
          </div>
        }
      />

    </div>
  );
}
