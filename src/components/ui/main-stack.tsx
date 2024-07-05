import { PagePaths } from '@/data/navigation-links'
import { Stack, StackProps } from '@mui/material'
import { FC, PropsWithChildren } from 'react'
import { InViewScroll } from './in-view-scroll'

type MainStackProps = StackProps & { id: PagePaths }

export const MainStack: FC<PropsWithChildren<MainStackProps>> = (props) => {
  return (
    <InViewScroll id={props.id}>
      <Stack
        spacing={4}
        justifyContent={'center'}
        alignItems={'center'}
        minHeight={'calc(100svh - 5rem)'}
        p={2}
        pt={'5rem'}
        {...props}
      />
    </InViewScroll>
  )
}
