"use client";

import {
  useMemo,
  useState,
  type KeyboardEvent,
  type PointerEvent,
  type WheelEvent,
} from "react";

export type CoverageZone = {
  id: string;
  name: string;
  x: number;
  y: number;
  radius: number;
  fill: string;
  descriptor: string;
  responseTime: string;
};

type CoverageMapProps = {
  zones: CoverageZone[];
};

const MIN_ZOOM = 1;
const MAX_ZOOM = 2.5;

export function CoverageMap({ zones }: CoverageMapProps) {
  const [zoom, setZoom] = useState(1.08);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [dragOrigin, setDragOrigin] = useState<{ x: number; y: number } | null>(null);
  const [selectedId, setSelectedId] = useState(zones[0]?.id ?? "");

  const selectedZone = useMemo(
    () => zones.find((zone) => zone.id === selectedId) ?? zones[0],
    [selectedId, zones]
  );

  function clampZoom(value: number) {
    return Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, value));
  }

  function updateSelection(id: string) {
    setSelectedId(id);
  }

  function handleZoom(delta: number) {
    setZoom((current) => clampZoom(Number((current + delta).toFixed(2))));
  }

  function handleWheel(event: WheelEvent<HTMLDivElement>) {
    event.preventDefault();
    handleZoom(event.deltaY > 0 ? -0.12 : 0.12);
  }

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    event.currentTarget.setPointerCapture(event.pointerId);
    setDragOrigin({ x: event.clientX - pan.x, y: event.clientY - pan.y });
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!dragOrigin) {
      return;
    }

    setPan({
      x: event.clientX - dragOrigin.x,
      y: event.clientY - dragOrigin.y,
    });
  }

  function handlePointerEnd(event: PointerEvent<HTMLDivElement>) {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    setDragOrigin(null);
  }

  function handleZoneKeyDown(event: KeyboardEvent<SVGGElement>, zoneId: string) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      updateSelection(zoneId);
    }
  }

  function resetView() {
    setZoom(1.08);
    setPan({ x: 0, y: 0 });
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1.25fr)_minmax(18rem,0.75fr)]">
      <div className="panel-surface overflow-hidden rounded-[2rem]">
        <div className="flex items-center justify-between gap-4 border-b border-[rgba(16,32,51,0.08)] px-5 py-4">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-slate)]">
              Cobertura interactiva
            </p>
            <p className="mt-1 text-sm text-[var(--color-slate)]">
              Desliza, acerca o aleja para revisar la mancha de servicio ilustrativa.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              aria-label="Alejar mapa"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(16,32,51,0.12)] bg-white text-lg font-medium text-[var(--color-ink)] transition hover:-translate-y-0.5 hover:border-[rgba(16,32,51,0.22)]"
              onClick={() => handleZoom(-0.16)}
              type="button"
            >
              -
            </button>
            <button
              aria-label="Acercar mapa"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(16,32,51,0.12)] bg-white text-lg font-medium text-[var(--color-ink)] transition hover:-translate-y-0.5 hover:border-[rgba(16,32,51,0.22)]"
              onClick={() => handleZoom(0.16)}
              type="button"
            >
              +
            </button>
            <button
              className="inline-flex h-10 items-center justify-center rounded-full border border-[rgba(16,32,51,0.12)] bg-white px-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-ink)] transition hover:-translate-y-0.5 hover:border-[rgba(16,32,51,0.22)]"
              onClick={resetView}
              type="button"
            >
              Reset
            </button>
          </div>
        </div>

        <div
          className="relative h-[26rem] cursor-grab overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(67,138,170,0.22),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.92),rgba(239,233,222,0.9))] active:cursor-grabbing"
          onPointerDown={handlePointerDown}
          onPointerLeave={handlePointerEnd}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerEnd}
          onWheel={handleWheel}
          style={{ touchAction: "none" }}
        >
          <div
            className="absolute inset-0"
            style={{
              transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
              transformOrigin: "center center",
              transition: dragOrigin ? "none" : "transform 220ms ease",
            }}
          >
            <svg
              className="h-full w-full"
              viewBox="0 0 760 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="grid"
                  width="28"
                  height="28"
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M 28 0 L 0 0 0 28" stroke="rgba(16,32,51,0.06)" strokeWidth="1" />
                </pattern>
                <linearGradient id="coverageGlow" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="rgba(67,138,170,0.22)" />
                  <stop offset="100%" stopColor="rgba(194,145,87,0.05)" />
                </linearGradient>
              </defs>

              <rect x="0" y="0" width="760" height="500" fill="url(#grid)" />
              <rect
                x="36"
                y="34"
                width="688"
                height="432"
                rx="44"
                fill="url(#coverageGlow)"
                stroke="rgba(16,32,51,0.08)"
              />

              <path
                d="M90 132C184 106 258 130 327 176C389 217 444 227 529 208C584 196 635 199 675 221"
                stroke="rgba(16,32,51,0.12)"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <path
                d="M116 342C191 301 248 282 329 291C397 299 460 332 550 341C603 347 649 333 695 305"
                stroke="rgba(16,32,51,0.1)"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <path
                d="M219 74C267 144 282 201 273 285C267 336 281 385 320 431"
                stroke="rgba(16,32,51,0.09)"
                strokeWidth="4"
                strokeLinecap="round"
              />

              {zones.map((zone) => {
                const isSelected = selectedZone?.id === zone.id;

                return (
                  <g
                    key={zone.id}
                    className="cursor-pointer"
                    onClick={() => updateSelection(zone.id)}
                    onKeyDown={(event) => handleZoneKeyDown(event, zone.id)}
                    role="button"
                    tabIndex={0}
                  >
                    <circle
                      cx={zone.x}
                      cy={zone.y}
                      r={zone.radius * 1.5}
                      fill={zone.fill}
                      opacity={isSelected ? 0.28 : 0.16}
                    />
                    <circle
                      cx={zone.x}
                      cy={zone.y}
                      r={zone.radius}
                      fill={zone.fill}
                      opacity={isSelected ? 0.52 : 0.3}
                      stroke={isSelected ? "rgba(16,32,51,0.28)" : "rgba(16,32,51,0.18)"}
                    />
                    <circle
                      cx={zone.x}
                      cy={zone.y}
                      r={11}
                      fill="#102033"
                      stroke="#f7f2ea"
                      strokeWidth="4"
                    />
                    <text
                      x={zone.x + 18}
                      y={zone.y - 16}
                      fill="#102033"
                      fontSize="18"
                      fontWeight="600"
                    >
                      {zone.name}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="pointer-events-none absolute bottom-4 left-4 rounded-full border border-white/60 bg-white/70 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)] backdrop-blur">
            Cobertura demo · Factibilidad sujeta a visita
          </div>
        </div>
      </div>

      <aside className="panel-surface rounded-[2rem] p-5">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-slate)]">
          Zona destacada
        </p>
        <h3 className="mt-3 font-display text-[clamp(2rem,3vw,2.5rem)] leading-none text-[var(--color-ink)]">
          {selectedZone?.name}
        </h3>
        <p className="mt-3 text-sm leading-7 text-[var(--color-slate)]">
          {selectedZone?.descriptor}
        </p>

        <dl className="mt-6 space-y-4">
          <div className="rounded-[1.4rem] border border-[rgba(16,32,51,0.08)] bg-white/75 px-4 py-3">
            <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
              Respuesta estimada
            </dt>
            <dd className="mt-1 text-lg font-semibold text-[var(--color-ink)]">
              {selectedZone?.responseTime}
            </dd>
          </div>
          <div className="rounded-[1.4rem] border border-[rgba(16,32,51,0.08)] bg-white/75 px-4 py-3">
            <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
              Observacion
            </dt>
            <dd className="mt-1 text-sm leading-7 text-[var(--color-slate)]">
              La cobertura final depende de altura, arbolado, visibilidad del sitio y demanda
              simultanea del sector.
            </dd>
          </div>
          <div className="rounded-[1.4rem] border border-[rgba(16,32,51,0.08)] bg-[linear-gradient(145deg,rgba(16,32,51,0.98),rgba(13,57,74,0.93))] px-4 py-4 text-white shadow-[0_24px_70px_-42px_rgba(16,32,51,0.9)]">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/60">
              Nota operativa
            </p>
            <p className="mt-2 text-sm leading-7 text-white/80">
              No se publican planes fijos en la web. El bot de WhatsApp y la visita tecnica
              entregan la opcion vigente segun zona, equipos y saturacion del nodo.
            </p>
          </div>
        </dl>
      </aside>
    </div>
  );
}
