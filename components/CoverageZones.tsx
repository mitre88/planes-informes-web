"use client";

import { useEffect, useRef, useState } from "react";

const ZONES = [
  { name: "Acatla",       lat: 18.6782, lng: -97.0124 },
  { name: "Capulines",    lat: 18.6521, lng: -97.0412 },
  { name: "Huitztitla",   lat: 18.7023, lng: -96.9876 },
  { name: "Mexcala",      lat: 18.6234, lng: -96.9654 },
  { name: "Terrero",      lat: 18.7156, lng: -97.0234 },
  { name: "Xoxocotla",    lat: 18.6397, lng: -96.9411 },
  { name: "Zolihua",      lat: 18.6891, lng: -96.9543 },
  { name: "Tlicalco",     lat: 18.6432, lng: -97.0234 },
  { name: "Mazitualla",   lat: 18.6654, lng: -96.9876 },
  { name: "Acuapa",       lat: 18.7234, lng: -97.0456 },
  { name: "Tetlatzinga",  lat: 18.6123, lng: -97.0123 },
  { name: "Acultzinapa",  lat: 18.6891, lng: -97.0654 },
  { name: "Ahuacuitlapa", lat: 18.7023, lng: -97.0876 },
  { name: "Porvenir",     lat: 18.6345, lng: -96.9789 },
  { name: "Tepaxapa",     lat: 18.6543, lng: -97.0345 },
  { name: "Atempa",       lat: 18.7234, lng: -96.9876 },
];

export function CoverageZones() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<unknown>(null);
  const markersRef = useRef<Record<string, unknown>>({});
  const [selected, setSelected] = useState<string | null>(null);

  // Pink SVG pin icon factory
  function makePinIcon(L: typeof import("leaflet"), active: boolean) {
    const color = active ? "#9B61AC" : "#DA1F5C";
    const size = active ? 38 : 32;
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size * 1.3}" viewBox="0 0 32 42">
        <filter id="s">
          <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="rgba(0,0,0,0.28)"/>
        </filter>
        <g filter="url(#s)">
          <path d="M16,2 C9.4,2 4,7.4 4,14 C4,22 16,38 16,38 C16,38 28,22 28,14 C28,7.4 22.6,2 16,2 Z"
            fill="${color}" stroke="white" stroke-width="2"/>
          <circle cx="16" cy="14" r="5" fill="white" opacity="0.9"/>
        </g>
      </svg>`;
    return L.divIcon({
      html: svg,
      className: "",
      iconSize: [size, size * 1.3],
      iconAnchor: [size / 2, size * 1.3],
      popupAnchor: [0, -(size * 1.3)],
    });
  }

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    import("leaflet").then((L) => {
      // Fix default icon path issue with webpack
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "",
        iconUrl: "",
        shadowUrl: "",
      });

      const map = L.map(mapContainerRef.current!, {
        center: [18.668, -97.010],
        zoom: 11,
        zoomControl: true,
        scrollWheelZoom: false,
      });

      // Satelital base
      L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        { maxZoom: 19, attribution: "Imagery &copy; Esri" }
      ).addTo(map);
      // Capa de etiquetas encima
      L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}",
        { maxZoom: 19, opacity: 1 }
      ).addTo(map);

      ZONES.forEach((zone) => {
        const icon = makePinIcon(L, false);
        const marker = L.marker([zone.lat, zone.lng], { icon })
          .addTo(map)
          .bindTooltip(zone.name, {
            permanent: false,
            direction: "top",
            className: "powerlink-tooltip",
          });

        marker.on("click", () => {
          setSelected(zone.name);
        });

        markersRef.current[zone.name] = marker;
      });

      mapRef.current = map;
    });

    return () => {
      if (mapRef.current) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (mapRef.current as any).remove();
        mapRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update icons when selection changes
  useEffect(() => {
    if (!mapRef.current) return;
    import("leaflet").then((L) => {
      ZONES.forEach((zone) => {
        const marker = markersRef.current[zone.name] as import("leaflet").Marker | undefined;
        if (marker) {
          const isActive = zone.name === selected;
          marker.setIcon(makePinIcon(L, isActive));
          if (isActive) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (mapRef.current as any).setView([zone.lat, zone.lng], 13, { animate: true });
          }
        }
      });
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  function handleZoneClick(name: string) {
    setSelected((prev) => (prev === name ? null : name));
  }

  return (
    <>
      {/* Zone pills */}
      <div className="panel-surface rounded-[2rem] p-5">
        <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[var(--color-pink-dark)]">
          Zonas con cobertura
        </p>
        <p className="mt-1 text-xs text-[var(--color-slate)]">
          Toca una zona para verla en el mapa
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {ZONES.map((zone) => (
            <button
              key={zone.name}
              onClick={() => handleZoneClick(zone.name)}
              className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5 ${
                selected === zone.name
                  ? "border-[rgba(218,31,92,0.50)] bg-[#DA1F5C] text-white shadow-md"
                  : "border-[rgba(218,31,92,0.22)] bg-[rgba(218,31,92,0.10)] text-[var(--color-pink-dark)]"
              }`}
              style={selected === zone.name ? { color: "#ffffff" } : undefined}
            >
              {zone.name}
            </button>
          ))}
        </div>
        <p className="mt-4 text-[0.72rem] leading-6 text-[var(--color-slate)]">
          Factibilidad sujeta a visita técnica · Consulta tu zona por WhatsApp
        </p>
      </div>

      {/* Real Leaflet map */}
      <div
        id="cobertura"
        className="overflow-hidden rounded-[2rem] border border-[rgba(218,31,92,0.14)] shadow-[0_12px_40px_-16px_rgba(218,31,92,0.20)]"
      >
        <div className="flex items-center gap-3 border-b border-[rgba(16,32,51,0.08)] bg-white/90 px-5 py-3 backdrop-blur-sm">
          <div className="h-2 w-2 rounded-full bg-[#DA1F5C]" />
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-slate)]">
            {selected ? `${selected} · Veracruz` : "Cobertura PowerLink · Sierra de Zongolica, Veracruz"}
          </p>
        </div>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          crossOrigin=""
        />
        <div ref={mapContainerRef} style={{ height: "380px", width: "100%" }} />
      </div>

    </>
  );
}
