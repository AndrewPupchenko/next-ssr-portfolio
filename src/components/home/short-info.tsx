import avatar from "@/data/images/avatar.jpg"
import { PagePaths } from "@/data/navigation-links"
import { Avatar, Box, Button, Typography } from "@mui/material"
import Link from "next/link"
import { FaGithub } from "react-icons/fa"
import { MainStack } from "../ui/main-stack"
import { IoLocationOutline } from "react-icons/io5"

const YEARS_OF_EXPERIENCE = new Date().getFullYear() - 2020

const data = {
  userName: "Andrew",
  greeting: "Hi, I'm Andrew",
  position: "Frontend Developer",
  shortInfo:
    `with over ${YEARS_OF_EXPERIENCE} years of experience in TypeScript, React.js, and Next.js, along with backend experience in Node.js, Python, and C#.`,
  projects: "My Projects",
  location: "Based in Serbia 🇷🇸",
  link: "https://github.com/AndrewPupchenko",
}

export const ShortInfo = () => {
  return (
    <MainStack id={PagePaths.Home} height={"100svh"} pt={0}>
      <Avatar
        alt={data.userName}
        src={avatar.src}
        sx={{ height: "30%", width: "auto" }}
      />
      <Typography variant="h4" textAlign="center" fontWeight="bold">
        {data.greeting}
      </Typography>
      <Typography variant="h3" textAlign="center" fontWeight="bold">
        {data.position}
      </Typography>
      <Typography variant="h6" textAlign="center" width={"80%"}>
        {data.shortInfo}
      </Typography>

      <Button
        LinkComponent={Link}
        href={data.link}
        variant="contained"
        startIcon={<FaGithub />}
        sx={{ textTransform: "none" }}
      >
        <strong>{data.projects}</strong>
      </Button>

      <Typography
        component={Box}
        sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
        variant="body2"
        color={"text.secondary"}
      >
        <IoLocationOutline /> {data.location}
      </Typography>
    </MainStack>
  )
}
