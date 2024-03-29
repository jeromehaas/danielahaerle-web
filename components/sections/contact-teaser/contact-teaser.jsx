// IMPORTS
import { Section } from 'components/layouts/section/section';
import { Heading } from 'components/partials/heading/heading';

// COMPONENT
const ContactTeaser = () => {

	// RETURN
	return (
		<Section data={{ className: 'contact-teaser' }}>
			<div className="contact-teaser__text-wrapper">
				<Heading data={{ className: 'contact-teaser__title', color: 'lightblue' }}>
					Ich freue mich, von Ihnen zu hören.
				</Heading>
			</div>
			<div className="contact-teaser__contact-wrapper">
				<address className="contact-teaser__item">
					<img src="/icon/icon-location.svg" alt="Icon" />
					<p>Praxis am Dietschiberg</p>
					<p>Lützelmattstrasse 3</p>
					<p>6006 Luzern</p>
					<p>(Anfahrtsplan siehe unten)</p>
				</address>
				<div className="contact-teaser__item">
					<img src="/icon/icon-phone.svg" alt="Icon" />
					<p>Kontakt</p>
					<p>Tel: <a href="tel:0415521617">041 552 16 17</a></p>
					<p>Email: <a href="mailto:praxis.dietschiberg@hin.ch">praxis.dietschiberg@hin.ch</a></p>
				</div>
			</div>
		</Section>
	);

};

// EXPORTS
export {
	ContactTeaser,
};
