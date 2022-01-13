import { Fragment, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'

const Navigation = () => {

  const [menuState, setMenuState] = useState('closed');
  const toggleMenu = () => {
    setMenuState(menuState === 'closed' ? 'open' : 'closed');
  };
  const router = useRouter()

  return (
    <Fragment>
      <nav className={`navigation navigation--mobile ${menuState === 'open' ? 'navigation--open' : ''}`}>
        <div className='navigation__bar'>
          <img className="navigation__logo" src="/logos/logo-daniele-haerle.svg" />
          <button className={`navigation__hamburger hamburger hamburger--squeeze ${menuState === 'open' ? 'hamburger--active' : null} `} type="button" onClick={ toggleMenu }>
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
        </div>
        <div className='navigation__inner'>
          <div className="navigation__link-wrapper">
            <Link href="/schmerztherapie"><a className="navigation__link">Schmerztherapie</a></Link>
            <Link href="/aktivitaeten"><a className="navigation__link">Aktivitäten</a></Link>
            <Link href="/ueber-mich"><a className="navigation__link">Über mich</a></Link>
            <Link href="/kontakt"><a className="navigation__link">Kontakt</a></Link>
          </div>
          <address className="navigation__address">
            <img className="navigation__address-icon" src="/icons/icon-location.svg" />
            <p className="navigation__address-item">zahnmedizin luzern</p>
            <p className="navigation__address-item">Dr. med. dent. Jürg Eppenberger</p>
            <p className="navigation__address-item">Haldenstrasse 11</p>
            <p className="navigation__address-item">6006 Luzern</p>
          </address>
          <div className="navigation__contact">
            <img className="navigation__contact-icon" src="/icons/icon-phone.svg" />
            <a className="navigation__contact-item" href="tel:0414171707">041 417 17 07</a>
          </div>
          <div className="navigation__times">
            <img className="navigation__times-icon" src="/icons/icon-time.svg" />
            <p className="navigation__times-item">Öffnungszeiten</p>
            <p className="navigation__times-item">Montag –  Freitag</p>
            <p className="navigation__times-item">09:00 – 12.00, 13:30 – 18:00 Uhr</p>
          </div>
        </div>
      </nav>   
      <nav className="navigation navigation--desktop">
        <div className="navigation__inner">
          <img className="navigation__logo" src="/logos/logo-daniele-haerle.svg" onClick={() => router.push('/')} />
          <Link href="/schmerztherapie"><a className="navigation__link">Schmerztherapie</a></Link>
          <Link href="/aktivitaeten"><a className="navigation__link">Aktivitäten</a></Link>
          <Link href="/ueber-mich"><a className="navigation__link">Über mich</a></Link>
          <Link href="/kontakt"><a className="navigation__link">Kontakt</a></Link>
        </div>
        <div className="navigation__blocker"></div>
      </nav>
    </Fragment>	
  )
};

export {
  Navigation
};