import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Typography, AppBar, Tabs, Tab, Tooltip } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ContentPasteSearchOutlined } from "@mui/icons-material";

import { Equipment } from "../ContentText";
import { TabPanelProps } from "../../types";

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box height={{ xs: "100%", md: "600px" }} p={3}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function SectionThree() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };
  return (
    <Box mb={2} maxWidth="xl">
      <Box display="flex" justifyContent="center">
        <Box
          sx={{
            bgcolor: "rgb(8, 30, 61)",
            width: { xs: "100%", md: "1200px" },
            border: "2px solid #fff",
            borderRadius: 1,
          }}
        >
          <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              textColor="inherit"
              variant="fullWidth"
              aria-label="Tabbed navigation"
            >
              <Tab
                sx={{ color: "#000", fontWeight: "bold" }}
                label="Sensor Plug & Play"
                {...a11yProps(0)}
              />
              <Tab
                wrapped={true}
                sx={{ color: "#000", fontWeight: "bold" }}
                label="Monitoramento Online"
                {...a11yProps(1)}
              />
              <Tab
                sx={{ color: "#000", fontWeight: "bold" }}
                label="Gestão de Ativos"
                {...a11yProps(2)}
              />
            </Tabs>
          </AppBar>

          <TabPanel value={value} index={0} dir={theme.direction}>
            <Box
              display="flex"
              flexDirection={{ xs: "column-reverse", md: "row" }}
              alignItems={{ xs: "center", md: "center" }}
              justifyContent={{ xs: "normal", md: "space-around" }}
            >
              <Box
                width={{ xs: "100%", md: "50%" }}
                display="flex"
                flexDirection="column"
                gap={5}
              >
                <Typography variant="h1" fontSize="2.25rem" textAlign="center">
                  Sensor Inteligente
                </Typography>
                <Box>
                  <Typography variant="body1" fontSize="1.2rem">
                    Nossos sensores enviam dados do seu equipamento através de
                    rede 3g/4g com baixo consumo de energia. Basta fixar o
                    sensor no local a ser monitorado e pronto: acompanhe em
                    tempo real a condição da sua máquina (Sensor Plug & Play).
                  </Typography>
                  <Box
                    mt={5}
                    display="flex"
                    alignItems={{ xs: "center" }}
                    flexDirection={{ xs: "column", md: "row" }}
                    gap={5}
                  >
                    {Equipment.map((Equipments) => (
                      <Box
                        key={Equipments.id}
                        height={{ xs: "100%", md: "220px" }}
                        width={{ xs: "100%", md: "180px" }}
                        p={1.5}
                        borderRadius={5}
                        fontSize="2.5rem"
                        border="2px solid #3399ff"
                        textAlign="center"
                        sx={{
                          transition: "0.5s",
                          "&:hover": {
                            filter: "brightness(1.2)",
                            transform: "translateY(-15px)",
                          },
                        }}
                      >
                        {Equipments.cardO}
                        <Typography textAlign="justify">
                          {Equipments.cardDescription}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
                <Box
                  sx={{
                    "& svg": {
                      height: "3.125rem",
                      width: "3.125rem",
                      cursor: "pointer",
                      "&:hover": {
                        color: "#3399ff",
                      },
                    },
                  }}
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    fontSize="1.5rem"
                    gap={1}
                    sx={{ "& svg": { height: "30px", width: "30px" } }}
                  >
                    Agenda uma demostraçõa
                    <Link href="/" passHref>
                      <Tooltip title="Agende uma demostração">
                        <ContentPasteSearchOutlined />
                      </Tooltip>
                    </Link>
                  </Box>
                </Box>
              </Box>
              <Box>
                <Image
                  alt="Tecnologia IoT avançada para conectar seus ativos"
                  src="/sensor01.svg"
                  height={450}
                  width={450}
                  quality={100}
                />
              </Box>
            </Box>
          </TabPanel>

          <TabPanel value={value} index={1} dir={theme.direction}>
            <Box
              display="flex"
              flexDirection={{ xs: "column-reverse", md: "row" }}
              alignItems={{ xs: "center", md: "normal" }}
              justifyContent={{ xs: "normal", md: "space-around" }}
            >
              <Box
                width={{ xs: "100%", md: "50%" }}
                display="flex"
                flexDirection="column"
                gap={5}
              >
                <Typography variant="h1" fontSize="2.25rem" textAlign="center">
                  Plataforma que trabalha por você
                </Typography>
                <Box>
                  <Typography variant="body1" fontSize="1.2rem">
                    Insights automáticos, detecção de folgas mecânica,
                    desalinhamento, desacoplamento e modelos de IA exclusivos da
                    Tractian para cada tipo de máquina.
                  </Typography>
                  <Box
                    mt={5}
                    display="flex"
                    alignItems={{ xs: "center" }}
                    flexDirection={{ xs: "column", md: "row" }}
                    gap={5}
                  >
                    {Equipment.map((Equipments) => (
                      <Box
                        key={Equipments.id}
                        height={{ xs: "100%", md: "220px" }}
                        width={{ xs: "100%", md: "180px" }}
                        p={1.5}
                        borderRadius={5}
                        fontSize="2.5rem"
                        border="2px solid #3399ff"
                        textAlign="center"
                        sx={{
                          transition: "0.5s",
                          "&:hover": {
                            filter: "brightness(1.2)",
                            transform: "translateY(-15px)",
                          },
                        }}
                      >
                        {Equipments.cardO}
                        <Typography textAlign="justify">
                          {Equipments.cardDescription}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
                <Box
                  sx={{
                    "& svg": {
                      height: "3.125rem",
                      width: "3.125rem",
                      cursor: "pointer",
                      "&:hover": {
                        color: "#3399ff",
                      },
                    },
                  }}
                >
                  <Box
                    display="flex"
                    fontSize="1.5rem"
                    gap={2}
                    sx={{ "& svg": { height: "30px", width: "30px" } }}
                  >
                    Agenda uma demostraçõa
                    <Link href="/" passHref>
                      <Tooltip title="Agende uma demostração">
                        <ContentPasteSearchOutlined />
                      </Tooltip>
                    </Link>
                  </Box>
                </Box>
              </Box>
              <Box>
                <Image
                  alt="Monitoramento Online"
                  src="/monito01.svg"
                  height={450}
                  width={450}
                  quality={100}
                />
              </Box>
            </Box>
          </TabPanel>

          <TabPanel value={value} index={2} dir={theme.direction}>
            <Box
              display="flex"
              flexDirection={{ xs: "column-reverse", md: "row" }}
              alignItems={{ xs: "center", md: "normal" }}
              justifyContent={{ xs: "normal", md: "space-around" }}
            >
              <Box
                width={{ xs: "100%", md: "50%" }}
                display="flex"
                flexDirection="column"
                gap={5}
              >
                <Typography variant="h1" fontSize="2.25rem" textAlign="center">
                  O Software de manutenção dos seus sonhos
                </Typography>
                <Box>
                  <Typography variant="body1" fontSize="1.2rem">
                    Use procedimentos online para organizar checklists e
                    inspeções. Centralize a rotina do seu time e potencialize as
                    atividades de cada colaborador através das automações e
                    métricas.
                  </Typography>
                  <Box
                    mt={5}
                    display="flex"
                    alignItems={{ xs: "center" }}
                    flexDirection={{ xs: "column", md: "row" }}
                    gap={5}
                  >
                    {Equipment.map((Equipments) => (
                      <Box
                        key={Equipments.id}
                        height={{ xs: "100%", md: "220px" }}
                        width={{ xs: "100%", md: "180px" }}
                        p={1.5}
                        borderRadius={5}
                        fontSize="2.5rem"
                        border="2px solid #3399ff"
                        textAlign="center"
                        sx={{
                          transition: "0.5s",
                          "&:hover": {
                            filter: "brightness(1.2)",
                            transform: "translateY(-15px)",
                          },
                        }}
                      >
                        {Equipments.cardO}
                        <Typography textAlign="justify">
                          {Equipments.cardDescription}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
                <Box
                  sx={{
                    "& svg": {
                      height: "3.125rem",
                      width: "3.125rem",
                      cursor: "pointer",
                      "&:hover": {
                        color: "#3399ff",
                      },
                    },
                  }}
                >
                  <Box
                    display="flex"
                    fontSize="1.5rem"
                    gap={2}
                    sx={{ "& svg": { height: "30px", width: "30px" } }}
                  >
                    Agenda uma demostraçõa
                    <Link href="/" passHref>
                      <Tooltip title="Agende uma demostração">
                        <ContentPasteSearchOutlined />
                      </Tooltip>
                    </Link>
                  </Box>
                </Box>
              </Box>
              <Box>
                <Image
                  alt="O Software de manutenção dos seus sonhos"
                  src="/gestao01.svg"
                  height={450}
                  width={450}
                  quality={100}
                />
              </Box>
            </Box>
          </TabPanel>
        </Box>
      </Box>
    </Box>
  );
}
