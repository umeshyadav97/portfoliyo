import React from "react";
import Head from "next/head";
import { Box, Container } from "@mui/material";
import AboutApproach from "../../components/about/AboutApproach";
import AboutCTA from "../../components/about/AboutCTA";
import AboutHero from "../../components/about/AboutHero";
import AboutTechStack from "../../components/about/AboutTechStack";
import ExperienceHighlights from "../../components/about/ExperienceHighlights";
import { aboutTheme } from "../../components/about/aboutTheme";

function About() {
  return (
    <React.Fragment>
      <Head>
        <title>About Umesh Yadav</title>
      </Head>

      <Box
        sx={{
          bgcolor: "#FFFFFF",
          color: aboutTheme.ink,
          minHeight: "100vh",
          pb: { xs: 6, md: 10 },
        }}
      >
        <Container maxWidth="xl" className="page-animate" sx={{ pt: { xs: 5, md: 7 } }}>
          <AboutHero />
          <AboutApproach />
          <AboutTechStack />
          <ExperienceHighlights />
          <AboutCTA />
        </Container>
      </Box>
    </React.Fragment>
  );
}

export default About;
