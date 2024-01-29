import { Box } from "@mui/material"
import Navigation from "./navigation"

const HEADER_HEIGHT = "4rem"

const Header = () => {
  return (
    <>
      <Box
        display={"flex"}
        position={"fixed"}
        width={"100%"}
        height={HEADER_HEIGHT}
        gap={1}
        alignItems={"center"}
        justifyContent={"space-around"}
        zIndex={10}
      >
        <Navigation />
      </Box>
      <Box height={HEADER_HEIGHT} />
    </>
  )
}

export default Header
