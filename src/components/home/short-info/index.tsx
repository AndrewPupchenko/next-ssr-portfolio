import { MainStack } from '@/components/ui/main-stack'
import { StyledAvatar } from '@/components/ui/styled-avatar'
import avatar from '@/data/images/avatar.png'
import { PagePaths } from '@/data/navigation-links'
import { Box, Button, Typography } from '@mui/material'
import Link from 'next/link'
import { FC } from 'react'
import { FaGithub } from 'react-icons/fa'
import { IoLocationOutline } from 'react-icons/io5'
import { ShortInfoProps } from './short-info.types'
import { data as props } from './api/data'
import { GetStaticProps } from 'next'

export const ShortInfo: FC<ShortInfoProps> = (initialProps) => {
  return (
    <MainStack id={PagePaths.Home} height={'100svh'} pt={0}>
      <Link
        href={initialProps?.linkedIn || ''}
        rel="noopener noreferrer"
        target="_blank"
      >
        <StyledAvatar
          alt={initialProps.userName}
          src={avatar}
          height={340}
          quality={100}
        />
      </Link>
      <Typography variant="h4" textAlign="center" fontWeight="bold">
        {initialProps.greeting}
      </Typography>
      <Typography variant="h3" textAlign="center" fontWeight="bold">
        {initialProps.position}
      </Typography>
      <Typography variant="h6" textAlign="center" width={'80%'}>
        {initialProps.shortInfo}
      </Typography>

      <Button
        LinkComponent={Link}
        href={initialProps?.link || ''}
        variant="contained"
        startIcon={<FaGithub />}
        sx={{ textTransform: 'none' }}
      >
        <strong>{initialProps.projects}</strong>
      </Button>

      <Typography
        component={Box}
        sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
        variant="body2"
        color={'text.secondary'}
      >
        <IoLocationOutline /> {initialProps.location}
      </Typography>
    </MainStack>
  )
}

export const getStaticProps = (async () => {
  return { props }
}) satisfies GetStaticProps<ShortInfoProps>

export default ShortInfo
