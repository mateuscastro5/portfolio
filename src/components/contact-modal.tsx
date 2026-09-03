import { useTranslation } from "react-i18next"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { profile } from "@/data/profile"
import { SOCIAL_ICONS } from "@/lib/social-icons"

export function ContactModal({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const { t } = useTranslation()

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("contact.title")}</DialogTitle>
          <DialogDescription>{t("contact.description")}</DialogDescription>
        </DialogHeader>
        <div className="mt-4 flex items-center justify-center gap-5">
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
                <Icon className="size-6" />
              </a>
            )
          })}
        </div>
      </DialogContent>
    </Dialog>
  )
}
