import { PaletteMode } from "@mui/material"
import { Metadata } from "next"

/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata: Metadata & { theme: PaletteMode } = {
  title: "Andrei Pupchenko",
  authors: [
    { name: "Andrei Pupchenko", url: "https://github.com/AndrewPupchenko" },
  ],
  description: "The site is designed to demonstrate the development experience",
  theme: "dark",
}

export default siteMetadata
