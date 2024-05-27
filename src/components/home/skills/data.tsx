import { BiLogoSass, BiLogoTypescript } from "react-icons/bi"
import { BsMicrosoftTeams } from "react-icons/bs"
import {
  FaGithub,
  FaGoogle,
  FaHtml5,
  FaNodeJs,
  FaPython,
  FaReact,
  FaSlack,
} from "react-icons/fa"
import { PiFigmaLogoDuotone } from "react-icons/pi"
import { RiJavascriptFill } from "react-icons/ri"
import {
  SiAdobephotoshop,
  SiCsharp,
  SiCss3,
  SiGraphql,
  SiJest,
  SiJira,
  SiMui,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si"
import { TbBrandReactNative, TbFileTypeSql } from "react-icons/tb"
import { SkillArray, SkillsProps } from "./skills.types"

const skillArray: SkillArray[] = [
  {
    title: "Web development",
    skills: [
      {
        title: "Java Script",
        icon: <RiJavascriptFill />,
        knowledge: 90,
      },
      {
        title: "CSS",
        icon: <SiCss3 />,
        knowledge: 91,
      },
      {
        title: "HTML",
        icon: <FaHtml5 />,
        knowledge: 92,
      },
      {
        title: "Type Script",
        icon: <BiLogoTypescript />,
        knowledge: 95,
      },
      {
        title: "React",
        icon: <FaReact />,
        knowledge: 94,
      },
      {
        title: "React Native",
        icon: <TbBrandReactNative />,
        knowledge: 88,
      },
      {
        title: "Next.js",
        icon: <SiNextdotjs />,
        knowledge: 76,
      },
      {
        title: "MUI",
        icon: <SiMui />,
        knowledge: 100,
      },
      {
        title: "SASS/SCSS",
        icon: <BiLogoSass />,
        knowledge: 62,
      },
      {
        title: "Tailwind",
        icon: <SiTailwindcss />,
        knowledge: 60,
      },
      {
        title: "GraphQL",
        icon: <SiGraphql />,
        knowledge: 90,
      },
      {
        title: "Node.js",
        icon: <FaNodeJs />,
        knowledge: 70,
      },
      {
        title: "C#",
        icon: <SiCsharp />,
        knowledge: 50,
      },
      {
        title: "Python",
        icon: <FaPython />,
        knowledge: 50,
      },
    ].sort((el, el2) => (el.knowledge < el2.knowledge ? 1 : -1)),
  },
  {
    title: "Communication",
    skills: [
      {
        title: "Slack",
        icon: <FaSlack />,
        knowledge: 100,
      },
      {
        title: "Microsoft Teams",
        icon: <BsMicrosoftTeams />,

        knowledge: 100,
      },
      {
        title: "Jira",
        icon: <SiJira />,
        knowledge: 90,
      },
      {
        title: "Google Meets",
        icon: <FaGoogle />,
        knowledge: 100,
      },
      {
        title: "Github",
        icon: <FaGithub />,
        knowledge: 95,
      },
    ].sort((el, el2) => (el.knowledge < el2.knowledge ? 1 : -1)),
  },
  {
    title: "Other skills",
    skills: [
      {
        title: "Figma",
        icon: <PiFigmaLogoDuotone />,
        knowledge: 60,
      },
      {
        title: "Jest",
        icon: <SiJest />,
        knowledge: 85,
      },
      {
        title: "Adobe Photoshop",
        icon: <SiAdobephotoshop />,
        knowledge: 50,
      },
      {
        title: "SQL",
        icon: <TbFileTypeSql />,
        knowledge: 50,
      },
    ].sort((el, el2) => (el.knowledge < el2.knowledge ? 1 : -1)),
  },
]

export const data: SkillsProps = {
  title: "My Tech Stack and Skills",
  skillArray,
}
