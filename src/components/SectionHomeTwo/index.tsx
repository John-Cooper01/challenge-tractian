import { useState } from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import Lottie from "lottie-react";

import { Content } from "../ContentText";
import * as animationData from "./animationOne.json";

export default function Sectiontwo() {
  return (
    <Box
      maxHeight="100%"
      maxWidth="xl"
      position="relative"
      sx={{ top: "-220px" }}
    >
      <Box
        p={{ xs: 1, md: 3 }}
        borderRadius="1%"
        bgcolor="rgb(8, 30, 61)"
        display="flex"
        justifyContent="space-between"
        boxShadow="5px 5px 5px #000"
        sx={{ opacity: "0.96" }}
      >
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "column", lg: "row" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box
            width="50%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
          >
            <Box>
              <Image
                src="/logomini.svg"
                alt="Logo"
                height={200}
                width={200}
                quality={100}
              />
            </Box>
            <Typography
              component="h1"
              fontSize={{ xs: "3.7rem", md: "6rem" }}
              fontWeight="bold"
            >
              2 Anos de Experiencia
            </Typography>
            <Typography>
              Ajudando empresas a encontrar as melhores soluções.
            </Typography>
            <Box
              mt={7}
              width={{ xs: "340px", md: "640px" }}
              display={{ xs: "none", md: "initial" }}
              bgcolor="#F7F7F8"
              borderRadius="10px"
              sx={{
                "& svg": { borderRadius: "10px 10px" },
              }}
            >
              <Lottie
                animationData={animationData}
                width="100%"
                height="100%"
              />
            </Box>
          </Box>

          <Box
            width={{ xs: "100%", md: "50%" }}
            display="flex"
            flexDirection="column"
            gap={9}
          >
            <Box width={{ xs: "100%", md: 550 }}>
              <Typography variant="h5" mb={4} fontWeight="bold">
                Sobre Nós
              </Typography>

              <Typography>
                A TRACTIAN foi fundada em 2019 por Igor e Gabriel, que viram a
                vida inteira seus pais, coordenadores de manutenção, saindo de
                madrugada para resolver problemas nas fábricas. Ambos desde cedo
                trabalharam em indústrias, até que criaram a primeira versão do
                sensor e da plataforma de monitoramento de máquinas que existe
                hoje. Queremos que todos os profissionais de manutenção tenham
                acesso ao monitoramento online de equipamentos, e a uma
                plataforma “braço direito” que analisa, fornece insights
                valiosos, otimiza rotinas e permite tomada de decisões de forma
                prática e eficaz. Tudo isso só é possível combinando uma
                plataforma fácil de usar com um sensor IoT rápido de
                implementar.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h5" mb={3} fontWeight="bold">
                Nossa Especialização
              </Typography>
              {Content.map((item) => (
                <Box
                  key={item.id}
                  height={{ xs: "32%", md: "32%", lg: "150px" }}
                  p={2}
                  mb={2}
                  display="flex"
                  flexDirection={{ xs: "column", md: "column", lg: "row" }}
                  gap={3}
                  alignItems="center"
                  bgcolor="#F5F6F7"
                  color="#000"
                  borderLeft="5px solid #3399ff"
                  borderRadius="10px"
                  sx={{
                    "& span": {
                      boxShadow: "3px 3px 3px black",
                      borderRadius: "50%",
                    },
                  }}
                >
                  <Image
                    src={item.image}
                    alt="Mountains"
                    height={120}
                    width={120}
                    objectFit="cover"
                    quality={100}
                  />
                  <Box>
                    <Typography
                      variant="h1"
                      fontSize="1.5rem"
                      fontWeight="bold"
                      mb={1}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      textAlign={{ xs: "justify", md: "justify", lg: "left" }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

{
  /* <Typography
              variant="h5"
              fontWeight="bold"
              //fontSize={{ xs: "3.7rem", md: "4rem" }}
            >
              Clientes Satisfeitos
            </Typography>
            <Box
              maxWidth={{ xs: "100%", md: "485px" }}
              margin=" 0 auto"
              display="grid"
              gridTemplateColumns="repeat(auto-fill, minmax(230px, 1fr))"
              gap={2}
            >
              {LogoClient.map((logoClients) => (
                <Box
                  key={logoClients.id}
                  height="100%"
                  width={230}
                  bgcolor="#e3e3"
                  display="flex"
                  justifyContent="center"
                >
                  <Image
                    alt="Mountains"
                    src={logoClients.image}
                    height={150}
                    width={150}
                  />
                </Box>
              ))}
            </Box> */
}
