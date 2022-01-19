import { Link } from 'components/partials/link/link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__navigation">
        <Link data={{ className: 'footer__navigation-link', href: '#' }} className="footer__navigation-link" href="#">Schmerztherapie</Link>
        <Link data={{ className: 'footer__navigation-link', href: '#' }} className="footer__navigation-link" href="#">Aktivitäten</Link>
        <Link data={{ className: 'footer__navigation-link', href: '#' }} className="footer__navigation-link" href="#">Über mich</Link>
        <Link data={{ className: 'footer__navigation-link', href: '#' }} className="footer__navigation-link" href="#">Kontakt</Link>
        <Link data={{ className: 'footer__navigation-link', href: '#' }} className="footer__navigation-link" href="#">Anfrage senden</Link>
      </div>
      <div className="footer__privacy">
        <Link data={{ className: 'footer__privacy-link', href: '#' }} href="/datenschutz" className="footer__privacy-link">Datenschutz</Link>
        <figure className="footer__privacy-separator">|</figure>
        <Link data={{ className: 'footer__privacy-link', href: '#' }} href="/impressum" className="footer__privacy-link">Impressum</Link>
      </div>
      <img className="footer__logohead" src="/illustrations/illustration-logohead.svg" alt="Logo Head" />
    </footer>
  )
};

export {
  Footer
};