import React from "react"
import { Container, Grid, Typography } from "@mui/material"
import Head from "next/head"
import Image from "next/image"
import Background from "../../assets/images/backgrounds/about-me.svg"
import { useTheme } from "@mui/system"

function About() {
  const theme = useTheme()
  return (
    <React.Fragment>
      <Head>
        <title>About Me</title>
      </Head>
      <Container sx={{ p: 4, marginTop: "auto" }} maxWidth="xl">
        <Grid container alignItems="center" spacing={8} style={{ height: "90vh" }}>
          <Grid item xs={5} display="flex" justifyContent="flex-end">
            {" "}
            <Grid item>
              {" "}
              <Image
                src={Background}
                // src="/_next/static/media/about-me.6644cb4b.svg"
                width={520}
                height={520}
                alt="img"
                style={{ borderRadius: "12px" }}
              />
            </Grid>
          </Grid>
          <Grid item xs={6} alignItems="center">
            <Grid item>
              <Typography variant="c2" sx={{ color: theme.palette.primary.main }}>
                About Me
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h4">
                A dedicated Front-End Developer based on Varanasi India
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">
                As a Software Engineer One of my strengths lies in my commitment to continuous
                learning. I consistently stay updated with the latest industry trends and emerging
                technologies to ensure that the solutions I design are innovative and
                forward-looking. My journey in software development has provided me with a broad
                skill set that spans various domains, including Real Estate, E-commerce, and
                Banking. I am well-versed in a range of technologies such as React, JavaScript,
                Next.js, HTML, CSS, Java, TypeScript, and Node.js. This diverse background has not
                only honed my technical abilities but also equipped me with a unique perspective on
                how technology can be leveraged to address specific challenges within different
                industries. One of the aspects that sets me apart is my strong commitment to
                delivering exceptional results. I pride myself on my ability to take ownership of
                projects, work collaboratively, and drive innovation. In my previous roles, I have
                contributed to the development of cutting-edge web applications that have positively
                impacted user experiences and business outcomes.This holistic approach has given me
                insights into how each piece of code contributes to the bigger picture and helps
                achieve business goals.In addition to my technical skills, I possess excellent
                communication and interpersonal skills. I believe that clear and effective
                communication is crucial for successful collaboration with cross-functional teams,
                stakeholders, and clients.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  )
}

export default About
