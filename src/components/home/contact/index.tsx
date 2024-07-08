import { FragmentMotion } from '@/components/ui/fragment-motion'
import { MainStack } from '@/components/ui/main-stack'
import { PagePaths } from '@/data/navigation-links'
import { Box, IconButton, Typography } from '@mui/material'
import { FC } from 'react'
import { data } from './api/data'
import { ContactContainer } from './components/contact-container'
import { MailtoForm } from './mailto-form'

export const Contact: FC = () => {
  return (
    <MainStack id={PagePaths.Contact}>
      <ContactContainer>
        <Box>
          <Typography variant="h4">{data?.title}</Typography>
          <Typography variant="h5">{data?.subTitle}</Typography>

          <Typography variant="body2" color={'text.secondary'} mt={2}>
            {data?.anotherContactTitle}
          </Typography>

          <Box
            mt={2}
            display={'inline-grid'}
            sx={{ writingMode: 'vertical-rl' }}
            width={'100%'}
          >
            {data?.contactWithMe?.map(({ title, url, icon }) => (
              <FragmentMotion key={title}>
                <IconButton
                  href={url || ''}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={title}
                  color="primary"
                >
                  {icon}
                </IconButton>
              </FragmentMotion>
            ))}
          </Box>
        </Box>

        <MailtoForm email={data?.email} emailTitle={data?.emailTitle} />
      </ContactContainer>
    </MainStack>
  )
}

export default Contact
