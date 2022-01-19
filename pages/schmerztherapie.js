import { Page } from 'components/layouts/page/page';
import { Intro } from 'components/sections/intro/intro';
import { Article } from 'components/sections/article/article';
import { Faq } from 'components/sections/faq/faq';
import { CTA } from 'components/sections/cta/cta';
import { Auth } from 'components/sections/auth/auth';

const Schmerztherapie = () => {
  return (
    <Page>
      <Auth />
      <Intro data={{
        title: 'Schmerztherapie',
        text: 'Wenn die Kiefergelenke, die Kaumuskeln und der Biss nicht harmonisch funktionieren, kann das zu Beschwerden im Kieferbereich und in angrenzenden Regionen führen. Erfahren Sie, welche Symptome bei einer Cranio Mandibulären Dysfunktion (CMD) auftreten können, wie die Diagnose erstellt wird und wie die Behandlung auf Sie zugeschnitten wird. ',
        imageSrc: '/images/09-daniela-haerle-portrait-ohne-brille.jpg',
        mavigationTitle: '',
        navigationLinks: [
          { text: 'Symptome', href: '#symptome' },
          { text: 'Diagnose', href: '#diagnose' },
          { text: 'Therapie', href: '#therapie' },
          { text: 'Häufig gestellte Fragen', href: '#faq' }
        ]
      }}/>
      <Article data={{
        title: 'Die Diagnose ist so individuell wie Sie.',
        text: 'Nach der zweiten Sitzung ist meist klar welche Richtung für die Therapie eingeschlagen wird. Vieles werden wir in ein, zwei weiteren Behandlungsterminen selber angehen und bewältigen können. Manchmal sind aber auch zusätzliche Abklärungen (z.B. in einer Schlafklinik, oder HNO-Arzt) oder Therapieansätze bei weiteren Fachpersonen (Neurologie, Rheumatologie, Psychologie, Physiotherapie, Akupunktur, integrative Medizin u.a.) sinnvoll. Da ich über ein gutes Netzwerk zu solchen Personen verfüge kann Ihnen ein interdisziplinäres Setting angeboten werden. ',
        imageSrc: '/images/07-daniela-haerle-besprechung-roentgen-ipad.jpg',
        imageAlt: '#',
        reverse: false
      }} /> 
      <Article data={{
        title: 'Die auf Sie zugeschnittene Therapie. ',
        text: 'Die Therapie beginnt als Erstes bei Ihnen im Kopf. Sie werden Zusammenhänge besser verstehen und ungünstige Gewohnheiten ablegen können. Es kommen reversible Therapiehilfsmittel wie orale Schienen (Entlastungsschiene, Schnarchschiene, Protrusionsschiene) zum Einsatz. Auch helfen gezielte lokale Anästhesien und das Erlernen von einfacher Physiotherapie für den Kiefer. Spezifische Medikamente können Linderung verschaffen. Sollte sich eine Fehlstellung des Bisses oder ein Zahn als Ursache der Schmerzen herausstellen, stehe ich gerne beratend Ihrem Privat-Zahnarzt zur Seite (second opinion). ',
        imageSrc: '/images/08-daniela-haerle-besprechung-patient-closeup.jpg',
        imageAlt: '#',
        reverse: true
      }} /> 
      <Faq />
      <CTA data={{
        title: 'Haben Sie Fragen?',
        text: 'Sie finden mich in der Zahnmedizin Luzern AG, bei Dr. Jürg Eppenberger, Zahnarztpraxis für Rekonstruktive Zahnmedizin.',
        buttonText: 'Kontakt'
      }} />
    </Page>
  )
}

export default Schmerztherapie;