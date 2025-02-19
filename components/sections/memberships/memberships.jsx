// IMPORTS
import { Section } from 'components/layouts/section/section';
import { Paragraph } from 'components/partials/paragraph/paragraph';
import { Heading } from 'components/partials/heading/heading';
import { Image } from 'components/partials/image/image';

// COMPONENT
const Memberships = ({ data }) => {

	// RENDER
	return (
		<Section data={{ className: 'memberships', anchorId: data.anchorId }}>
			<div className="memberships__text-wrapper">
				<Heading data={{ className: 'memberships__title', level: 'h3' }}>Mitgliedschaften</Heading>
				<Paragraph data={{ className: 'memberships__text' }}>Frau Dr. med. dent. Daniela Haerle ist Mitglied von anerkannten Fachgesellschaften; des Weiteren besteht eine Zusammenarbeit mit dem Zentrum für Kopf-Hals-Chirurgie Hirslanden Klinik St. Anna, spezialisierte Zentren für Schlafmedizin, HNO-Ärzten, Neurologen und Psychologen.</Paragraph>
			</div>
			<div className="memberships__logo-wrapper">
				<a className="memberships__logo memberships__logo--2" href="https://www.sso-luzern.ch/" target="_blank" rel="noreferrer"><Image data={ { src: '/logos/logo-sso-luzern.png', alt: 'SSO Luzern'} }/>
				</a>
				<a className="memberships__logo memberships__logo--3" href="https://www.sso.ch/" target="_blank" rel="noreferrer">
					<Image data={ { className: 'memberships__image', src: '/logos/logo-sso.png', alt: 'SSO' }}/>
				</a>
				<a className="memberships__logo memberships__logo--4" href="https://www.dgfdt.de/" target="_blank" rel="noreferrer">
					<Image data={ { className: 'memberships__image', src: '/logos/logo-dgfdt.png', alt: 'DGFDT' }}/>
				</a>
				<a className="memberships__logo memberships__logo--5" href="https://www.eaopd.org" target="_blank" rel="noreferrer">
					<Image data={ { className: 'memberships__image', src: '/logos/logo-eaopd.png', alt: 'EAOPD' }}/>
				</a>
				<a className="memberships__logo memberships__logo--6 " href="http://www.dgzs.de/" target="_blank" rel="noreferrer">
					<Image data={{ className: 'memberships__image', src: '/logos/logo-dgzs.png', alt: 'DGZS' }}/>
				</a>
				<a className="memberships__logo memberships__logo--1 memberships__logo--high" href="https://swisspainsociety.ch/de/" target="_blank" rel="noreferrer">
					<Image data={{ className: 'memberships__image', src: '/logos/logo-swiss-pain-society.png', alt: 'Swiss Pain Society' }}/>
				</a>
			</div>
		</Section>
	);

};

// EXPORTS
export {
	Memberships,
};
