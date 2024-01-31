import { PagePaths } from "@/data/navigation-links"
import { Box, Stack, Typography } from "@mui/material"
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

const skillArray = [
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
        knowledge: 85,
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
        title: "Next",
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
    ],
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
    ],
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
    ],
  },
]

const data = {
  title: "My Tech Stack and Skills",
}

export const Skills = () => {
  return (
    <Stack
      id={PagePaths.Skills}
      justifyContent={"center"}
      spacing={4}
      minHeight={"100svh"}
      m={5}
    >
      <Typography variant="h4" textAlign="center" fontWeight="bold">
        {data.title}
      </Typography>
      <Box
        sx={{
          display: "grid",
          alignItems: "center",
          gridTemplateColumns: "repeat(auto-fill, minmax(min-content, 2fr))",
          gridGap: 24,
          width: "100%",
        }}
      >
        {skillArray.map((el) => (
          <Box
            key={el.title}
            sx={{
              borderRadius: 2,
              p: 2,
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
            }}
          >
            <Typography variant="h5" fontWeight="bold">
              {el.title}
            </Typography>
            <Box
              sx={{
                display: "grid",
                alignItems: "center",
                gridTemplateColumns: "repeat(auto-fill, minmax(10em, 1fr))",
                gap: 1.5,
                mt: 3,
              }}
            >
              {el.skills
                .sort((el, el2) => (el.knowledge < el2.knowledge ? 1 : -1))
                .map((skill) => (
                  <Box
                    key={skill.title}
                    sx={{
                      borderRadius: 1,
                      p: 1,
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "space-between",
                      boxShadow: "0 0 3px rgba(0, 0, 0, 0.7)",
                      background: `linear-gradient(to top, rgba(52, 152, 219, 0.7) ${skill.knowledge}%, rgba(255, 255, 255, 0.1) ${skill.knowledge}%)`,
                      minHeight: 50,
                    }}
                  >
                    {skill.icon}
                    {skill.title}
                  </Box>
                ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Stack>
  )
}
