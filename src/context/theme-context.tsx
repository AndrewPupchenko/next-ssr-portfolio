"use client"

import siteMetadata from "@/data/site-metadata"
import { PaletteMode, ThemeProvider, createTheme } from "@mui/material"
import { FC, PropsWithChildren, createContext, useMemo, useState } from "react"
import { ParallaxProvider } from "react-scroll-parallax"

export const ColorModeContext = createContext({ toggleColorMode: () => {} })

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  const [mode, setMode] = useState<PaletteMode>(siteMetadata.theme)
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))
      },
    }),
    []
  )

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <ParallaxProvider>{children}</ParallaxProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
