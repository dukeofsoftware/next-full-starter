import "@/styles/globals.css"
import { Inter as Inter } from "next/font/google"

import { Providers } from "@/components/providers/"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {

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
