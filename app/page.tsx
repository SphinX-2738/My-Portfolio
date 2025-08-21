"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Github,
  Linkedin,
  Mail,
  Download,
  Terminal,
  Zap,
  Rocket,
  Code2,
  Server,
  Database,
  Users,
  Lightbulb,
  Brain,
  Target,
} from "lucide-react"
import { AnimatedBackground } from "@/components/animated-background"
import { FloatingNav } from "@/components/floating-nav"
import { SkillCard } from "@/components/skill-card"
import { ProjectCard } from "@/components/project-card"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <FloatingNav />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 glass-effect border-b border-border/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl gradient-text font-mono">&lt;/DevPortfolio&gt;</div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto text-center animate-fade-in">
          <div className="mb-8">
            <div className="inline-block p-4 rounded-full bg-primary/10 animate-float mb-6">
              <Terminal className="h-16 w-16 text-primary" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">DevOps Engineer</span>
            <br />
            <span className="text-foreground">& System Administrator</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            Crafting scalable solutions with <span className="text-primary font-semibold">Python</span>,
            <span className="text-secondary font-semibold"> Linux systems</span>, and
            <span className="text-accent font-semibold"> DevOps practices</span>. Passionate about automation,
            leadership, and innovative problem-solving.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg animate-glow"
            >
              <Rocket className="mr-2 h-5 w-5" />
              <a href="#projects">Explore My Work</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary/50 hover:bg-primary/10 px-8 py-4 text-lg bg-transparent"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          <div className="flex justify-center gap-6">
            <Button
              variant="ghost"
              size="icon"
              className="w-12 h-12 rounded-full hover:bg-primary/10 hover:scale-110 transition-all duration-300"
              asChild
            >
              <a href="https://github.com/SphinX-2738" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-12 h-12 rounded-full hover:bg-primary/10 hover:scale-110 transition-all duration-300"
              asChild
            >
              <a href="https://www.linkedin.com/in/ankur-sharma-37a0a3276/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-12 h-12 rounded-full hover:bg-primary/10 hover:scale-110 transition-all duration-300"
              asChild
            >
              <a href="mailto:ankursharma.9955@gmail.com">
                <Mail className="h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold mb-8">
                <span className="gradient-text">About Me</span>
              </h2>
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-muted-foreground">
                  I'm a passionate technologist who thrives at the intersection of
                  <span className="text-primary font-semibold"> development</span> and
                  <span className="text-accent font-semibold"> operations</span>. My journey began with curiosity about
                  how systems work and evolved into expertise in building scalable, efficient solutions.
                </p>
                <p className="text-muted-foreground">
                  From building command-line applications with{" "}
                  <span className="text-primary font-semibold">Python</span>
                  to managing <span className="text-secondary font-semibold">Linux infrastructure</span> and
                  implementing <span className="text-accent font-semibold">DevOps practices</span>, I bring a systematic
                  approach to solving complex technical challenges.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center gap-3 bg-card/50 rounded-lg px-4 py-2 border border-border/50">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Team Leadership</span>
                </div>
                <div className="flex items-center gap-3 bg-card/50 rounded-lg px-4 py-2 border border-border/50">
                  <Brain className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">Critical Thinking</span>
                </div>
                <div className="flex items-center gap-3 bg-card/50 rounded-lg px-4 py-2 border border-border/50">
                  <Target className="h-5 w-5 text-secondary" />
                  <span className="text-sm font-medium">Problem Solving</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <div className="relative bg-card/30 backdrop-blur-sm rounded-3xl p-8 border border-border/50">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div className="space-y-2">
                      <Code2 className="h-12 w-12 text-primary mx-auto" />
                      <h3 className="font-semibold">Python</h3>
                      <p className="text-sm text-muted-foreground">Development</p>
                    </div>
                    <div className="space-y-2">
                      <Server className="h-12 w-12 text-accent mx-auto" />
                      <h3 className="font-semibold">DevOps</h3>
                      <p className="text-sm text-muted-foreground">Engineering</p>
                    </div>
                    <div className="space-y-2">
                      <Database className="h-12 w-12 text-secondary mx-auto" />
                      <h3 className="font-semibold">Linux</h3>
                      <p className="text-sm text-muted-foreground">Administration</p>
                    </div>
                    <div className="space-y-2">
                      <Zap className="h-12 w-12 text-primary mx-auto" />
                      <h3 className="font-semibold">Automation</h3>
                      <p className="text-sm text-muted-foreground">Solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my technical expertise and problem-solving abilities across different domains
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <ProjectCard
              title="Spotify Clone"
              description="Music streaming web application"
              longDescription="A music streaming platform featuring user authentication, playlist management, real-time music playback, and search functionality. Built with modern web technologies and integrated with MySQL database for efficient data storage and RESTful APIs for seamless data communication."
              technologies={["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "REST API", "Responsive Design"]}
              githubUrl="#"
              liveUrl="#"
              demoUrl="#"
            />

            <ProjectCard
              title="College Management CLI"
              description="Python-based command line interface system"
              longDescription="A robust command-line interface application designed for college administration. Built with Python, it handles student records, course management, grade tracking, and administrative tasks. Features include data validation, file I/O operations, database integration, and comprehensive error handling for reliable system operation."
              technologies={["Python", "CLI", "SQLite", "Data Validation", "File I/O", "Error Handling", "OOP"]}
              githubUrl="#"
              demoUrl="#"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="gradient-text">Technical Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive skill set spanning development, operations, and leadership
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCard
              title="DevOps & Infrastructure"
              icon={Server}
              description="Building and maintaining scalable, reliable systems"
              skills={[
                "Linux Administration",
                "System Monitoring",
                "CI/CD Pipelines",
                "Container Orchestration",
                "Network Configuration",
                "Security Hardening",
              ]}
            />

            <SkillCard
              title="Programming Languages"
              icon={Code2}
              description="Crafting efficient, maintainable code solutions"
              skills={["Python", "JavaScript", "PHP", "SQL", "Bash Scripting", "TypeScript"]}
            />

            <SkillCard
              title="Linux Systems & Networking"
              icon={Terminal}
              description="Expert-level Linux administration and network management"
              skills={[
                "Linux System Administration",
                "Network Configuration & Security",
                "Shell Scripting & Automation",
                "Command Line Mastery",
                "System Performance Tuning",
                "Network Troubleshooting",
              ]}
            />

            <SkillCard
              title="Frontend Technologies"
              icon={Zap}
              description="Creating engaging, responsive user experiences"
              skills={["HTML5", "CSS3", "JavaScript", "Responsive Design", "UI/UX Principles", "Modern Web APIs"]}
            />

            <SkillCard
              title="Backend Development"
              icon={Database}
              description="Architecting robust server-side solutions"
              skills={[
                "RESTful APIs",
                "Database Design",
                "Server Architecture",
                "Authentication",
                "Data Modeling",
                "Performance Optimization",
              ]}
            />

            <SkillCard
              title="Leadership & Management"
              icon={Users}
              description="Guiding teams to achieve exceptional results"
              skills={[
                "Team Leadership",
                "Project Management",
                "Mentoring",
                "Strategic Planning",
                "Cross-functional Collaboration",
                "Agile Methodologies",
              ]}
            />

            <SkillCard
              title="Problem Solving"
              icon={Lightbulb}
              description="Analytical thinking and innovative solutions"
              skills={[
                "Critical Analysis",
                "System Debugging",
                "Performance Tuning",
                "Root Cause Analysis",
                "Innovation",
                "Technical Documentation",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="gradient-text">Let's Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to discuss opportunities, collaborate on projects, or explore innovative solutions together
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm always excited to connect with fellow developers, potential collaborators, and organizations
                  looking for passionate technical talent. Whether you have a project in mind, want to discuss
                  technology trends, or explore career opportunities, I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-card/30 border border-border/50 hover:bg-card/50 transition-all duration-300">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:ankursharma.9955@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      ankursharma.9955@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-card/30 border border-border/50 hover:bg-card/50 transition-all duration-300">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Github className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <a
                      href="https://github.com/SphinX-2738"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      github.com/SphinX-2738
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-card/30 border border-border/50 hover:bg-card/50 transition-all duration-300">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/ankur-sharma-37a0a3276/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      linkedin.com/in/ankur-sharma-37a0a3276/
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <Card className="glass-effect border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
                <CardDescription>Drop me a line and I'll get back to you as soon as possible</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input
                    placeholder="Your Name"
                    className="bg-background/50 border-border/50 focus:border-primary/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-background/50 border-border/50 focus:border-primary/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input
                    placeholder="Project Collaboration"
                    className="bg-background/50 border-border/50 focus:border-primary/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    className="bg-background/50 border-border/50 focus:border-primary/50 resize-none"
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg animate-glow">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border/50 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground">
                © 2024 DevPortfolio. Crafted with passion using Next.js & Tailwind CSS.
              </p>
            </div>
            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/10 hover:scale-110 transition-all duration-300"
                asChild
              >
                <a href="https://github.com/SphinX-2738" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/10 hover:scale-110 transition-all duration-300"
                asChild
              >
                <a href="https://www.linkedin.com/in/ankur-sharma-37a0a3276/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/10 hover:scale-110 transition-all duration-300"
                asChild
              >
                <a href="mailto:ankursharma.9955@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
