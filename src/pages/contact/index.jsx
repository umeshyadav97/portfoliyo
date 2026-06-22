import React from "react";
import Head from "next/head";
import { Box, Container } from "@mui/material";
import ContactCTA from "../../components/contact/ContactCTA";
import ContactIntro from "../../components/contact/ContactIntro";
import ContactMethods from "../../components/contact/ContactMethods";
import { contactTheme } from "../../components/contact/contactTheme";

function Contact() {
  return (
    <React.Fragment>
      <Head>
        <title>Contact Umesh Yadav</title>
      </Head>

      <Box
        sx={{
          bgcolor: "#FFFFFF",
          color: contactTheme.ink,
          minHeight: "100vh",
          pb: { xs: 6, md: 10 },
        }}
      >
        <Container maxWidth="xl" className="page-animate" sx={{ pt: { xs: 5, md: 7 } }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", lg: "0.85fr 1.15fr" },
              gap: { xs: 5, md: 8 },
              alignItems: "start",
            }}
          >
            <ContactIntro />
            <ContactMethods />
          </Box>
          <ContactCTA />
        </Container>
      </Box>
    </React.Fragment>
  );
}

export default Contact;
