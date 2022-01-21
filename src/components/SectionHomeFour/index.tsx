import { Box, Container, Typography } from "@mui/material";

import { SuporteCards } from "../ContentText";
export default function SectionFour() {
  return (
    <Box mb={5} display="flex" justifyContent="center">
      <Box
        mt={15}
        width={{ xs: "100%", md: "50%" }}
        bgcolor="#081e3d"
        borderRadius={10}
        border="2px solid #fff"
      >
        <Box textAlign="center">
          <Typography
            variant="h1"
            fontSize={{ xs: "3.7rem", md: "6rem" }}
            fontWeight="bold"
          >
            Suporte{" "}
            <Typography
              component="span"
              fontSize={{ xs: "3.7rem", md: "6rem" }}
              color="#3399ff"
            >
              24h
            </Typography>{" "}
          </Typography>
        </Box>
        <Box
          p={3}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          gap={4}
        >
          {SuporteCards.map((contents) => (
            <Box
              key={contents.id}
              p={2}
              height={{ xs: "100%", md: "92px" }}
              width="100%"
              display="flex"
              alignItems="center"
              borderRadius={3}
              border="2px solid #3399ff"
              borderLeft="9px solid #3399ff"
              boxShadow="10px 10px 10px rgba(0, 0, 0, 0.1)"
              sx={{
                transition: "0.5s",
                "&:hover": {
                  filter: "brightness(1.2)",
                  transform: "translateX(-15px)",
                },
              }}
            >
              <Typography
                variant="body1"
                fontSize="1.25rem"
                fontWeight="bold"
                letterSpacing={2}
              >
                {contents.TitleCard}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
