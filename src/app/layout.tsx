import Header from "@/components/header"
import { Providers } from "@/context/theme-context"
import { Box } from "@mui/material"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <AppRouterCacheProvider>
        <Providers>
          <Box
            m={0}
            component={"body"}
            bgcolor={"background.default"}
            color={"text.primary"}
          >
            <Header />
            {children}
          </Box>
        </Providers>
      </AppRouterCacheProvider>
    </html>
  )
}
