import { ArrowRight, MapPin } from 'lucide-react'
import {
  Container,
  PrimaryButton,
  Section,
  SectionTitle,
} from '@/components/ui'

const projects = [
  {
    title: 'Luxury Villa',
    category: 'Residential',
    location: 'Kochi',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Commercial Complex',
    category: 'Commercial',
    location: 'Ernakulam',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Modern Residence',
    category: 'Luxury Home',
    location: 'Thrissur',
    image:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
  },
]

export default function FeaturedProjects() {
  return (
    <Section
      spacing="none"
      className="bg-gradient-to-b from-white to-slate-50 py-10"
    >
      <Container>
        <SectionTitle
          overline="OUR PROJECTS"
          title="Crafting Spaces That Inspire"
          description="Explore some of our premium residential, commercial and luxury construction projects across Kerala."
          align="center"
        />

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              <div className="relative h-[420px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                {/* Category Badge */}
                <div className="absolute left-6 top-6 rounded-full bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white shadow-lg">
                  {project.category}
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-3xl font-bold text-white">
                    {project.title}
                  </h3>

                  <div className="mt-3 flex items-center gap-2 text-white/80">
                    <MapPin size={18} />
                    {project.location}
                  </div>

                  <div className="mt-6 flex items-center font-semibold text-white transition-all duration-300 group-hover:text-blue-300">
                    View Project
                    <ArrowRight
                      size={18}
                      className="ml-2 transition-transform duration-300 group-hover:translate-x-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <PrimaryButton size="lg">
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </PrimaryButton>
        </div>
      </Container>
    </Section>
  )
}
