import { Mail } from "lucide-react"
import { useTranslation } from "react-i18next"
import { SiGithub, SiWhatsapp } from "react-icons/si"
import type { IconType } from "react-icons"

import { profile } from "@/data/profile"
import type { SocialPlatform } from "@/types/domain"

const SOCIAL_ICONS: Record<SocialPlatform, IconType> = {
  github: SiGithub,
  email: Mail,
  whatsapp: SiWhatsapp,
}

export function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/60 px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-sm text-muted-foreground sm:flex-row sm:justify-between">
        <p>
          © {year} {profile.name}. {t("footer.rights")}
        </p>
        <div className="flex items-center gap-3">
          {profile.socialLinks.map((link) => {
            const Icon = SOCIAL_ICONS[link.platform]
            return (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.platform}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icon className="size-5" />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
