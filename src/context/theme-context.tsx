"use client"

import siteMetadata from "@/data/site-metadata"
import { Box, PaletteMode, ThemeProvider, createTheme } from "@mui/material"
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
        <ParallaxProvider>
          <Box
            m={0}
            component={"body"}
            bgcolor={"background.default"}
            color={"text.primary"}
            sx={{
              background: `linear-gradient(-45deg,  ${
                mode === "dark"
                  ? "#4e2a19, #4e1e3c, #1a3142, #1a3c2b"
                  : "#ee7752, #e73c7e, #23a6d5, #23d5ab"
              })`,
              backgroundSize: "400% 400%",
              animation: "gradient 15s ease infinite",

              "@keyframes gradient": {
                "0%": {
                  backgroundPosition: "0% 50%",
                },
                "50%": {
                  backgroundPosition: "100% 50%",
                },
                "100%": {
                  backgroundPosition: "0% 50%",
                },
              },
            }}
          >
            {children}
          </Box>
        </ParallaxProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
