import { ArrowRight } from 'lucide-react'
import { Container, PrimaryButton, Section } from '@/components/ui'

export default function CTASection() {
  return (
    <Section className="relative overflow-hidden bg-primary py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,.15),transparent_40%)]" />

      <Container>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="mb-4 uppercase tracking-[0.3em] text-blue-100">
            LET'S BUILD TOGETHER
          </p>

          <h2 className="text-5xl font-bold text-white leading-tight">
            We Provide Wings To
            <br />
            Your Dream Home
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-blue-100">
            Whether you are planning your dream villa, commercial building or
            renovation project, our experts are ready to help you.
          </p>

          <div className="mt-12">
            <PrimaryButton className="bg-white text-primary hover:bg-slate-100">
              Request Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </PrimaryButton>
          </div>
        </div>
      </Container>
    </Section>
  )
}
