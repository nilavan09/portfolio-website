import { Mail, MapPin, MessageCircle } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const socials = [
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: '📷',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/1234567890',
    icon: '💬',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/kaderivera',
    icon: '💼',
  },
]

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
      <div className="max-w-2xl">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Contact
          </span>
          <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s make something worth watching
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Reach out for inquiries about video editing services, collaborations,
            or any project you&apos;d like to discuss.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 space-y-5">
            <a
              href="mailto:hello@kaderivera.com"
              className="flex items-center gap-4 text-sm transition-colors duration-300 hover:text-primary"
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
            <a
              href="https://wa.me/1234567890"
              className="flex items-center gap-4 text-sm transition-colors duration-300 hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <MessageCircle className="size-5" />
              </span>
              <span>
                <span className="block text-xs text-muted-foreground">
                  WhatsApp
                </span>
                +1 (555) 123-4567
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

          <div className="mt-10">
            <h3 className="text-sm font-semibold uppercase tracking-widest">
              Follow & Connect
            </h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary hover:bg-primary/5"
                >
                  <span>{social.icon}</span>
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
