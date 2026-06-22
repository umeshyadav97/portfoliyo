import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ProfileImage from "../../assets/images/backgrounds/profile-1.png";
import { services } from "./homeData";
import { homeTheme } from "./homeTheme";

function WhatIDo() {
  return (
    <Box
      component="section"
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", lg: "1.9fr 0.9fr" },
        gap: { xs: 4, lg: 7 },
        alignItems: "start",
      }}
    >
      <Box>
        <Typography sx={{ color: homeTheme.ink, fontSize: { xs: 24, md: 30 }, fontWeight: 900, mb: 1.5 }}>
          What I Do
        </Typography>
        <Typography sx={{ color: homeTheme.body, maxWidth: 620, lineHeight: 1.7, mb: 4 }}>
          I build end-to-end solutions with a focus on performance, scalability and great user experience.
        </Typography>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 3 }}>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Stack key={service.title} direction="row" spacing={2.2} alignItems="flex-start">
                <Box
                  sx={{
                    width: 46,
                    height: 46,
                    borderRadius: 2,
                    bgcolor: "rgba(91, 46, 255, 0.08)",
                    color: homeTheme.purple,
                    display: "grid",
                    placeItems: "center",
                    flex: "0 0 auto",
                  }}
                >
                  <Icon />
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 900, mb: 0.6 }}>{service.title}</Typography>
                  <Typography sx={{ color: homeTheme.body, lineHeight: 1.6, fontSize: 13.5 }}>{service.desc}</Typography>
                </Box>
              </Stack>
            );
          })}
        </Box>
      </Box>

      <Box
        sx={{
          borderRadius: 3,
          p: { xs: 3, sm: 4 },
          background: "linear-gradient(135deg, #F8F4FF 0%, #FFFFFF 100%)",
          border: "1px solid #ECE6FF",
          boxShadow: "0 24px 64px rgba(35, 24, 92, 0.1)",
        }}
      >
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
          <Box sx={{ position: "relative", width: 92, height: 92, borderRadius: "50%", overflow: "hidden", bgcolor: "#EEF1F7" }}>
            <Image src={ProfileImage} alt="Umesh Yadav" fill style={{ objectFit: "cover" }} />
          </Box>
          <Box>
            <Typography sx={{ fontSize: 20, fontWeight: 900 }}>Hi, I&apos;m Umesh Yadav</Typography>
            <Typography sx={{ color: homeTheme.purple, fontWeight: 800, mt: 0.5 }}>Frontend Developer</Typography>
          </Box>
        </Stack>
        <Stack spacing={2.2}>
          <Typography sx={{ color: homeTheme.body, display: "flex", alignItems: "center", gap: 1.5 }}>
            <LocationOnOutlinedIcon sx={{ color: homeTheme.purple }} fontSize="small" />
            Varanasi, India
          </Typography>
          <Typography sx={{ color: homeTheme.body, display: "flex", alignItems: "center", gap: 1.5, overflowWrap: "anywhere" }}>
            <MailOutlineIcon sx={{ color: homeTheme.purple }} fontSize="small" />
            umeshyadavdev@gmail.com
          </Typography>
          <Typography sx={{ color: homeTheme.ink, pt: 1 }}>Let&apos;s build something amazing together!</Typography>
          <Stack direction="row" spacing={1.5}>
            <Button
              href="https://www.linkedin.com/in/umeshyadav97"
              target="_blank"
              aria-label="LinkedIn"
              sx={{ minWidth: 0, width: 38, height: 38, bgcolor: "#0A66C2", color: "#fff", borderRadius: 1.2, "&:hover": { bgcolor: "#07549F" } }}
            >
              <LinkedInIcon />
            </Button>
            <Button
              href="https://github.com/umeshyadav97"
              target="_blank"
              aria-label="GitHub"
              sx={{ minWidth: 0, width: 38, height: 38, bgcolor: "#080B16", color: "#fff", borderRadius: 1.2, "&:hover": { bgcolor: "#22283A" } }}
            >
              <GitHubIcon />
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}

export default WhatIDo;
