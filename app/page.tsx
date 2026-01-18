import React from 'react';

import type { Metadata } from 'next';
import Link from 'next/link';

import Markdown from 'markdown-to-jsx';

import { homeMarkdown } from '@/data/home';
import { getAssetPath } from '@/utils/assetPath';

import PageWrapper from './components/PageWrapper';

export const metadata: Metadata = {
  description:
    "Michael D'Angelo is a data scientist, machine learning engineer, and full-stack engineer.",
};

export default function HomePage() {
  return (
    <PageWrapper>
      <article className="post" id="index">
        <header>
          <div
            className="title title-home"
            style={{ backgroundImage: `url(${getAssetPath('/images/clouds.jpg')})` }}
          >
            <h2 className="h2-home">
              <Link href="/about">L’instant hypnose</Link>
            </h2>
            <blockquote>
              <p>Vivre une expérience en hypnose est à chaque fois une aventure.</p>
              <p>-François Roustang</p>
            </blockquote>
          </div>
        </header>
        <Markdown>{homeMarkdown}</Markdown>
      </article>
    </PageWrapper>
  );
}
