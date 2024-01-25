"use client"

import siteMetadata from "@/data/site-metadata"
import { PaletteMode, ThemeProvider, createTheme } from "@mui/material"
import { FC, PropsWithChildren, createContext, useMemo, useState } from "react"

export const ColorModeContext = createContext({ toggleColorMode: () => {} })

export const ThemeProviders: FC<PropsWithChildren> = ({ children }) => {
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
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  )
}
