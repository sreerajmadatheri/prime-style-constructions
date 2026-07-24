import { ArrowRight, CheckCircle2 } from 'lucide-react'
import {
  PrimaryButton,
  Section,
  SectionTitle,
  Container,
} from '@/components/ui'

const features = [
  '20+ Years of Construction Excellence',
  '200+ Successfully Completed Projects',
  'Premium Quality Materials',
  'On-time Project Delivery',
]

export default function AboutPreview() {
  return (
    <Section className="bg-white py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Side */}
          <div>
            <SectionTitle
              overline="ABOUT US"
              title="Building Dreams Across Kerala"
              description="Prime Style Constructions has been delivering premium residential, commercial and turnkey construction solutions for more than two decades. We combine quality craftsmanship, innovative engineering and transparent communication to create spaces that last generations."
            />

            <div className="mt-10 space-y-4">
              {features.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  <span className="text-lg text-text">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <PrimaryButton>
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </PrimaryButton>
            </div>
          </div>

          {/* Right Side */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80"
              alt="Prime Style Constructions"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </Container>
    </Section>
  )
}
