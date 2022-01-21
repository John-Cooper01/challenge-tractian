import Image from "next/image";
import { Box, Typography } from "@mui/material";

export default function SectionOne() {
  return (
    <Box
      maxWidth="xl"
      display="flex"
      sx={{ justifyContent: "center", height: "100vh" }}
    >
      <Box sx={{ zIndex: "-1", opacity: 0.2 }}>
        <Image
          src="/bgImage.jpg"
          alt="background image tractian"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </Box>
      <Box
        maxWidth="1120px"
        sx={{
          width: "100%",
          margin: "0 auto",
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={2}
          p={{ xs: 1, xl: 4 }}
          mt={{ xs: "3.15rem", lg: "5rem" }}
        >
          <Typography
            variant="h1"
            sx={{
              maxWidth: "890px",
              fontSize: { xs: "2.3rem", md: "3.8rem" },
              lineHeight: "3.75rem",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Acelere etapas da sua empresa com os software da{" "}
            <Box component="span" color="#3399ff">
              TRACTIAN.
            </Box>
          </Typography>
          <Typography
            variant="h6"
            maxWidth=" 750px"
            fontSize={{ xs: "1rem", md: "1.4rem" }}
            textAlign="center"
          >
            Evite falhas nas suas máquinas e torne o tempo de inatividade uma
            coisa do passado com sistema preditivo da Tractian.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
