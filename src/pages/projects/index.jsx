import React from "react";
import Head from "next/head";
import { Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import SideImage from "../../assets/images/backgrounds/project.jpg";
import StropeAI from "../../assets/images/backgrounds/strope.jpg";
import Customer from "../../assets/images/backgrounds/customer.jpg";
import Simplee from "../../assets/images/backgrounds/simplee.jpg";
import Seller from "../../assets/images/backgrounds/seller.jpg";

function Projects() {
  const projectDeatils = [
    {
      image: StropeAI,
      name: "Strope.AI",
      url: "https://strope.ai",
      techStack: "HTML,CSS,Javascript,React Js,Next Js,Redux,Mui",
      descprition:
        "Strope AI, a user-friendly model, streamlines app development by allowing users to select a category that best fits their app. After understanding user preferences, it guides them to a template selection page, where they can customize features based on the chosen template. The model then computes the estimated cost and development time for the selected features, providing a comprehensive overview for efficient decision-making.",
    },
    {
      image: Customer,
      name: "NFX Customer ",
      url: "https://dev.customer.nfx-seller.foxlabs.in/",
      techStack: "HTML,CSS,Javascript,React Js,Next Js,Redux,Mui",
      descprition:
        "NFX E-commerce project is a robust online marketplace designed to revolutionize your shopping experience. With a user-friendly interface, customers can effortlessly browse an extensive range of products, make secure transactions, and enjoy personalized recommendations. The platform ensures a seamless shopping journey, incorporating features like real-time inventory updates, secure payment gateways, and a responsive customer support system. From dynamic product listings to a smooth checkout process, our E-commerce project is tailored for both merchants and consumers, promising a convenient and enjoyable online shopping environment. ",
    },
    {
      image: Simplee,
      name: "Simplee",
      url: "https://dev.investor.simplee.foxlabs.in/auth/login",
      techStack: "HTML,CSS,Javascript,React Js,Next Js,Redux,Mui",
      descprition:
        "Simplee is a comprehensive real estate business project with dual panels for Admin and Investors. The Investor panel offers key features such as property distribution, sponsorship options, and banking functionalities. Investors can seamlessly invest in properties or acquire equity on the platform, enhancing their portfolio. The banking feature facilitates easy fund management, allowing users to add or transfer money securely between entities. Simplee provides a user-friendly interface that empowers investors to make informed decisions and actively participate in the dynamic real estate market.",
    },
    {
      image: Seller,
      name: "NFX Seller",
      url: "https://dev.nfx-seller.foxlabs.in",
      techStack: "HTML,CSS,Javascript,React Js,Next Js,Redux,Mui",
      descprition:
        "NFX seller panel is a powerful tool for merchants, providing a centralized hub for managing their online business. Sellers can efficiently add, update, and organize product listings, ensuring a dynamic and attractive storefront. The panel offers real-time analytics, enabling sellers to track sales performance and customer behavior for informed decision-making. Additionally, order management features streamline the fulfillment process, while integrated communication tools facilitate direct interaction with customers. With secure payment processing and inventory management capabilities, the E-commerce seller panel empowers merchants to optimize their operations and enhance the overall customer shopping experience.",
    },
  ];

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
          {projectDeatils.map((item, index) => (
            <Grid item key={index} xs={6}>
              <Grid item p={2}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "#6941C6" }}
                >
                  <Typography variant="p1" sx={{ textDecoration: "underline" }}>
                    {item.name}
                  </Typography>
                </a>

                <Grid item>
                  <Typography variant="p1">
                    Tech Stack:{item.techStack}
                  </Typography>
                </Grid>
                <Grid item p={1}>
                  <Image
                    src={item.image}
                    width={620}
                    height={320}
                    alt="img"
                    style={{ borderRadius: "12px" }}
                  />
                </Grid>

                <Grid item>
                  <Typography variant="p2">{item.descprition}</Typography>
                </Grid>
              </Grid>{" "}
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default Projects;
