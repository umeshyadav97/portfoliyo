import { Box, Chip, Stack, Typography } from "@mui/material";
import ContactIcon from "./ContactIcon";
import { introCards } from "./contactData";
import { contactTheme } from "./contactTheme";

const { purple, ink, body, border } = contactTheme;

function ContactIntro() {
  return (
    <Stack spacing={4} className="page-animate stagger-1">
      <Stack spacing={3}>
        <Chip
          label="Contact"
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
            maxWidth: 720,
            fontSize: { xs: 42, sm: 58, md: 70 },
            lineHeight: 1.08,
            fontWeight: 900,
          }}
        >
          Let us build a clear, responsive frontend together
          <Box component="span" sx={{ color: purple }}>
            .
          </Box>
        </Typography>
        <Typography sx={{ color: body, maxWidth: 680, fontSize: { xs: 17, md: 20 }, lineHeight: 1.75 }}>
          I am open to frontend roles and product work involving React, Next.js,
          dashboards, e-commerce interfaces, and responsive UI systems.
        </Typography>
      </Stack>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
          gap: 2,
          position: "relative",
          "&:before": {
            content: '""',
            position: "absolute",
            left: -60,
            bottom: -40,
            width: 210,
            height: 180,
            opacity: 0.5,
            backgroundImage: "radial-gradient(rgba(91,46,255,.28) 1px, transparent 1px)",
            backgroundSize: "14px 14px",
            zIndex: 0,
          },
        }}
      >
        {introCards.map((card) => (
          <Stack
            key={card.title}
            direction="row"
            spacing={2}
            alignItems="flex-start"
            sx={{
              position: "relative",
              zIndex: 1,
              p: 2.5,
              border: `1px solid ${border}`,
              borderRadius: 2,
              bgcolor: "#fff",
              boxShadow: "0 16px 42px rgba(35, 24, 92, 0.06)",
            }}
          >
            <ContactIcon name={card.icon} size={48} />
            <Box>
              <Typography sx={{ color: ink, fontWeight: 900, mb: 0.8 }}>{card.title}</Typography>
              <Typography sx={{ color: body, fontSize: 14, lineHeight: 1.65 }}>{card.description}</Typography>
            </Box>
          </Stack>
        ))}
      </Box>
    </Stack>
  );
}

export default ContactIntro;
