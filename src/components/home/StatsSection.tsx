import { AnimatedCounter, Section } from '@/components/ui'

const stats = [
  { end: 20, suffix: '+', label: 'Years Experience' },
  { end: 200, suffix: '+', label: 'Projects Completed' },
  { end: 500, suffix: '+', label: 'Happy Families' },
  { end: 100, suffix: '%', label: 'Quality Commitment' },
]

export default function StatsSection() {
  return (
    <Section className="bg-primary py-24 text-white">
      <div className="grid gap-10 text-center md:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label}>
            <div className="text-6xl font-bold">
              <AnimatedCounter end={item.end} suffix={item.suffix} />
            </div>

            <p className="mt-4 text-lg text-white/80">{item.label}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
