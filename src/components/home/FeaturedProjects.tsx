import { ArrowRight } from 'lucide-react'
import {
  Container,
  PrimaryButton,
  Section,
  SectionTitle,
} from '@/components/ui'

const projects = [
  {
    title: 'Luxury Villa',
    location: 'Kochi',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Commercial Complex',
    location: 'Ernakulam',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Modern Residence',
    location: 'Thrissur',
    image:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80',
  },
]

export default function FeaturedProjects() {
  return (
    <Section className="bg-white py-24">
      <Container>
        <SectionTitle
          overline="OUR PROJECTS"
          title="Crafting Spaces That Inspire"
          description="A glimpse into some of our premium residential and commercial developments across Kerala."
          align="center"
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-3xl shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="text-white/80">{project.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <PrimaryButton>
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </PrimaryButton>
        </div>
      </Container>
    </Section>
  )
}
