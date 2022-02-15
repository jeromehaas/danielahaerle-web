import { Section } from 'components/layouts/section/section';
import { Heading } from 'components/partials/heading/heading';
import { Paragraph } from 'components/partials/paragraph/paragraph';
import { Button } from 'components/partials/button/button';

const CTA = ({ data }) => {

  return (
    <Section data={{ className: 'cta' }}>
      <Heading data={{
        className: 'cta__title',
        level: 'h4',
        color: 'lightblue'
      }}>{ data.title }</Heading>
      <Paragraph data={{ 
        className: 'cta__text'
      }}>{ data.text }</Paragraph>
      <Button data={{
        className: 'cta__button',
        href: data.buttonHref
      }}>{ data.buttonText }</Button>
    </Section>
  )
};

export {
  CTA
};