import {
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from "@mui/lab"
import { Typography, Box } from "@mui/material"
import React from "react"
import { IoLocationOutline, IoCodeSlashOutline } from "react-icons/io5"
import { data } from "../data"
import { Experience } from "../about-me.types"

const TimeViewElement = ({
  endedAt,
  startedAt,
}: {
  startedAt?: Experience["startedAt"]
  endedAt?: Experience["endedAt"]
}) => (
  <Box
    display={"flex"}
    flexDirection={"column"}
    justifyContent={"space-around"}
  >
    <Typography
      variant="body2"
      color={"text.secondary"}
      sx={{ textOrientation: "sideways", writingMode: "vertical-rl" }}
    >
      {endedAt?.getFullYear().toString()}
    </Typography>
    -
    <Typography
      variant="body2"
      color={"text.secondary"}
      sx={{ textOrientation: "sideways", writingMode: "vertical-rl" }}
    >
      {startedAt?.getFullYear().toString()}
    </Typography>
  </Box>
)

export const ExperienceView = ({
  startedAt,
  endedAt,
  company,
  title,
  description,
  responsibilities,
  skills,
  location,
  languages,
  children,
}: Experience) => {
  return (
    <TimelineItem>
      <TimelineOppositeContent display={"contents"}>
        <TimeViewElement startedAt={startedAt} endedAt={endedAt} />
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="h5" component="span" fontWeight={"bold"}>
          {title}
        </Typography>

        <Typography
          component={Box}
          sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
          variant="body2"
          color={"text.secondary"}
        >
          <IoLocationOutline />
          {company}, {location}
        </Typography>

        <Typography
          component={Box}
          sx={{
            display: languages?.length ? "flex" : "none",
            alignItems: "center",
            gap: 0.5,
          }}
          variant="body2"
          color={"text.secondary"}
        >
          <IoCodeSlashOutline />
          {languages?.join(", ")}
        </Typography>

        <Typography variant="body2">{description}</Typography>
        {responsibilities?.length && (
          <>
            <Typography variant="body2" fontWeight={"bold"}>
              {data.responsibilitiesTitle}:
            </Typography>

            <ul>
              {responsibilities.map((responsibility, i) => (
                <Typography
                  key={i}
                  component={"li"}
                  variant="body2"
                  color={"text.secondary"}
                >
                  {responsibility}
                </Typography>
              ))}
            </ul>
          </>
        )}
        {children?.map((ch, chI) => (
          <TimelineItem key={chI}>
            <ExperienceView {...ch} />
          </TimelineItem>
        ))}
        {skills?.length && (
          <>
            <Typography variant="body2" fontWeight={"bold"}>
              {data.skillsTitle}:
            </Typography>
            <Typography variant="body2" color={"text.secondary"}>
              {skills?.join(", ")}
            </Typography>
          </>
        )}
      </TimelineContent>
    </TimelineItem>
  )
}
