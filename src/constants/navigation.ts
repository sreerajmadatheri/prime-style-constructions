

export const WORKING_HOURS = 'Mon – Sat : 9:00 AM – 6:00 PM'

export type NavMegaItem = {
  label: string
  description: string
  href: string
  icon?: string
}

export type NavItem = {
  label: string
  href: string
  megaMenu?: NavMegaItem[]
}

export const SERVICE_MEGA_ITEMS: NavMegaItem[] = [
  {
    label: 'Residential Construction',
    description: 'Premium homes and apartments.',
    href: '#services',
  },
  {
    label: 'Commercial Buildings',
    description: 'Offices, malls and business spaces.',
    href: '#services',
  },
  {
    label: 'Luxury Villas',
    description: 'Custom villa construction.',
    href: '#services',
  },
  {
    label: 'Interior Design',
    description: 'Modern interior solutions.',
    href: '#services',
  },
  {
    label: 'Renovation',
    description: 'Renovation and remodeling.',
    href: '#services',
  },
  {
    label: 'Turnkey Projects',
    description: 'Complete project execution.',
    href: '#services',
  },
]

export const MAIN_NAV: NavItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Services',
    href: '#services',
  },
  {
    label: 'Projects',
    href: '#projects',
  },
  {
    label: 'Testimonials',
    href: '#testimonials',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
]

export const FOOTER_QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
] as const

export const FOOTER_SERVICES = [
  {
    label: 'Residential Construction',
    href: '#services',
  },
  {
    label: 'Commercial Buildings',
    href: '#services',
  },
  {
    label: 'Luxury Villas',
    href: '#services',
  },
  {
    label: 'Interior Design',
    href: '#services',
  },
  {
    label: 'Renovation',
    href: '#services',
  },
  {
    label: 'Turnkey Projects',
    href: '#services',
  },
] as const

export const FOOTER_PROJECTS = [
  {
    label: 'Luxury Villas',
    href: '#projects',
  },
  {
    label: 'Commercial',
    href: '#projects',
  },
  {
    label: 'Residential',
    href: '#projects',
  },
  {
    label: 'Featured Projects',
    href: '#projects',
  },
] as const
