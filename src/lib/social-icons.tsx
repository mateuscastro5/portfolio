import { Mail } from "lucide-react"
import { SiGithub, SiWhatsapp } from "react-icons/si"
import type { IconType } from "react-icons"

import type { SocialPlatform } from "@/types/domain"

export const SOCIAL_ICONS: Record<SocialPlatform, IconType> = {
  github: SiGithub,
  email: Mail,
  whatsapp: SiWhatsapp,
}
