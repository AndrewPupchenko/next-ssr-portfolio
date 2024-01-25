import { PaletteMode } from "@mui/material"
import { Metadata } from "next"

/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata: Metadata & { theme: PaletteMode } = {
  title: "Portfolio",
  authors: [
    { name: "Andrei Pupchenko", url: "https://github.com/AndrewPupchenko" },
  ],
  description: "The site is designed to demonstrate the development experience",
  theme: "dark", // system, dark or light
}

export default siteMetadata
