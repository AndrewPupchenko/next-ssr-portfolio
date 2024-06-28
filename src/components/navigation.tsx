'use client'
import { useNavigationLinks } from '@/data/navigation-links'
import { useRouteMatch } from '@/hooks/use-route-match'
import { Tab, Tabs } from '@mui/material'
import Link from 'next/link'

const Navigation = () => {
  const { links, paths } = useNavigationLinks()
  const currentTab = useRouteMatch(paths)

  return (
    <Tabs value={currentTab}>
      {links.map((el) => (
        <Tab
          key={el.path}
          label={el.name}
          value={el.path}
          href={el.path}
          sx={{ textTransform: 'none' }}
          component={Link}
        />
      ))}
    </Tabs>
  )
}

export default Navigation
