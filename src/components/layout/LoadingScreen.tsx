import { AnimatePresence, motion } from 'framer-motion'
import { useLoadingScreen } from '@/hooks'
import logoIcon from '@/assets/logo/logo-icon.svg'

export function LoadingScreen() {
  const isLoading = useLoadingScreen()

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-white"
          role="status"
          aria-label="Loading"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <img
              src={logoIcon}
              alt="Prime Style Constructions"
              className="size-16"
            />
            <motion.div
              className="absolute -inset-3 rounded-2xl border-2 border-primary/20"
              animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="mt-8 flex flex-col items-center gap-3"
          >
            <div className="h-1 w-32 overflow-hidden rounded-full bg-accent">
              <motion.div
                className="h-full rounded-full bg-primary"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
              Loading
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
