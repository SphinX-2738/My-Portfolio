"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { LucideIcon } from "lucide-react"

interface SkillCardProps {
  title: string
  icon: LucideIcon
  skills: string[]
  description: string
}

export function SkillCard({ title, icon: Icon, skills, description }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="group relative overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl border-border/50 hover:border-primary/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />

      <CardHeader className="relative">
        <CardTitle className="flex items-center gap-3 text-xl">
          <div
            className={`p-2 rounded-lg bg-primary/10 transition-all duration-500 group-hover:bg-primary/20 group-hover:rotate-12 group-hover:scale-110 ${isHovered ? "animate-glow" : ""}`}
          >
            <Icon className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
          </div>
          <span className="group-hover:text-primary transition-colors duration-300">{title}</span>
        </CardTitle>
        <p className="text-sm text-muted-foreground mt-2 group-hover:text-muted-foreground/80 transition-colors duration-300">
          {description}
        </p>
      </CardHeader>

      <CardContent className="relative">
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge
              key={skill}
              variant="secondary"
              className={`transition-all duration-500 hover:scale-110 hover:bg-primary/20 hover:text-primary-foreground hover:shadow-lg cursor-pointer ${
                isHovered ? "animate-slide-up" : ""
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
                transitionDelay: isHovered ? `${index * 50}ms` : "0ms",
              }}
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
