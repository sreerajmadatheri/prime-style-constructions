import { HeroContent } from './HeroContent'
import { HeroStats } from './HeroStats'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-[130px] pb-20">
      {/* Animated Background */}
      <div
        className="animate-hero absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-black/10" />

      {/* Glow Effects */}
      <div className="absolute -left-32 top-40 h-96 w-96 rounded-full bg-primary/20 blur-[160px]" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-500/20 blur-[140px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-0 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-[1.3fr_0.9fr]">
          <HeroContent />
          <HeroStats />
        </div>
      </div>
    </section>
  )
}
