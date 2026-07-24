import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useScrollPosition } from '@/hooks'
import { cn } from '@/lib'

export function BackToTop() {
  const { scrollY } = useScrollPosition()
  const isVisible = scrollY > 400

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          type="button"
          onClick={scrollToTop}
          className={cn(
            'fixed bottom-24 right-6 z-50 inline-flex size-12 items-center justify-center',
            'rounded-full bg-primary text-white shadow-lg shadow-primary/30',
            'transition-colors duration-250 hover:bg-primary-dark',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
          )}
          aria-label="Back to top"
        >
          <ArrowUp className="size-5" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
