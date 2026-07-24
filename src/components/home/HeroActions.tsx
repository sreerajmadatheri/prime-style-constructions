import { PrimaryButton, SecondaryButton } from '@/components/ui'

export function HeroActions() {
  return (
    <div className="flex flex-wrap gap-4">
      <PrimaryButton to="/contact">Get Free Quote</PrimaryButton>

      <SecondaryButton to="/projects">Our Projects</SecondaryButton>
    </div>
  )
}
