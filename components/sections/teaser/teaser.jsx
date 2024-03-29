// IMPORTS
import { Section } from 'components/layouts/section/section';
import { Heading } from 'components/partials/heading/heading';
import { Paragraph } from 'components/partials/paragraph/paragraph';

// COMPONENT
const Teaser = ({ data }) => {

	// RENDER
	return (
		<Section data={{ className: 'teaser' }}>
			<div className="teaser__container">
				<Heading data={{ className: 'teaser__title', level: 'h2' }}>{ data.title }</Heading>
				{data.items.map((item, index) => (
					<Item key={ index } data={{ icon: { src: item.icon.src, alt: item.icon.alt }, title: item.title, text: item.text, index: index }} />
				))}
			</div>
		</Section>
	);

};

// COMPONENT
const Item = ({ data }) => {

	// RENDER
	return (
		<div className={`teaser__item teaser__item--${data.index}`}>
			<img className="teaser__item-icon" src={ data.icon.src } alt={ data.icon.alt } />
			<Heading data={{ className: 'teaser__item-title', level: 'h5' }}>{data.title}</Heading>
			<Paragraph data={{ className: 'teaser__item-text' }}>{data.text}</Paragraph>
		</div>
	);

};

// EXPORTS
export {
	Teaser,
};
