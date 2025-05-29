// src/PangaApp.jsx
import React, { useState, useEffect } from 'react';
import {
  ArrowDown,
  Users,
  Database,
  CreditCard,
  Github,
  Mail
} from 'lucide-react';
import './PangaApp.css';

// impordi ülevaate pildid
import SisselogimineImg from './pildid/Sisselogimine.png';
import RegistreerimineImg from './pildid/Registreerimine.png';
import KontoValimineImg from './pildid/kontoValimine.png';
import MainPageImg from './pildid/MainPage.png';
import MakseTegemineImg from './pildid/makseTegemine.png';

// impordi meeskonna pildid
import HardyImg from './pildid/Hardy.jpeg';
import ReinImg from './pildid/Rein.jpeg';

export default function PangaApp() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const overviewItems = [
    {
      src: SisselogimineImg,
      title: 'Sisselogimine',
      text: 'Turvaline sisselogimisleht, kus kasutaja sisestab oma TXT-paroolirida.'
    },
    {
      src: RegistreerimineImg,
      title: 'Registreerimine',
      text: 'Uue kasutaja loomine – sisestage nimi ja looge uus konto.'
    },
    {
      src: KontoValimineImg,
      title: 'Konto Valimine',
      text: 'Valige olemasolev konto või looge uus – kõik salvestatakse TXT-faili.'
    },
    {
      src: MainPageImg,
      title: 'Pealeht',
      text: 'Ülevaade kontoseisust, viimastest tehingutest ja kiiretest linkidest.'
    },
    {
      src: MakseTegemineImg,
      title: 'Makse Tegemine',
      text: 'Lisa uus tehing või vaata ajaloolisi makseid otse TXT-failist.'
    }
  ];

  return (
    <div className="app">
      <header className="hero">
        <div
          className="hero-bg"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div className="hero-content">
          <h1 className="hero-title">💳 Revolutsiooniline Pangasüsteem</h1>
          <p className="hero-text">
            Revolutsiooniline pangaäpp, mis salvestab teie raha... TXT faili!
          </p>
          <div className="badges">
            <span className="badge">🚀 Kiire nagu välk</span>
            <span className="badge">🔒 "Turvaline"</span>
            <span className="badge">📝 TXT-põhine</span>
          </div>
          <ArrowDown className="hero-arrow" size={48} />
        </div>
      </header>

      <section className="features">
        <h2 className="section-title">Meie Võimsad Funktsioonid</h2>
        <div className="features-grid">
          <div className="feature-item">
            <Users size={48} className="feature-icon" />
            <h3 className="feature-title">Kasutaja Registreerimine</h3>
            <p className="feature-text">
              Sisestage oma nimi ja saage kohe oma isiklik TXT rida! Iga kasutaja
              saab oma unikaalse koha failis.
            </p>
          </div>
          <div className="feature-item">
            <CreditCard size={48} className="feature-icon" />
            <h3 className="feature-title">Mitme Konto Haldus</h3>
            <p className="feature-text">
              Looge mitu kontot või valige olemasolev! Kõik kontod on hoolikalt
              salvestatud samasse TXT faili.
            </p>
          </div>
          <div className="feature-item">
            <Database size={48} className="feature-icon" />
            <h3 className="feature-title">Maksete Tegemine</h3>
            <p className="feature-text">
              Tehke makseid, salvestage info ja saatke kõik terminalisse! Täiesti
              nagu päris pangandus.
            </p>
          </div>
        </div>
      </section>

      <section className="overview-section">
        <h2 className="section-title">📝 Ülevaade Programmist</h2>
        <p className="section-text">
          Siin on pildid meie rakenduse peamistest vaadetest ja funktsionaalsustest:
        </p>
        <div className="overview-grid">
          {overviewItems.map((item, idx) => (
            <div key={idx} className="overview-card">
              <img
                src={item.src}
                alt={item.title}
                className="overview-image"
              />
              <h3 className="overview-title">{item.title}</h3>
              <p className="overview-text">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="team-section">
        <h2 className="section-title">👥 Meie Meeskond</h2>
        <div className="team-grid-two">
          <div className="team-card">
            <div className="team-avatar">
              <img
                src={HardyImg}
                alt="Hardy Reinhold"
                className="team-image"
              />
            </div>
            <h3 className="feature-title">Hardy Reinhold</h3>
            <p className="feature-text">
              Java Arendaja – kirjutas pool pangasüsteemi koodist.
            </p>
          </div>
          <div className="team-card">
            <div className="team-avatar">
              <img
                src={ReinImg}
                alt="Rein Urmet"
                className="team-image"
              />
            </div>
            <h3 className="feature-title">Rein Urmet</h3>
            <p className="feature-text">
              Java Arendaja – kirjutas teise poole pangasüsteemi koodist.
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <h3 className="section-title">📧 Kontakt</h3>
        <p className="section-text">
          Küsimused? Ettepanekud? Pangaäpp ei tööta?<br/>
          Võtke ühendust meie TXT-failiga!
        </p>
        <div className="contact-row">
          <div className="contact-item">
            <Mail size={20} /> <span>rein.urmet@gmail.com</span>
          </div>
          <div className="contact-item">
            <Github size={20} /> <span>https://github.com/hardyreinhold/pank_java</span>
          </div>
        </div>
        <p className="footer-note">
          © 2024 Pangaäpp – Kõik õigused reserveeritud TXT failis<br/>
          <small>Antud veebileht on loodud rühmatöö tutvustamiseks.</small>
        </p>
      </footer>
    </div>
  );
}
