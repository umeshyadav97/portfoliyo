import { Box, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { portfolioTheme } from "./portfolioTheme";

function ContactPromptCard({ sx, contentSx, arrowSx, buttonSx }) {
  return (
    <Box
      sx={{
        p: 3,
        borderRadius: 2,
        background: portfolioTheme.softPanelGradient,
        border: `1px solid ${portfolioTheme.border}`,
        minHeight: "100%",
        ...sx,
      }}
    >
      <Typography sx={{ color: portfolioTheme.ink, fontSize: 20, fontWeight: 900, mb: 1, ...contentSx }}>
        Interested in working together?
      </Typography>
      <Typography sx={{ color: portfolioTheme.body, fontSize: 14, lineHeight: 1.7, mb: 3 }}>
        I&apos;m always open to discussing new opportunities and interesting projects.
      </Typography>
      <Box
        component="a"
        href="/contact"
        sx={{
          display: "inline-flex",
          alignItems: "center",
          gap: 1,
          bgcolor: portfolioTheme.purple,
          color: "#fff",
          borderRadius: 1.4,
          px: 2.2,
          py: 1.1,
          fontWeight: 800,
          textDecoration: "none",
          "&:hover": { bgcolor: "#4A20E8" },
          ...buttonSx,
        }}
      >
        Let&apos;s Connect
        <ArrowForwardIcon fontSize="small" />
      </Box>
      <Box
        sx={{
          mt: 4,
          ml: "auto",
          width: 96,
          height: 58,
          clipPath: "polygon(0 45%, 100% 0, 60% 100%, 46% 62%)",
          bgcolor: "rgba(91, 46, 255, 0.18)",
          ...arrowSx,
        }}
      />
    </Box>
  );
}

export default ContactPromptCard;
