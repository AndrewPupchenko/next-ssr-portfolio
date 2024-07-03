import { MainStack } from '@/components/ui/main-stack'
import { StyledAvatar } from '@/components/ui/styled-avatar'
import { PagePaths } from '@/data/navigation-links'
import avatar from '@/img/avatar.png'
import { Box, Button, Typography } from '@mui/material'
import Link from 'next/link'
import { FC } from 'react'
import { FaGithub } from 'react-icons/fa'
import { IoLocationOutline } from 'react-icons/io5'
import { data } from './api/data'
import { ShortInfoProps } from './short-info.types'

export const ShortInfo: FC<ShortInfoProps> = () => {
  return (
    <MainStack id={PagePaths.Home} minHeight={'100svh'} pt={0}>
      <Link
        href={data?.linkedIn || ''}
        rel="noopener noreferrer"
        target="_blank"
      >
        <StyledAvatar
          alt={data?.userName}
          src={avatar}
          height={340}
          quality={100}
        />
      </Link>
      <Typography variant="h4" textAlign="center" fontWeight="bold">
        {data?.greeting}
      </Typography>
      <Typography variant="h3" textAlign="center" fontWeight="bold">
        {data?.position}
      </Typography>
      <Typography variant="h6" textAlign="center" width={'80%'}>
        {data?.shortInfo}
      </Typography>

      <Button
        LinkComponent={Link}
        href={data?.link || ''}
        variant="contained"
        startIcon={<FaGithub />}
        sx={{ textTransform: 'none' }}
      >
        <strong>{data?.projects}</strong>
      </Button>

      <Typography
        component={Box}
        sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
        variant="body2"
        color={'text.secondary'}
      >
        <IoLocationOutline /> {data?.location}
      </Typography>
    </MainStack>
  )
}

export default ShortInfo
