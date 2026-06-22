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
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { useRouter } from "next/router";
import { portfolioTheme } from "../common/portfolioTheme";

const pages = [
  {
    name: "Home",
    link: "/home",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "About",
    link: "/about",
  },

  {
    name: "Contact",
    link: "/contact",
  },
];

const drawerWidth = 240;

function NavBar() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const activeColor = portfolioTheme.purple;
  const mutedColor = portfolioTheme.mutedInk;
  const currentPath = router.asPath.split("?")[0] === "/" ? "/home" : router.asPath.split("?")[0];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navigateTo = (route, closeDrawer = false) => {
    if (closeDrawer) {
      handleDrawerClose();
    }

    if (route !== currentPath) {
      router.push(route);
    }
  };

  return (
    <AppBar
      sx={{
        borderBottom: `1px solid ${portfolioTheme.border}`,
        background: "rgba(255, 255, 255, 0.92)",
        backdropFilter: "blur(18px)",
        boxShadow: "none",
        transition: "background 240ms ease, border-color 240ms ease",
      }}
      position="fixed"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 72 } }}>
          <Box
            component="button"
            type="button"
            onClick={() => navigateTo("/home")}
            sx={{
              border: 0,
              background: "transparent",
              mr: 2,
              display: { xs: "none", md: "inline-flex" },
              alignItems: "center",
              gap: 1.25,
              color: portfolioTheme.ink,
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            <Box
              sx={{
                width: 26,
                height: 26,
                borderRadius: "9px",
                display: "grid",
                placeItems: "center",
                bgcolor: portfolioTheme.purple,
                color: "#fff",
                fontFamily: "poppins semibold",
                fontWeight: 800,
                lineHeight: 1,
              }}
            >
              U
            </Box>
            <Typography
              sx={{
                fontFamily: "poppins semibold",
                fontSize: 24,
                fontWeight: 800,
              }}
            >
              umesh<span style={{ color: portfolioTheme.purple }}>.dev</span>
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
                  background: portfolioTheme.surface,
                  color: portfolioTheme.ink,
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
                <ChevronLeftIcon />
              </IconButton>

              <Divider />
              <List>
                {pages.map((text, idx) => (
                  <ListItem key={idx} disablePadding>
                    <ListItemButton
                      onClick={() => navigateTo(text.link, true)}
                      selected={text.link === currentPath}
                      sx={{
                        color: activeColor,
                        textDecoration: "none",
                        fontWeight: text.link === currentPath ? 700 : 500,
                      }}
                    >
                      <ListItemText primary={text.name} />
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
            component="button"
            type="button"
            onClick={() => navigateTo("/home")}
            sx={{
              border: 0,
              background: "transparent",
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "poppins semibold",
              fontWeight: 700,
              letterSpacing: 0,
              color: portfolioTheme.ink,
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            umesh<span style={{ color: portfolioTheme.purple }}>.dev</span>
          </Typography>
          <Box
            sx={{
              flexGrow: 0,
              ml: "auto",
              mr: 2,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
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
                  <Button
                    type="button"
                    onClick={() => navigateTo(page.link)}
                    aria-current={page.link === currentPath ? "page" : undefined}
                    sx={{
                      color:
                        page.link === currentPath
                          ? activeColor
                          : mutedColor,
                      minWidth: "auto",
                      p: 0,
                      textDecoration: "none",
                      textTransform: "none",
                      fontWeight: page.link === currentPath ? 700 : 500,
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
                          page.link === currentPath
                            ? "scaleX(1)"
                            : "scaleX(0)",
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
                  >
                    {page.name}
                  </Button>
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
