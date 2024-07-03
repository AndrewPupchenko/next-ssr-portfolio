import { MainStack } from '@/components/ui/main-stack'
import { PagePaths } from '@/data/navigation-links'
import { Box, IconButton, Tooltip, Typography } from '@mui/material'
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
            gap={2}
          >
            {data?.contactWithMe?.map(({ title, url, icon }) => (
              <Tooltip title={title} key={title}>
                <IconButton
                  href={url || ''}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={title}
                  color="primary"
                >
                  {icon}
                </IconButton>
              </Tooltip>
            ))}
          </Box>
        </Box>

        <MailtoForm email={data?.email} emailTitle={data?.emailTitle} />
      </ContactContainer>
    </MainStack>
  )
}

export default Contact
