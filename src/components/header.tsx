import siteMetadata from "@/data/site-metadata"
import Diversity2Icon from "@mui/icons-material/Diversity2"
import { Box, Button } from "@mui/material"
import Navigation from "./navigation"
import ThemeSwitch from "./theme-switch"

const Header = () => {
  return (
    <Box
      display={"flex"}
      position={"fixed"}
      width={"100%"}
      height={"4rem"}
      gap={1}
      alignItems={"center"}
      justifyContent={"space-around"}
      bgcolor={"rgba(0, 0, 0, .5)"}
      zIndex={10}
    >
      <Button href="/" startIcon={<Diversity2Icon />}>
        {siteMetadata?.title?.toString()}
      </Button>
      <Navigation />
      <ThemeSwitch />
    </Box>
  )
}

export default Header
