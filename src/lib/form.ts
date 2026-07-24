import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema } from '@/schemas'

export const contactFormResolver = zodResolver(contactFormSchema)
