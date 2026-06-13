'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

const faqs = [
  {
    q: 'What\u2019s your typical turnaround time?',
    a: 'Most short-form projects are delivered within 3\u20135 business days. Larger projects like documentaries or brand films vary, but I\u2019ll always give you a clear timeline before we start.',
  },
  {
    q: 'What software do you edit with?',
    a: 'I primarily work in Adobe Premiere Pro and DaVinci Resolve, with After Effects for motion graphics. I can adapt to your preferred pipeline if needed.',
  },
  {
    q: 'How many revisions are included?',
    a: 'Every project includes two rounds of revisions. Additional revisions are available and billed at a flat per-round rate so there are no surprises.',
  },
  {
    q: 'How do I send you my footage?',
    a: 'You can share files via Google Drive, Dropbox, Frame.io, or any platform you prefer. I\u2019ll send a simple onboarding guide once we kick things off.',
  },
  {
    q: 'Do you offer ongoing or retainer work?',
    a: 'Absolutely. Many clients book monthly retainers for consistent content. Reach out and we can build a package that fits your volume and budget.',
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="border-y border-border bg-card/40">
      <div className="mx-auto max-w-3xl px-6 py-24 lg:py-32">
        <Reveal className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            FAQ
          </span>
          <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Questions, answered
          </h2>
        </Reveal>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <Reveal key={faq.q} delay={i * 60}>
                <div className="overflow-hidden rounded-xl border border-border bg-background">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium">{faq.q}</span>
                    <Plus
                      className={cn(
                        'size-5 shrink-0 text-primary transition-transform duration-300',
                        isOpen && 'rotate-45',
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      'grid transition-all duration-300 ease-out',
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0',
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
