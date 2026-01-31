'use client';

import { useState } from 'react';

type ModalType = 'privacy' | 'terms' | null;

export default function Footer() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const closeModal = () => setActiveModal(null);

  return (
    <>
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎪</span>
              <span className="text-xl font-bold text-white">Fritim</span>
            </div>
            <div className="flex items-center gap-6 text-white/60 text-sm">
              <button 
                onClick={() => setActiveModal('privacy')} 
                className="hover:text-white transition"
              >
                Personvern
              </button>
              <button 
                onClick={() => setActiveModal('terms')} 
                className="hover:text-white transition"
              >
                Vilkår
              </button>
              <a href="mailto:kontakt@fritim.app" className="hover:text-white transition">
                Kontakt
              </a>
            </div>
            <p className="text-white/40 text-sm">
              © 2026 Fritim. Alle rettigheter reservert.
            </p>
          </div>
        </div>
      </footer>

      {/* Modal overlay */}
      {activeModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div 
            className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-800">
                {activeModal === 'privacy' ? 'Personvernerklæring' : 'Vilkår for bruk'}
              </h2>
              <button 
                onClick={closeModal}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition"
                aria-label="Lukk"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="px-6 py-6 overflow-y-auto max-h-[calc(80vh-80px)]">
              {activeModal === 'privacy' ? <PrivacyContent /> : <TermsContent />}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function PrivacyContent() {
  return (
    <div className="prose prose-gray max-w-none">
      <p className="text-gray-600 mb-6">
        Sist oppdatert: Januar 2026
      </p>

      <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">1. Innledning</h3>
      <p className="text-gray-600 mb-4">
        Fritim tar personvernet ditt på alvor. Denne personvernerklæringen forklarer hvordan vi samler inn, 
        bruker, lagrer og beskytter dine personopplysninger når du bruker vår tjeneste for 
        frivilligkoordinering.
      </p>

      <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">2. Hvilke opplysninger samler vi inn?</h3>
      <p className="text-gray-600 mb-4">
        Vi samler inn følgende personopplysninger:
      </p>
      <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
        <li>Navn og kontaktinformasjon (e-post, telefonnummer)</li>
        <li>Informasjon om tilgjengelighet og oppgavepreferanser</li>
        <li>Organisasjonstilhørighet</li>
        <li>Teknisk informasjon som IP-adresse og nettlesertype for å forbedre tjenesten</li>
      </ul>

      <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">3. Hvordan bruker vi opplysningene?</h3>
      <p className="text-gray-600 mb-4">
        Dine personopplysninger brukes til å:
      </p>
      <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
        <li>Administrere din registrering som frivillig</li>
        <li>Koordinere vakter og oppgaver</li>
        <li>Sende viktig informasjon om arrangementet</li>
        <li>Forbedre og utvikle tjenesten vår</li>
      </ul>

      <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">4. Deling av opplysninger</h3>
      <p className="text-gray-600 mb-4">
        Vi deler kun personopplysninger med arrangørene du melder deg som frivillig hos. 
        Vi selger aldri dine opplysninger til tredjeparter. Opplysninger kan deles med 
        databehandlere som hjelper oss med å levere tjenesten (f.eks. e-postleverandører), 
        og disse er underlagt strenge databehandleravtaler.
      </p>

      <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">5. Lagring og sikkerhet</h3>
      <p className="text-gray-600 mb-4">
        Dine opplysninger lagres sikkert på servere innenfor EU/EØS. Vi benytter kryptering 
        og andre sikkerhetstiltak for å beskytte dine data. Opplysninger slettes når de 
        ikke lenger er nødvendige for formålet de ble samlet inn for.
      </p>

      <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">6. Dine rettigheter</h3>
      <p className="text-gray-600 mb-4">
        I henhold til GDPR og personopplysningsloven har du rett til å:
      </p>
      <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
        <li>Få innsyn i hvilke opplysninger vi har om deg</li>
        <li>Kreve retting av uriktige opplysninger</li>
        <li>Kreve sletting av dine opplysninger</li>
        <li>Trekke tilbake samtykke</li>
        <li>Klage til Datatilsynet</li>
      </ul>

      <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">7. Kontakt</h3>
      <p className="text-gray-600 mb-4">
        Har du spørsmål om personvern eller ønsker å utøve dine rettigheter? 
        Kontakt oss på <a href="mailto:support@fritim.no" className="text-[#1f6ae1] hover:underline">support@fritim.no</a>.
      </p>
    </div>
  );
}

function TermsContent() {
  return (
    <div className="prose prose-gray max-w-none">
      <p className="text-gray-600 mb-6">
        Sist oppdatert: Januar 2026
      </p>

      <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">1. Aksept av vilkår</h3>
      <p className="text-gray-600 mb-4">
        Ved å bruke Fritim aksepterer du disse vilkårene. Hvis du ikke aksepterer vilkårene, 
        ber vi deg om å ikke bruke tjenesten.
      </p>

      <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">2. Tjenestebeskrivelse</h3>
      <p className="text-gray-600 mb-4">
        Fritim er en plattform for koordinering av frivillige ved arrangementer. 
        Tjenesten lar arrangører administrere påmeldinger, kommunisere med frivillige, 
        og organisere vakter og oppgaver.
      </p>

      <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">3. Brukerkontoer</h3>
      <p className="text-gray-600 mb-4">
        Du er ansvarlig for å holde påloggingsinformasjonen din konfidensiell og for 
        all aktivitet som skjer under din konto. Du må varsle oss umiddelbart ved 
        mistanke om uautorisert bruk av kontoen din.
      </p>

      <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">4. Akseptabel bruk</h3>
      <p className="text-gray-600 mb-4">
        Du samtykker i å ikke:
      </p>
      <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
        <li>Bruke tjenesten til ulovlige formål</li>
        <li>Laste opp skadelig innhold eller programvare</li>
        <li>Forsøke å få uautorisert tilgang til systemene våre</li>
        <li>Misbruke eller trakassere andre brukere</li>
        <li>Bruke tjenesten til masseutsending av uønsket kommunikasjon</li>
      </ul>

      <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">5. Betaling og abonnement</h3>
      <p className="text-gray-600 mb-4">
        Priser for våre tjenester er oppgitt på nettsiden. Abonnementer faktureres 
        månedlig eller årlig avhengig av valgt plan. Du kan kansellere abonnementet 
        når som helst, og det vil være aktivt ut inneværende betalingsperiode.
      </p>

      <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">6. Immaterielle rettigheter</h3>
      <p className="text-gray-600 mb-4">
        Alt innhold og funksjonalitet på Fritim, inkludert design, tekst, grafikk og 
        programvare, tilhører Fritim eller våre lisensgivere. Du får en begrenset, 
        ikke-eksklusiv rett til å bruke tjenesten i samsvar med disse vilkårene.
      </p>

      <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">7. Ansvarsbegrensning</h3>
      <p className="text-gray-600 mb-4">
        Fritim tilbys &quot;som den er&quot;. Vi garanterer ikke at tjenesten vil være 
        uavbrutt eller feilfri. Vi er ikke ansvarlige for indirekte tap, tapt 
        fortjeneste eller data som følge av bruk av tjenesten, med mindre dette 
        skyldes grov uaktsomhet fra vår side.
      </p>

      <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">8. Endringer i vilkårene</h3>
      <p className="text-gray-600 mb-4">
        Vi kan oppdatere disse vilkårene fra tid til annen. Ved vesentlige endringer 
        vil vi varsle deg via e-post eller gjennom tjenesten. Fortsatt bruk av 
        tjenesten etter endringer innebærer aksept av de nye vilkårene.
      </p>

      <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">9. Lovvalg og verneting</h3>
      <p className="text-gray-600 mb-4">
        Disse vilkårene er underlagt norsk lov. Eventuelle tvister skal søkes løst 
        i minnelighet, og om dette ikke lykkes, avgjøres av norske domstoler.
      </p>

      <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">10. Kontakt</h3>
      <p className="text-gray-600 mb-4">
        Har du spørsmål om vilkårene? 
        Kontakt oss på <a href="mailto:support@fritim.no" className="text-[#1f6ae1] hover:underline">support@fritim.no</a>.
      </p>
    </div>
  );
}
