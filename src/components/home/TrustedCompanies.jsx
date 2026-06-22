import { Box, Stack, Typography } from "@mui/material";
import { homeTheme } from "./homeTheme";

function TrustedCompanies() {
  return (
    <Stack alignItems="center" spacing={3} sx={{ py: { xs: 5, md: 7 } }}>
      <Typography sx={{ color: homeTheme.ink, fontSize: 18 }}>Trusted by innovative companies</Typography>
      <Stack direction="row" spacing={{ xs: 3, sm: 6 }} flexWrap="wrap" useFlexGap justifyContent="center">
        <Typography component="div" sx={{ fontSize: 20, fontWeight: 900 }}>
          <Box component="span" sx={{ color: "#FF6A00", mr: 1 }}>
            N
          </Box>
          NICKELFOX
        </Typography>
        <Typography component="div" sx={{ fontSize: 20, fontWeight: 900, letterSpacing: 3 }}>
          <Box component="span" sx={{ color: "#38CBD0", mr: 1 }}>
            ◇
          </Box>
          MARTISAN
        </Typography>
        <Typography
          component="div"
          sx={{ fontSize: 20, color: homeTheme.purple, display: "flex", alignItems: "center", gap: 1 }}
        >
          <Box
            component="span"
            sx={{
              width: 34,
              height: 34,
              borderRadius: "50%",
              bgcolor: homeTheme.purple,
              color: "#fff",
              display: "grid",
              placeItems: "center",
              fontWeight: 900,
            }}
          >
            S
          </Box>
          Strope AI
        </Typography>
      </Stack>
    </Stack>
  );
}

export default TrustedCompanies;
