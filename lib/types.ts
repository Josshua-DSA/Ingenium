export type ProjectStatus = 'active' | 'completed' | 'archived'

export interface ProjectMeta {
  slug: string
  title: string
  tagline: string
  tags: string[]
  status: ProjectStatus
  year: number
  featured: boolean
  github?: string
  demo?: string
  image?: string
}

export interface Project extends ProjectMeta {
  content: string
}

export type TagFilter = string | 'all'

export interface TimelineItem {
  year: string
  label: string
  description: string
  type: 'education' | 'project' | 'work'
}

export interface TechCategory {
  category: string
  items: string[]
}
