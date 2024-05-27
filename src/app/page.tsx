import AboutMe from "@/components/home/about-me"
import { data as aboutMeData } from "@/components/home/about-me/data"
import Contact from "@/components/home/contact"
import { data as contactData } from "@/components/home/contact/data"
import ShortInfo from "@/components/home/short-info"
import { data as shortInfoData } from "@/components/home/short-info/data"
import Skills from "@/components/home/skills"
import { data as skillsData } from "@/components/home/skills/data"
import { Box } from "@mui/material"

export default function Home() {
  return (
    <Box component={"main"} maxWidth={"1000px"} mx="auto">
      <ShortInfo {...shortInfoData} />
      <Skills {...skillsData} />
      <AboutMe {...aboutMeData} />
      <Contact {...contactData} />
    </Box>
  )
}
