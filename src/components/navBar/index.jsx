import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { Link } from "@mui/material";
import { useNavbarController } from "./navbar.controller";
import { useRouter } from "next/router";

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
  const activeColor = "#5B2EFF";
  const mutedColor = "#27324A";

  return (
    <AppBar
      sx={
        (classes[navRef.current],
        {
          borderBottom: "1px solid #E7EAF2",
          background: "rgba(255, 255, 255, 0.92)",
          backdropFilter: "blur(18px)",
          boxShadow: "none",
          transition: "background 240ms ease, border-color 240ms ease",
        })
      }
      position="fixed"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 72 } }}>
          <Box
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "inline-flex" },
              alignItems: "center",
              gap: 1.25,
              color: "#080B16",
              textDecoration: "none",
            }}
          >
            <Box
              sx={{
                width: 26,
                height: 26,
                borderRadius: "9px",
                display: "grid",
                placeItems: "center",
                bgcolor: "#5B2EFF",
                color: "#fff",
                fontFamily: "poppins semibold",
                fontWeight: 800,
                lineHeight: 1,
              }}
            >
              U
            </Box>
            <Typography sx={{ fontFamily: "poppins semibold", fontSize: 24, fontWeight: 800 }}>
              umesh<span style={{ color: "#5B2EFF" }}>.dev</span>
            </Typography>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="Open navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleDrawerOpen}
              sx={{ color: activeColor }}
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
                  p: 1,
                  background: "#FFFFFF",
                  color: "#080B16",
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
                        sx={{
                          color: activeColor,
                          textDecoration: "none",
                          fontWeight: text.link === router.pathname ? 700 : 500,
                        }}
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
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "poppins semibold",
              fontWeight: 700,
              letterSpacing: 0,
              color: "#080B16",
              textDecoration: "none",
            }}
          >
            umesh<span style={{ color: "#5B2EFF" }}>.dev</span>
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            <List
              style={{
                my: 2,
                color: activeColor,
                display: "flex",
                gap: "18px",
              }}
            >
              {pages.map((page, idx) => (
                <ListItem key={idx} sx={{ width: "auto" }}>
                  <Link
                    sx={{
                      color: page.link === router.pathname ? activeColor : mutedColor,
                      textDecoration: "none",
                      fontWeight: page.link === router.pathname ? 700 : 500,
                      position: "relative",
                      transition: "color 180ms ease",
                      "&:after": {
                        content: '""',
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: -8,
                        height: 2,
                        borderRadius: 2,
                        background: activeColor,
                        transform:
                          page.link === router.pathname ? "scaleX(1)" : "scaleX(0)",
                        transformOrigin: "left",
                        transition: "transform 180ms ease",
                      },
                      "&:hover": {
                        color: activeColor,
                      },
                      "&:hover:after": {
                        transform: "scaleX(1)",
                      },
                    }}
                    href={page.link}
                  >
                    {page.name}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>
          <Button
            href="/Umesh_Yadav_Resume.pdf"
            download
            variant="outlined"
            startIcon={<FileDownloadOutlinedIcon />}
            sx={{
              display: { xs: "none", sm: "inline-flex" },
              borderColor: activeColor,
              color: activeColor,
              borderRadius: 2,
              px: 2.5,
              py: 1,
              fontWeight: 700,
              "&:hover": {
                borderColor: "#4A20E8",
                bgcolor: "rgba(91, 46, 255, 0.06)",
              },
            }}
          >
            Download Resume
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
