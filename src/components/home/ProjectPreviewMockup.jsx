import { Box, Stack, Typography } from "@mui/material";
import { homeTheme } from "./homeTheme";

const previews = {
  ragazza: {
    logo: "Ragaz.",
    accent: "#FF6A3D",
    bg: "linear-gradient(135deg, #F2ECE6 0%, #FFF8F3 100%)",
    headline: ["DISCOVER", "FASHION THAT", "DEFINES YOU"],
    mode: "fashion",
  },
  strope: {
    logo: "Strope AI",
    accent: homeTheme.purple,
    bg: "linear-gradient(135deg, #FFFFFF 0%, #F7F2FF 100%)",
    headline: ["AI project", "estimation", "platform"],
    mode: "dashboard",
  },
  sharkdom: {
    logo: "Sharkdom",
    accent: "#2F80ED",
    bg: "linear-gradient(135deg, #ECF6FF 0%, #FFFFFF 100%)",
    headline: ["Partner ecosystem", "business", "management"],
    mode: "analytics",
  },
  gomble: {
    logo: "Gomble",
    accent: "#FF5A2A",
    bg: "linear-gradient(135deg, #FFFFFF 0%, #FFF2ED 100%)",
    headline: ["Order your", "favorites before", "in a flash"],
    mode: "food",
  },
};

function BrowserDots() {
  return (
    <Stack direction="row" spacing={0.45}>
      {["#FF6B6B", "#FFB84D", "#31C48D"].map((color) => (
        <Box key={color} sx={{ width: 5, height: 5, borderRadius: "50%", bgcolor: color }} />
      ))}
    </Stack>
  );
}

function FashionVisual({ accent }) {
  return (
    <Stack direction="row" alignItems="end" spacing={1.1} sx={{ height: "100%" }}>
      {[56, 78, 68].map((height, index) => (
        <Box key={height} sx={{ width: 30, height, borderRadius: "16px 16px 8px 8px", bgcolor: index === 1 ? accent : "#CFB39F", position: "relative" }}>
          <Box sx={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", width: 15, height: 15, borderRadius: "50%", bgcolor: "#F1C7A6" }} />
        </Box>
      ))}
    </Stack>
  );
}

function DashboardVisual({ accent }) {
  return (
    <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, width: "100%" }}>
      {[0, 1, 2, 3].map((item) => (
        <Box key={item} sx={{ p: 0.8, borderRadius: 1, bgcolor: "#fff", border: "1px solid #E7EAF2" }}>
          <Box sx={{ width: "48%", height: 5, borderRadius: 10, bgcolor: item % 2 ? "#34B65B" : accent, mb: 0.7 }} />
          <Box sx={{ width: "75%", height: 4, borderRadius: 10, bgcolor: "#DDE3F0" }} />
        </Box>
      ))}
    </Box>
  );
}

function AnalyticsVisual({ accent }) {
  return (
    <Box sx={{ display: "grid", gridTemplateColumns: "16px 1fr", gap: 1.3, width: "100%" }}>
      <Stack spacing={0.55}>
        {[72, 45, 62, 36].map((height) => (
          <Box key={height} sx={{ width: 8, height: height / 4, borderRadius: 10, bgcolor: accent }} />
        ))}
      </Stack>
      <Stack spacing={0.65}>
        {[86, 68, 92, 58, 76].map((width) => (
          <Box key={width} sx={{ width: `${width}%`, height: 6, borderRadius: 10, bgcolor: "#D8E9FF" }} />
        ))}
      </Stack>
    </Box>
  );
}

function FoodVisual({ accent }) {
  return (
    <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, width: "100%" }}>
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <Box key={item} sx={{ borderRadius: 1, bgcolor: "#fff", border: "1px solid #FFE0D6", p: 0.65 }}>
          <Box sx={{ width: 28, height: 18, mx: "auto", borderRadius: "50%", bgcolor: accent, boxShadow: "inset 0 -5px 0 rgba(0,0,0,.12)" }} />
          <Box sx={{ width: "70%", height: 3, borderRadius: 10, bgcolor: "#FFD4C7", mt: 0.7 }} />
        </Box>
      ))}
    </Box>
  );
}

function ProjectPreviewMockup({ type }) {
  const config = previews[type] || previews.ragazza;

  return (
    <Box
      sx={{
        height: "100%",
        minHeight: 158,
        borderRadius: 1.5,
        bgcolor: "#fff",
        border: "1px solid #EEF1F7",
        overflow: "hidden",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,.8)",
      }}
    >
      <Box sx={{ height: 24, px: 1.3, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Stack direction="row" spacing={0.8} alignItems="center">
          <BrowserDots />
          <Typography sx={{ fontSize: 8.5, fontWeight: 900, color: config.accent }}>{config.logo}</Typography>
        </Stack>
        <Stack direction="row" spacing={1.4} sx={{ display: { xs: "none", sm: "flex" } }}>
          {["Home", "Shop", "Blog"].map((item) => (
            <Typography key={item} sx={{ fontSize: 7.5, color: "#64708A" }}>
              {item}
            </Typography>
          ))}
        </Stack>
      </Box>
      <Box
        sx={{
          minHeight: 104,
          p: 1.6,
          display: "grid",
          gridTemplateColumns: "0.9fr 1.1fr",
          gap: 1.6,
          alignItems: "center",
          bgcolor: config.bg,
        }}
      >
        <Box>
          {config.headline.map((line) => (
            <Typography key={line} sx={{ fontSize: { xs: 11, md: 12.5 }, lineHeight: 1.22, fontWeight: 900, color: homeTheme.ink }}>
              {line}
            </Typography>
          ))}
          <Box sx={{ mt: 1.2, width: 54, height: 7, borderRadius: 10, bgcolor: config.accent }} />
          <Box sx={{ mt: 0.8, width: 82, height: 4, borderRadius: 10, bgcolor: "rgba(66,80,107,.18)" }} />
        </Box>
        <Box sx={{ minWidth: 0 }}>
          {config.mode === "fashion" && <FashionVisual accent={config.accent} />}
          {config.mode === "dashboard" && <DashboardVisual accent={config.accent} />}
          {config.mode === "analytics" && <AnalyticsVisual accent={config.accent} />}
          {config.mode === "food" && <FoodVisual accent={config.accent} />}
        </Box>
      </Box>
      <Typography sx={{ p: 1.4, fontSize: 20, lineHeight: 1, fontWeight: 900, color: homeTheme.ink }}>
        {type === "ragazza" ? "Ragazza Fashion" : config.logo}
      </Typography>
    </Box>
  );
}

export default ProjectPreviewMockup;
