import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { ExitIntentPopup } from '@/components/ExitIntentPopup';
import { SocialProofCounter } from '@/components/SocialProofCounter';

export const metadata: Metadata = {
  title: 'P-Shot Near Me UK | Save 70% with Treatment in Turkey',
  description: 'P-Shot treatment UK vs Turkey price comparison. Save up to 70%. Includes hotel and VIP transfer.',
  metadataBase: new URL('https://pshotnearme.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <SocialProofCounter />
        <ExitIntentPopup />
      </body>
    </html>
  );
}
