import { MainStack } from '@/components/ui/main-stack'
import { PagePaths } from '@/data/navigation-links'
import { Timeline } from '@mui/lab'
import { Typography } from '@mui/material'
import { FC } from 'react'
import { data } from './api/data'
import { ExperienceView } from './experience-view'

const AboutMe: FC = () => {
  return (
    <MainStack id={PagePaths.AboutMe}>
      <Typography variant="h4" fontWeight="bold">
        {data.title}
      </Typography>
      <Timeline
        sx={{ '& .MuiTimelineItem-root': { '&:before': { content: 'none' } } }}
      >
        {data.experience?.map((el, index) => (
          <ExperienceView
            skillsTitle={data.skillsTitle}
            responsibilitiesTitle={data.responsibilitiesTitle}
            {...el}
            key={index}
          />
        ))}
      </Timeline>
    </MainStack>
  )
}

export default AboutMe
