import { PagePaths } from "@/data/navigation-links"
import { Stack } from "@mui/material"

export const Contact = () => {
  return (
    <Stack
      id={PagePaths.Contact}
      spacing={4}
      justifyContent={"center"}
      alignItems={"center"}
      minHeight={"100svh"}
    ></Stack>
  )
}
