export function HeroStats() {
  const stats = [
    { value: '20+', label: 'Years Experience' },
    { value: '200+', label: 'Projects Completed' },
    { value: '500+', label: 'Happy Families' },
    { value: '100%', label: 'Quality Commitment' },
  ]

  return (
    <div className="grid grid-cols-2 gap-6">
      {stats.map((item) => (
        <div
          key={item.label}
          className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-300/40 hover:bg-white/15 hover:shadow-2xl"
        >
          <div className="text-5xl font-extrabold text-white">{item.value}</div>

          <p className="mt-3 text-base text-slate-300">{item.label}</p>
        </div>
      ))}
    </div>
  )
}
