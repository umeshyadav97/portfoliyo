import React from "react";
import { Box, Chip, Container, Stack, Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Background from "../../assets/images/backgrounds/about-me.svg";

const strengths = [
  "React and Next.js interfaces",
  "Responsive dashboard workflows",
  "E-commerce and seller panels",
  "Banking and payment integrations",
];

const highlights = [
  { label: "Focus", value: "Frontend Engineering" },
  { label: "Domains", value: "Real Estate, E-commerce, Banking" },
  { label: "Location", value: "Varanasi, India" },
];

function About() {
  return (
    <React.Fragment>
      <Head>
        <title>About Umesh Yadav</title>
      </Head>
      <Container maxWidth="xl" className="page-animate" sx={{ py: { xs: 6, sm: 8, md: 10 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "0.9fr 1.1fr" },
            gap: { xs: 5, md: 8 },
            alignItems: "center",
            minHeight: { md: "calc(100vh - 160px)" },
          }}
        >
          <Box
            className="page-animate stagger-1"
            sx={{
              borderRadius: 3,
              overflow: "hidden",
              bgcolor: "background.paper",
              border: "1px solid",
              borderColor: "divider",
              boxShadow: "0 24px 70px rgba(15, 23, 42, 0.12)",
              p: { xs: 2, sm: 4 },
            }}
          >
            <Image
              src={Background}
              width={560}
              height={560}
              alt="Frontend developer workspace illustration"
              style={{ width: "100%", height: "auto" }}
            />
          </Box>

          <Stack spacing={3} className="page-animate stagger-2">
            <Chip
              label="About Me"
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
                fontSize: { xs: 34, sm: 44, md: 52 },
                lineHeight: 1.12,
                color: "text.primary",
              }}
            >
              A dedicated frontend developer who cares about useful, reliable UI.
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "text.secondary",
                lineHeight: 1.75,
                fontSize: { xs: 16, sm: 18 },
              }}
            >
              I build clean, responsive web products with React, JavaScript, Next.js,
              Material UI, Tailwind CSS, HTML, and CSS. My work spans real estate,
              e-commerce, and banking products, where the interface needs to be fast,
              clear, and easy for real users to operate.
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "text.secondary",
                lineHeight: 1.75,
                fontSize: { xs: 16, sm: 18 },
              }}
            >
              I also value communication and steady learning. That combination helps
              me work well with product, design, backend, and client teams while keeping
              the frontend practical and maintainable.
            </Typography>

            <Stack direction="row" spacing={1.25} flexWrap="wrap" useFlexGap>
              {strengths.map((item) => (
                <Chip
                  key={item}
                  label={item}
                  variant="outlined"
                  sx={{ borderRadius: 2, bgcolor: "background.paper" }}
                />
              ))}
            </Stack>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
                gap: 2,
                pt: 2,
              }}
            >
              {highlights.map((item) => (
                <Box
                  key={item.label}
                  sx={{
                    p: 2.5,
                    borderRadius: 2,
                    bgcolor: "background.paper",
                    border: "1px solid",
                    borderColor: "divider",
                  }}
                >
                  <Typography variant="label" sx={{ color: "primary.main" }}>
                    {item.label}
                  </Typography>
                  <Typography sx={{ mt: 1, fontWeight: 700, color: "text.primary" }}>
                    {item.value}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Stack>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default About;
