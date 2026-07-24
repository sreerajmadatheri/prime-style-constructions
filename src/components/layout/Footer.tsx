import { MapPin, Phone, Mail } from 'lucide-react'

import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  Container,
} from '@/components/ui'

import { SITE } from '@/constants'

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <Container>
        <div className="grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}

          <div>
            <h2 className="mb-6 text-3xl font-bold">Prime Style</h2>

            <p className="leading-8 text-slate-300">
              We provide wings to your dream home. Premium residential and
              commercial construction services across Kerala.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="mb-6 text-xl font-semibold">Quick Links</h3>

            <ul className="space-y-3 text-slate-300">
              <li>Home</li>

              <li>About</li>

              <li>Services</li>

              <li>Projects</li>

              <li>Contact</li>
            </ul>
          </div>

          {/* Services */}

          <div>
            <h3 className="mb-6 text-xl font-semibold">Services</h3>

            <ul className="space-y-3 text-slate-300">
              <li>Residential Construction</li>

              <li>Commercial Buildings</li>

              <li>Luxury Villas</li>

              <li>Interior Design</li>

              <li>Renovation</li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="mb-6 text-xl font-semibold">Contact</h3>

            <div className="space-y-5">
              <div className="flex gap-3">
                <MapPin className="mt-1 h-5 w-5 text-primary" />

                <span className="text-slate-300">Kochi, Kerala</span>
              </div>

              <div className="flex gap-3">
                <Phone className="h-5 w-5 text-primary" />

                <span>{SITE.phone}</span>
              </div>

              <div className="flex gap-3">
                <Mail className="h-5 w-5 text-primary" />

                <span>{SITE.email}</span>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <FacebookIcon className="h-5 w-5" />
              <InstagramIcon className="h-5 w-5" />
              <LinkedInIcon className="h-5 w-5" />
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 py-6 text-center text-slate-400">
          © {new Date().getFullYear()} Prime Style Constructions. All Rights
          Reserved.
        </div>
      </Container>
    </footer>
  )
}
