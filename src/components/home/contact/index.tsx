import { PagePaths } from "@/data/navigation-links"
import { Box, IconButton, Tooltip, Typography } from "@mui/material"
import { FC } from "react"
import { data } from "./data"
import { MailtoForm } from "./mailto-form"
import { ContactProps } from "./contact.types"
import { MainStack } from "@/components/ui/main-stack"

export const Contact: FC<ContactProps> = ({
  title,
  anotherContactTitle,
  contactWithMe,
}) => {
  return (
    <MainStack id={PagePaths.Contact}>
      <Typography variant="h4" textAlign="center" fontWeight="bold">
        {title}
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
          {anotherContactTitle}
        </Typography>

        <Box mt={2} display={"flex"} justifyContent={"space-around"}>
          {contactWithMe?.map(({ title, url, icon }) => (
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

export async function getServerSideProps() {
  return {
    props: data,
  }
}

export default Contact
