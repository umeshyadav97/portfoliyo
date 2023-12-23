import React from "react"
import Head from "next/head"
import { Box, Divider, Typography } from "@mui/material"
import Image from "next/image"
import Linkdien from "../../assets/images/icons/linkdien.svg"
import Github from "../../assets/images/icons/github.svg"
import { keyframes } from "@emotion/react"
import HTML from "../../assets/images/icons/html.svg";
import CSS from "../../assets/images/icons/css.svg";
import JS from "../../assets/images/icons/js.svg";
import ReactImage from "../../assets/images/icons/react.svg";
import Next from "../../assets/images/icons/next.svg";
import Mui from "../../assets/images/icons/mui.svg";
import Tailwind from "../../assets/images/icons/tailwind.svg";

function Home() {
  const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
`
   const techStackList = [
    { id: 1, src: HTML, alt: "Image 1" },
    { id: 2, src: CSS, alt: "Image 2" },
    { id: 3, src: JS, alt: "Image 3" },
    { id: 4, src: React, alt: "Image 4" },
    { id: 5, src: Next, alt: "Image 5" },
    { id: 6, src: Mui, alt: "Image 6" },
    { id: 7, src: Tailwind, alt: "Image 7" },
  ];
  const Linkedin = "https://www.linkedin.com/in/umeshyadav97"
  const Git = "https://github.com/umeshyadav97"
  return (
    <React.Fragment>
      <Head>
        <title>Home</title>
      </Head>

      <Box display="flex" justifyContent="center" alignItems="center" style={{ height: "90vh" }}>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Box xs={6}>
            <Box>
              <Typography variant="h3" component="div">
                Front-End React
                <br />
                Developer
              </Typography>
            </Box>
            <Box pt={2}>
              <Typography variant="h5">
                Hi, I am Umesh Yadav. A passionate Front-end React and
                <br />
                Next Developer based in Varanasi India
              </Typography>
            </Box>
            <Box container spacing={2} py={2} display="flex" alignItems="center">
              <Box item>
                <a href={Linkedin} target="_blank" rel="noopener noreferrer">
                  <Image src={Linkdien} width={30} height={30} alt="img" />
                </a>
              </Box>
              <Box item>
                <a href={Git} target="_blank" rel="noopener noreferrer">
                  <Image src={Github} width={25} height={25} alt="img" />
                </a>
              </Box>
            </Box>
            <Box container pt={10} display="flex">
              <Box item pr={2}>
                <Typography>Tech Stack</Typography>
              </Box>
              <Divider
                orientation="vertical"
                flexItem
                style={{ width: "1px ", background: "black", height: "25px" }}
              />
              <Box item display="flex" pl={2}>
                {techStackList.map((item, index) => (
                  <Box item key={index} mr={2}>
                    <Image src={item.src} width={30} height={30} alt="tech" />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
          <Box xs={6} style={{ position: "relative", overflow: "hidden" }}>
            <Image
              src="/_next/static/media/profile-1.2359b116.png"
              width={330}
              height={330}
              priority
              alt="img"
              style={{
                borderRadius: "50%",
                animation: `${rotateAnimation} 4s infinite`
              }}
            />
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  )
}

export default Home


