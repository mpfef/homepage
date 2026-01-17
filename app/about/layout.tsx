import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mon parcours',
  description: "En savoir plus sur Marianne Pfefferlé",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
