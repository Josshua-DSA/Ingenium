import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { ProjectMeta, Project } from './types'

const projectsDirectory = path.join(process.cwd(), 'content/projects')

export async function getAllProjects(): Promise<ProjectMeta[]> {
  if (!fs.existsSync(projectsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(projectsDirectory)
  const allProjectsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(projectsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)

      return {
        slug,
        title: data.title || '',
        tagline: data.tagline || '',
        tags: data.tags || [],
        status: data.status || 'completed',
        year: Number(data.year) || new Date().getFullYear(),
        featured: Boolean(data.featured),
        github: data.github || '',
        demo: data.demo || '',
        image: data.image || '',
      } as ProjectMeta
    })

  return allProjectsData.sort((a, b) => b.year - a.year)
}

export async function getFeaturedProjects(): Promise<ProjectMeta[]> {
  const allProjects = await getAllProjects()
  return allProjects.filter((p) => p.featured)
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const fullPath = path.join(projectsDirectory, `${slug}.mdx`)
  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title || '',
    tagline: data.tagline || '',
    tags: data.tags || [],
    status: data.status || 'completed',
    year: Number(data.year) || new Date().getFullYear(),
    featured: Boolean(data.featured),
    github: data.github || '',
    demo: data.demo || '',
    image: data.image || '',
    content,
  }
}
