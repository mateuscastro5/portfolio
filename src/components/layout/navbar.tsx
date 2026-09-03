import { useState } from "react"
import { Menu } from "lucide-react"
import { useTranslation } from "react-i18next"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ContactModal } from "@/components/contact-modal"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { profile } from "@/data/profile"

const NAV_ANCHORS = ["about", "experience", "projects"] as const

export function Navbar() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#hero" className="text-sm font-semibold tracking-tight">
          {profile.name}
        </a>

        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {NAV_ANCHORS.map((anchor) => (
            <a
              key={anchor}
              href={`#${anchor}`}
              className="transition-colors hover:text-foreground"
            >
              {t(`nav.${anchor}`)}
            </a>
          ))}
          <ContactModal
            trigger={
              <button
                type="button"
                className="cursor-pointer transition-colors hover:text-foreground"
              >
                {t("nav.contact")}
              </button>
            }
          />
        </nav>

        <div className="hidden items-center gap-1 md:flex">
          <LanguageToggle />
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" aria-label="Menu">
                  <Menu className="size-4" />
                </Button>
              }
            />
            <SheetContent side="right">
              <nav className="mt-10 flex flex-col gap-6 px-6 text-base">
                {NAV_ANCHORS.map((anchor) => (
                  <a
                    key={anchor}
                    href={`#${anchor}`}
                    onClick={() => setOpen(false)}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {t(`nav.${anchor}`)}
                  </a>
                ))}
                <ContactModal
                  trigger={
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="cursor-pointer text-left text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {t("nav.contact")}
                    </button>
                  }
                />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
