import AboutMe from '@/components/home/about-me'
import Contact from '@/components/home/contact'
import ShortInfo from '@/components/home/short-info'
import Skills from '@/components/home/skills'
import { Box } from '@mui/material'
import '@/styles/globals.css'

const Home = () => {
  return (
    <Box
      component={'main'}
      sx={{
        mx: 'auto',
        maxWidth: '1280px',
      }}
    >
      <ShortInfo />
      <Skills />
      <AboutMe />
      <Contact />
    </Box>
  )
}

export default Home
