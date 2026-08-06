import { useTranslation } from "react-i18next"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { FadeIn } from "@/components/motion/fade-in"
import { useLocalizedText } from "@/hooks/use-localized-text"
import { profile } from "@/data/profile"
import { skills } from "@/data/skills"

export function About() {
  const { t } = useTranslation()
  const bio = useLocalizedText(profile.bio)

  return (
    <section id="about" className="scroll-mt-16 border-t border-border/60 px-6 py-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 text-center">
        <FadeIn className="flex flex-col items-center gap-6">
          <Avatar className="size-20">
            <AvatarImage src={profile.avatarUrl} alt={profile.name} />
            <AvatarFallback>{profile.name.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>

          <h2 className="text-3xl font-semibold tracking-tight">{t("about.title")}</h2>
          <p className="max-w-2xl text-muted-foreground">{bio}</p>
        </FadeIn>

        <FadeIn delay={0.1} className="flex flex-col items-center gap-4">
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {t("about.skillsTitle")}
          </span>
          <div className="flex flex-wrap justify-center gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="outline" className="text-xs font-normal">
                {skill}
              </Badge>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
