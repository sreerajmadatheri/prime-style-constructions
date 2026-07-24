import { SITE } from '@/constants'
import { HeroActions } from './HeroActions'

export function HeroContent() {
  return (
    <div className="max-w-2xl text-white">
      {/* Badge */}
      <div className="mb-8 inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-6 py-3 backdrop-blur-md">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">
          20+ Years of Construction Excellence
        </span>
      </div>

      {/* Heading */}
      <h1 className="mb-8 text-[#b88282] text-5xl font-black leading-[1.05] md:text-6xl lg:text-7xl">
        {SITE.tagline}
      </h1>

      {/* Description */}
      <p className="mb-10 max-w-xl text-lg leading-9 text-slate-200 md:text-xl">
        {SITE.description}
      </p>

      {/* Buttons */}
      <HeroActions />
    </div>
  )
}
