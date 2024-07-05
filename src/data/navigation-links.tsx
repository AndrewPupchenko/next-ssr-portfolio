import { FaHandsHelping, FaHome, FaListUl, FaTable } from 'react-icons/fa'

export enum PagePaths {
  Home = 'home',
  Skills = 'skills',
  AboutMe = 'about-me',
  Contact = 'contact',
}

export const navigationLinks = [
  {
    path: `#${PagePaths.Home}`,
    name: 'Home',
    icon: <FaHome />,
  },
  {
    path: `#${PagePaths.Skills}`,
    name: 'Skills',
    icon: <FaTable />,
  },
  {
    path: `#${PagePaths.AboutMe}`,
    name: 'About me',
    icon: <FaListUl />,
  },
  {
    path: `#${PagePaths.Contact}`,
    name: 'Contact',
    icon: <FaHandsHelping />,
  },
]
