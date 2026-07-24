import {
  ArrowRight,
  Building,
  Building2,
  Hammer,
  Home,
  KeyRound,
  Paintbrush,
} from 'lucide-react'
import { PrimaryButton, Section, SectionTitle } from '@/components/ui'

const services = [
  {
    title: 'Residential Construction',
    subtitle: 'Dream Homes',
    description:
      'Beautiful homes built with premium quality, innovative design, and meticulous craftsmanship.',
    icon: Home,
  },
  {
    title: 'Commercial Buildings',
    subtitle: 'Business Spaces',
    description:
      'Modern office buildings and commercial spaces designed for productivity and long-term value.',
    icon: Building,
  },
  {
    title: 'Luxury Villas',
    subtitle: 'Premium Living',
    description:
      'Elegant villas with contemporary architecture, premium finishes, and luxurious comfort.',
    icon: Building2,
  },
  {
    title: 'Interior Design',
    subtitle: 'Elegant Interiors',
    description:
      'Thoughtfully designed interiors that combine aesthetics, comfort, and functionality.',
    icon: Paintbrush,
  },
  {
    title: 'Renovation',
    subtitle: 'Modern Upgrades',
    description:
      'Transform your existing property with modern designs and expert renovation solutions.',
    icon: Hammer,
  },
  {
    title: 'Turnkey Projects',
    subtitle: 'Complete Solutions',
    description:
      'From planning to handover, we manage every phase of construction with complete transparency.',
    icon: KeyRound,
  },
]

export default function ServicesPreview() {
  return (
    <Section
      spacing="none"
      className="bg-gradient-to-b from-slate-50 to-white py-10"
    >
      <SectionTitle
        overline="OUR SERVICES"
        title="Complete Construction Solutions"
        description="Prime Style Constructions delivers premium residential, commercial, villa, renovation, interior and turnkey construction services across Kerala."
        align="center"
      />

      <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {services.map(({ title, subtitle, description, icon: Icon }) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-primary/30 hover:shadow-2xl"
          >
            {/* Top Accent */}
            <div className="absolute left-0 top-0 h-1 w-full scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />

            {/* Icon */}
            <div className="mb-8 flex h-18 w-18 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-500 group-hover:rotate-6 group-hover:bg-primary group-hover:text-white">
              <Icon size={34} />
            </div>

            {/* Subtitle */}
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              {subtitle}
            </p>

            {/* Title */}
            <h3 className="mb-4 text-2xl font-bold text-slate-900 transition-colors group-hover:text-primary">
              {title}
            </h3>

            {/* Description */}
            <p className="leading-8 text-slate-600">{description}</p>

            {/* Learn More */}
            <div className="mt-8 flex items-center font-semibold text-primary">
              Learn More
              <ArrowRight
                size={18}
                className="ml-2 transition-transform duration-300 group-hover:translate-x-2"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-24 rounded-[32px] bg-primary px-10 py-16 text-center text-white shadow-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-200">
          LET'S BUILD TOGETHER
        </p>

        <h2 className="mt-4 text-4xl font-bold">
          Ready To Build Your Dream Project?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
          Whether it's a dream home, commercial building, villa, or renovation,
          our experienced team is ready to bring your vision to life.
        </p>

        <div className="mt-10">
          <PrimaryButton size="lg">Request Free Consultation</PrimaryButton>
        </div>
      </div>
    </Section>
  )
}
