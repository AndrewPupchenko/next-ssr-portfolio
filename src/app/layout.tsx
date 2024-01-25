import Header from "@/components/header"
import { ThemeProviders } from "@/context/theme-context"
import { Box } from "@mui/material"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProviders>
            <Box
              bgcolor={"background.default"}
              color={"text.primary"}
              height={"100svh"}
            >
              <Header />
              {children}
            </Box>
          </ThemeProviders>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
