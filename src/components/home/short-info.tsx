import avatar from "@/data/images/avatar.jpg"
import { PagePaths } from "@/data/navigation-links"
import { Avatar, Button, Typography } from "@mui/material"
import Link from "next/link"
import { FaGithub } from "react-icons/fa"
import { MainStack } from "../ui/main-stack"

const data = {
  userName: "Andrew",
  greeting: "Hi, I'm Andrew",
  location: "Frontend Developer based in Serbia",
  projects: "My Projects",
  link: "https://github.com/AndrewPupchenko",
}

export const ShortInfo = () => {
  return (
    <MainStack id={PagePaths.Home} height={"100svh"}>
      <Avatar
        alt={data.userName}
        src={avatar.src}
        sx={{ height: "30%", width: "auto" }}
      />
      <Typography variant="h3" textAlign="center" fontWeight="bold">
        {data.greeting}
      </Typography>
      <Typography variant="h4" textAlign="center" fontWeight="bold">
        {data.location}
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
    </MainStack>
  )
}
