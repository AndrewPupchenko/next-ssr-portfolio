"use client"
import { PagePaths } from "@/data/navigation-links"
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab"
import { Box, Typography } from "@mui/material"
import { IoCodeSlashOutline, IoLocationOutline } from "react-icons/io5"
import { MainStack } from "../ui/main-stack"

type Experience = {
  title: string
  startedAt: Date
  endedAt?: Date
  description?: string
  technologies?: string[]
  url?: string
  company?: string
  location?: string[]
  position?: string[]
  projects?: string[]
  responsibilities?: string[]
  skills?: string[]
  techStack?: string[]
  achievements?: string[]
  languages?: string[]
  children?: Experience[]
}

const data = {
  title: "About my Experience",
  experience: [
    {
      title: "Middle Frontend Developer",
      company: "BeetSoft",
      location: ["Podgorica, Montenegro"],
      startedAt: new Date("2021-06-01"),
      endedAt: new Date("2024-01-01"),
      description:
        "Expansion of functionality, refactoring, layout, project logic.",
      technologies: [
        "React.js",
        "React Native",
        "Redux toolkits",
        "JavaScript",
        "TypeScript",
        "Rest API",
        "Jest",
        "GitHub",
        "styled-components",
        "mui",
        "react-hook-form",
        "eslint",
        "redux-devtools",
        "react-router-dom",
        "css",
        "scss",
      ],
      children: [
        {
          title: "Middle Frontend Developer",
          languages: ["React", "React-Native", "TS"],
          company: "Kreios S.à r.l.",
          location: ["Luxembourg"],
          startedAt: new Date("2021-10-01"),
          endedAt: new Date("2024-01-01"),
          description:
            "Expansion of functionality, refactoring, layout, project logic.",
          technologies: [
            "React.js",
            "React Native",
            "Node.js",
            "Next.js",
            "TypeScript",
            "Redux toolkits",
            "JavaScript",
            "Rest API",
            "Apollo GraphQL",
            "Jest",
            "GitHub (including CI/CD)",
            "styled-components",
            "mui",
            "react-hook-form",
            "graphql",
            "eslint",
            "redux-devtools",
            "nx",
            "react-router dom",
            "chart.js",
            "i18next",
            "yup",
            "react-dropzone",
            "react-helmet",
            "jest",
            "react-testing-library",
            "react-day-picker",
          ],
          responsibilities: [
            "Creating queries, forms, adapting schemes, optimizing projects.",
            "Writing tests with Jest, increasing code coverage, including mock data.",
            "Updating and improving projects, changing logic, interacting with the BE team.",
            "Finding and eliminating vulnerabilities, setting up Prettier.",
            "Implementation of a product status tree, improving the UI perception for users.",
            "Active participation in updating and improving projects",
          ],
          techStack: [
            "Slack",
            "Jira",
            "GitHub",
            "Figma",
            "ClickUp",
            "Microsoft Teams",
            "Google Meet",
            "Kanban",
          ],
          skills: [
            "Frontend Development",
            "React.js",
            "TypeScript",
            "Node.js",
            "Next.js",
            "Redux",
            "GraphQL",
            "Testing with Jest",
            "CI/CD",
            "Styled Components",
            "Material-UI",
            "Form Handling",
            "GraphQL",
            "Project Optimization",
          ],
        },
        {
          title: "Back End Developer",
          languages: ["C#", ".NET"],
          company: "Kreios S.à r.l.",
          location: ["Luxembourg"],
          startedAt: new Date("2023-06-01"),
          endedAt: new Date("2024-01-01"),
          description:
            "Implementation of Swagger to improve documentation and readability of API requests.",
          technologies: [
            "C# .Net",
            "Swagger",
            "Azure",
            "GraphQL",
            "REST API",
            "Azure Document Storage",
            "Microsoft SQL Server",
          ],
          responsibilities: [
            "Support and development of existing backend code in C# .Net.",
            "Swagger and API optimizations to improve performance and security.",
            "Working with the Azure cloud platform for efficient application deployment.",
            "Data management in Azure and SQL Server for reliability and scalability.",
          ],
          skills: [
            "Backend Development",
            "C# .Net",
            "Swagger",
            "Azure",
            "GraphQL",
            "REST API",
            "Database Management",
            "Microsoft SQL Server",
            "API Optimization",
            "Cloud Deployment",
          ],
        },
      ],
    },
    {
      title: "Full-stack Developer",
      company: "ONIIP",
      languages: ["React", "TS", "Python", "Django", "PostgreSQL"],
      location: ["Omsk, Russia"],
      startedAt: new Date("2020-01-01"),
      endedAt: new Date("2021-06-01"),
      description:
        "Backend: architectural development, customer interaction, databases, testing. Frontend: mobile and desktop applications, layout, routing.",
      technologies: [
        "React JS",
        "TypeScript",
        "Material-UI",
        "JWT",
        "WebSocket",
        "Rest API",
        "Python",
        "Django",
        "PostgreSQL",
      ],
      responsibilities: [
        "Designing an effective backend architecture.",
        "Implementation of interactions via HTTP and WebSocket.",
        "Creation and optimization of databases with Django Models and JWT.",
        "Testing with Pytest and CI/CD.",
        "Creating modern applications with React and Node.js.",
        "Workbench with Material-UI and CSS.",
        "Professional routing setup.",
        "Efficient use of browser data storage.",
        "Project optimization and asynchronous requests.",
        "Design applications.",
      ],
      skills: [
        "Backend Development",
        "Frontend Development",
        "API Development",
        "Database Management",
        "Testing",
        "CI/CD",
        "React",
        "Node.js",
        "Python",
        "Django",
        "PostgreSQL",
        "TypeScript",
        "Material-UI",
        "JWT",
        "WebSocket",
        "Rest API",
      ],
    },
    {
      title: "Higher Education (Bachelor)",
      startedAt: new Date("2016"),
      endedAt: new Date("2020"),
      description: "Bachelor's degree in Informatics and Computer Engineering",
      company: "Omsk State Technical University",
      location: ["Omsk, Russia"],
      skills: ["Informatics", "Computer Engineering"],
    },
  ],
}

