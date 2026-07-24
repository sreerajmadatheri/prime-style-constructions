import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'

const pageVariants = {
  initial: {
    opacity: 0,
    y: 12,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
}

export interface AnimatedPageWrapperProps {
  children: ReactNode
}

export function AnimatedPageWrapper({ children }: AnimatedPageWrapperProps) {
  const location = useLocation()

  return (
    <motion.main
      key={location.pathname}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      className="flex flex-1 flex-col"
    >
      {children}
    </motion.main>
  )
}
