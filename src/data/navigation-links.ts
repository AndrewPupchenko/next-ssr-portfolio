export enum PagePaths {
  Home = "",
  Skills = "skills",
  AboutMe = "about-me",
  Contact = "contact",
}

export const navigationLinks = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: `#${PagePaths.Skills}`,
    name: "Skills",
  },
  {
    path: `#${PagePaths.AboutMe}`,
    name: "About me",
  },
  {
    path: `#${PagePaths.Contact}`,
    name: "Contact",
  },
]
