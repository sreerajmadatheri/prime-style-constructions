import { Award, Building2, Clock3, ShieldCheck } from 'lucide-react'

import { Container, Section, SectionTitle } from '@/components/ui'

const features = [
  {
    title: '20+ Years Experience',
    description:
      'Delivering premium construction solutions across Kerala for over two decades.',
    icon: Award,
  },
  {
    title: '200+ Projects',
    description:
      'Successfully completed residential and commercial developments.',
    icon: Building2,
  },
  {
    title: 'On-Time Delivery',
    description:
      'Every project follows a planned schedule with complete transparency.',
    icon: Clock3,
  },
  {
    title: 'Quality Guaranteed',
    description:
      'Premium materials and experienced professionals ensure lasting quality.',
    icon: ShieldCheck,
  },
]

export default function WhyChooseUs() {
  return (
    <Section className="bg-slate-900 py-24">
      <Container>
        <SectionTitle
          overline="WHY CHOOSE US"
          title="Trusted Construction Partner"
          description="Prime Style Constructions combines innovation, craftsmanship and commitment to deliver exceptional buildings that stand the test of time."
          align="center"
          light
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:bg-primary"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
                <Icon className="h-8 w-8 text-white" />
              </div>

              <h3 className="mb-4 text-2xl font-bold text-white">{title}</h3>

              <p className="leading-7 text-white/80">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
