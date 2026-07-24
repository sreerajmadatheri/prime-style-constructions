export type NavItem = {
  label: string
  href: string
  external?: boolean
}

export type ServiceCategory = 'residential' | 'commercial' | 'industrial'

export type ProjectStatus = 'completed' | 'in-progress' | 'upcoming'

export type Project = {
  id: string
  title: string
  category: ServiceCategory
  location: string
  status: ProjectStatus
  imageUrl: string
  description: string
}

export type TeamMember = {
  id: string
  name: string
  role: string
  bio: string
  imageUrl: string
}

export type SeoMeta = {
  title: string
  description: string
  canonical?: string
  ogImage?: string
}
