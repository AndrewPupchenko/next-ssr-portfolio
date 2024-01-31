import Header from "@/components/header"
import { Providers } from "@/context/theme-context"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter"
import { FC, PropsWithChildren } from "react"

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html lang="en">
    <AppRouterCacheProvider>
      <Providers>
        <Header />
        {children}
      </Providers>
    </AppRouterCacheProvider>
  </html>
)

export default RootLayout
