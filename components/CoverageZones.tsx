"use client";

import { useState } from "react";

const ZONES = [
  "Acatla","Capulines","Huitztitla","Mexcala","Terrero","Xoxocotla",
  "Zolihua","Tlicalco","Mazitualla","Acuapa","Tetlatzinga","Acultzinapa",
  "Ahuacuitlapa","Porvenir","Tepaxapa","Atempa",
];

const DEFAULT_ZONE = "Xoxocotla";

function mapUrl(zona: string) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(zona + " Veracruz Mexico")}&z=14&output=embed`;
}

export function CoverageZones() {
  const [selected, setSelected] = useState(DEFAULT_ZONE);

  return (
    <>
      {/* Colonias con cobertura */}
      <div className="panel-surface rounded-[2rem] p-5">
        <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[var(--color-pink-dark)]">
          Zonas con cobertura
        </p>
        <p className="mt-1 text-xs text-[var(--color-slate)]">Toca una zona para verla en el mapa</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {ZONES.map((zona) => (
            <button
              key={zona}
              onClick={() => setSelected(zona)}
              className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5 ${
                selected === zona
                  ? "border-[rgba(218,31,92,0.50)] bg-[#DA1F5C] text-white shadow-md"
                  : "border-[rgba(218,31,92,0.22)] bg-[rgba(218,31,92,0.10)] text-[var(--color-pink-dark)]"
              }`}
            >
              {zona}
            </button>
          ))}
        </div>
        <p className="mt-4 text-[0.72rem] leading-6 text-[var(--color-slate)]">
          Factibilidad sujeta a visita técnica · Consulta tu zona por WhatsApp
        </p>
      </div>

      {/* Mapa de Google Maps — actualiza al seleccionar zona */}
      <div id="cobertura" className="overflow-hidden rounded-[2rem] border border-[rgba(218,31,92,0.14)] shadow-[0_12px_40px_-16px_rgba(218,31,92,0.20)]">
        <div className="flex items-center gap-3 border-b border-[rgba(16,32,51,0.08)] bg-white/90 px-5 py-3 backdrop-blur-sm">
          <div className="h-2 w-2 rounded-full bg-[#DA1F5C]" />
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-slate)]">
            {selected} · Veracruz
          </p>
        </div>
        <iframe
          key={selected}
          src={mapUrl(selected)}
          width="100%"
          height="360"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Mapa de cobertura PowerLink — ${selected}, Veracruz`}
        />
      </div>
    </>
  );
}
