export type ContactWithMe = {
  title: string
  url: string
  icon: JSX.Element
}

export type ContactProps = {
  title: string
  emailTitle: string
  email: string
  anotherContactTitle: string
  contactWithMe: ContactWithMe[]
}
