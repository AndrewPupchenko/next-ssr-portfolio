import { StaticImport } from 'next/dist/shared/lib/get-img-props'

export type Skill = {
  title: string
  icon: JSX.Element
  knowledge: number
}

export type SkillArray = {
  title: string
  image: string
  skills: Skill[]
}

export type SkillsProps = {
  title: string
  skillArray: SkillArray[]
}
