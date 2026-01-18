import React from 'react';

import type { Metadata } from 'next';
import Link from 'next/link';

import { getAssetPath } from '@/utils/assetPath';

import PageWrapper from '../components/PageWrapper';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contacter Marianne Pfefferlé',
};

export default function ContactPage() {
  return (
    <PageWrapper>
      <article className="post" id="contact">
        <header>
          <div className="title">
            <h2>
              <Link href="/contact">Contact</Link>
            </h2>
          </div>
        </header>
        <div className="contact">
          <div className="contact-left">
            <span>
              <b>Adresse:</b>
              <br />
              Chemin des mélèzes 16
              <br />
              1965 Savièse
            </span>

            <span>
              <b>Mail:</b>
              <br />
              <a href="mailto:marianne.pfef@gmail.com">marianne.pfef@gmail.com</a>
            </span>
          </div>

          <div className="contact-right">
            <span>
              <b>Téléphone:</b>
              <br />
              079 785 48 49
            </span>

            <img src={getAssetPath('/images/me.jpg')} alt="Contact" className="contact-image" />
          </div>
        </div>
      </article>
    </PageWrapper>
  );
}
