import React from 'react';

import type { Metadata } from 'next';
import Link from 'next/link';

import PageWrapper from './components/PageWrapper';

import Markdown from 'markdown-to-jsx';

import { homeMarkdown } from '@/data/home';
import { Mako } from 'next/font/google';

export const metadata: Metadata = {
  description:
    "Michael D'Angelo is a data scientist, machine learning engineer, and full-stack engineer.",
};

export default function HomePage() {
  return (
    <PageWrapper>
      <article className="post" id="index">
        <header>
          <div className="title">
            <h2>
              <Link href="/about">L’instant hypnose</Link>
            </h2>
            <p>
              Place holder
            </p>
          </div>
        </header>
        <Markdown>{homeMarkdown}</Markdown>
      </article>
    </PageWrapper>
  );
}
