'use client'

import { Box, Button, TextField, Typography } from '@mui/material'
import React, { FC, useState } from 'react'
import { ContactProps } from '../contact.types'

export const MailtoForm: FC<Pick<ContactProps, 'emailTitle' | 'email'>> = ({
  emailTitle,
  email,
}) => {
  const [subject, setSubject] = useState('')
  const [body, setBody] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body ?? '')}`
    window.open(mailtoLink, '_self')
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={({ breakpoints }) => ({
        display: 'flex',
        flexDirection: 'column',
        p: 2,
        gap: 2,
        borderRadius: 2,
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
        background: 'transparent',
        backdropFilter: 'blur(10px)',
        minWidth: 400,
        [breakpoints.down('md')]: { minWidth: 100 },
      })}
    >
      <Typography variant="h5" mb={2}>
        {emailTitle}
      </Typography>

      <TextField
        label="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <TextField
        label="Your message"
        multiline
        rows={4}
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{
          width: '10rem',
          textTransform: 'none',
          fontWeight: 'bold',
          mt: 2,
        }}
      >
        Send message
      </Button>
    </Box>
  )
}
