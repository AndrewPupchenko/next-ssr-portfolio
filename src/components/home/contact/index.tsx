"use client"
import { MainStack } from "@/components/ui/main-stack"
import { PagePaths } from "@/data/navigation-links"
import { Box, IconButton, Tooltip, Typography } from "@mui/material"
import { FC } from "react"
import { ContactProps } from "./contact.types"
import { data } from "./data"
import { MailtoForm } from "./mailto-form"

export const Contact: FC<ContactProps> = ({
  email,
  emailTitle,
  title,
  subTitle,
  anotherContactTitle,
  contactWithMe,
}) => {
  return (
    <MainStack id={PagePaths.Contact}>
      <Box
        sx={({ breakpoints }) => ({
          display: "grid",

          gap: 3,
          mt: 3,
          [breakpoints.up("md")]: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          },
        })}
      >
        <Box>
          <Typography variant="h3">{title}</Typography>
          <Typography variant="h4">{subTitle}</Typography>

          <Typography variant="body2" color={"text.secondary"} mt={2}>
            {anotherContactTitle}
          </Typography>

          <Box
            mt={2}
            display={"inline-grid"}
            sx={{ writingMode: "vertical-rl" }}
            gap={2}
          >
            {contactWithMe?.map(({ title, url, icon }) => (
              <Tooltip title={title} key={title}>
                <IconButton
                  href={url}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={title}
                  color="primary"
                >
                  {icon}
                </IconButton>
              </Tooltip>
            ))}
          </Box>
        </Box>

        <MailtoForm email={email} emailTitle={emailTitle} />
      </Box>
    </MainStack>
  )
}

export async function getServerSideProps() {
  return {
    props: data,
  }
}

export default Contact
