import React from "react";
import { Box, Chip, Container, Stack, Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Linkdien from "../../assets/images/icons/linkdien.svg";
import Gmail from "../../assets/images/icons/gmail.svg";
import Github from "../../assets/images/icons/github.svg";
import Mobile from "../../assets/images/icons/mobile.svg";

const contactItems = [
  {
    label: "Primary Email",
    value: "umtp97@gmail.com",
    href: "mailto:umtp97@gmail.com",
    icon: Gmail,
  },
  {
    label: "Alternate Email",
    value: "umeshyadava099@gmail.com",
    href: "mailto:umeshyadava099@gmail.com",
    icon: Gmail,
  },
  {
    label: "Phone",
    value: "+91 8318664763, +91 9458631720",
    href: "tel:+918318664763",
    icon: Mobile,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/umeshyadav97",
    href: "https://www.linkedin.com/in/umeshyadav97",
    icon: Linkdien,
  },
  {
    label: "GitHub",
    value: "github.com/umeshyadav97",
    href: "https://github.com/umeshyadav97",
    icon: Github,
  },
];

function Contact() {
  return (
    <React.Fragment>
      <Head>
        <title>Contact Umesh Yadav</title>
      </Head>
      <Container
        maxWidth="xl"
        className="page-animate"
        sx={{
          minHeight: { md: "calc(100vh - 72px)" },
          display: "flex",
          alignItems: "center",
          py: { xs: 6, sm: 8, md: 10 },
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "0.9fr 1.1fr" },
            gap: { xs: 4, md: 7 },
            alignItems: "start",
          }}
        >
          <Stack spacing={2.5} className="page-animate stagger-1">
            <Chip
              label="Contact"
              sx={{
                width: "fit-content",
                borderRadius: 2,
                bgcolor: "rgba(105, 65, 198, 0.12)",
                color: "primary.main",
                fontWeight: 700,
              }}
            />
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: 34, sm: 44, md: 54 },
                lineHeight: 1.12,
                color: "text.primary",
              }}
            >
              Let us build a clear, responsive frontend together.
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "text.secondary",
                lineHeight: 1.75,
                fontSize: { xs: 16, sm: 18 },
              }}
            >
              I am open to frontend roles and product work involving React, Next.js,
              dashboards, e-commerce interfaces, and responsive UI systems.
            </Typography>
          </Stack>

          <Box
            className="page-animate stagger-2"
            sx={{
              display: "grid",
              gap: 1.5,
            }}
          >
            {contactItems.map((item) => (
              <Box
                key={item.label}
                component="a"
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                sx={{
                  display: "grid",
                  gridTemplateColumns: "44px 1fr auto",
                  gap: 2,
                  alignItems: "center",
                  p: { xs: 2, sm: 2.5 },
                  borderRadius: 2,
                  bgcolor: "background.paper",
                  border: "1px solid",
                  borderColor: "divider",
                  boxShadow: "0 16px 42px rgba(15, 23, 42, 0.08)",
                  color: "text.primary",
                  transition: "transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease",
                  minWidth: 0,
                  "&:hover": {
                    transform: "translateY(-4px)",
                    borderColor: "rgba(105, 65, 198, 0.4)",
                    boxShadow: "0 24px 58px rgba(15, 23, 42, 0.13)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    display: "grid",
                    placeItems: "center",
                    borderRadius: 2,
                    bgcolor: "rgba(105, 65, 198, 0.1)",
                  }}
                >
                  <Image src={item.icon} width={24} height={24} alt="" />
                </Box>
                <Box sx={{ minWidth: 0 }}>
                  <Typography variant="label" sx={{ color: "primary.main" }}>
                    {item.label}
                  </Typography>
                  <Typography
                    sx={{
                      mt: 0.5,
                      fontWeight: 700,
                      overflowWrap: "anywhere",
                      color: "text.primary",
                    }}
                  >
                    {item.value}
                  </Typography>
                </Box>
                <ArrowForwardIcon sx={{ color: "primary.main" }} />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default Contact;
