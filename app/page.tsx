import { getAllProjects } from '@/lib/projects'
import { HeroSection } from '@/components/sections/HeroSection'
import { MarqueeTicker } from '@/components/ui/MarqueeTicker'
import { AboutSection } from '@/components/sections/AboutSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default async function HomePage() {
  const projects = await getAllProjects()

  return (
    <main className="flex-1">
      <HeroSection />
      <MarqueeTicker />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection projects={projects} />
      <ContactSection />
    </main>
  )
}
