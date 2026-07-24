import { ClipboardCheck, DraftingCompass, Hammer, House } from 'lucide-react'

import { Container, Section, SectionTitle } from '@/components/ui'

const steps = [
  {
    icon: ClipboardCheck,
    title: 'Consultation',
    description: 'Understanding your requirements, budget and vision.',
  },
  {
    icon: DraftingCompass,
    title: 'Planning & Design',
    description: 'Preparing architectural plans and construction schedules.',
  },
  {
    icon: Hammer,
    title: 'Construction',
    description:
      'Executing the project with quality materials and expert engineers.',
  },
  {
    icon: House,
    title: 'Project Handover',
    description:
      'Delivering your dream home on time with complete satisfaction.',
  },
]

export default function ConstructionProcess() {
  return (
    <Section className="bg-white py-24">
      <Container>
        <SectionTitle
          overline="OUR PROCESS"
          title="How We Build Your Dream"
          description="A simple, transparent and proven construction process."
          align="center"
        />

        <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className="relative rounded-3xl border border-slate-200 p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                {index + 1}
              </div>

              <div className="mx-auto mt-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <Icon className="h-10 w-10 text-primary" />
              </div>

              <h3 className="mt-6 text-xl font-bold">{title}</h3>

              <p className="mt-4 leading-7 text-text-muted">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
