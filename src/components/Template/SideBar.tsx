'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import ContactIcons from '../Contact/ContactIcons';

const SideBar: React.FC = () => {
  const pathname = usePathname();

  return (
    <section id="sidebar">
      <section id="intro">
        <Link href="/" className="logo">
          <Image src="/images/me.jpg" alt="Marianne Pfefferlé" width={251} height={357} priority />
        </Link>
        <header>
          <h2>Marianne Pfefferlé</h2>
          <p>
            <a href="mailto:marianne.pfef@gmail.com">marianne.pfef@gmail.com</a>
          </p>
        </header>
      </section>

      <section className="blurb">
        <h2>A propos</h2>
        <p>
          Praticienne en hypnose thérapeutique (approche ericksonnienne), je vous propose lors de nos rencontres, dans un cadre sécure, de vous accompagner afin de laisser émerger vos propres ressources, de les mobiliser et ainsi vous soutenir dans la gestion de votre problématique. 
        </p>
        <ul className="actions">
          <li>
            {pathname && !pathname.includes('/about') ? (
              <Link href="/about" className="button">
                Mon parcours
              </Link>
            ) : (
              <Link href="/" className="button">
                Home
              </Link>
            )}
          </li>
        </ul>
      </section>

      <section id="footer">
        <ContactIcons />
        <p className="copyright">
          &copy; Michael D&apos;Angelo <Link href="/">mldangelo.com</Link>.
        </p>
      </section>
    </section>
  );
};

export default SideBar;
