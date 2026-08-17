import { getAllProjects } from '@/lib/projects'
import { HeaderNav } from '@/components/sections/HeaderNav'
import { HeroSection } from '@/components/sections/HeroSection'
import { IntroSection } from '@/components/sections/IntroSection'
import { MarqueeTicker } from '@/components/ui/MarqueeTicker'
import { AboutSection } from '@/components/sections/AboutSection'
import { HighlightsCarousel } from '@/components/sections/HighlightsCarousel'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { OpportunitiesSection } from '@/components/sections/OpportunitiesSection'

export default async function HomePage() {
  const projects = await getAllProjects()

  return (
    <main className="flex-1">
      {/* Top Floating Glass Navigation Bar */}
      <HeaderNav />

      {/* 1. My Portfolio (Figma Selection Frame + 3D Hanging Lanyard) */}
      <HeroSection />

      {/* Ticker Divider */}
      <MarqueeTicker />

      {/* 2. Hi, I'm Joshua (Intro Narrative + Stage Photo Frame + View Work & Download CV) */}
      <IntroSection />

      {/* 3. About Me (Q&A Grid & Status Pillars) */}
      <AboutSection />

      {/* 4. 3D Tour / Highlights (Milestones & Achievements + AUTO TOUR Button) */}
      <HighlightsCarousel />

      {/* 5. Tech Skills (Categorized Skill Pills) */}
      <SkillsSection />

      {/* 6. Projects (Case Studies) */}
      <ProjectsSection projects={projects} />

      {/* 7. Experience & Activities */}
      <ExperienceSection />

      {/* 8. Contact */}
      <ContactSection />

      {/* 9. Open to Opportunities Banner */}
      <OpportunitiesSection />
    </main>
  )
}
