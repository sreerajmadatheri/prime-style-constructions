import { PrimaryButton, SecondaryButton } from '@/components/ui'

export function HeroActions() {
  return (
    <div className="mt-12 flex flex-wrap gap-5">
      <PrimaryButton to="/#contact">Get Free Quote</PrimaryButton>

      <SecondaryButton to="/#projects">Our Projects</SecondaryButton>
    </div>
  )
}
