import React, { useEffect, useState } from "react";
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
  const currentTheme = createTheme(defaultTheme);
  const path = useRouter();
  const isPublic = path.pathname.includes("/auth/");
  const isPrivate = path.pathname.includes("/user/");
  const Wrapper = isPublic ? PublicLayout : CommonLayout;
  const [isDarkMode, setIsDarkMode] = useState(true);

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
    document.body.dataset.theme = isDarkMode ? "light" : "dark";
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
