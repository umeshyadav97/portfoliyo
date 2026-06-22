import { Box, Stack, Typography } from "@mui/material";
import { portfolioTheme } from "./portfolioTheme";

const baseActionSx = {
  borderRadius: 1.5,
  px: 3,
  fontWeight: 900,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 1,
  textDecoration: "none",
};

const variantStyles = {
  primary: {
    bgcolor: "#fff",
    color: portfolioTheme.purple,
    "&:hover": { bgcolor: portfolioTheme.softPurple },
  },
  secondary: {
    border: "1px solid rgba(255,255,255,.65)",
    color: "#fff",
    "&:hover": { borderColor: "#fff", bgcolor: "rgba(255,255,255,.1)" },
  },
};

function SectionCTA({
  title = "Have a project in mind?",
  description = "Let's build something amazing together.",
  actions = [],
  sx,
  contentSx,
  actionsSx,
  titleSx,
  showPattern = false,
}) {
  return (
    <Box
      sx={{
        p: { xs: 3, md: 4 },
        borderRadius: 2,
        background: portfolioTheme.ctaGradient,
        color: "#fff",
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr auto" },
        gap: 3,
        alignItems: "center",
        overflow: "hidden",
        position: showPattern ? "relative" : undefined,
        ...(showPattern && {
          "&:before": {
            content: '""',
            position: "absolute",
            left: 70,
            bottom: 18,
            width: 210,
            height: 90,
            opacity: 0.3,
            backgroundImage: "radial-gradient(rgba(255,255,255,.55) 1px, transparent 1px)",
            backgroundSize: "12px 12px",
          },
        }),
        ...sx,
      }}
    >
      <Box sx={{ pl: { md: 14 }, position: showPattern ? "relative" : undefined, zIndex: showPattern ? 1 : undefined, ...contentSx }}>
        <Typography sx={{ fontSize: { xs: 24, md: 28 }, fontWeight: 900, ...titleSx }}>
          {title}
        </Typography>
        <Typography sx={{ fontSize: 18, opacity: 0.92 }}>{description}</Typography>
      </Box>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        sx={{ position: showPattern ? "relative" : undefined, zIndex: showPattern ? 1 : undefined, ...actionsSx }}
      >
        {actions.map(({ label, href, icon: Icon, variant = "primary", download, sx: actionSx }) => (
          <Box
            key={label}
            component="a"
            href={href}
            download={download}
            sx={{
              ...baseActionSx,
              ...variantStyles[variant],
              py: 1.2,
              ...actionSx,
            }}
          >
            {Icon ? <Icon fontSize="small" /> : null}
            {label}
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

export default SectionCTA;
