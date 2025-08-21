"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Home, User, Briefcase, Code, Mail } from "lucide-react"

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "skills", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "hero", icon: Home, label: "Home" },
    { id: "about", icon: User, label: "About" },
    { id: "projects", icon: Briefcase, label: "Projects" },
    { id: "skills", icon: Code, label: "Skills" },
    { id: "contact", icon: Mail, label: "Contact" },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <div className="glass-effect rounded-full p-2 space-y-2">
        {navItems.map(({ id, icon: Icon, label }) => (
          <Button
            key={id}
            variant={activeSection === id ? "default" : "ghost"}
            size="icon"
            className={`w-12 h-12 rounded-full transition-all duration-300 ${
              activeSection === id
                ? "bg-primary text-primary-foreground animate-glow"
                : "hover:bg-accent/20 text-muted-foreground hover:text-foreground"
            }`}
            onClick={() => scrollToSection(id)}
            title={label}
          >
            <Icon className="h-5 w-5" />
          </Button>
        ))}
      </div>
    </div>
  )
}
