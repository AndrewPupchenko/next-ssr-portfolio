import { StyledAvatar } from '@/components/ui/styled-avatar'
import avatar from '@/data/images/avatar.png'
import { PagePaths } from '@/data/navigation-links'
import { Box, Button, Typography } from '@mui/material'
import Link from 'next/link'
import { FC } from 'react'
import { FaGithub } from 'react-icons/fa'
import { IoLocationOutline } from 'react-icons/io5'
import { MainStack } from '../../ui/main-stack'
import { ShortInfoProps } from './short-info.types'

export const ShortInfo: FC<ShortInfoProps> = (data) => {
  return (
    <MainStack id={PagePaths.Home} height={'100svh'} pt={0}>
      <Link href={data.linkedIn} rel="noopener noreferrer" target="_blank">
        <StyledAvatar alt={data.userName} src={avatar.src} />
      </Link>
      <Typography variant="h4" textAlign="center" fontWeight="bold">
        {data.greeting}
      </Typography>
      <Typography variant="h3" textAlign="center" fontWeight="bold">
        {data.position}
      </Typography>
      <Typography variant="h6" textAlign="center" width={'80%'}>
        {data.shortInfo}
      </Typography>

      <Button
        LinkComponent={Link}
        href={data.link}
        variant="contained"
        startIcon={<FaGithub />}
        sx={{ textTransform: 'none' }}
      >
        <strong>{data.projects}</strong>
      </Button>

      <Typography
        component={Box}
        sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
        variant="body2"
        color={'text.secondary'}
      >
        <IoLocationOutline /> {data.location}
      </Typography>
    </MainStack>
  )
}

export default ShortInfo
