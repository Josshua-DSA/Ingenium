import { getAllProjects } from '@/lib/projects'
import { HeaderNav } from '@/components/sections/HeaderNav'
import { HeroSection } from '@/components/sections/HeroSection'
import { IntroSection } from '@/components/sections/IntroSection'
import { MarqueeTicker } from '@/components/ui/MarqueeTicker'
import { AboutSection } from '@/components/sections/AboutSection'
import { JourneyTimeline } from '@/components/sections/JourneyTimeline'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { ClosingSection } from '@/components/sections/ClosingSection'

export default async function HomePage() {
  const projects = await getAllProjects()

  return (
    <main className="flex-1">
      {/* Top Floating Glass Navigation Bar */}
      <HeaderNav />

      {/* 1. Hero — MY PORTFOLIO */}
      <HeroSection />

      {/* Ticker Divider */}
      <MarqueeTicker />

      {/* 2. Intro — Hi, I'm Joshua */}
      <IntroSection />

      {/* 3. About Me — 4 Stat Cards + 2 Q&A */}
      <AboutSection />

      {/* 4. Journey — Interactive Timeline */}
      <JourneyTimeline />

      {/* 5. Projects & Case Studies (with integrated skill tags) */}
      <ProjectsSection projects={projects} />

      {/* 6. Experience & Activities */}
      <ExperienceSection />

      {/* 7. Contact & CTA (merged closing) */}
      <ClosingSection />
    </main>
  )
}
