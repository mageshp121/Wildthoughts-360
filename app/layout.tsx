import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import CalPopupInit from "@/components/ui/CalPopupInit";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wild Thoughts Consultancy Services | 360° Business Transformation",
  description:
    "Partner with Wild Thoughts to align strategy, systems, people, and performance. Book your free 60-minute strategy call today. Based in Perinthalmanna, India.",
  keywords:
    "business consulting Kerala, HR consulting India, business transformation, franchise consulting, startup mentoring Perinthalmanna",
  openGraph: {
    title: "Wild Thoughts Consultancy Services",
    description: "Build a structured, scalable, and happy organization.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${instrumentSerif.variable}`}>
      <body className="font-sans bg-bg text-foreground antialiased">
        <CalPopupInit />
        {children}
        {/* Analytics placeholder — drop in GA4 or Meta Pixel here */}
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
