import { Languages } from "lucide-react"
import { useTranslation } from "react-i18next"

import { Button } from "@/components/ui/button"

export function LanguageToggle() {
  const { t, i18n } = useTranslation()
  const isPortuguese = i18n.language === "pt"

  function toggleLanguage() {
    i18n.changeLanguage(isPortuguese ? "en" : "pt")
  }

  return (
    <Button variant="ghost" size="icon" aria-label={t("language.toggle")} onClick={toggleLanguage}>
      <Languages className="size-4" />
      <span className="sr-only">{isPortuguese ? "PT" : "EN"}</span>
    </Button>
  )
}
