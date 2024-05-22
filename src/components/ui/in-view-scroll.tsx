"use client"

import { PagePaths } from "@/data/navigation-links"
import { useRouter } from "next/navigation"
import { FC, PropsWithChildren } from "react"
import { InView } from "react-intersection-observer"

export const InViewScroll: FC<PropsWithChildren<{ id: PagePaths }>> = ({
  id,
  children,
}) => {
  const { replace } = useRouter()

  const handleInView = (inView: boolean) => {
    if (inView) {
      replace(`#${id}`, { scroll: false })
    }
  }

  return (
    <InView threshold={0.8} onChange={handleInView}>
      {children}
    </InView>
  )
}
