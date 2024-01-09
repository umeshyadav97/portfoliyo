import React from "react";
import Head from "next/head";
import { Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import SideImage from "../../assets/images/backgrounds/project.jpg";
import ProjectData from "../../components/projectData";

function Projects() {
  return (
    <React.Fragment>
      <Head>
        <title>Projects</title>
      </Head>
      <Container sx={{ p: 4, marginTop: "auto" }} maxWidth="xl">
        <Grid container spacing={8}>
          <Grid item xs={8}>
            <Grid item>
              <Typography variant="h7">
                Coding Chronicles: Crafting Impactful Software Solutions for a
                Digital Revolution
              </Typography>{" "}
            </Grid>
            <Grid item pt={3}>
              <Typography variant="h5">
                Explore my diverse Frontend Developer Portfolio, showcasing
                expertise in crafting seamless E-commerce experiences. I
                specialize in designing comprehensive admin and seller panel
                dashboards, including product management, appointments, and
                integrated chat functionalities. My proficiency extends to
                Banking Integration, where I have seamlessly incorporated ACH
                and Wire transfers, along with dashboard development.
                Additionally, witness the power of Strope AI, a revolutionary
                module enabling project estimation based on selected templates
                and features. Navigate through a dynamic showcase of my frontend
                prowess, where innovation meets user-centric design for
                unparalleled digital experiences.
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Image
              src={SideImage}
              width={420}
              height={320}
              alt="img"
              style={{ borderRadius: "12px" }}
            />
          </Grid>
        </Grid>
        <Grid container py={4} spacing={2}>
          <ProjectData />
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default Projects;
