import { Play } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <a href="#home" className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Play className="size-3.5 fill-current" />
          </span>
          <span className="font-semibold tracking-tight">
            Kade<span className="text-primary">.</span>
          </span>
        </a>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Kade Rivera. Crafted frame by frame.
        </p>
      </div>
    </footer>
  )
}
