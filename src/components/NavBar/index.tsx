import * as React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  AppBar as MuiAppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Tooltip,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { IAppBarProps } from "../../types";

const pages = ["Soluções", "Sobre Nós", "Materiais Gratuitos", "Blog"];
const urls = ["/", "/#", "/#", "/#"];
const settings = ["Cadastrar", "Cliente"];

export default function AppBar({ HeadTitle }: IAppBarProps) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <Head>
        <title>{HeadTitle}</title>
      </Head>
      <MuiAppBar position="static" sx={{ bgcolor: "transparent" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ gap: 10 }}>
            <Box sx={{ display: { xs: "none", md: "inherit" } }}>
              <Image
                alt="Logo Tractian"
                src="/logo.svg"
                width={130}
                height={70}
                objectFit="contain"
                quality={100}
              />
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="primary"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Link href={urls[pages.indexOf(page)]} passHref>
                      <Typography
                        textAlign="center"
                        color="#000"
                        fontWeight="bold"
                      >
                        {page}
                      </Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <Box sx={{}}>
                <Image
                  alt="LogoJhonatas"
                  src="/logo.png"
                  width={130}
                  height={45}
                  objectFit="contain"
                  quality={100}
                />
              </Box>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  href={urls[pages.indexOf(page)]}
                  sx={{
                    fontSize: "1.125rem",
                    my: 2,
                    color: "white",
                    display: "block",
                    textTransform: "none",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open Login">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseNavMenu}>
                    <Link href={urls[settings.indexOf(setting)]} passHref>
                      <Typography
                        textAlign="center"
                        color="#000"
                        fontWeight="bold"
                      >
                        {setting}
                      </Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </MuiAppBar>
    </>
  );
}