const TimeViewElement = ({
  endedAt,
  startedAt,
}: {
  startedAt?: Experience["startedAt"]
  endedAt?: Experience["endedAt"]
}) => (
  <Box m={"auto 0"}>
    <Typography variant="body2" color={"text.secondary"}>
      {endedAt?.getFullYear().toString()}
    </Typography>
    -
    <Typography variant="body2" color={"text.secondary"}>
      {startedAt?.getFullYear().toString()}
    </Typography>
  </Box>
)

const ExperienceView = ({
  startedAt,
  endedAt,
  company,
  title,
  description,
  achievements,
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
        {achievements?.length && (
          <>
            <Typography variant="body2" fontWeight={"bold"}>
              Experience:
            </Typography>
            <ul>
              {achievements?.map((achievement, i) => (
                <Typography
                  key={i}
                  component={"li"}
                  variant="body2"
                  color={"text.secondary"}
                >
                  {achievement}
                </Typography>
              ))}
            </ul>
          </>
        )}
        {responsibilities?.length && (
          <>
            <Typography variant="body2" fontWeight={"bold"}>
              Responsibilities:
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
              Skills:
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

export const AboutMe = () => {
  return (
    <MainStack id={PagePaths.AboutMe}>
      <Typography variant="h4" textAlign="center" fontWeight="bold">
        {data.title}
      </Typography>
      <Timeline
        sx={{ "& .MuiTimelineItem-root": { "&:before": { content: "none" } } }}
      >
        {data.experience?.map((el, index) => (
          <ExperienceView {...el} key={index} />
        ))}
      </Timeline>
    </MainStack>
  )
}
