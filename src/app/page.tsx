"use client"
import { Box, Typography } from "@mui/material"
import user from "@/data/images/user.png"
import background from "@/data/images/background.png"
import foreground from "@/data/images/foreground.png"
import foreground2 from "@/data/images/foreground-2.png"

import { ParallaxBanner } from "react-scroll-parallax"

export default function Home() {
  return (
    <main>
      <Box height={"100vh"}>🌑</Box>
      <ParallaxBanner
        layers={[
          {
            image: background.src,
            speed: 0,
          },
          {
            image: foreground.src,
            speed: 1,
            scaleZ: [0.1, 0.1],
          },
          {
            speed: 10,
            children: (
              <Box
                m={"2rem"}
                p={"2rem"}
                mt={20}
                sx={{ inset: "0" }}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                position={"absolute"}
                bgcolor={"rgba(0,0,0,.5)"}
                height={"max-content"}
                borderRadius={"2rem"}
              >
                <Typography>
                  <h1>Title</h1>
                  <h2>
                    Если вы используете библиотеку react-scroll-parallax для
                    создания эффекта параллакса в React и хотите уменьшить
                    картинку и переместить ее влево при прокрутке, вам нужно
                    будет использовать соответствующие стили и анимации. Вот
                    пример того, как это можно сделать:
                  </h2>
                  <h3>
                    Обратите внимание на использование стилей внутри style в img
                    элементе для установки ширины и трансформации (перемещения
                    влево). Это подстраивается под ваше конкретное изображение и
                    требования. Обратите внимание, что вы можете настроить
                    значения y и tagOuter в зависимости от того, насколько
                    сильно вы хотите, чтобы эффект параллакса влиял на
                    изображение.
                  </h3>
                </Typography>
              </Box>
            ),
          },
          {
            image: foreground2.src,
            scaleZ: [0.2, 0.2],
            opacity: [0.9, 1],
            speed: 2,
          },
          {
            image: user.src,
            speed: 0,
            scale: [0.5, 0.5],
            translateX: [20, 20],
            expanded: true,
            translateY: [15, 15],
          },
        ]}
        style={{ aspectRatio: "2/1", height: "100svh" }}
        // className="aspect-[2/1]"
      />
      <Box height={"100vh"}>🌑</Box>
    </main>
  )
}
