// Particle Animation System
class ParticleSystem {
  constructor() {
    this.canvas = document.getElementById("background-canvas")
    this.ctx = this.canvas.getContext("2d")
    this.particles = []
    this.particleCount = 50

    this.init()
    this.createParticles()
    this.animate()

    window.addEventListener("resize", () => this.handleResize())
  }

  init() {
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight
  }

  createParticles() {
    this.particles = []
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      })
    }
  }

  updateParticles() {
    this.particles.forEach((particle) => {
      particle.x += particle.vx
      particle.y += particle.vy

      // Bounce off edges
      if (particle.x < 0 || particle.x > this.canvas.width) {
        particle.vx *= -1
      }
      if (particle.y < 0 || particle.y > this.canvas.height) {
        particle.vy *= -1
      }

      // Keep particles in bounds
      particle.x = Math.max(0, Math.min(this.canvas.width, particle.x))
      particle.y = Math.max(0, Math.min(this.canvas.height, particle.y))
    })
  }

  drawParticles() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

    // Draw particles
    this.particles.forEach((particle) => {
      this.ctx.beginPath()
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      this.ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`
      this.ctx.fill()
    })

    // Draw connections
    this.particles.forEach((particle, i) => {
      this.particles.slice(i + 1).forEach((otherParticle) => {
        const dx = particle.x - otherParticle.x
        const dy = particle.y - otherParticle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 100) {
          this.ctx.beginPath()
          this.ctx.moveTo(particle.x, particle.y)
          this.ctx.lineTo(otherParticle.x, otherParticle.y)
          this.ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 100)})`
          this.ctx.lineWidth = 1
          this.ctx.stroke()
        }
      })
    })
  }

  animate() {
    this.updateParticles()
    this.drawParticles()
    requestAnimationFrame(() => this.animate())
  }

  handleResize() {
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight
    this.createParticles()
  }
}

// Navigation System
class Navigation {
  constructor() {
    this.navItems = document.querySelectorAll(".nav-item")
    this.sections = document.querySelectorAll("section")

    this.init()
  }

  init() {
    // Smooth scrolling for navigation links
    this.navItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault()
        const targetId = item.getAttribute("href").substring(1)
        const targetSection = document.getElementById(targetId)

        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      })
    })

    // Update active navigation on scroll
    window.addEventListener("scroll", () => this.updateActiveNav())

    // Initial active nav update
    this.updateActiveNav()
  }

  updateActiveNav() {
    const scrollPosition = window.scrollY + 100

    this.sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const sectionId = section.getAttribute("id")

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        this.navItems.forEach((item) => {
          item.classList.remove("active")
          if (item.getAttribute("data-section") === sectionId) {
            item.classList.add("active")
          }
        })
      }
    })
  }
}

// Project Card System
function toggleProject(button) {
  const projectCard = button.closest(".project-card")
  const details = projectCard.querySelector(".project-details")
  const isExpanded = details.classList.contains("expanded")

  if (isExpanded) {
    details.classList.remove("expanded")
    button.classList.remove("expanded")
  } else {
    details.classList.add("expanded")
    button.classList.add("expanded")
  }
}

// Skill Card Animations
class SkillAnimations {
  constructor() {
    this.skillCards = document.querySelectorAll(".skill-card")
    this.init()
  }

  init() {
    // Add staggered animation on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.style.opacity = "1"
              entry.target.style.transform = "translateY(0)"
            }, index * 100)
          }
        })
      },
      { threshold: 0.1 },
    )

    this.skillCards.forEach((card) => {
      card.style.opacity = "0"
      card.style.transform = "translateY(30px)"
      card.style.transition = "all 0.6s ease"
      observer.observe(card)
    })
  }
}

// Smooth Scroll for all internal links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href").substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize particle system
  new ParticleSystem()

  // Initialize navigation
  new Navigation()

  // Initialize skill animations
  new SkillAnimations()

  // Initialize smooth scrolling
  initSmoothScroll()

  // Add loading animation
  document.body.style.opacity = "0"
  setTimeout(() => {
    document.body.style.transition = "opacity 0.5s ease"
    document.body.style.opacity = "1"
  }, 100)
})

// Handle external links
document.querySelectorAll('a[target="_blank"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    // Add a small delay for better UX
    setTimeout(() => {
      window.open(this.href, "_blank")
    }, 100)
  })
})
