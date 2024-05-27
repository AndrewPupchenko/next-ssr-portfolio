import {
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaTelegramPlane,
} from "react-icons/fa"
import { MdOutlineEmail } from "react-icons/md"
import { ContactProps, ContactWithMe } from "./contact.types"

const contactWithMe: ContactWithMe[] = [
  {
    title: "Telegram",
    icon: <FaTelegramPlane />,
    url: "https://t.me/andrew_at_work",
  },
  {
    title: "Email",
    icon: <MdOutlineEmail />,
    url: "mailto:andrew.pupchenko@gmail.com",
  },
  {
    title: "LinkedIn",
    icon: <FaLinkedin />,
    url: "https://linkedin.com/in/andrew-react",
  },
  {
    title: "GitHub",
    icon: <FaGithub />,
    url: "https://github.com/AndrewPupchenko",
  },
  {
    title: "Phone",
    icon: <FaPhoneAlt />,
    url: "tel:+38268415848",
  },
]

export const data: ContactProps = {
  title: "Contact Me",
  emailTitle: "I would be happy to answer any questions you may have by email.",
  email: "andrew.pupchenko@gmail.com",
  anotherContactTitle: "You can also contact me in a convenient way for you: ",
  contactWithMe,
}
