import {
  Award,
  Building2,
  CheckCircle2,
  Clock3,
  ShieldCheck,
  Users,
} from 'lucide-react'

import { Container, Section, SectionTitle } from '@/components/ui'

const features = [
  {
    title: '20+ Years Experience',
    description:
      'Trusted construction expertise delivering landmark residential and commercial projects.',
    icon: Award,
  },
  {
    title: '200+ Completed Projects',
    description:
      'Successfully completed villas, apartments, commercial buildings and turnkey projects.',
    icon: Building2,
  },
  {
    title: 'Timely Delivery',
    description:
      'Dedicated planning and execution ensure projects are delivered on schedule.',
    icon: Clock3,
  },
  {
    title: 'Premium Quality',
    description:
      'Only certified materials and skilled professionals are used in every project.',
    icon: ShieldCheck,
  },
]

const highlights = [
  'Experienced Engineers & Architects',
  'Transparent Project Management',
  'Customer-Centric Approach',
  '100% Quality Assurance',
]

export default function WhyChooseUs() {
  return (
    <Section
      spacing="none"
      className="bg-gradient-to-br from-slate-950 via-slate-900 to-primary py-10"
    >
      <Container>
        <SectionTitle
          overline="WHY CHOOSE PRIME STYLE"
          title="Building Trust Through Excellence"
          description="Our commitment to quality, transparency, innovation and customer satisfaction has made Prime Style Constructions one of Kerala's trusted construction companies."
          align="center"
          light
        />

        <div className="mt-20 grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Left Side */}
          <div className="grid gap-8 sm:grid-cols-2">
            {features.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-primary/40 hover:bg-white/10"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20 text-white transition-all duration-300 group-hover:rotate-6 group-hover:bg-primary">
                  <Icon size={30} />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-white">{title}</h3>

                <p className="leading-8 text-white/75">{description}</p>
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
            <div className="mb-8 flex h-18 w-18 items-center justify-center rounded-2xl bg-primary text-white">
              <Users size={34} />
            </div>

            <h3 className="text-3xl font-bold text-white">
              Why Clients Trust Us
            </h3>

            <p className="mt-5 leading-8 text-white/75">
              We believe every construction project deserves the highest
              standards of quality, transparency and craftsmanship. From the
              first consultation to final handover, our team works closely with
              clients to bring their vision to life.
            </p>

            <div className="mt-10 space-y-5">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <CheckCircle2 className="text-primary" size={22} />

                  <span className="text-lg text-white/90">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-2xl bg-primary p-6 text-center">
              <div className="text-5xl font-black text-white">20+</div>

              <p className="mt-2 text-sm uppercase tracking-[0.3em] text-blue-100">
                Years Building Dreams
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
