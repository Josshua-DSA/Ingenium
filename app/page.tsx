import { getAllProjects } from '@/lib/projects'
import { HeroSection } from '@/components/sections/HeroSection'
import { MarqueeTicker } from '@/components/ui/MarqueeTicker'
import { IntroSection } from '@/components/sections/IntroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default async function HomePage() {
  const projects = await getAllProjects()

  return (
    <main className="flex-1">
      {/* 1. Hero with 3D Hanging Lanyard & Figma Selection Canvas */}
      <HeroSection />

      {/* 2. Top Marquee Ticker */}
      <MarqueeTicker />

      {/* 3. Intro Section with Italic Serif Title + Photo Stage Frame */}
      <IntroSection />

      {/* 4. Marquee Ticker 2 */}
      <MarqueeTicker />

      {/* 5. About Q&A Narrative Grid */}
      <AboutSection />

      {/* 6. Tech Skills Pills Grid */}
      <SkillsSection />

      {/* 7. Projects & Case Studies */}
      <ProjectsSection projects={projects} />

      {/* 8. Contact CTA */}
      <ContactSection />
    </main>
  )
}
