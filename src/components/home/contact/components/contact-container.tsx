"use client"

import { Box, styled } from "@mui/material"

export const ContactContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: 3,
  mt: 3,

  [theme.breakpoints.up("md")]: {
    display: "flex",
    alignItems: "center",
    gap: 20,
  },
}))
