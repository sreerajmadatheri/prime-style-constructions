import { Clock, Mail, Phone } from 'lucide-react'
import { SITE, SOCIAL } from '@/constants'
import { cn } from '@/lib'
import { Container, FacebookIcon, InstagramIcon, LinkedInIcon } from '@/components/ui'

const socialLinks = [
  { href: SOCIAL.linkedin, label: 'LinkedIn', icon: LinkedInIcon },
  { href: SOCIAL.instagram, label: 'Instagram', icon: InstagramIcon },
  { href: SOCIAL.facebook, label: 'Facebook', icon: FacebookIcon },
] as const

export function TopBar() {
  return (
    <div
      className={cn(
        'relative z-50 hidden h-(--topbar-height) bg-primary text-text-inverse lg:block',
      )}
    >
      <Container className="flex h-full items-center justify-between">
        <div className="flex items-center gap-6 text-xs font-medium tracking-wide">
          <a
            href={`tel:${SITE.phone.replace(/\s/g, '')}`}
            className="inline-flex items-center gap-2 transition-opacity duration-250 hover:opacity-80"
          >
            <Phone className="size-3.5" aria-hidden />
            {SITE.phone}
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex items-center gap-2 transition-opacity duration-250 hover:opacity-80"
          >
            <Mail className="size-3.5" aria-hidden />
            {SITE.email}
          </a>
          <span className="inline-flex items-center gap-2 opacity-90">
            <Clock className="size-3.5" aria-hidden />
            {SITE.workingHours}
          </span>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="inline-flex size-7 items-center justify-center rounded-full transition-colors duration-250 hover:bg-white/15"
            >
              <Icon className="size-3.5" aria-hidden />
            </a>
          ))}
        </div>
      </Container>
    </div>
  )
}
