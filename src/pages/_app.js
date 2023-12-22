// import '@/styles/globals.css'

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }
import React from "react";
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

function MyApp({ Component, pageProps }) {
  const currentTheme = createTheme(defaultTheme);
  const path = useRouter();
  const isPublic = path.pathname.includes("/auth/");
  const isPrivate = path.pathname.includes("/user/");

  const Wrapper = isPublic ? PublicLayout : CommonLayout;

  return (
    <CookiesProvider>
      <ReduxProvider store={store}>
        <ThemeProvider theme={currentTheme}>
          <AppLoader />
          <Wrapper>
            <Component {...pageProps} />
          </Wrapper>
          <ToastContainer />
        </ThemeProvider>
      </ReduxProvider>
    </CookiesProvider>
  );
}

export default MyApp;
