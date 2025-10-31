import { Urbanist } from "next/font/google";
import "./globals.css";
import { appData } from "@/lib/appData";
import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google"; // ← Add this
import { Analytics } from "@vercel/analytics/next";

const canonical = new URL(appData.canonicalPath || "/", appData.appURL).toString();

export const metadata: Metadata = {
  title: appData.title,
  description: appData.description,
  keywords: appData.keywords,
  alternates: { canonical },
  openGraph: {
    title: appData.title,
    description: appData.description,
    url: canonical,
    siteName: appData.siteName,
    locale: appData.locale,
    type: "website",
    images: appData.image
      ? [
          {
            url: appData.image,
            width: 1200,
            height: 630,
            alt: appData.imageAlt || appData.title,
          },
        ]
      : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: appData.title,
    description: appData.description,
    images: appData.image ? [appData.image] : undefined,
    site: appData.twitterHandle,
    creator: appData.twitterHandle,
  },
  metadataBase: new URL(appData.appURL),
};

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd: any[] = [];
  if (appData.schema?.organization) {
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: appData.business?.name || appData.siteName,
      url: appData.appURL,
      logo: appData.image ? new URL(appData.image, appData.appURL).toString() : undefined,
      contactPoint: appData.business?.phone
        ? [
            {
              '@type': 'ContactPoint',
              telephone: appData.business.phone,
              contactType: 'sales',
            },
          ]
        : undefined,
    });
  }
  if (appData.schema?.website) {
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: appData.title,
      url: appData.appURL,
    });
  }

  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="hJowW9IlFVI4PnJ9XM1-Vdr3Q9hOmsUBhVwNA7hzXj4" />
        {jsonLd.length > 0 && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        )}
      </head>
      <Analytics/>

      <body className={`${urbanist.variable} antialiased`}>
        <GoogleTagManager gtmId="GTM-K7JB232H" />

        {children}
      </body>
    </html>
  );
}
