import { Box, Typography } from "@mui/material";
import TechTile from "./TechTile";
import { techStack } from "./aboutData";
import { aboutTheme } from "./aboutTheme";

const { border } = aboutTheme;

function AboutTechStack() {
  return (
    <Box sx={{ border: `1px solid ${border}`, borderRadius: 2, p: { xs: 2, md: 3 }, bgcolor: "#fff", mb: 3 }}>
      <Typography sx={{ fontSize: 20, fontWeight: 900, mb: 2.5 }}>Tech Stack</Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(3, 1fr)", md: "repeat(5, 1fr)", lg: "repeat(10, 1fr)" },
          border: `1px solid ${border}`,
          borderRadius: 1.5,
          overflow: "hidden",
        }}
      >
        {techStack.map((tech) => (
          <Box key={tech.name} sx={{ borderRight: `1px solid ${border}`, borderBottom: { xs: `1px solid ${border}`, lg: "none" } }}>
            <TechTile tech={tech} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default AboutTechStack;
