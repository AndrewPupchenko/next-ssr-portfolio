"use client"
import { navigationLinks } from "@/data/navigation-links"
import { useRouteMatch } from "@/hooks/use-route-match"
import { Tab, Tabs } from "@mui/material"
import Link from "next/link"

const links = navigationLinks.map((el) => el.path)

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
