import { PagePaths } from "@/data/navigation-links"
import { Box, Typography } from "@mui/material"
import { FC } from "react"
import { MainStack } from "../../ui/main-stack"
import { SkillsProps } from "./skills.types"

export const Skills: FC<SkillsProps> = (data) => {
  return (
    <MainStack id={PagePaths.Skills}>
      <Typography variant="h4" textAlign="center" fontWeight="bold">
        {data.title}
      </Typography>
      <Box
        sx={{
          display: "grid",
          alignItems: "center",
          gridTemplateColumns: "repeat(auto-fill, minmax(min-content, 2fr))",
          gridGap: 24,
          width: "100%",
        }}
      >
        {data.skillArray.map((el) => (
          <Box
            key={el.title}
            sx={{
              borderRadius: 2,
              p: 2,
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
              background: "transparent",
              backdropFilter: "blur(10px)",
            }}
          >
            <Typography variant="h5" fontWeight="bold">
              {el.title}
            </Typography>
            <Box
              sx={{
                display: "grid",
                alignItems: "center",
                gridTemplateColumns: "repeat(auto-fill, minmax(10em, 1fr))",
                gap: 1.5,
                mt: 3,
              }}
            >
              {el.skills.map((skill) => (
                <Box
                  key={skill.title}
                  sx={{
                    borderRadius: 1,
                    p: 1,
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    boxShadow: "0 0 3px rgba(0, 0, 0, 0.7)",
                    background: `linear-gradient(to top, rgba(52, 152, 219, 0.7) ${skill.knowledge}%, rgba(255, 255, 255, 0.1) ${skill.knowledge}%)`,
                    minHeight: 50,
                  }}
                >
                  {skill.icon}
                  <Typography fontWeight={"bold"}>{skill.title}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </MainStack>
  )
}

export async function getServerSideProps(data: SkillsProps) {
  return {
    props: data,
  }
}

export default Skills
