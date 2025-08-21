"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Play, ChevronDown, ChevronUp } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  longDescription: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  demoUrl?: string
}

export function ProjectCard({
  title,
  description,
  longDescription,
  technologies,
  githubUrl,
  liveUrl,
  demoUrl,
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="group relative overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl border-border/50 hover:border-primary/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-accent/4 to-secondary/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-accent/30 to-secondary/30 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-700" />

      <CardHeader className="relative">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{title}</CardTitle>
            <CardDescription className="mt-2 group-hover:text-muted-foreground/80 transition-colors duration-300">
              {description}
            </CardDescription>
          </div>
          <div className="flex gap-2 ml-4">
            {githubUrl && (
              <Button
                variant="ghost"
                size="icon"
                className="opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary/10 hover:scale-110"
              >
                <Github className="h-4 w-4" />
              </Button>
            )}
            {liveUrl && (
              <Button
                variant="ghost"
                size="icon"
                className="opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary/10 hover:scale-110"
              >
                <ExternalLink className="h-4 w-4" />
              </Button>
            )}
            {demoUrl && (
              <Button
                variant="ghost"
                size="icon"
                className="opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary/10 hover:scale-110"
              >
                <Play className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="relative">
        <div
          className={`transition-all duration-500 overflow-hidden ${
            isExpanded ? "max-h-96 opacity-100 mb-4" : "max-h-0 opacity-0 mb-0"
          }`}
        >
          <p className="text-muted-foreground leading-relaxed">{longDescription}</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <Badge
              key={tech}
              variant="outline"
              className={`transition-all duration-500 hover:scale-110 hover:bg-primary/10 hover:border-primary/50 hover:text-primary cursor-pointer ${
                isHovered ? "animate-slide-up" : ""
              }`}
              style={{
                animationDelay: `${index * 50}ms`,
                transitionDelay: isHovered ? `${index * 30}ms` : "0ms",
              }}
            >
              {tech}
            </Badge>
          ))}
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-primary hover:text-primary/80 hover:bg-primary/5 p-2 h-auto font-medium rounded-lg transition-all duration-300 flex items-center gap-2"
        >
          {isExpanded ? "Show Less" : "Learn More"}
          {isExpanded ? (
            <ChevronUp className="h-4 w-4 transition-transform duration-300" />
          ) : (
            <ChevronDown className="h-4 w-4 transition-transform duration-300" />
          )}
        </Button>
      </CardContent>
    </Card>
  )
}
