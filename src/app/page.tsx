import AboutMe from '@/components/home/about-me'
import { data as aboutMeData } from '@/components/home/about-me/data'
import Contact from '@/components/home/contact'
import { data as contactData } from '@/components/home/contact/data'
import ShortInfo from '@/components/home/short-info'
import { data as shortInfoData } from '@/components/home/short-info/data'
import Skills from '@/components/home/skills'
import { data as skillsData } from '@/components/home/skills/data'
import { Box } from '@mui/material'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

function Home() {
  return (
    <Box component={'main'} maxWidth={'1440px'} mx="auto">
      <ShortInfo {...shortInfoData} />
      <Skills {...skillsData} />
      <AboutMe {...aboutMeData} />
      <Contact {...contactData} />
    </Box>
  )
}

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})

export default Home
