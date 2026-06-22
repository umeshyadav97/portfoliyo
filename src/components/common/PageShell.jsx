import Head from "next/head";
import { Box, Container } from "@mui/material";
import { portfolioTheme } from "./portfolioTheme";

function PageShell({
  title,
  children,
  color = portfolioTheme.ink,
  containerSx,
  contentSx,
}) {
  return (
    <>
      {title ? (
        <Head>
          <title>{title}</title>
        </Head>
      ) : null}

      <Box
        sx={{
          bgcolor: portfolioTheme.surface,
          color,
          minHeight: "100vh",
          pb: { xs: 6, md: 10 },
          ...contentSx,
        }}
      >
        <Container
          maxWidth="xl"
          className="page-animate"
          sx={{
            pt: { xs: 5, md: 7 },
            ...containerSx,
          }}
        >
          {children}
        </Container>
      </Box>
    </>
  );
}

export default PageShell;
