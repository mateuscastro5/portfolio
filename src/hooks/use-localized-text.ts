import { useTranslation } from "react-i18next"

import type { LocalizedText } from "@/types/domain"

export function useLocalizedText(text: LocalizedText) {
  const { i18n } = useTranslation()
  const language = i18n.language === "pt" ? "pt" : "en"
  return text[language]
}
