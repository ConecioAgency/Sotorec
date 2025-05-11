import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Sotorec - Expertise Comptable & Consulting',
  description: 'Votre partenaire de confiance pour la croissance de votre entreprise. Services de comptabilité, gestion financière, fiscalité et consulting.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <meta property="og:title" content="Sotorec - Expertise Comptable & Consulting" />
        <meta property="og:description" content="Votre partenaire de confiance pour la croissance de votre entreprise. Services de comptabilité, gestion financière, fiscalité et consulting." />
        <meta property="og:image" content="https://sotorec.vercel.app/images/logo_sotorec.png" />
        <meta property="og:url" content="https://sotorec.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sotorec" />
        <meta property="fb:profile_id" content="61576389411390" />
        <meta property="article:author" content="https://www.facebook.com/profile.php?id=61576389411390" />
        <link rel="icon" href="/images/logo_sotorec.png" />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
} 