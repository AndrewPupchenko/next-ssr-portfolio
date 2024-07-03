'use client'
import { Box } from '@mui/material'
import Navigation from './navigation'
import ThemeSwitch from './theme-switch'

const HEADER_HEIGHT = '4rem'

const Header = () => {
  return (
    <>
      <Box
        display={'flex'}
        position={'fixed'}
        width={'100%'}
        height={HEADER_HEIGHT}
        gap={1}
        alignItems={'center'}
        justifyContent={'center'}
        zIndex={10}
        sx={({ breakpoints }) => ({
          [breakpoints.down('sm')]: {
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.1)',
          },
        })}
      >
        <Navigation />
      </Box>
      <Box
        display={'flex'}
        position={'fixed'}
        bottom={10}
        right={0}
        zIndex={10}
        sx={({ breakpoints }) => ({
          [breakpoints.down('sm')]: {
            top: 10,
            bottom: 'auto',
          },
        })}
      >
        <ThemeSwitch />
      </Box>
      <Box height={HEADER_HEIGHT} />
    </>
  )
}

export default Header
