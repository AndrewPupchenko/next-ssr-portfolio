"use client"

import { Box, Button, TextField, Typography } from "@mui/material"
import React, { useState } from "react"
import { data } from "../data"

export const MailtoForm = () => {
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
