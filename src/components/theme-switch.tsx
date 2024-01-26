"use client"

import { ColorModeContext } from "@/context/theme-context"
import { FormControlLabel, useTheme } from "@mui/material"
import { useContext, useMemo } from "react"
import { MaterialUISwitch } from "./ui-switch"

const ThemeSwitch = () => {
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)

  const isChecked = useMemo(
    () => theme.palette.mode === "dark",
    [theme.palette.mode]
  )

  return (
    <FormControlLabel
      checked={isChecked}
      onChange={colorMode.toggleColorMode}
      control={<MaterialUISwitch />}
      label=""
    />
  )
}

export default ThemeSwitch
