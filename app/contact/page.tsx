import React from 'react';

import type { Metadata } from 'next';
import Link from 'next/link';

import PageWrapper from '../components/PageWrapper';

export const metadata: Metadata = {
  title: 'Contact',
  description: "Contact Michael D'Angelo via email @ hi@mldangelo.com",
};

export default function ContactPage() {
  return (
    <PageWrapper>
      <article className="post" id="contact">
        <header>
          <div className="title">
            <h2>
              <Link href="/contact">Information de contact</Link>
            </h2>
          </div>
        </header>
        <div className="email-at">
          <span>
            <b>Telephone </b>079 790 94 35
          </span> <br></br>
          <span>
            <b>Addresse: </b> Chemin des mélèzes 16, 1965 Savièse 
          </span><br></br>
          <span>
            <b>mail: </b> <a href='mailto:marianne.pfef@gmail.com'>marianne.pfef@gmail.com</a>
          </span><br></br>
        </div>
      </article>
    </PageWrapper>
  );
}
