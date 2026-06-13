'use client'

import { useState } from 'react'
import { Mail, MapPin, Send, Camera, Film, Briefcase } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const socials = [
  { icon: Camera, label: 'Instagram', href: '#' },
  { icon: Film, label: 'YouTube', href: '#' },
  { icon: Briefcase, label: 'LinkedIn', href: '#' },
]

export function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
      <div className="grid gap-14 lg:grid-cols-2">
        <div>
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Contact
            </span>
            <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
              Let&apos;s make something worth watching
            </h2>
            <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Have a project in mind? Tell me about it and I&apos;ll get back to
              you within 24 hours with next steps.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-10 space-y-5">
              <a
                href="mailto:hello@kaderivera.com"
                className="flex items-center gap-4 text-sm"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Mail className="size-5" />
                </span>
                <span>
                  <span className="block text-xs text-muted-foreground">
                    Email
                  </span>
                  hello@kaderivera.com
                </span>
              </a>
              <div className="flex items-center gap-4 text-sm">
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <MapPin className="size-5" />
                </span>
                <span>
                  <span className="block text-xs text-muted-foreground">
                    Based in
                  </span>
                  Los Angeles — Working Worldwide
                </span>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex size-11 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors duration-300 hover:border-primary hover:text-primary"
                >
                  <s.icon className="size-5" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setSent(true)
            }}
            className="rounded-2xl border border-border bg-card p-7"
          >
            <div className="grid gap-5">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  required
                  placeholder="Your name"
                  className="rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="you@email.com"
                  className="rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="project" className="text-sm font-medium">
                  Project Type
                </label>
                <select
                  id="project"
                  className="rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                >
                  <option>Commercial</option>
                  <option>Music Video</option>
                  <option>Documentary / Film</option>
                  <option>Social Content</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.02]"
              >
                {sent ? 'Message Sent!' : 'Send Message'}
                <Send className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
