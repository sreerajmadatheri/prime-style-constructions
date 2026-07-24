import { Outlet, useLocation } from 'react-router-dom'
import { ROUTES } from '@/routes/paths'
import { AnimatedPageWrapper } from './AnimatedPageWrapper'
import { BackToTop } from './BackToTop'
import { FloatingWhatsAppButton } from './FloatingWhatsAppButton'
import { Footer } from './Footer'
import { LoadingScreen } from './LoadingScreen'
import { Navbar } from './Navbar'
import { ScrollProgressIndicator } from './ScrollProgressIndicator'
import { TopBar } from './TopBar'
import { ScrollToHash } from './ScrollToHash'

export default function Layout() {
  const location = useLocation()
  const isHome = location.pathname === ROUTES.HOME

  return (
    <>
      <LoadingScreen />
      <ScrollProgressIndicator />
      <TopBar />
      <Navbar transparent={isHome} />
      <ScrollToHash />
      <AnimatedPageWrapper>
        <Outlet />
      </AnimatedPageWrapper>
      <Footer />
      <BackToTop />
      <FloatingWhatsAppButton />
    </>
  )
}


