import { Box } from "@mui/material";
import HomeSectionHeader from "./HomeSectionHeader";
import HomeTechTile from "./HomeTechTile";
import { techStack } from "./homeData";
import { homeTheme } from "./homeTheme";

function HomeTechStack() {
  return (
    <Box component="section" sx={{ mb: { xs: 5, md: 7 } }}>
      <HomeSectionHeader title="Tech Stack" action={{ label: "View all skills", href: "/about" }} />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(3, 1fr)", md: "repeat(5, 1fr)", lg: "repeat(9, 1fr)" },
          border: `1px solid ${homeTheme.border}`,
          borderRadius: 2,
          bgcolor: "#fff",
          overflow: "hidden",
        }}
      >
        {techStack.map((tech) => (
          <HomeTechTile key={tech.name} tech={tech} />
        ))}
      </Box>
    </Box>
  );
}

export default HomeTechStack;
