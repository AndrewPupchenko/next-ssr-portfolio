'use client'
import { MainStack } from '@/components/ui/main-stack'
import { PagePaths } from '@/data/navigation-links'
import { Timeline } from '@mui/lab'
import { Typography } from '@mui/material'
import { FC } from 'react'
import { AboutMeProps } from './about-me.types'
import { ExperienceView } from './experience-view'

export const AboutMe: FC<AboutMeProps> = ({
  title,
  experience,
  ...otherProps
}) => {
  return (
    <MainStack id={PagePaths.AboutMe}>
      <Typography variant="h4" textAlign="center" fontWeight="bold">
        {title}
      </Typography>
      <Timeline
        sx={{ '& .MuiTimelineItem-root': { '&:before': { content: 'none' } } }}
      >
        {experience?.map((el, index) => (
          <ExperienceView {...el} {...otherProps} key={index} />
        ))}
      </Timeline>
    </MainStack>
  )
}

export default AboutMe
