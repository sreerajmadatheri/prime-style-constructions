import { Suspense } from 'react'
import type { ReactNode } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { PageLoader } from '@/components/common'
import { router } from '@/routes'

interface AppProvidersProps {
  children?: ReactNode
}

export function AppProviders({ children }: AppProvidersProps) {
  if (children) {
    return <HelmetProvider>{children}</HelmetProvider>
  }

  return (
    <HelmetProvider>
      <Suspense fallback={<PageLoader />}>
        <RouterProvider router={router} />
      </Suspense>
    </HelmetProvider>
  )
}
