import { Box, Stack, Typography } from "@mui/material";
import ProjectTechIcon from "./ProjectTechIcon";
import { projectTheme } from "./projectTheme";

const { border } = projectTheme;

function ProjectTechStack({ project }) {
  return (
    <Box sx={{ mt: 3, border: `1px solid ${border}`, borderRadius: 2, p: { xs: 2, md: 3 }, bgcolor: "#fff" }}>
      <Typography sx={{ fontSize: 18, fontWeight: 900, mb: 2.5 }}>
        Tech Stack for {project.name}
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(5, 1fr)",
            lg: `repeat(${Math.min(project.techStack.length, 6)}, 1fr)`,
          },
          border: `1px solid ${border}`,
          borderRadius: 1.5,
          overflow: "hidden",
        }}
      >
        {project.techStack.map((tech) => (
          <Stack
            key={tech}
            alignItems="center"
            spacing={1.1}
            sx={{
              minHeight: 84,
              justifyContent: "center",
              borderRight: `1px solid ${border}`,
              borderBottom: { xs: `1px solid ${border}`, lg: "none" },
            }}
          >
            <ProjectTechIcon tech={tech} />
            <Typography sx={{ fontSize: 12.5, fontWeight: 800, textAlign: "center" }}>{tech}</Typography>
          </Stack>
        ))}
      </Box>
    </Box>
  );
}

export default ProjectTechStack;
