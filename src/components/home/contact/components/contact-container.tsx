'use client'

import { Box, styled } from '@mui/material'

export const ContactContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 40,

  [theme.breakpoints.down('md')]: {
    display: 'grid',
    alignItems: 'center',
  },
}))
