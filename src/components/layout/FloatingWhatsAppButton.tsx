import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { SITE } from '@/constants'
import { cn } from '@/lib'

export function FloatingWhatsAppButton() {
  const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    `Hello ${SITE.name}, I would like to inquire about your construction services.`,
  )}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        'fixed bottom-6 right-6 z-50 inline-flex size-14 items-center justify-center',
        'rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30',
        'transition-shadow duration-250 hover:shadow-xl hover:shadow-[#25D366]/40',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2',
      )}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="size-7 fill-white" />
    </motion.a>
  )
}
