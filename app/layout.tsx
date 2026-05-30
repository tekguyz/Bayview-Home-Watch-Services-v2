import type { Metadata } from "next";
import { Playfair_Display, Inter, Dancing_Script } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700", "900"],
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  weight: ["700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bayviewhomewatchservices.com"),
  title: {
    default: "Bayview Home Watch Services | South Florida Home Watch",
    template: "%s | Bayview Home Watch Services",
  },
  description:
    "Professional home watch services for South Florida homeowners. Regular check-ins, storm prep, vendor coordination, and total peace of mind while you're away. Serving Broward County.",
  keywords: [
    "home watch services South Florida",
    "Broward County home watch",
    "home watch Pembroke Pines",
    "home watch Fort Lauderdale",
    "Florida home watch company",
    "absentee homeowner services",
    "snowbird home watch Florida",
    "seasonal home watch services",
  ],
  authors: [{ name: "Bayview Home Watch Services" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bayviewhomewatchservices.com",
    siteName: "Bayview Home Watch Services",
    title: "Bayview Home Watch Services | South Florida Home Watch",
    description:
      "Professional home watch services for South Florida homeowners. Serving Broward County from the beach to the bay.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Bayview Home Watch Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bayview Home Watch Services",
    description: "Professional home watch services for South Florida homeowners.",
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export const viewport = {
  themeColor: "#1B2B50",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${dancing.variable} h-full`}
    >
      <body className="h-full antialiased" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Bayview Home Watch Services",
              legalName: "Bayview Home Watch Services, LLC",
              description: "Professional home watch services for South Florida homeowners in Broward County.",
              url: "https://bayviewhomewatchservices.com",
              telephone: "+12036413342",
              email: "bayviewhomewatchservices@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressRegion: "FL",
                addressCountry: "US",
                addressLocality: "Broward County",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "26.0901",
                longitude: "-80.3997",
              },
              areaServed: {
                "@type": "AdministrativeArea",
                name: "Broward County, Florida",
              },
              serviceType: ["Home Watch Services", "Property Management", "Storm Preparation"],
              priceRange: "$$",
              openingHours: "Mo-Su 00:00-23:59",
              sameAs: ["https://www.facebook.com/bayviewhomewatchservices"],
            }),
          }}
        />
        <head>
          <link rel="preconnect" href="https://images.unsplash.com" />
          <link rel="dns-prefetch" href="https://images.unsplash.com" />
        </head>
        {children}
      </body>
    </html>
  );
}
