import {
  Building2,
  Building,
  Home,
  Paintbrush,
  Hammer,
  KeyRound,
} from 'lucide-react'

import { Section, SectionTitle, Container } from '@/components/ui'

const services = [
  {
    title: 'Residential Construction',
    description:
      'Beautiful homes built with premium quality and attention to every detail.',
    icon: Home,
  },
  {
    title: 'Commercial Buildings',
    description:
      'Modern commercial spaces designed for business growth and functionality.',
    icon: Building,
  },
  {
    title: 'Luxury Villas',
    description:
      'Exclusive villas with elegant architecture and luxury finishes.',
    icon: Building2,
  },
  {
    title: 'Interior Design',
    description:
      'Stylish interiors that perfectly blend comfort and sophistication.',
    icon: Paintbrush,
  },
  {
    title: 'Renovation',
    description:
      'Transform existing spaces with modern design and expert craftsmanship.',
    icon: Hammer,
  },
  {
    title: 'Turnkey Projects',
    description:
      'From planning to handover, we manage every stage of your project.',
    icon: KeyRound,
  },
]

export default function ServicesPreview() {
  return (
    <Section className="bg-surface-muted py-24">
      <Container>
        <SectionTitle
          overline="OUR SERVICES"
          title="Complete Construction Solutions"
          description="From dream homes to commercial landmarks, Prime Style Constructions delivers end-to-end construction services across Kerala."
          align="center"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="group rounded-3xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                <Icon size={32} />
              </div>

              <h3 className="mb-4 text-2xl font-bold">{title}</h3>

              <p className="leading-7 text-text-muted">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
