'use client'

import { useState } from 'react'
import { Play, ExternalLink } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

type Project = {
  title: string
  category: string
  tag: string
  image: string
  videoUrl: string
}

const projects: Project[] = [
  {
    title: 'Aurora Skincare',
    category: 'Commercial',
    tag: '60s Spot',
    image: '/portfolio/commercial.png',
    videoUrl: 'https://youtu.be/dQw4w9WgXcQ',
  },
  {
    title: 'Midnight Echo',
    category: 'Music Video',
    tag: 'Official Video',
    image: '/portfolio/music-video.png',
    videoUrl: 'https://youtu.be/dQw4w9WgXcQ',
  },
  {
    title: 'The Long Road',
    category: 'Documentary',
    tag: 'Short Doc',
    image: '/portfolio/documentary.png',
    videoUrl: 'https://youtu.be/dQw4w9WgXcQ',
  },
  {
    title: 'Ever After',
    category: 'Wedding',
    tag: 'Highlight Film',
    image: '/portfolio/wedding.png',
    videoUrl: 'https://youtu.be/dQw4w9WgXcQ',
  },
  {
    title: 'Fracture',
    category: 'Short Film',
    tag: 'Drama',
    image: '/portfolio/short-film.png',
    videoUrl: 'https://youtu.be/dQw4w9WgXcQ',
  },
  {
    title: 'City Pulse',
    category: 'Social',
    tag: 'Reels Series',
    image: '/portfolio/social.png',
    videoUrl: 'https://youtu.be/dQw4w9WgXcQ',
  },
]

const filters = [
  'All',
  'Commercial',
  'Music Video',
  'Documentary',
  'Wedding',
  'Short Film',
  'Social',
]

export function Portfolio() {
  const [active, setActive] = useState('All')
  const filtered =
    active === 'All'
      ? projects
      : projects.filter((p) => p.category === active)

  return (
    <section id="portfolio" className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
      <Reveal className="max-w-2xl">
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">
          Portfolio
        </span>
        <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          Selected work that speaks for itself
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          A glimpse into recent projects across commercials, music videos, and
          films. Each one crafted to leave an impression. Click any project to
          view the video.
        </p>
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-10 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={cn(
                'rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300',
                active === filter
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border text-muted-foreground hover:border-primary hover:text-foreground',
              )}
            >
              {filter}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, i) => (
          <Reveal key={project.title} delay={i * 80}>
            <a
              href={project.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border transition-all duration-300 hover:border-primary"
            >
              <img
                src={project.image || '/placeholder.svg'}
                alt={`${project.title} — ${project.category}`}
                className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90 transition-opacity duration-300" />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                <div className="translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                  <span className="text-xs font-medium uppercase tracking-wider text-primary">
                    {project.category}
                  </span>
                  <h3 className="mt-1 text-xl font-semibold">
                    {project.title}
                  </h3>
                  <span className="text-xs text-muted-foreground">
                    {project.tag}
                  </span>
                </div>
                <span className="flex size-12 shrink-0 scale-90 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                  <ExternalLink className="size-5" />
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
