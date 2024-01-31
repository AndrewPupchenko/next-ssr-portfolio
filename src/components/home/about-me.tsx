import { PagePaths } from "@/data/navigation-links"
import { Stack } from "@mui/material"

export const AboutMe = () => {
  return (
    <Stack
      id={PagePaths.AboutMe}
      spacing={4}
      justifyContent={"center"}
      alignItems={"center"}
      minHeight={"100svh"}
    ></Stack>
  )
}
