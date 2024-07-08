'use client'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export const useRouteMatch = (patterns: readonly string[]) => {
  const [currentPath, setCurrentPath] = useState('#home')
  const params = useParams()

  useEffect(() => {
    const currValue = patterns.find(
      (pattern) => pattern === window.location.hash
    )
    setCurrentPath(currValue ?? '#home')
  }, [params, patterns])

  return currentPath
}
