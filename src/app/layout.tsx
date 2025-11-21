import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
    title: "Alan Munschy",
    description: "Alan Munschy's portfolio website",
    icons: [
        { rel: "icon", url: "/favicon.ico" },
        { rel: "apple-touch-icon", url: "/favicon_io/apple-touch-icon.png" },
        { rel: "icon", type: "image/png", sizes: "32x32", url: "/favicon_io/favicon-32x32.png" },
        { rel: "icon", type: "image/png", sizes: "16x16", url: "/favicon_io/favicon-16x16.png" },
        { rel: "manifest", url: "/favicon_io/site.webmanifest" }
    ],
    keywords: "Alan Munschy, portfolio, mechanical engineer, CAD, design, web developer, projects",
    authors: [{ name: "Alan Munschy" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
      {children}
      <Analytics/>
      <SpeedInsights/>
      </body>
    </html>
  );
}
