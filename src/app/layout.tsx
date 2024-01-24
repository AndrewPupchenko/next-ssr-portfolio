import Header from "@/components/header"
import { ThemeProviders } from "@/context/theme-context"
import siteMetadata from "@/data/site-metadata"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  ...siteMetadata,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProviders>
          <Header />
          {children}
        </ThemeProviders>
      </body>
    </html>
  )
}
