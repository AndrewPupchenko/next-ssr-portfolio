'use client'

import { styled } from '@mui/material'
import Image from 'next/image'

export const StyledAvatar = styled(Image)(({ theme }) => ({
  '--s': '340px', // image size
  '--b': '10px', // border thickness
  '--c': theme.palette.primary.main, // border color
  '--cb': '#e9ecef', // background color
  '--f': '1', // initial scale

  width: 'var(--s)',
  aspectRatio: '1',
  paddingTop: 'calc(var(--s) / 5)',
  cursor: 'pointer',
  borderRadius: '0 0 999px 999px',
  '--_g': '50%/calc(100% / var(--f)) 100% no-repeat content-box',
  '--_o': 'calc((1 / var(--f) - 1) * var(--s) / 2 - var(--b))',
  outline: 'var(--b) solid var(--c)',
  outlineOffset: 'var(--_o)',
  background: `
      radial-gradient(
        circle closest-side,
        var(--cb) calc(99% - var(--b)), var(--c) calc(100% - var(--b)) 99%, #0000
      ) var(--_g)
    `,
  WebkitMask: `
      linear-gradient(#000 0 0) no-repeat
      50% calc(1px - var(--_o)) / calc(100% / var(--f) - 2 * var(--b) - 2px) 50%,
      radial-gradient(circle closest-side, #000 99%, #0000) var(--_g)
    `,
  transform: 'scale(var(--f))',
  transition: '0.6s',

  '&:hover': {
    '--f': '1.5', // hover scale
  },
}))
