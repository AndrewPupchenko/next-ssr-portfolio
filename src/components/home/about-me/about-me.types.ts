export type AboutMeProps = {
  title: string
  experienceTitle: string
  responsibilitiesTitle: string
  skillsTitle: string
  experience: Experience[]
}

export type Experience = {
  title: string
  startedAt: Date
  endedAt?: Date
  description?: string
  technologies?: string[]
  url?: string
  company?: string
  location?: string[]
  position?: string[]
  projects?: string[]
  responsibilities?: string[]
  skills?: string[]
  techStack?: string[]
  languages?: string[]
  children?: Experience[]
}
