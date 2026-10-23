import type { Metadata, Viewport } from "next";
import { Fraunces, Instrument_Sans, Instrument_Serif } from "next/font/google";
import { SiteShell } from "@/components/SiteShell";
import { getWfPageBootstrapScript, WF_PAGE_HOME } from "@/data/wfPageId";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-instrument-serif",
  display: "swap",
});

/** Wordmark only: a little heavier than Instrument Serif, with softened corners. */
const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
  variable: "--font-fraunces",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#F8F4F6",
};

export const metadata: Metadata = {
  title: {
    default: "Malika Karimova — kosmetolog",
    template: "%s | Malika Karimova",
  },
  description:
    "Malika Karimova — kosmetolog. Yuz va teri parvarishi, shaxsiy konsultatsiya va qabulga yozilish.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-wf-domain="elbergo.webflow.io"
      data-wf-site="6927ddcc377dce6e20188e35"
      data-wf-page={WF_PAGE_HOME}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: getWfPageBootstrapScript() }}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/elbergo.shared.css" />
        {/* After Webflow CSS so trial brand vars actually apply */}
        <link rel="stylesheet" href="/brand-trial.css" />
      </head>
      <body
        className={`${instrumentSans.variable} ${instrumentSerif.variable} ${fraunces.variable}`}
      >
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}