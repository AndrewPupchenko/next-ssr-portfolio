"use client"
import { PagePaths } from "@/data/navigation-links"
import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material"
import { useState } from "react"
import {
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaTelegramPlane,
} from "react-icons/fa"
import { MdOutlineEmail } from "react-icons/md"
import { MainStack } from "../ui/main-stack"

type ContactWithMe = {
  title: string
  url: string
  icon: JSX.Element
}

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

const data = {
  title: "Contact Me",
  emailTitle: "I would be happy to answer any questions you may have by email.",
  email: "andrew.pupchenko@gmail.com",
  anotherContactTitle: "You can also contact me in a convenient way for you: ",
  contactWithMe,
}

const MailtoForm = () => {
  const [subject, setSubject] = useState("Form portfolio")
  const [body, setBody] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const mailtoLink = `mailto:${data.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body ?? "")}`
    window.open(mailtoLink, "_self")
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        p: 2,
        gap: 2,
        borderRadius: 2,
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
        background: "transparent",
        backdropFilter: "blur(10px)",
      }}
    >
      <Typography variant="h6" textAlign="center" fontWeight="bold">
        {data.emailTitle}
      </Typography>

      <TextField
        label="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <TextField
        label="Body"
        multiline
        rows={4}
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <Button type="submit" variant="outlined" color="primary">
        Send Email
      </Button>
    </Box>
  )
}

export const Contact = () => {
  return (
    <MainStack id={PagePaths.Contact}>
      <Typography variant="h4" textAlign="center" fontWeight="bold">
        {data.title}
      </Typography>
      <MailtoForm />
      <Box
        sx={{
          p: 2,
          borderRadius: 2,
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          background: "transparent",
          backdropFilter: "blur(10px)",
        }}
      >
        <Typography variant="h6" textAlign="center" fontWeight="bold">
          {data.anotherContactTitle}
        </Typography>

        <Box mt={2} display={"flex"} justifyContent={"space-around"}>
          {data.contactWithMe.map(({ title, url, icon }) => (
            <Tooltip title={title} key={title}>
              <IconButton href={url} aria-label={title} color="primary">
                {icon}
              </IconButton>
            </Tooltip>
          ))}
        </Box>
      </Box>
    </MainStack>
  )
}
