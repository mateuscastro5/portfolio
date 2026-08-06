export type LocalizedText = {
  en: string
  pt: string
}

export type SocialPlatform = "github" | "email" | "whatsapp"

export type SocialLink = {
  platform: SocialPlatform
  url: string
}

export type Profile = {
  name: string
  role: LocalizedText
  headline: LocalizedText
  tagline: LocalizedText
  bio: LocalizedText
  avatarUrl: string
  resumeUrl?: string
  socialLinks: SocialLink[]
}

export type Project = {
  title: LocalizedText
  description: LocalizedText
  techStack: string[]
  image: string
  liveUrl?: string
  repoUrl?: string
  featured: boolean
}

export type Experience = {
  company: string
  role: LocalizedText
  startDate: string
  endDate: string | null
  description: LocalizedText
  techStack?: string[]
}
