import { MainStack } from "@/components/ui/main-stack"
import { PagePaths } from "@/data/navigation-links"
import { Box, IconButton, Tooltip, Typography } from "@mui/material"
import { FC } from "react"
import { ContactProps } from "./contact.types"
import { data } from "./data"
import { MailtoForm } from "./mailto-form"
import { ContactContainer } from "./components/contact-container"

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
      <ContactContainer>
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
      </ContactContainer>
    </MainStack>
  )
}

export async function getServerSideProps() {
  return {
    props: data,
  }
}

export default Contact
