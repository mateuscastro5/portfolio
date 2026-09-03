import { useTranslation } from "react-i18next"

import type { LocalizedText } from "@/types/domain"

export function useLocalizedText(text: LocalizedText): string
export function useLocalizedText(text: LocalizedText | undefined): string | undefined
export function useLocalizedText(text: LocalizedText | undefined) {
  const { i18n } = useTranslation()
  const language = i18n.language === "pt" ? "pt" : "en"
  return text?.[language]
}
