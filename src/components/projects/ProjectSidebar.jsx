import { Box, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ProjectIconBadge from "./ProjectIconBadge";
import { projectTheme } from "./projectTheme";

const { purple, ink, body, border } = projectTheme;

function ProjectSidebar({ projects, selectedId, onSelect }) {
  return (
    <Box
      sx={{
        borderRight: { lg: `1px solid ${border}` },
        borderBottom: { xs: `1px solid ${border}`, lg: "none" },
        bgcolor: "#fff",
      }}
    >
      <Typography sx={{ fontSize: 18, fontWeight: 900, p: 3, borderBottom: `1px solid ${border}` }}>
        All Projects
      </Typography>
      <Stack spacing={1.5} sx={{ p: 2 }}>
        {projects.map((project) => {
          const isActive = selectedId === project.id;
          return (
            <Box
              component="button"
              type="button"
              key={project.id}
              onClick={() => onSelect(project.id)}
              sx={{
                width: "100%",
                cursor: isActive ? "default" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: 1.6,
                p: 1.35,
                borderRadius: 1.8,
                border: `1px solid ${isActive ? purple : border}`,
                borderLeft: isActive ? `4px solid ${purple}` : `1px solid ${border}`,
                bgcolor: isActive ? "rgba(91, 46, 255, 0.04)" : "#fff",
                color: ink,
                font: "inherit",
                textAlign: "left",
                boxShadow: isActive ? "0 12px 32px rgba(91, 46, 255, 0.1)" : "none",
                "&:hover": { bgcolor: "rgba(91, 46, 255, 0.05)" },
              }}
            >
              <ProjectIconBadge color={project.color} size={48}>
                {project.icon}
              </ProjectIconBadge>
              <Box sx={{ minWidth: 0, flex: 1 }}>
                <Typography sx={{ fontWeight: 900, fontSize: 14 }}>{project.name}</Typography>
                <Typography sx={{ color: body, fontSize: 12.5, lineHeight: 1.35 }}>
                  {project.tagline}
                </Typography>
              </Box>
              <ChevronRightIcon sx={{ color: isActive ? purple : body }} />
            </Box>
          );
        })}
      </Stack>

      <Box
        sx={{
          m: 2,
          mt: 5,
          p: 3,
          borderRadius: 2,
          background: "linear-gradient(135deg, #F8F4FF 0%, #FFFFFF 100%)",
          border: `1px solid ${border}`,
        }}
      >
        <Typography sx={{ fontSize: 18, fontWeight: 900, mb: 1 }}>
          Interested in working together?
        </Typography>
        <Typography sx={{ color: body, fontSize: 13.5, lineHeight: 1.7, mb: 3 }}>
          I&apos;m always open to discussing new opportunities and interesting projects.
        </Typography>
        <Box
          component="a"
          href="/contact"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 0.8,
            bgcolor: purple,
            color: "#fff",
            borderRadius: 1.6,
            fontWeight: 800,
            px: 2.2,
            py: 1,
            "&:hover": { bgcolor: "#4A20E8" },
          }}
        >
          Let&apos;s Connect
          <ArrowForwardIcon fontSize="small" />
        </Box>
        <Box
          sx={{
            mt: 3,
            ml: "auto",
            width: 92,
            height: 54,
            clipPath: "polygon(0 45%, 100% 0, 60% 100%, 46% 62%)",
            bgcolor: "rgba(91, 46, 255, 0.18)",
          }}
        />
      </Box>
    </Box>
  );
}

export default ProjectSidebar;
