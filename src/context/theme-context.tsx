"use client"

import siteMetadata from "@/data/site-metadata"
import { Box, PaletteMode, ThemeProvider, createTheme } from "@mui/material"
import { FC, PropsWithChildren, createContext, useMemo, useState } from "react"

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
        <Box
          m={0}
          component={"body"}
          bgcolor={"background.default"}
          color={"text.primary"}
          sx={{
            background: `linear-gradient(-45deg,  ${
              mode === "dark"
                ? "#3b1f12, #3a172e, #12222e, #122b1f"
                : "#f9b599, #f9b2c9, #9bd7ed, #9bf2dd"
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
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
