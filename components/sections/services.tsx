import { Reveal } from '@/components/reveal'
import { Film, Music, Megaphone, Sparkles, Scissors, Palette } from 'lucide-react'

const services = [
  {
    icon: Megaphone,
    title: 'Commercial Editing',
    desc: 'Punchy, conversion-focused ads built to stop the scroll and sell the story.',
  },
  {
    icon: Music,
    title: 'Music Videos',
    desc: 'Beat-synced edits with bold visual energy that match the rhythm of your track.',
  },
  {
    icon: Film,
    title: 'Film & Documentary',
    desc: 'Long-form storytelling with cinematic pacing, structure, and emotional depth.',
  },
  {
    icon: Palette,
    title: 'Color Grading',
    desc: 'Custom cinematic looks and consistent color that elevate every frame.',
  },
  {
    icon: Sparkles,
    title: 'Motion Graphics',
    desc: 'Animated titles, transitions, and effects that add polish and personality.',
  },
  {
    icon: Scissors,
    title: 'Social Content',
    desc: 'Vertical reels and shorts optimized for retention across every platform.',
  },
]

export function Services() {
  return (
    <section id="services" className="border-y border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <Reveal className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Services
          </span>
          <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            What I can do for your project
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            From a single edit to a full post-production pipeline, I&apos;ve got
            the tools and taste to bring your vision to life.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 80}>
              <div className="group h-full rounded-2xl border border-border bg-background p-7 transition-colors duration-300 hover:border-primary">
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary/15 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="size-6" />
                </span>
                <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
