import { Code2, ExternalLink } from "lucide-react"
import { useTranslation } from "react-i18next"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeIn } from "@/components/motion/fade-in"
import { useLocalizedText } from "@/hooks/use-localized-text"
import { projects } from "@/data/projects"
import type { Project as ProjectEntry } from "@/types/domain"
import { cn } from "@/lib/utils"

function ProjectCard({ project, delay }: { project: ProjectEntry; delay: number }) {
  const { t } = useTranslation()
  const title = useLocalizedText(project.title)
  const description = useLocalizedText(project.description)

  return (
    <FadeIn delay={delay}>
      <Card
        className={cn(
          "flex h-full flex-col overflow-hidden transition-shadow hover:shadow-md",
          project.featured && "ring-1 ring-foreground/10",
        )}
      >
        <img src={project.image} alt={title} className="aspect-video w-full object-cover" />
        <CardHeader>
          <div className="flex items-center justify-between gap-2">
            <CardTitle className="text-base">{title}</CardTitle>
            {project.featured && (
              <Badge variant="secondary" className="text-xs font-normal">
                {t("projects.featured")}
              </Badge>
            )}
          </div>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-1 flex-wrap items-start gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs font-normal">
              {tech}
            </Badge>
          ))}
        </CardContent>
        <CardFooter className="gap-2">
          {project.liveUrl && (
            <Button
              variant="outline"
              size="sm"
              className="gap-1.5"
              nativeButton={false}
              render={
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="size-3.5" />
                  {t("projects.liveDemo")}
                </a>
              }
            />
          )}
          {project.repos && project.repos.length > 0
            ? project.repos.map((repo) => (
                <Button
                  key={repo.url}
                  variant="outline"
                  size="sm"
                  className="gap-1.5"
                  nativeButton={false}
                  render={
                    <a href={repo.url} target="_blank" rel="noopener noreferrer">
                      <Code2 className="size-3.5" />
                      {repo.label}
                    </a>
                  }
                />
              ))
            : project.repoUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-1.5"
                  nativeButton={false}
                  render={
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Code2 className="size-3.5" />
                      {t("projects.sourceCode")}
                    </a>
                  }
                />
              )}
        </CardFooter>
      </Card>
    </FadeIn>
  )
}

export function Projects() {
  const { t } = useTranslation()

  return (
    <section id="projects" className="scroll-mt-16 border-t border-border/60 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <h2 className="mb-12 text-center text-3xl font-semibold tracking-tight">
            {t("projects.title")}
          </h2>
        </FadeIn>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title.en} project={project} delay={(index % 3) * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
