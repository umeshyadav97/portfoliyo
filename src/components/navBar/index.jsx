import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
// import Button from "@mui/material/Button"
import AdbIcon from "@mui/icons-material/Adb";
import Drawer from "@mui/material/Drawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { Link } from "@mui/material";
import { useNavbarController } from "./navbar.controller";
import { useRouter } from "next/router";
import Image from "next/image";
import LightTheme from "../../assets/images/icons/light.svg";
import DarkTheme from "../../assets/images/icons/dark.svg";
import { ThemeContext } from "../themeContext";

const pages = [
  {
    name: "Home",
    link: "/home",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Projects",
    link: "/projects",
  },

  {
    name: "Contact",
    link: "/contact",
  },
];

const drawerWidth = 240;

function NavBar() {
  const { open, theme, classes, handleDrawerOpen, handleDrawerClose, navRef } =
    useNavbarController();
  const router = useRouter();
  const { isDarkMode, toggleTheme } = React.useContext(ThemeContext);

  return (
    <AppBar
      sx={
        (classes[navRef.current],
        {
          borderBottom: "1px solid #EAECF0",
          background: isDarkMode ? "#ffffff" : "#000000",
        })
      }
      position="fixed"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              color: theme.palette.primary.main,
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: theme.palette.primary.main,
              textDecoration: "none",
            }}
          >
            umesh.dev
          </Typography>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleDrawerOpen}
              color={theme.palette.primary.main}
            >
              <MenuIcon />
            </IconButton>

            <Drawer
              sx={{
                width: 0,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                  width: drawerWidth,
                  boxSizing: "border-box",
                },
              }}
              variant="persistent"
              anchor="left"
              open={open}
            >
              <IconButton
                sx={{ display: "flex", justifyContent: "end" }}
                onClick={handleDrawerClose}
              >
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>

              <Divider />
              <List>
                {pages.map((text, idx) => (
                  <ListItem key={idx} disablePadding>
                    <ListItemButton>
                      <Link
                        href={text.link}
                        sx={{ textDecoration: "underline" }}
                      >
                        <ListItemText primary={text.name} />
                      </Link>
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Divider />
            </Drawer>
          </Box>
          <AdbIcon
            sx={{
              display: { xs: "flex", md: "none" },
              mr: 1,
              color: theme.palette.primary.main,
            }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: theme.palette.primary.main,
              textDecoration: "none",
            }}
          >
            umesh.dev
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            <List
              style={{
                my: 2,
                color: theme.palette.primary.main,
                display: "flex",
              }}
            >
              {pages.map((page, idx) => (
                <ListItem key={idx} sx={{ width: "auto" }}>
                  <Link
                    sx={{
                      textDecoration:
                        page.link === router.pathname ? "underline" : "none",
                      variant: "inherit",
                    }}
                    href={page.link}
                  >
                    {page.name}
                  </Link>
                </ListItem>
              ))}
            </List>
            <Box
              display="flex"
              alignItems="center"
              onClick={() => toggleTheme()}
              sx={{ cursor: "pointer" }}
            >
              <Image
                src={isDarkMode ? LightTheme : DarkTheme}
                alt="theme"
                height={25}
                width={25}
              />
            </Box>
          </Box>

          {/* {!isLoggedIn && (
            <>
              <Button
                color="primary"
                onClick={() => navigate("/auth/login")}
                className={navBackground}
                sx={{
                  background: theme.palette.primary.main,
                  color: theme.palette.secondary.main,
                  marginRight: "10px"
                }}>
                Login
              </Button>
              <Button
                color="primary"
                onClick={() => navigate("/auth/signup")}
                className={navBackground}
                sx={{
                  background: theme.palette.primary.main,
                  color: theme.palette.secondary.main
                }}>
                Sign Up
              </Button>
            </>
          )} */}

          {/* {isLoggedIn && (
            <Button
              color="primary"
              onClick={logout}
              className={navBackground}
              sx={{
                background: theme.palette.primary.main,
                color: theme.palette.secondary.main,
                marginRight: "10px"
              }}>
              Logout
            </Button>
          )} */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
