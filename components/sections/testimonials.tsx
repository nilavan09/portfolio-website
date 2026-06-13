import { Reveal } from '@/components/reveal'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Kade took our raw brand footage and turned it into something we couldn\u2019t stop watching. The pacing and color were absolutely next level.',
    name: 'Sarah Chen',
    role: 'Marketing Lead, Nova Studios',
  },
  {
    quote:
      'Our music video hit a million views in a week. The edit had this electric energy that perfectly matched the song. Pure magic.',
    name: 'Marcus Reyes',
    role: 'Recording Artist',
  },
  {
    quote:
      'Reliable, fast, and genuinely talented. Kade understood our documentary\u2019s tone instantly and delivered ahead of deadline.',
    name: 'Priya Anand',
    role: 'Producer, Horizon Films',
  },
  {
    quote:
      'The social reels Kade edited tripled our engagement. He just gets what makes people stop scrolling.',
    name: 'Daniel Brooks',
    role: 'Founder, Pulse Media',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
      <Reveal className="max-w-2xl">
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">
          Testimonials
        </span>
        <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          Clients love the results
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 80}>
            <figure className="relative h-full rounded-2xl border border-border bg-card p-8">
              <Quote className="size-8 text-primary/30" />
              <div className="mt-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="size-4 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="mt-4 text-pretty leading-relaxed text-foreground">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-primary/15 text-sm font-semibold text-primary">
                  {t.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </span>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
