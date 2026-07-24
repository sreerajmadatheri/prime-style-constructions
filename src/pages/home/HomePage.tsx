import Hero from '@/components/home/Hero'
import AboutPreview from '@/components/home/AboutPreview'
import ServicesPreview from '@/components/home/ServicesPreview'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import ConstructionProcess from '@/components/home/ConstructionProcess'
import FeaturedProjects from '@/components/home/FeaturedProjects'
import StatsSection from '@/components/home/StatsSection'
import Testimonials from '@/components/home/Testimonials'
import CTASection from '@/components/home/CTASection'

export default function HomePage() {
  return (
    <>
      <Hero />

      <section id="about">
        <AboutPreview />
      </section>

      <section id="services">
        <ServicesPreview />
      </section>

      <section id="whychooseus">
        <WhyChooseUs />
      </section>

      <section id="constructionprocess">
        <ConstructionProcess />
      </section>

      <section id="projects">
        <FeaturedProjects />
      </section>

      <section id="stats">
        <StatsSection />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="contact">
        <CTASection />
      </section>
    </>
  )
}
