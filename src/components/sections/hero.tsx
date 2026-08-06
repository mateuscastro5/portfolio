import { ArrowRight } from "lucide-react"
import { useTranslation } from "react-i18next"

import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/motion/fade-in"
import { useLocalizedText } from "@/hooks/use-localized-text"
import { profile } from "@/data/profile"

export function Hero() {
  const { t } = useTranslation()
  const headline = useLocalizedText(profile.headline)
  const bio = useLocalizedText(profile.bio)

  return (
    <section
      id="hero"
      className="flex min-h-[calc(100svh-4rem)] scroll-mt-16 flex-col items-center justify-center gap-6 px-6 py-24 text-center"
    >
      <FadeIn className="flex flex-col items-center gap-6">
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          {headline}
        </h1>

        <p className="max-w-xl text-base text-muted-foreground sm:text-lg">{bio}</p>

        <Button
          size="lg"
          className="mt-2 gap-2 rounded-full px-6"
          nativeButton={false}
          render={
            <a href="#projects">
              {t("hero.cta")}
              <ArrowRight className="size-4" />
            </a>
          }
        />
      </FadeIn>
    </section>
  )
}
