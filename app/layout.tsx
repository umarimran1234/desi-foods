import type { Metadata, Viewport } from "next";
import { Noto_Nastaliq_Urdu, Playfair_Display, Poppins } from "next/font/google";
import { CartProvider } from "@/components/Cart";
import { RevealObserver } from "@/components/ClientBits";
import { Header } from "@/components/Header";
import { IconSprite } from "@/components/Icons";
import { site } from "@/lib/data";
import "./globals.css";

const body = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body", display: "swap" });
const display = Playfair_Display({ subsets: ["latin"], weight: ["600", "800"], variable: "--font-display", display: "swap" });
const urdu = Noto_Nastaliq_Urdu({ subsets: ["arabic"], weight: ["500", "700"], variable: "--font-urdu", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Desi Foods — Dumba Specialists, FB Area Karachi",
  description:
    "Desi Foods, Abdullah Centre, FB Area Block 16, Karachi. Famous for Dumba Platter, Dumba Derhya Pulao, Karahi, BBQ and family platters. Order on WhatsApp.",
  icons: { icon: "/images/logo.jpg" },
  openGraph: {
    title: `Desi Foods — ${site.urdu}`,
    description: "Asli desi zaiqa. Dumba Platter, Dumba Pulao, Karahi & BBQ — FB Area, Karachi.",
    images: ["/images/logo.jpg"],
  },
};

export const viewport: Viewport = { themeColor: "#7a0a0a" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: site.name,
  alternateName: site.urdu,
  url: site.url,
  image: `${site.url}/images/logo.jpg`,
  telephone: site.phones.map((p) => p.tel),
  servesCuisine: ["Pakistani", "Desi", "BBQ"],
  address: {
    "@type": "PostalAddress",
    streetAddress: site.street,
    addressLocality: "Karachi",
    addressRegion: "Sindh",
    addressCountry: "PK",
  },
  sameAs: [site.facebook],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable} ${urdu.variable}`} suppressHydrationWarning>
      <head>
        {/* Enable reveal animations only when JS runs, before first paint */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <IconSprite />
        <div className="demo">
          Sample website concept prepared for Desi Foods — prices, hours &amp; reviews are placeholders for approval.
        </div>
        <CartProvider>
          <Header />
          <main>{children}</main>
        </CartProvider>
        <RevealObserver />
      </body>
    </html>
  );
}
