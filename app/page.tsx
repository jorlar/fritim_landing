import Link from 'next/link';
import Image from 'next/image';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1f6ae1] to-[#1a5bbf]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1f6ae1]/95 backdrop-blur-sm border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎪</span>
            <span className="text-xl font-bold text-white">Fritim</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#features" className="text-white/80 hover:text-white transition text-sm">
              Funksjoner
            </Link>
            <Link href="#pricing" className="text-white/80 hover:text-white transition text-sm">
              Priser
            </Link>
            <Link 
              href="https://fritim.app" 
              className="rounded-full bg-gradient-to-r from-[#6dd5a0] to-[#4ecdc4] px-5 py-2 text-sm font-semibold text-black transition hover:shadow-lg"
            >
              Logg inn
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        {/* Decorative elements */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[5%] top-32 text-5xl opacity-20">🎵</div>
          <div className="absolute right-[10%] top-40 text-4xl opacity-15">✨</div>
          <div className="absolute left-[15%] top-60 text-3xl opacity-10">⭐</div>
          <div className="absolute right-[8%] top-52 text-6xl opacity-10">🎶</div>
          <div className="absolute left-[25%] bottom-20 text-4xl opacity-15">🎤</div>
          <div className="absolute right-[20%] bottom-32 text-5xl opacity-20">✨</div>
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Administrer frivillige
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6dd5a0] to-[#4ecdc4]">
              enkelt og effektivt
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
            Fritim er det komplette verktøyet for å håndtere frivillige på festivaler, 
            konserter og arrangementer. Fra registrering til koordinering – alt på ett sted.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://fritim.app/register-admin"
              className="w-full sm:w-auto rounded-full bg-white px-8 py-4 text-lg font-semibold text-[#1f6ae1] shadow-lg transition hover:shadow-xl hover:bg-white/95"
            >
              Kom i gang gratis
            </Link>
            <Link
              href="#demo"
              className="w-full sm:w-auto rounded-full bg-[#123C66] px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-[#0f3255] hover:shadow-xl"
            >
              Se demo
            </Link>
          </div>
        </div>

        {/* Hero Image/Screenshot */}
        <div className="mt-16 mx-auto max-w-5xl">
          <div className="relative rounded-2xl bg-[#123C66] p-2 shadow-2xl">
            <Image
              src="/screenshots/dashboard.png"
              alt="Fritim Dashboard - Oversikt over frivillige"
              width={1920}
              height={1080}
              className="rounded-xl w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-[#123C66]/50">
        <div className="mx-auto max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-white">500+</div>
            <div className="mt-2 text-white/60 text-sm">Frivillige håndtert</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-white">50+</div>
            <div className="mt-2 text-white/60 text-sm">Arrangementer</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-white">99%</div>
            <div className="mt-2 text-white/60 text-sm">Oppetid</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-white">4.9</div>
            <div className="mt-2 text-white/60 text-sm">Brukervurdering</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Alt du trenger for å koordinere frivillige
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
              Fra registrering til oppgavefordeling – Fritim gjør det enkelt å administrere 
              frivillige på arrangementer av alle størrelser.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="rounded-2xl bg-[#123C66] p-6 hover:bg-[#1a4a7a] transition">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#6dd5a0] to-[#4ecdc4] flex items-center justify-center text-2xl">
                📝
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">Enkel registrering</h3>
              <p className="mt-2 text-white/70">
                Frivillige registrerer seg selv via et brukervennlig skjema. 
                Velg oppgaver, dager og tidsrom.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-2xl bg-[#123C66] p-6 hover:bg-[#1a4a7a] transition">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#6dd5a0] to-[#4ecdc4] flex items-center justify-center text-2xl">
                📊
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">Oversiktlig dashboard</h3>
              <p className="mt-2 text-white/70">
                Se alle frivillige, filtrer på oppgaver og status, og få full 
                oversikt over arrangementet.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-2xl bg-[#123C66] p-6 hover:bg-[#1a4a7a] transition">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#6dd5a0] to-[#4ecdc4] flex items-center justify-center text-2xl">
                📧
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">E-post til frivillige</h3>
              <p className="mt-2 text-white/70">
                Send meldinger til grupper eller enkeltpersoner. Automatiske 
                bekreftelser ved godkjenning.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="rounded-2xl bg-[#123C66] p-6 hover:bg-[#1a4a7a] transition">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#6dd5a0] to-[#4ecdc4] flex items-center justify-center text-2xl">
                🎯
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">Oppgavefordeling</h3>
              <p className="mt-2 text-white/70">
                Definer oppgaver og vakter. Sett kapasitet per dag og se 
                automatisk når oppgaver er fulle.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="rounded-2xl bg-[#123C66] p-6 hover:bg-[#1a4a7a] transition">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#6dd5a0] to-[#4ecdc4] flex items-center justify-center text-2xl">
                📱
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">Mobilvennlig</h3>
              <p className="mt-2 text-white/70">
                Fungerer like bra på mobil som desktop. Frivillige kan 
                registrere seg når som helst, hvor som helst.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="rounded-2xl bg-[#123C66] p-6 hover:bg-[#1a4a7a] transition">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#6dd5a0] to-[#4ecdc4] flex items-center justify-center text-2xl">
                📤
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">CSV eksport</h3>
              <p className="mt-2 text-white/70">
                Eksporter data til Excel eller andre verktøy. 
                Perfekt for lister, vaktskjemaer og rapportering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="demo" className="py-20 px-4 bg-[#123C66]/30">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Se Fritim i aksjon
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Her er noen skjermbilder fra applikasjonen
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Screenshot 1 */}
            <div className="rounded-2xl bg-[#123C66] p-4 shadow-xl">
              <Image
                src="/screenshots/frivillige.png"
                alt="Frivilligoversikt"
                width={1920}
                height={1080}
                className="rounded-xl w-full h-auto"
              />
              <p className="mt-4 text-white font-medium">Oversikt over alle frivillige</p>
              <p className="text-white/60 text-sm">Filtrer, søk og administrer alle påmeldte</p>
            </div>

            {/* Screenshot 2 */}
            <div className="rounded-2xl bg-[#123C66] p-4 shadow-xl">
              <Image
                src="/screenshots/registrer.png"
                alt="Registreringsskjema"
                width={1920}
                height={1080}
                className="rounded-xl w-full h-auto"
              />
              <p className="mt-4 text-white font-medium">Brukervennlig registrering</p>
              <p className="text-white/60 text-sm">Frivillige velger oppgaver og tilgjengelighet</p>
            </div>

            {/* Screenshot 3 */}
            <div className="rounded-2xl bg-[#123C66] p-4 shadow-xl">
              <Image
                src="/screenshots/oversikt.png"
                alt="Dashboard oversikt"
                width={1920}
                height={1080}
                className="rounded-xl w-full h-auto"
              />
              <p className="mt-4 text-white font-medium">Kontrollpanel med statistikk</p>
              <p className="text-white/60 text-sm">Se status på alle frivillige og oppgaver</p>
            </div>

            {/* Screenshot 4 */}
            <div className="rounded-2xl bg-[#123C66] p-4 shadow-xl">
              <Image
                src="/screenshots/mail.png"
                alt="E-post til frivillige"
                width={1920}
                height={1080}
                className="rounded-xl w-full h-auto"
              />
              <p className="mt-4 text-white font-medium">Send meldinger enkelt</p>
              <p className="text-white/60 text-sm">Kommuniser med grupper eller enkeltpersoner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Enkle og transparente priser
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Velg pakken som passer for ditt arrangement
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Small */}
            <div className="rounded-3xl bg-[#f5f7fa] p-8">
              <h3 className="text-xl font-bold text-gray-800">Fritim Small</h3>
              <p className="mt-2 text-gray-500">Perfekt for små arrangementer</p>
              <div className="mt-6">
                <span className="text-4xl font-bold text-gray-800">499</span>
                <span className="text-gray-500"> NOK/mnd</span>
              </div>
              <ul className="mt-8 space-y-3">
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-[#4ecdc4]">✓</span> 1 arrangement
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-[#4ecdc4]">✓</span> Opptil 50 frivillige
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-[#4ecdc4]">✓</span> 5 oppgaver per arrangement
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-[#4ecdc4]">✓</span> E-post til frivillige
                </li>
              </ul>
              <Link
                href="https://fritim.app/register-admin"
                className="mt-8 block w-full rounded-xl bg-gradient-to-r from-[#6dd5a0] to-[#4ecdc4] py-4 text-center font-bold text-black transition hover:shadow-lg"
              >
                Kom i gang
              </Link>
            </div>

            {/* Medium - Popular */}
            <div className="relative rounded-3xl bg-gradient-to-b from-[#6dd5a0] to-[#4ecdc4] p-8 scale-105 shadow-2xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-black px-4 py-1 text-sm font-semibold text-white">
                Mest populær
              </div>
              <h3 className="text-xl font-bold text-black">Fritim Medium</h3>
              <p className="mt-2 text-black/70">For mellomstore festivaler</p>
              <div className="mt-6">
                <span className="text-4xl font-bold text-black">799</span>
                <span className="text-black/70"> NOK/mnd</span>
              </div>
              <ul className="mt-8 space-y-3">
                <li className="flex items-center gap-2 text-black/80">
                  <span className="text-black">✓</span> Opptil 3 arrangementer
                </li>
                <li className="flex items-center gap-2 text-black/80">
                  <span className="text-black">✓</span> 200 frivillige per arrangement
                </li>
                <li className="flex items-center gap-2 text-black/80">
                  <span className="text-black">✓</span> Ubegrenset oppgaver
                </li>
                <li className="flex items-center gap-2 text-black/80">
                  <span className="text-black">✓</span> E-post til frivillige
                </li>
                <li className="flex items-center gap-2 text-black/80">
                  <span className="text-black">✓</span> CSV eksport
                </li>
                <li className="flex items-center gap-2 text-black/80">
                  <span className="text-black">✓</span> Prioritert support
                </li>
              </ul>
              <Link
                href="https://fritim.app/register-admin"
                className="mt-8 block w-full rounded-xl bg-black py-4 text-center font-bold text-white transition hover:bg-black/90"
              >
                Kom i gang
              </Link>
            </div>

            {/* Large */}
            <div className="rounded-3xl bg-[#f5f7fa] p-8">
              <h3 className="text-xl font-bold text-gray-800">Fritim Large</h3>
              <p className="mt-2 text-gray-500">For store festivaler</p>
              <div className="mt-6">
                <span className="text-4xl font-bold text-gray-800">1199</span>
                <span className="text-gray-500"> NOK/mnd</span>
              </div>
              <ul className="mt-8 space-y-3">
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-[#4ecdc4]">✓</span> Ubegrenset arrangementer
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-[#4ecdc4]">✓</span> Ubegrenset frivillige
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-[#4ecdc4]">✓</span> Ubegrenset oppgaver
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-[#4ecdc4]">✓</span> Alt i Medium
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-[#4ecdc4]">✓</span> API-tilgang
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-[#4ecdc4]">✓</span> Dedikert support
                </li>
              </ul>
              <Link
                href="https://fritim.app/register-admin"
                className="mt-8 block w-full rounded-xl bg-gradient-to-r from-[#6dd5a0] to-[#4ecdc4] py-4 text-center font-bold text-black transition hover:shadow-lg"
              >
                Kom i gang
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#123C66]/50">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Klar til å forenkle frivilligkoordineringen?
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Kom i gang gratis i dag. Ingen kredittkort nødvendig.
          </p>
          <div className="mt-8">
            <Link
              href="https://fritim.app/register-admin"
              className="inline-block rounded-full bg-white px-10 py-4 text-lg font-semibold text-[#1f6ae1] shadow-lg transition hover:shadow-xl hover:bg-white/95"
            >
              Start gratis prøveperiode
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎪</span>
              <span className="text-xl font-bold text-white">Fritim</span>
            </div>
            <div className="flex items-center gap-6 text-white/60 text-sm">
              <Link href="#" className="hover:text-white transition">Personvern</Link>
              <Link href="#" className="hover:text-white transition">Vilkår</Link>
              <Link href="#" className="hover:text-white transition">Kontakt</Link>
            </div>
            <p className="text-white/40 text-sm">
              © 2026 Fritim. Alle rettigheter reservert.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
