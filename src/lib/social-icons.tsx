import { Mail } from "lucide-react"
import { FaLinkedin } from "react-icons/fa6"
import { SiGithub, SiWhatsapp } from "react-icons/si"
import type { IconType } from "react-icons"

import type { SocialPlatform } from "@/types/domain"

export const SOCIAL_ICONS: Record<SocialPlatform, IconType> = {
  github: SiGithub,
  linkedin: FaLinkedin,
  email: Mail,
  whatsapp: SiWhatsapp,
}
