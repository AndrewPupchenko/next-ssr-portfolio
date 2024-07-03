import { MainStack } from '@/components/ui/main-stack'
import { PagePaths } from '@/data/navigation-links'
import { Timeline } from '@mui/lab'
import { Typography } from '@mui/material'
import { FC } from 'react'
import { AboutMeProps } from './about-me.types'
import { ExperienceView } from './experience-view'
import { data } from './api/data'

const AboutMe: FC = () => {
  return (
    <MainStack id={PagePaths.AboutMe}>
      <Typography variant="h4" textAlign="center" fontWeight="bold">
        {data.title}
      </Typography>
      <Timeline
        sx={{ '& .MuiTimelineItem-root': { '&:before': { content: 'none' } } }}
      >
        {data.experience?.map((el, index) => (
          <ExperienceView {...el} {...data} key={index} />
        ))}
      </Timeline>
    </MainStack>
  )
}

export default AboutMe
