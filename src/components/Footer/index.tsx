import { Container, Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <>
      <Container maxWidth="xl" sx={{ bgcolor: "#000" }}>
        <Box
          height={{ xs: "100px", md: "150px" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h6" align="center">
            © Tractian Challenge Tecnologia Ltda
          </Typography>
        </Box>
      </Container>
    </>
  );
}
