import { Box, Stack, Typography } from "@mui/material";
import { heroStats } from "./homeData";
import { homeTheme } from "./homeTheme";

function HomeStats() {
  return (
    <Box
      sx={{
        mt: { xs: 5, md: 8 },
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" },
        bgcolor: "#fff",
        border: `1px solid ${homeTheme.border}`,
        borderRadius: 2,
        boxShadow: "0 26px 70px rgba(35, 24, 92, 0.1)",
      }}
    >
      {heroStats.map((item, index) => {
        const Icon = item.icon;
        return (
          <Stack
            key={item.label}
            direction="row"
            spacing={2}
            alignItems="center"
            sx={{
              p: { xs: 2.5, md: 3.5 },
              borderRight: { lg: index !== heroStats.length - 1 ? `1px solid ${homeTheme.border}` : "none" },
              borderBottom: { xs: index < 3 ? `1px solid ${homeTheme.border}` : "none", sm: "none" },
            }}
          >
            <Box
              sx={{
                width: 56,
                height: 56,
                display: "grid",
                placeItems: "center",
                borderRadius: "50%",
                bgcolor: "rgba(91, 46, 255, 0.08)",
                color: homeTheme.purple,
              }}
            >
              <Icon />
            </Box>
            <Box>
              <Typography sx={{ fontSize: 24, fontWeight: 900 }}>{item.value}</Typography>
              <Typography sx={{ color: homeTheme.body }}>{item.label}</Typography>
            </Box>
          </Stack>
        );
      })}
    </Box>
  );
}

export default HomeStats;
