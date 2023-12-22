import { useEffect, useRef, useState } from "react";
import { useTheme } from "@mui/system";
import { useRouter } from "next/router";

const useStyles = () => {
  const theme = useTheme();
  return {
    appBarTransparent: {
      backgroundColor: "transparent",
      boxShadow: "none ",
      transition: "0.3s, backgroundColor",
    },
    appBarSolid: {
      backgroundColor: `${theme.palette.secondary.main} `,
      transition: "0.3s, backgroundColor ",
      boxShadow: "0px 2px 10px gray;",
    },
  };
};

export function useNavbarController() {
  const [navBackground, setNavBackground] = useState("appBarTransparent");
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const navRef = useRef();
  const theme = useTheme();
  const classes = useStyles();
  const router = useRouter();

  navRef.current = navBackground;

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 20;
      if (show) {
        setNavBackground("appBarSolid");
      } else {
        setNavBackground("appBarTransparent");
      }
    };
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navigate = (route) => {
    router.push(route);
  };

  return {
    open,
    theme,
    classes,
    handleDrawerOpen,
    handleDrawerClose,
    navRef,
    navBackground,
    isLoggedIn,
    navigate,
  };
}
