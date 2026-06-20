import { Box, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ProjectIconBadge from "./ProjectIconBadge";
import { projectTheme } from "./projectTheme";

const { purple, body, border } = projectTheme;

function OtherProjects({ projects, onSelect }) {
  return (
    <Box sx={{ mt: 3, border: `1px solid ${border}`, borderRadius: 2, p: { xs: 2, md: 3 }, bgcolor: "#fff" }}>
      <Typography sx={{ fontSize: 22, fontWeight: 900 }}>Other Projects</Typography>
      <Typography sx={{ color: body, fontSize: 13.5, mb: 2 }}>More products from the same JSON data</Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(5, 1fr)" },
          gap: 2,
        }}
      >
        {projects.map((project) => (
          <Box key={project.id} sx={{ p: 2, border: `1px solid ${border}`, borderRadius: 2, bgcolor: "#fff" }}>
            <Stack direction="row" spacing={1.4} alignItems="flex-start">
              <ProjectIconBadge color={project.color} size={42}>
                {project.icon}
              </ProjectIconBadge>
              <Box>
                <Typography sx={{ fontWeight: 900, fontSize: 14 }}>{project.name}</Typography>
                <Typography sx={{ color: body, fontSize: 12.5, lineHeight: 1.55 }}>{project.tagline}</Typography>
              </Box>
            </Stack>
            <Typography sx={{ color: body, fontSize: 12.5, lineHeight: 1.55, mt: 1.2 }}>
              {project.role} / {project.year}
            </Typography>
            <Box
              component="button"
              type="button"
              onClick={() => onSelect(project.id)}
              sx={{
                mt: 1.5,
                color: purple,
                fontWeight: 800,
                px: 0,
                py: 0.75,
                border: 0,
                bgcolor: "transparent",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: 0.75,
                font: "inherit",
              }}
            >
              View Project
              <ArrowForwardIcon fontSize="small" />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default OtherProjects;
