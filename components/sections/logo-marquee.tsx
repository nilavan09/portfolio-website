const brands = [
  'NOVA STUDIOS',
  'PULSE MEDIA',
  'ATLAS RECORDS',
  'VERTEX',
  'LUMEN CO.',
  'HORIZON FILMS',
  'ECHO AGENCY',
]

export function LogoMarquee() {
  return (
    <section className="border-y border-border py-8">
      <p className="mb-6 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
        Trusted by brands &amp; creators worldwide
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-16 pr-16">
          {[...brands, ...brands].map((brand, i) => (
            <span
              key={`${brand}-${i}`}
              className="whitespace-nowrap text-xl font-semibold tracking-tight text-muted-foreground/60 transition-colors hover:text-primary"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
