import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import HomeHeroBanner from "../../assets/images/backgrounds/home-hero-banner.png";
import { homeTheme } from "./homeTheme";

const { purple, ink, body } = homeTheme;

function HomeHero() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", lg: "0.92fr 1.08fr" },
        gap: { xs: 6, lg: 8 },
        alignItems: "center",
      }}
    >
      <Stack spacing={3} className="page-animate stagger-1">
        <Chip
          icon={<CodeOutlinedIcon sx={{ color: `${purple} !important` }} />}
          label="Frontend Engineer"
          sx={{
            width: "fit-content",
            borderRadius: 2,
            bgcolor: "rgba(91, 46, 255, 0.1)",
            color: purple,
            fontWeight: 800,
            px: 1,
          }}
        />

        <Typography
          component="h1"
          sx={{
            maxWidth: 650,
            color: ink,
            fontSize: { xs: 42, sm: 58, lg: 68 },
            lineHeight: 1.08,
            fontWeight: 900,
          }}
        >
          Building scalable{" "}
          <Box component="span" sx={{ color: purple }}>
            e-commerce, SaaS &
          </Box>{" "}
          AI products that users love.
        </Typography>

        <Typography sx={{ maxWidth: 620, color: body, fontSize: { xs: 16, sm: 18 }, lineHeight: 1.75 }}>
          4.5+ years of experience building high-performance web and mobile applications
          with React, Next.js and modern technologies. I help businesses build products
          that scale and create impact.
        </Typography>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
          <Button
            href="/projects"
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{
              bgcolor: purple,
              borderRadius: 2,
              px: 3,
              py: 1.35,
              fontWeight: 800,
              boxShadow: "0 16px 34px rgba(91, 46, 255, 0.28)",
              "&:hover": { bgcolor: "#4A20E8" },
            }}
          >
            View My Projects
          </Button>
          <Button
            href="/contact"
            variant="outlined"
            startIcon={<MailOutlineIcon />}
            sx={{
              borderColor: purple,
              color: purple,
              borderRadius: 2,
              px: 3,
              py: 1.35,
              fontWeight: 800,
              "&:hover": { borderColor: "#4A20E8", bgcolor: "rgba(91, 46, 255, 0.06)" },
            }}
          >
            Contact Me
          </Button>
        </Stack>
      </Stack>

      <Box
        className="page-animate stagger-2"
        sx={{
          position: "relative",
          minHeight: { xs: 300, sm: 420, lg: 560 },
          display: "grid",
          placeItems: "center",
          "&:before": {
            content: '""',
            position: "absolute",
            inset: "0 4% 0",
            borderRadius: "50%",
            background: "repeating-radial-gradient(circle, rgba(91,46,255,.16) 0 1px, transparent 1px 28px)",
            opacity: 0.75,
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: { xs: 620, lg: 820 },
            ml: { lg: 2 },
            borderRadius: { xs: 2, md: 3 },
            overflow: "hidden",
            filter: "drop-shadow(0 36px 70px rgba(91, 46, 255, 0.18))",
          }}
        >
          <Image
            src={HomeHeroBanner}
            alt="E-commerce, SaaS, and AI project showcase"
            priority
            style={{ width: "100%", height: "auto", display: "block" }}
            sizes="(max-width: 900px) 100vw, 52vw"
          />
        </Box>
      </Box>
    </Box>
  );
}

export default HomeHero;
