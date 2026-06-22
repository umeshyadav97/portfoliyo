import { Box, Stack, Typography } from "@mui/material";
import AboutIcon from "./AboutIcon";
import { experienceHighlights } from "./aboutData";
import { aboutTheme } from "./aboutTheme";

const { purple, ink, body, border } = aboutTheme;

function ExperienceHighlights() {
  return (
    <Box sx={{ border: `1px solid ${border}`, borderRadius: 2, p: { xs: 2, md: 3 }, bgcolor: "#fff", mb: 3 }}>
      <Typography sx={{ color: ink, fontSize: 22, fontWeight: 900 }}>Experience Highlights</Typography>
      <Typography sx={{ color: body, fontSize: 13.5, mt: 0.6, mb: 3 }}>
        The impact I try to create through my work.
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" },
          gap: 3,
        }}
      >
        {experienceHighlights.map((item) => (
          <Stack
            key={item.label}
            direction="row"
            spacing={2}
            alignItems="center"
            sx={{ p: 2.5, border: `1px solid ${border}`, borderRadius: 2 }}
          >
            <AboutIcon name={item.icon} size={48} />
            <Box>
              <Typography sx={{ color: purple, fontSize: 24, fontWeight: 900 }}>{item.value}</Typography>
              <Typography sx={{ color: body, fontSize: 13 }}>{item.label}</Typography>
            </Box>
          </Stack>
        ))}
      </Box>
    </Box>
  );
}

export default ExperienceHighlights;
