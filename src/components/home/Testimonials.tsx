import { Quote } from 'lucide-react'
import { Container, Section, SectionTitle } from '@/components/ui'

const testimonials = [
  {
    name: 'Rajesh Nair',
    location: 'Kochi',
    feedback:
      'Prime Style Constructions transformed our dream into reality. Their quality, professionalism, and timely delivery exceeded our expectations.',
  },
  {
    name: 'Anjali Menon',
    location: 'Thrissur',
    feedback:
      'The entire construction process was transparent and hassle-free. The team kept us informed at every stage. Highly recommended!',
  },
  {
    name: 'Joseph Mathew',
    location: 'Ernakulam',
    feedback:
      'From planning to handover, everything was handled professionally. The finishing quality was exceptional.',
  },
]

export default function Testimonials() {
  return (
    <Section spacing="none"  className="bg-slate-50 py-10">
      <Container>
        <SectionTitle
          overline="TESTIMONIALS"
          title="What Our Clients Say"
          description="The trust of our clients is the foundation of our success."
          align="center"
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <Quote className="mb-6 h-10 w-10 text-primary opacity-40" />

              <p className="leading-8 text-text-muted">"{item.feedback}"</p>

              <div className="mt-8">
                <h4 className="font-bold text-xl">{item.name}</h4>
                <p className="text-primary">{item.location}</p>

                <div className="mt-3 text-yellow-500 text-lg">★★★★★</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
