import React from "react";
import Head from "next/head";
import { Box, Container } from "@mui/material";
import FeaturedProjects from "../../components/home/FeaturedProjects";
import HomeHero from "../../components/home/HomeHero";
import HomeStats from "../../components/home/HomeStats";
import HomeTechStack from "../../components/home/HomeTechStack";
import TrustedCompanies from "../../components/home/TrustedCompanies";
import WhatIDo from "../../components/home/WhatIDo";
import { homeTheme } from "../../components/home/homeTheme";

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Umesh Yadav | Frontend Engineer</title>
      </Head>

      <Box sx={{ bgcolor: "#FFFFFF", color: homeTheme.ink, minHeight: "100vh", pb: { xs: 6, md: 10 } }}>
        <Container maxWidth="xl" className="page-animate" sx={{ pt: { xs: 6, md: 8 } }}>
          <HomeHero />
          <HomeStats />
          <TrustedCompanies />
          <FeaturedProjects />
          <HomeTechStack />
          <WhatIDo />
        </Container>
      </Box>
    </React.Fragment>
  );
}

export default Home;
