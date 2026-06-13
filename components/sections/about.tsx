import { Reveal } from '@/components/reveal'
import { Check } from 'lucide-react'

const skills = [
  'Adobe Premiere Pro',
  'DaVinci Resolve',
  'After Effects',
  'Color Grading',
  'Sound Design',
  'Motion Graphics',
]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-border">
            <img
              src="/portfolio/short-film.png"
              alt="Cinematic close-up portrait lit with dramatic orange light"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              About Me
            </span>
            <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
              I edit with rhythm, emotion &amp; intent
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              For over eight years I&apos;ve helped brands, musicians, and
              filmmakers shape footage into stories that move people. My
              approach blends precise pacing, cinematic color, and immersive
              sound to make every frame feel intentional.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Whether it&apos;s a 15-second ad or a feature documentary, I treat
              your project like my own — obsessing over the details so the final
              cut lands exactly the way it should.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <ul className="mt-8 grid grid-cols-2 gap-3">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-2 text-sm text-foreground"
                >
                  <span className="flex size-5 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Check className="size-3" />
                  </span>
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
