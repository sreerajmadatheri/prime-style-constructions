import {
  ArrowRight,
  CheckCircle2,
  Home,
  Building2,
  Paintbrush,
  KeyRound,
} from 'lucide-react'

import {
  Container,
  PrimaryButton,
  Section,
  SectionTitle,
} from '@/components/ui'

const features = [
  '20+ Years of Construction Excellence',
  '200+ Successfully Completed Projects',
  'Premium Quality Materials',
  'On-Time Project Delivery',
]

const services = [
  {
    title: 'Residential',
    icon: Home,
  },
  {
    title: 'Commercial',
    icon: Building2,
  },
  {
    title: 'Interior',
    icon: Paintbrush,
  },
  {
    title: 'Turnkey',
    icon: KeyRound,
  },
]

export default function AboutPreview() {
  return (
    <Section
      spacing="none"
      className="bg-linear-to-b from-blue-100 via-slate-100 to-slate-200 py-16"
    >
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* ================= LEFT ================= */}

          <div className="relative">
            {/* Large Image */}

            <div className="overflow-hidden rounded-[32px] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
                alt="Prime Style Construction"
                className="h-[560px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            {/* Small Image */}

            <div className="absolute bottom-0 -left-10 hidden overflow-hidden rounded-3xl border-8 border-white shadow-2xl lg:block">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                alt="Construction Site"
                className="h-56 w-72 object-cover transition duration-700 hover:scale-105"
              />
            </div>

            {/* Experience Card */}

            <div className="absolute -right-8 top-20 rounded-3xl bg-primary px-8 py-6 text-center text-white shadow-2xl">
              <div className="text-5xl font-black">20+</div>

              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.25em] text-white/95">
                Years Experience
              </p>
            </div>
          </div>

          {/* ================= RIGHT ================= */}

          <div>
            <SectionTitle
              overline="ABOUT PRIME STYLE"
              title="Building Dreams Across Kerala"
              description="Prime Style Constructions has been delivering premium residential, commercial, villa and turnkey construction solutions for more than two decades. Every project reflects our commitment to quality craftsmanship, innovative engineering and customer satisfaction."
            />

            {/* Features */}

            <div className="mt-10 space-y-5">
              {features.map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary" />

                  <span className="text-lg text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            {/* Service Cards */}

            <div className="mt-12 grid grid-cols-2 gap-4">
              {services.map(({ title, icon: Icon }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl"
                >
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>

                  <h4 className="font-semibold">{title}</h4>
                </div>
              ))}
            </div>

            {/* Statistics */}

            <div className="mt-12 grid grid-cols-3 gap-6">
              <div>
                <div className="text-4xl font-black text-primary">20+</div>

                <p className="mt-2 text-slate-600">Years Experience</p>
              </div>

              <div>
                <div className="text-4xl font-black text-primary">200+</div>

                <p className="mt-2 text-slate-600">Projects</p>
              </div>

              <div>
                <div className="text-4xl font-black text-primary">500+</div>

                <p className="mt-2 text-slate-600">Happy Families</p>
              </div>
            </div>

            {/* Button */}

            <div className="mt-12">
              <PrimaryButton to="/about">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </PrimaryButton>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
