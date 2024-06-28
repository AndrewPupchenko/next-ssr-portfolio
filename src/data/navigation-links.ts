import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

export enum PagePaths {
  Home = '',
  Skills = 'skills',
  AboutMe = 'about-me',
  Contact = 'contact',
}

export const useNavigationLinks = () => {
  const { t } = useTranslation('common')
  const links = useMemo(
    () => [
      {
        path: '/',
        name: t('links.home'),
      },
      {
        path: `#${PagePaths.Skills}`,
        name: t('links.skills'),
      },
      {
        path: `#${PagePaths.AboutMe}`,
        name: t('links.aboutMe'),
      },
      {
        path: `#${PagePaths.Contact}`,
        name: t('links.contact'),
      },
    ],
    [t]
  )

  const paths = useMemo(() => links.map((el) => el.path), [links])

  return { links, paths }
}
