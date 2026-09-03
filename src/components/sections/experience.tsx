import { ExternalLink } from "lucide-react"
import { useTranslation } from "react-i18next"

import { Badge } from "@/components/ui/badge"
import { FadeIn } from "@/components/motion/fade-in"
import { useLocalizedText } from "@/hooks/use-localized-text"
import { experiences } from "@/data/experience"
import type { Experience as ExperienceEntry } from "@/types/domain"

function usePeriodLabel(entry: ExperienceEntry) {
  const { t, i18n } = useTranslation()
  const locale = i18n.language === "pt" ? "pt-BR" : "en-US"
  const formatter = new Intl.DateTimeFormat(locale, {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  })

  const start = formatter.format(new Date(entry.startDate))
  const end = entry.endDate ? formatter.format(new Date(entry.endDate)) : t("experience.present")

  return `${start} — ${end}`
}

function ExperienceItem({ entry, delay }: { entry: ExperienceEntry; delay: number }) {
  const { t } = useTranslation()
  const role = useLocalizedText(entry.role)
  const description = useLocalizedText(entry.description)
  const period = usePeriodLabel(entry)

  return (
    <FadeIn
      delay={delay}
      className="relative border-l border-border/60 pb-10 pl-6 last:pb-0"
    >
      <span className="absolute -left-[5px] top-1.5 size-2.5 rounded-full bg-foreground" />
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="font-medium">
          {role} · <span className="text-muted-foreground">{entry.company}</span>
        </h3>
        <span className="text-sm text-muted-foreground">{period}</span>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      {entry.techStack && (
        <div className="mt-3 flex flex-wrap gap-2">
          {entry.techStack.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs font-normal">
              {tech}
            </Badge>
          ))}
        </div>
      )}
      {entry.repoUrl && (
        <a
          href={entry.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          <ExternalLink className="size-3.5" />
          {t("experience.repo")}
        </a>
      )}
    </FadeIn>
  )
}

export function Experience() {
  const { t } = useTranslation()

  return (
    <section id="experience" className="scroll-mt-16 border-t border-border/60 px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <FadeIn>
          <h2 className="mb-12 text-center text-3xl font-semibold tracking-tight">
            {t("experience.title")}
          </h2>
        </FadeIn>
        <div>
          {experiences.map((entry, index) => (
            <ExperienceItem key={entry.company + entry.startDate} entry={entry} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
