// IMPORTS
import { Page } from 'components/layouts/page/page';
import { Intro } from 'components/sections/intro/intro';
import { CTA } from 'components/sections/cta/cta';
import { Education } from 'components/sections/education/education';
import { Partners } from 'components/sections/partners/partners';

// COMPONENT
const Aktivitaeten = () => {

	// RENDER
	return (
		<Page data={{ title: 'Aktivitäten' }}>
			<Intro data={{ title: 'Aktivitäten', text: 'Ich bleibe auf dem Laufenden und besuche regelmässig Fortbildungen und Anlässe rund um das Thema Kopf- und Kieferschmerzen sowie Schlafapnoe.', image: {	src: '/images/11-daniela-haerle-portrait-brille.jpg',	alt: 'Dr. med. dent. Daniela Haerle am Vierwaldstättersee in Luzern' }, navigation: {	title: 'Themen dieser Seite',	links: [{ text: 'Weiterbildung / Tagungen', href: 'weiterbildungen-tagungen' },		{ text: 'Partner', href: 'partner' }] } }}/>
			<Education data={{ anchorId: 'weiterbildungen-tagungen' }} />
			<CTA data={{ title: 'Termin vereinbaren', text: 'Sie finden mich in der Praxis am Dietschiberg an der Lützelmattstrasse 3 in Luzern.', button: { 	text: 'Kontakt', 	href: '/kontakt' } }} />
		</Page>
	);

};

// EXPORTS
export default Aktivitaeten;
