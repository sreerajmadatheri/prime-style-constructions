import {
  ClipboardCheck,
  DraftingCompass,
  Hammer,
  ShieldCheck,
  House,
} from 'lucide-react'

import { Container, Section, SectionTitle } from '@/components/ui'

const steps = [
  {
    number: '01',
    title: 'Consultation',
    description:
      'We understand your vision, requirements, budget and expectations before starting your project.',
    icon: ClipboardCheck,
  },
  {
    number: '02',
    title: 'Planning & Design',
    description:
      'Our architects and engineers prepare detailed designs, plans and execution schedules.',
    icon: DraftingCompass,
  },
  {
    number: '03',
    title: 'Construction',
    description:
      'Experienced professionals execute every stage using premium materials and strict quality standards.',
    icon: Hammer,
  },
  {
    number: '04',
    title: 'Quality Inspection',
    description:
      'Every project undergoes multiple quality checks before the final handover.',
    icon: ShieldCheck,
  },
  {
    number: '05',
    title: 'Project Handover',
    description:
      'We deliver your dream project on time, ensuring complete customer satisfaction.',
    icon: House,
  },
]

export default function ConstructionProcess() {
  return (
    <Section
      spacing="none"
      className="bg-gradient-to-b from-slate-50 to-white py-10"
    >
      <Container>
        <SectionTitle
          overline="OUR PROCESS"
          title="From Vision to Reality"
          description="A transparent, structured and proven construction process that ensures quality, efficiency and complete peace of mind."
          align="center"
        />

        <div className="relative mt-20">
          {/* Desktop Timeline */}
          <div className="absolute left-0 right-0 top-14 hidden h-1 bg-slate-200 lg:block">
            <div className="h-full w-full bg-gradient-to-r from-primary via-primary to-primary/40" />
          </div>

          <div className="grid gap-8 lg:grid-cols-5">
            {steps.map(({ number, title, description, icon: Icon }) => (
              <div key={title} className="group relative text-center">
                {/* Timeline Circle */}
                <div className="relative z-10 mx-auto flex h-28 w-28 items-center justify-center rounded-full border-8 border-white bg-primary shadow-xl transition-all duration-500 group-hover:scale-110">
                  <Icon className="h-10 w-10 text-white" />
                </div>

                {/* Step Number */}
                <div className="mt-6 text-sm font-bold tracking-[0.3em] text-primary">
                  STEP {number}
                </div>

                {/* Card */}
                <div className="mt-5 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl">
                  <h3 className="mb-4 text-2xl font-bold text-slate-900">
                    {title}
                  </h3>

                  <p className="leading-8 text-slate-600">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
