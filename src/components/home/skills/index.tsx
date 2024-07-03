import { MainStack } from '@/components/ui/main-stack'
import { PagePaths } from '@/data/navigation-links'
import { Box, Typography } from '@mui/material'
import { FC } from 'react'
import { data } from './api/data'

export const Skills: FC = () => {
  return (
    <MainStack id={PagePaths.Skills}>
      <Typography variant="h4" textAlign="center" fontWeight="bold">
        {data.title}
      </Typography>
      <Box
        sx={{
          display: 'grid',
          alignItems: 'center',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min-content, 2fr))',
          gridGap: 24,
          width: '100%',
        }}
      >
        {data?.skillArray?.map((el) => (
          <Box
            key={el.title}
            sx={{
              borderRadius: 2,
              p: 2,
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
              background: 'transparent',
              backdropFilter: 'blur(10px)',
            }}
          >
            <Typography variant="h5">{el.title}</Typography>
            <Box
              sx={{
                display: 'grid',
                alignItems: 'center',
                gridTemplateColumns: 'repeat(auto-fill, minmax(9em, 1fr))',
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
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                    boxShadow: '0 0 3px rgba(0, 0, 0, 0.7)',
                    background: `linear-gradient(to top, rgba(52, 152, 219, ${skill.knowledge * 0.008}) ${skill.knowledge}%, rgba(255, 255, 255, 0.1) ${skill.knowledge}%)`,
                    minHeight: 50,
                  }}
                >
                  {skill.icon}
                  <Typography variant="body2">{skill.title}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </MainStack>
  )
}

export default Skills
