import type { Metadata } from 'next';
import { barlowLight, barlowRegular, barlowMedium } from '@style/fonts';
import './colors.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'LE FOG',
  description: 'Website for LE FOG'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlowMedium.className}
          ${barlowRegular.className} 
          ${barlowLight.className} antialiased`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
