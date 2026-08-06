import { Code2, Mail, MessageCircle } from "lucide-react"
import { useTranslation } from "react-i18next"
import type { LucideIcon } from "lucide-react"

import { profile } from "@/data/profile"
import type { SocialPlatform } from "@/types/domain"

const SOCIAL_ICONS: Record<SocialPlatform, LucideIcon> = {
  github: Code2,
  email: Mail,
  whatsapp: MessageCircle,
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
                <Icon className="size-4" />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
