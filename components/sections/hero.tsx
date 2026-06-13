import { ArrowRight, Play } from 'lucide-react'

const stats = [
  { value: '320+', label: 'Projects Delivered' },
  { value: '8 yrs', label: 'Editing Experience' },
  { value: '120M+', label: 'Views Generated' },
]

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* glow accents */}
      <div className="pointer-events-none absolute -left-32 top-1/4 size-96 rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 size-80 rounded-full bg-primary/10 blur-[120px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            <span className="size-2 animate-pulse rounded-full bg-primary" />
            Freelance Video Editor
          </span>

          <h1 className="mt-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Turning raw footage into{' '}
            <span className="text-primary">cinematic stories</span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            I&apos;m Kade Rivera — a video editor crafting bold commercials,
            music videos, and brand films that grab attention and hold it. Every
            cut is built to make your story unforgettable.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-105"
            >
              View My Work
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors duration-300 hover:border-primary hover:text-primary"
            >
              <Play className="size-4 fill-current" />
              Start a Project
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-2xl font-bold text-primary sm:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-muted-foreground">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="animate-fade-up [animation-delay:150ms]">
          <div className="group relative overflow-hidden rounded-2xl border border-border">
            <img
              src="/editor-portrait.png"
              alt="Kade Rivera editing video in a dark studio lit with orange light"
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-xl border border-border bg-background/70 px-5 py-4 backdrop-blur-md">
              <div>
                <p className="text-sm font-semibold">Now editing</p>
                <p className="text-xs text-muted-foreground">
                  Aurora — Brand Film 2026
                </p>
              </div>
              <span className="flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Play className="size-4 fill-current" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
