import { Metadata } from "next"

/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata: Metadata & { theme: string } = {
  title: "Next.js Portfolio",
  authors: [
    { name: "Andrei Pupchenko", url: "https://github.com/AndrewPupchenko" },
  ],
  description: "The site is designed to demonstrate the development experience",
  theme: "system", // system, dark or light
}

export default siteMetadata
