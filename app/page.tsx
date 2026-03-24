export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="bg-blue-700 text-white py-6 shadow-md">
        <div className="max-w-4xl mx-auto px-4 flex items-center gap-3">
          <div className="bg-white rounded-full p-2">
            <svg className="w-8 h-8 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
              <path d="M1 6a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V6zm0 8a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-4z" />
            </svg>
          </div>
          <div>
            <h1 className="text-2xl font-bold leading-tight">Planes de Internet</h1>
            <p className="text-blue-200 text-sm">Sra. Alma &mdash; Servicio a domicilio</p>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-4">
            Internet de alta velocidad<br />para tu hogar
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Instalacion rapida, soporte tecnico incluido y las mejores mensualidades de la zona.
            Contactanos por WhatsApp y te damos informes al instante.
          </p>
          <a
            href="https://wa.me/5200000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transition-colors duration-200"
          >
            <WhatsAppIcon className="w-6 h-6" />
            Solicitar informes por WhatsApp
          </a>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-2">
            Nuestros Planes
          </h3>
          <p className="text-center text-gray-500 mb-10">
            Todos los planes incluyen servicios tecnicos gratuitos
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Plan 1 */}
            <div className="bg-white rounded-2xl shadow-md border-2 border-blue-500 p-6 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 bg-blue-500 text-white text-xs font-bold text-center py-1 tracking-widest uppercase">
                Mejor Valor
              </div>
              <div className="mt-5 flex flex-col flex-1">
                <h4 className="text-lg font-bold text-gray-800 mb-1">Plan Duo 2x1</h4>
                <p className="text-blue-600 font-semibold text-sm mb-4">Dos modems al costo de uno</p>
                <div className="mb-4">
                  <span className="text-3xl font-extrabold text-gray-900">$1,800</span>
                  <span className="text-gray-500 text-sm"> instalacion</span>
                </div>
                <ul className="text-gray-600 text-sm space-y-2 mb-6 flex-1">
                  <li className="flex items-center gap-2"><CheckIcon /> 2 modems incluidos</li>
                  <li className="flex items-center gap-2"><CheckIcon /> 1 mes gratis</li>
                  <li className="flex items-center gap-2"><CheckIcon /> 40MB de velocidad</li>
                  <li className="flex items-center gap-2"><CheckIcon /> Mensualidad: <strong>$500</strong></li>
                  <li className="flex items-center gap-2"><CheckIcon /> Soporte tecnico gratis</li>
                </ul>
                <WhatsAppButton />
              </div>
            </div>

            {/* Plan 2 */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 flex flex-col">
              <h4 className="text-lg font-bold text-gray-800 mb-1">Instalacion Estandar</h4>
              <p className="text-blue-600 font-semibold text-sm mb-4">Elige tu velocidad</p>
              <div className="mb-4">
                <span className="text-3xl font-extrabold text-gray-900">$1,500</span>
                <span className="text-gray-500 text-sm"> instalacion</span>
              </div>
              <ul className="text-gray-600 text-sm space-y-2 mb-6 flex-1">
                <li className="flex items-center gap-2"><CheckIcon /> 1 mes gratis</li>
                <li className="flex items-center gap-2"><CheckIcon /> 30MB &mdash; <strong>$350/mes</strong></li>
                <li className="flex items-center gap-2"><CheckIcon /> 40MB &mdash; <strong>$500/mes</strong></li>
                <li className="flex items-center gap-2"><CheckIcon /> 50MB &mdash; <strong>$700/mes</strong></li>
                <li className="flex items-center gap-2"><CheckIcon /> Soporte tecnico gratis</li>
              </ul>
              <WhatsAppButton />
            </div>

            {/* Plan 3 */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 flex flex-col">
              <h4 className="text-lg font-bold text-gray-800 mb-1">Instalacion Gratis</h4>
              <p className="text-blue-600 font-semibold text-sm mb-4">O reconexion sin costo</p>
              <div className="mb-4">
                <span className="text-3xl font-extrabold text-gray-900">$0</span>
                <span className="text-gray-500 text-sm"> instalacion</span>
              </div>
              <ul className="text-gray-600 text-sm space-y-2 mb-6 flex-1">
                <li className="flex items-center gap-2"><CheckIcon /> Instalacion o reconexion gratis</li>
                <li className="flex items-center gap-2"><CheckIcon /> Solo pagas la primera mensualidad</li>
                <li className="flex items-center gap-2"><CheckIcon /> 40MB de velocidad</li>
                <li className="flex items-center gap-2"><CheckIcon /> Mensualidad: <strong>$500</strong></li>
                <li className="flex items-center gap-2"><CheckIcon /> Soporte tecnico gratis</li>
              </ul>
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-10">
            Por que elegirnos
          </h3>
          <div className="grid gap-6 sm:grid-cols-3 text-center">
            <div className="flex flex-col items-center gap-3">
              <div className="bg-blue-100 rounded-full p-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-800">Alta velocidad</h4>
              <p className="text-gray-500 text-sm">Hasta 50MB para toda tu familia sin cortes</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="bg-blue-100 rounded-full p-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-800">Soporte incluido</h4>
              <p className="text-gray-500 text-sm">Servicios tecnicos gratuitos en todos los planes</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="bg-blue-100 rounded-full p-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-800">Atencion rapida</h4>
              <p className="text-gray-500 text-sm">Respuesta inmediata por WhatsApp</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="bg-blue-700 py-14 px-4 text-center text-white">
        <h3 className="text-2xl font-bold mb-3">Listo para conectarte?</h3>
        <p className="text-blue-200 mb-7 max-w-md mx-auto">
          Escribenos por WhatsApp, indicanos tu ubicacion y te damos toda la informacion de nuestros planes.
        </p>
        <a
          href="https://wa.me/5200000000"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transition-colors duration-200"
        >
          <WhatsAppIcon className="w-6 h-6" />
          Contactar ahora
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 text-center text-sm py-6 px-4">
        <p>&copy; 2026 Planes de Internet - Sra. Alma. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5200000000"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-auto inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-xl text-sm transition-colors duration-200"
    >
      <WhatsAppIcon className="w-4 h-4" />
      Solicitar informes
    </a>
  );
}
