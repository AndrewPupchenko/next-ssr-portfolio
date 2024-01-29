import { PagePaths } from "@/data/navigation-links"
import { Box } from "@mui/material"

export default function Home() {
  return (
    <main>
      <Box height={"100svh"}>SECTION 1</Box>
      <Box id={PagePaths.Skills} height={"100svh"}>
        skills
      </Box>
      <Box id={PagePaths.AboutMe} height={"100svh"}>
        about-me
      </Box>
      <Box id={PagePaths.Contact} height={"100svh"}>
        contact
      </Box>
    </main>
  )
}
