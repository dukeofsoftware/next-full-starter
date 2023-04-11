import "@/styles/globals.css"
import { Inter as Inter } from "next/font/google"

import { siteConfig } from "@/config/site"
import { absoluteUrl } from "@/lib/utils"
import { Providers } from "@/components/providers/"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["template"],
  authors: [
    {
      name: "your name",
      url: "url",
    },
  ],
  creator: "Emre",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: absoluteUrl("/"),
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/`],
    creator: "@emre",
  },
  icons: {
    icon: "/",
    shortcut: "/",
    apple: "/",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${process.env.DEVELOPMENT === "true" && "debug-screens"} ${
          inter.className
        }`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
