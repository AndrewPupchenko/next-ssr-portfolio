'use client'

import siteMetadata from '@/data/site-metadata'
import {
  Box,
  PaletteMode,
  ThemeProvider,
  createTheme,
  keyframes,
} from '@mui/material'
import { FC, PropsWithChildren, createContext, useMemo, useState } from 'react'

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`

export const ColorModeContext = createContext({ toggleColorMode: () => {} })

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  const [mode, setMode] = useState<PaletteMode>(siteMetadata.theme)
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
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
          component={'body'}
          bgcolor={'background.default'}
          color={'text.primary'}
          sx={{
            '--dark-gradient': '#3b1f12, #3a172e, #12222e, #122b1f',
            '--light-gradient': '#f9b599, #f9b2c9, #9bd7ed, #9bf2dd',
            background: `linear-gradient(-45deg, var(--${mode}-gradient))`,
            backgroundSize: '400% 400%',
            animation: `${gradientAnimation} 15s ease infinite`,
          }}
        >
          {children}
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
