import React, { useEffect, useMemo, useState } from "react";
import "../themes/fonts.scss";
import "../styles/globals.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useRouter } from "next/router";
import { Provider as ReduxProvider } from "react-redux";
import PublicLayout from "../components/layouts/publicLayout";
import { defaultTheme } from "../themes/defaultTheme";
import { store } from "../redux/store";
import { CookiesProvider } from "react-cookie";
import CommonLayout from "../components/layouts/commonLayout";
import AppLoader from "../components/Loader/AppLoader";
import { ToastContainer } from "react-toastify";
import { ThemeContext } from "@/components/themeContext";

function MyApp({ Component, pageProps }) {
  const path = useRouter();
  const isPublic = path.pathname.includes("/auth/");
  const isPrivate = path.pathname.includes("/user/");
  const Wrapper = isPublic ? PublicLayout : CommonLayout;
  const [isDarkMode, setIsDarkMode] = useState(false);
  const currentTheme = useMemo(
    () =>
      createTheme({
        ...defaultTheme,
        palette: {
          ...defaultTheme.palette,
          mode: isDarkMode ? "dark" : "light",
          background: {
            default: isDarkMode ? "#0F172A" : "#FFFFFF",
            paper: isDarkMode ? "#111827" : "#FFFFFF",
          },
          text: {
            primary: isDarkMode ? "#F8FAFC" : "#111827",
            secondary: isDarkMode ? "#CBD5E1" : "#475467",
            main: isDarkMode ? "#F8FAFC" : "#111827",
            white: "#EEEEEE",
          },
          divider: isDarkMode ? "rgba(71, 85, 105, 0.8)" : "rgba(226, 232, 240, 0.95)",
        },
      }),
    [isDarkMode]
  );

  useEffect(() => {
    // Fetch theme preference from local storage or any other storage mechanism
    const storedTheme = localStorage.getItem("isDarkMode");
    setIsDarkMode(storedTheme === "true");
  }, []);

  const toggleTheme = () => {
    // Toggle theme and store preference in local storage or any other storage mechanism
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem("isDarkMode", newTheme.toString());
  };

  useEffect(() => {
    document.body.dataset.theme = isDarkMode ? "dark" : "light";
  }, [isDarkMode]);

  return (
    <CookiesProvider>
      <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
        <ReduxProvider store={store}>
          <ThemeProvider theme={currentTheme}>
            <AppLoader />
            <Wrapper>
              <Component {...pageProps} />
            </Wrapper>
            <ToastContainer />
          </ThemeProvider>
        </ReduxProvider>
      </ThemeContext.Provider>
    </CookiesProvider>
  );
}

export default MyApp;
