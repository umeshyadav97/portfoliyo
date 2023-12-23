import React from "react"
import { Container, Grid, Paper, Typography } from "@mui/material"
import Head from "next/head"
import Image from "next/image"
import Linkdien from "../../assets/images/icons/linkdien.svg"
import Gmail from "../../assets/images/icons/gmail.svg"
import Github from "../../assets/images/icons/github.svg"
import Mobile from "../../assets/images/icons/mobile.svg"

function Contact() {
  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`
  }
  const Linkedin = "https://www.linkedin.com/in/umeshyadav97"
  const Git = "https://github.com/umeshyadav97"
  return (
    <React.Fragment>
      <Head>
        <title>Contact Me</title>
      </Head>
      <Container sx={{ p: 4, background: "#RRGGBB", height: "91vh" }} maxWidth="xl">
        <Grid item>
          <Grid container>
            <Typography variant="h7">Lets Get in Touch: Ways to Connect with Me</Typography>
          </Grid>
          <Grid container pt={8} justifyContent="center">
            <Paper
              sx={{
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                padding: "2px 0px 10px 0px",
                borderRadius: "4px"
              }}>
              <Grid item p={5}>
                <Grid
                  container
                  spacing={2}
                  p={2}
                  alignItems="center"
                  onClick={() => handleEmailClick("umtp97@gmail.com")}
                  style={{ cursor: "pointer" }}>
                  <Grid item>
                    <Image src={Gmail} width={20} height={20} alt="icon" />
                  </Grid>
                  <Grid item>
                    <Typography variant="h5" sx={{ textDecoration: "underline" }}>
                      umtp97@gmail.com
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  container
                  spacing={2}
                  p={2}
                  alignItems="center"
                  onClick={() => handleEmailClick("umeshyadava099@gmail.com")}
                  style={{ cursor: "pointer" }}>
                  <Grid item>
                    <Image src={Gmail} width={20} height={20} alt="gmail" />
                  </Grid>
                  <Grid item>
                    <Typography variant="h5" sx={{ textDecoration: "underline" }}>
                      umeshyadava099@gmail.com
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={2} p={2} alignItems="center">
                  <Grid item>
                    <Image src={Mobile} width={20} height={20} alt="gmail" />
                  </Grid>
                  <Grid item>
                    <Typography>+91 8318664763,+91 9458631720</Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={2} p={2} alignItems="center">
                  <Grid item>
                    <a href={Linkedin} target="_blank" rel="noopener noreferrer">
                      <Image src={Linkdien} width={30} height={30} alt="LinkedIn" />
                    </a>
                  </Grid>
                  <Grid item>
                    <a href={Linkedin} target="_blank" rel="noopener noreferrer">
                      <Typography variant="h5" sx={{ textDecoration: "underline" }}>
                        Linkedin
                      </Typography>
                    </a>
                  </Grid>
                </Grid>
                <Grid container spacing={2} px={2} py={1} alignItems="center">
                  <Grid item>
                    <a href={Git} target="_blank" rel="noopener noreferrer">
                      <Image src={Github} width={30} height={30} alt="git" />
                    </a>
                  </Grid>
                  <Grid item>
                    <a href={Git} target="_blank" rel="noopener noreferrer">
                      <Typography variant="h5" sx={{ textDecoration: "underline" }}>
                        Github
                      </Typography>
                    </a>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  )
}

export default Contact
