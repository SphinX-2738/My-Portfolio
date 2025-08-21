# DevOps Engineer Portfolio

A modern, interactive portfolio website showcasing DevOps engineering skills, Python development expertise, and Linux system administration capabilities.

## 🚀 Project Overview

This portfolio is a single-page application built with cutting-edge web technologies, featuring:

- **Interactive Animations**: Custom particle system background with smooth hover effects
- **Responsive Design**: Mobile-first approach that works seamlessly across all devices
- **Modern UI/UX**: Clean, professional design with engaging transitions
- **Performance Optimized**: Fast loading times with efficient animations

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS v4 with custom design system
- **UI Components**: Custom component library (shadcn/ui style)
- **Icons**: Lucide React icons
- **Animations**: CSS transitions and vanilla JavaScript

## 📋 Features

### Core Sections
- **Hero Section**: Dynamic introduction with animated background
- **About**: Professional background and soft skills
- **Projects**: Featured work including Spotify Clone and College Management CLI
- **Skills**: Technical expertise organized by categories:
  - DevOps & Infrastructure
  - Programming Languages
  - Linux Systems & Networking
  - Frontend Technologies
  - Backend Development
  - Leadership & Management
  - Problem Solving

- **Contact**: Interactive contact form and social links

### Interactive Elements
- Floating particle animation system
- Expandable project cards with detailed descriptions
- Hover effects and smooth transitions
- Responsive navigation with scroll detection
- Animated skill cards with progress indicators

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed on your system
- npm or yarn package manager

### Installation

1. **Extract the project files** to your desired location

2. **Navigate to the project directory**:
   \`\`\`bash
   cd portfolio-website
   \`\`\`

3. **Install dependencies**:
   \`\`\`bash
   npm install --legacy-peer-deps
   \`\`\`
   *Note: Use `--legacy-peer-deps` flag to resolve React 19 compatibility issues*

4. **Start the development server**:
   \`\`\`bash
   npm run dev
   \`\`\`

5. **Open your browser** and visit:
   \`\`\`
   http://localhost:3000
   \`\`\`

### Alternative Installation Methods

If you encounter dependency issues, try:

\`\`\`bash
# Force installation
npm install --force

# Or clean install
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
\`\`\`

## 📁 Project Structure

\`\`\`
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with fonts and providers
│   ├── page.tsx            # Main portfolio page
│   └── globals.css         # Global styles and design tokens
├── components/
│   ├── ui/                 # Reusable UI components (Button, Card, etc.)
│   ├── animated-background.tsx  # Particle animation system
│   ├── floating-nav.tsx    # Sidebar navigation
│   ├── project-card.tsx    # Interactive project displays
│   └── skill-card.tsx      # Animated skill categories
├── public/                 # Static assets
└── README.md              # Project documentation
\`\`\`

## 🎨 Customization

### Colors
The project uses a custom color scheme defined in `globals.css`. Main colors:
- **Primary**: Blue (#3B82F6)
- **Secondary**: Cyan (#06B6D4)
- **Accent**: Purple (#8B5CF6)

### Content
Update personal information in `app/page.tsx`:
- Contact details (email, LinkedIn, GitHub)
- Project descriptions and links
- Skills and expertise areas
- About section content

### Animations
Particle system settings can be modified in `components/animated-background.tsx`:
- Particle count
- Animation speed
- Connection distance
- Colors and opacity

## 🚀 Deployment

### Build for Production
\`\`\`bash
npm run build
npm run start
\`\`\`

### Deploy to Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with zero configuration

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Run production build locally
- `npm run lint` - Check for code issues

## 📞 Contact

- **Email**: ankursharma.9955@gmail.com
- **LinkedIn**: [ankur-sharma-37a0a3276](https://www.linkedin.com/in/ankur-sharma-37a0a3276/)
- **GitHub**: [SphinX-2738](https://github.com/SphinX-2738)

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ using Next.js and Tailwind CSS**
