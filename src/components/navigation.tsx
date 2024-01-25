"use client"
import { navigationLinks } from "@/data/navigation-links"
import { Link, Tab, Tabs, styled } from "@mui/material"
import { usePathname } from "next/navigation"

const links = navigationLinks.map((el) => el.path)

const useRouteMatch = (patterns: readonly string[]) => {
  const pathname = usePathname()

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i]
    const possibleMatch = pattern === pathname
    if (possibleMatch) {
      return pathname
    }
  }

  return null
}

const Navigation = () => {
  const currentTab = useRouteMatch(links)

  return (
    <Tabs value={currentTab}>
      {navigationLinks.map((el) => (
        <Tab
          key={el.path}
          label={el.name}
          value={el.path}
          href={el.path}
          sx={{ textTransform: "none" }}
          component={Link}
        />
      ))}
    </Tabs>
  )
}

export default Navigation
