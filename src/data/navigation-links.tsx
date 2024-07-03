import {
  FaHome,
  FaFileContract,
  FaListUl,
  FaTable,
  FaHandsHelping,
} from 'react-icons/fa'

export enum PagePaths {
  Home = '',
  Skills = 'skills',
  AboutMe = 'about-me',
  Contact = 'contact',
}

export const navigationLinks = [
  {
    path: '/',
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
