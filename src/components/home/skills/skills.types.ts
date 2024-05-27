export type Skill = {
  title: string
  icon: JSX.Element
  knowledge: number
}

export type SkillArray = {
  title: "Web development"
  skills: Skill[]
}

export type SkillsProps = {
  title: string
  skillArray: SkillArray[]
}
