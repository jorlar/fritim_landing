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
        Kontakt oss på <a href="mailto:kontakt@fritim.app" className="text-[#1f6ae1] hover:underline">kontakt@fritim.app</a>.
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

      <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">2. Tjenestebeskrivelse og rolle</h3>
      <p className="text-gray-600 mb-4">
        Fritim er utelukkende et programvareverktøy (SaaS) som tilbyr teknisk funksjonalitet 
        for koordinering og administrasjon av frivillige ved arrangementer. Tjenesten lar 
        arrangører administrere påmeldinger, kommunisere med frivillige, og organisere 
        vakter og oppgaver.
      </p>
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
        <p className="text-gray-700 font-medium mb-2">Viktig avklaring:</p>
        <p className="text-gray-600">
          Fritim er ikke en arbeidsgiver, bemanningsbyrå, arbeidsformidler, eller part i 
          noen avtale mellom arrangør og frivillig. Vi er kun en teknisk plattform som 
          tilrettelegger for kommunikasjon og koordinering.
        </p>
      </div>

      <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">3. Forholdet mellom arrangør og frivillig</h3>
      <p className="text-gray-600 mb-4">
        Fritim er ikke part i forholdet mellom arrangør og frivillig. Ved å bruke tjenesten 
        aksepterer du følgende:
      </p>
      <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
        <li>Enhver avtale om frivillig arbeid inngås direkte mellom arrangøren og den frivillige</li>
        <li>Fritim har ingen kontroll over, og er ikke ansvarlig for, innholdet i slike avtaler</li>
        <li>Arrangøren er selv ansvarlig for å sikre at frivillig arbeid er i samsvar med gjeldende lover og regler</li>
        <li>Fritim garanterer ikke oppmøte, tilgjengelighet eller kvaliteten på frivillig innsats</li>
      </ul>

      <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">4. Arrangørens ansvar</h3>
      <p className="text-gray-600 mb-4">
        Arrangører som bruker Fritim er selv fullt ansvarlige for:
      </p>
      <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
        <li>Å sikre at bruken av frivillige er i tråd med arbeidsmiljøloven og annet relevant regelverk</li>
        <li>Forsikring og sikkerhet for frivillige under arrangementet</li>
        <li>HMS-tiltak og risikovurderinger på arrangementsstedet</li>
        <li>Oppfølging av fravær, oppmøte og gjennomføring av vakter</li>
        <li>Eventuell kompensasjon, godtgjørelse eller refusjon til frivillige</li>
        <li>Å informere frivillige om deres rettigheter og plikter</li>
      </ul>

      <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">5. Frivillige</h3>
      <p className="text-gray-600 mb-4">
        Frivillige som registrerer seg via Fritim aksepterer at:
      </p>
      <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
        <li>Registrering gjennom Fritim ikke utgjør et ansettelsesforhold med Fritim</li>
        <li>Eventuelle spørsmål om oppgaver, vakter eller kompensasjon må rettes til arrangøren</li>
        <li>Fritim ikke er ansvarlig for skader, tap eller uhell som oppstår under frivillig arbeid</li>
      </ul>

      <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">6. Brukerkontoer</h3>
      <p className="text-gray-600 mb-4">
        Du er ansvarlig for å holde påloggingsinformasjonen din konfidensiell og for 
        all aktivitet som skjer under din konto. Du må varsle oss umiddelbart ved 
        mistanke om uautorisert bruk av kontoen din.
      </p>

      <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">7. Akseptabel bruk</h3>
      <p className="text-gray-600 mb-4">
        Du samtykker i å ikke:
      </p>
      <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
        <li>Bruke tjenesten til ulovlige formål</li>
        <li>Laste opp skadelig innhold eller programvare</li>
        <li>Forsøke å få uautorisert tilgang til systemene våre</li>
        <li>Misbruke eller trakassere andre brukere</li>
        <li>Bruke tjenesten til masseutsending av uønsket kommunikasjon</li>
        <li>Bruke tjenesten til formidling av lønnet arbeid eller omgåelse av arbeidsrettslige regler</li>
      </ul>

      <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">8. Betaling og abonnement</h3>
      <p className="text-gray-600 mb-4">
        Priser for våre tjenester er oppgitt på nettsiden. Abonnementer faktureres 
        månedlig eller årlig avhengig av valgt plan. Du kan kansellere abonnementet 
        når som helst, og det vil være aktivt ut inneværende betalingsperiode.
      </p>

      <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">9. Immaterielle rettigheter</h3>
      <p className="text-gray-600 mb-4">
        Alt innhold og funksjonalitet på Fritim, inkludert design, tekst, grafikk og 
        programvare, tilhører Fritim eller våre lisensgivere. Du får en begrenset, 
        ikke-eksklusiv rett til å bruke tjenesten i samsvar med disse vilkårene.
      </p>

      <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">10. Ansvarsbegrensning</h3>
      <p className="text-gray-600 mb-4">
        Fritim tilbys &quot;som den er&quot;. Vi garanterer ikke at tjenesten vil være 
        uavbrutt eller feilfri.
      </p>
      <p className="text-gray-600 mb-4">
        Fritim fraskriver seg ethvert ansvar for:
      </p>
      <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
        <li>Personskader, ulykker eller dødsfall som oppstår i forbindelse med frivillig arbeid</li>
        <li>Økonomisk tap som følge av frivilliges fravær eller manglende oppmøte</li>
        <li>Tvister mellom arrangør og frivillig</li>
        <li>Brudd på arbeidsrettslige regler begått av arrangører</li>
        <li>Indirekte tap, tapt fortjeneste eller tap av data</li>
      </ul>
      <p className="text-gray-600 mb-4">
        Denne ansvarsbegrensningen gjelder så langt det er tillatt etter norsk lov.
      </p>

      <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">11. Skadesløsholdelse</h3>
      <p className="text-gray-600 mb-4">
        Du samtykker i å holde Fritim, dets eiere, ansatte og samarbeidspartnere 
        skadesløse for ethvert krav, tap, ansvar eller utgift (inkludert rimelige 
        advokatutgifter) som oppstår som følge av din bruk av tjenesten eller brudd 
        på disse vilkårene.
      </p>

      <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">12. Endringer i vilkårene</h3>
      <p className="text-gray-600 mb-4">
        Vi kan oppdatere disse vilkårene fra tid til annen. Ved vesentlige endringer 
        vil vi varsle deg via e-post eller gjennom tjenesten. Fortsatt bruk av 
        tjenesten etter endringer innebærer aksept av de nye vilkårene.
      </p>

      <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">13. Lovvalg og verneting</h3>
      <p className="text-gray-600 mb-4">
        Disse vilkårene er underlagt norsk lov. Eventuelle tvister skal søkes løst 
        i minnelighet, og om dette ikke lykkes, avgjøres av norske domstoler.
      </p>

      <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">14. Kontakt</h3>
      <p className="text-gray-600 mb-4">
        Har du spørsmål om vilkårene? Kontakt oss på{' '}
        <a href="mailto:kontakt@fritim.app" className="text-[#1f6ae1] hover:underline">kontakt@fritim.app</a>.
      </p>
    </div>
  );
}
