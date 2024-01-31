import { AboutMe } from "@/components/home/about-me"
import { Contact } from "@/components/home/contact"
import { ShortInfo } from "@/components/home/short-info"
import { Skills } from "@/components/home/skills"
import { Box } from "@mui/material"

export default function Home() {
  return (
    <Box component={"main"} maxWidth={"1000px"} mx="auto">
      <ShortInfo />
      <Skills />
      <AboutMe />
      <Contact />
    </Box>
  )
}
