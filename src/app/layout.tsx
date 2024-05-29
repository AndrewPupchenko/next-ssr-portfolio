import Header from '@/components/header'
import { Providers } from '@/context/theme-context'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { FC, PropsWithChildren } from 'react'
import siteMetadata from '@/data/site-metadata'

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html lang="en">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{siteMetadata?.title?.toString()}</title>
    </head>
    <AppRouterCacheProvider>
      <Providers>
        <Header />
        {children}
      </Providers>
    </AppRouterCacheProvider>
  </html>
)

export default RootLayout
