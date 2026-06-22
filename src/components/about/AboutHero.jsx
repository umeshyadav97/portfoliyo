import { Box, Chip, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Background from "../../assets/images/backgrounds/image.png";
import AboutIcon from "./AboutIcon";
import { heroStats, strengths } from "./aboutData";
import { aboutTheme } from "./aboutTheme";

const { purple, ink, body, border } = aboutTheme;

function AboutHero() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", lg: "0.78fr 1.22fr" },
        gap: { xs: 5, md: 8 },
        alignItems: "center",
        mb: { xs: 6, md: 8 },
      }}
    >
      <Box
        className="page-animate stagger-1"
        sx={{
          width: "100%",
          maxWidth: { xs: 420, sm: 460, lg: 500 },
          justifySelf: { xs: "center", lg: "start" },
          borderRadius: 3,
          overflow: "hidden",
          bgcolor: "#fff",
          border: `1px solid ${border}`,
          boxShadow: "0 24px 70px rgba(35, 24, 92, 0.1)",
          p: 1.5,
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "relative",
            aspectRatio: { xs: "4 / 3", sm: "1 / 1", lg: "4 / 5" },
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <Image
            src={Background}
            fill
            alt="Professional frontend workspace with laptop and code"
            style={{ objectFit: "cover" }}
            sizes="(max-width: 600px) 90vw, (max-width: 1200px) 460px, 500px"
            priority
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            left: 28,
            bottom: 28,
            px: 2,
            py: 1.2,
            borderRadius: 2,
            bgcolor: "rgba(255,255,255,0.9)",
            border: `1px solid ${border}`,
            boxShadow: "0 14px 36px rgba(35, 24, 92, 0.12)",
            backdropFilter: "blur(12px)",
          }}
        >
          <Typography sx={{ color: ink, fontWeight: 900, fontSize: 14 }}>Frontend focused</Typography>
          <Typography sx={{ color: body, fontSize: 12 }}>Performance, UX, clean code</Typography>
        </Box>
      </Box>

      <Stack spacing={3} className="page-animate stagger-2">
        <Chip
          label="About Me"
          sx={{
            width: "fit-content",
            borderRadius: 1.5,
            bgcolor: "rgba(91, 46, 255, 0.1)",
            color: purple,
            fontWeight: 800,
          }}
        />
        <Typography
          component="h1"
          sx={{
            color: ink,
            maxWidth: 760,
            fontSize: { xs: 38, sm: 50, md: 58 },
            lineHeight: 1.12,
            fontWeight: 900,
          }}
        >
          A dedicated frontend developer who cares about useful, reliable UI
          <Box component="span" sx={{ color: purple }}>
            .
          </Box>
        </Typography>
        <Typography sx={{ color: body, maxWidth: 760, fontSize: 17, lineHeight: 1.75 }}>
          I build clean, responsive web products with React, JavaScript, Next.js,
          Material UI, Tailwind CSS, HTML, and CSS. My work spans real estate,
          e-commerce, and banking products, where the interface needs to be fast,
          clear, and easy for real users to operate.
        </Typography>
        <Typography sx={{ color: body, maxWidth: 760, fontSize: 17, lineHeight: 1.75 }}>
          I also value communication and steady learning. That combination helps me work
          well with product, design, backend, and client teams while keeping the frontend
          practical and maintainable.
        </Typography>

        <Stack direction="row" spacing={1.2} flexWrap="wrap" useFlexGap>
          {strengths.map((item) => (
            <Chip
              key={item}
              label={item}
              variant="outlined"
              sx={{ borderColor: border, bgcolor: "#fff", borderRadius: 1.2, color: "#27324A" }}
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
          {heroStats.map((stat) => (
            <Stack
              key={stat.label}
              direction="row"
              spacing={1.6}
              alignItems="center"
              sx={{
                p: 2,
                border: `1px solid ${border}`,
                borderRadius: 2,
                bgcolor: "#fff",
                boxShadow: "0 14px 36px rgba(35, 24, 92, 0.06)",
              }}
            >
              <AboutIcon name={stat.icon} size={46} />
              <Box>
                <Typography sx={{ color: ink, fontSize: 22, fontWeight: 900 }}>{stat.value}</Typography>
                <Typography sx={{ color: body, fontSize: 12 }}>{stat.label}</Typography>
              </Box>
            </Stack>
          ))}
        </Box>
      </Stack>
    </Box>
  );
}

export default AboutHero;
