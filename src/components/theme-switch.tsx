"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()
    
  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }

  return (
    <button
      aria-label="Toggle Dark Mode"
      onClick={() =>
        setTheme(
          theme === "dark" || resolvedTheme === "dark" ? "light" : "dark"
        )
      }
    >
      <span>{theme === "dark" ? `🌟` : `🌑`}</span>
    </button>
  )
}

export default ThemeSwitch
