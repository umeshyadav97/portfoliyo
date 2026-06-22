import { Box, Stack, Typography } from "@mui/material";
import WorkspacesOutlinedIcon from "@mui/icons-material/WorkspacesOutlined";
import { featuredProjects } from "./homeData";
import HomeSectionHeader from "./HomeSectionHeader";
import ProjectPreviewMockup from "./ProjectPreviewMockup";
import { homeTheme } from "./homeTheme";

function FeaturedProjects() {
  return (
    <Box component="section" sx={{ mb: { xs: 5, md: 7 } }}>
      <HomeSectionHeader title="Featured Projects" action={{ label: "View all projects", href: "/projects" }} />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" },
          gap: 3,
        }}
      >
        {featuredProjects.map((project) => (
          <Box
            key={project.title}
            sx={{
              border: `1px solid ${homeTheme.border}`,
              borderRadius: 2,
              overflow: "hidden",
              bgcolor: "#fff",
              boxShadow: "0 18px 45px rgba(35, 24, 92, 0.08)",
              transition: "transform 220ms ease, box-shadow 220ms ease",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0 28px 65px rgba(35, 24, 92, 0.14)",
              },
            }}
          >
            <Box
              sx={{
                position: "relative",
                aspectRatio: "260 / 176",
                m: 1,
                borderRadius: 1.5,
                overflow: "hidden",
                bgcolor: "#F8FAFF",
                border: "1px solid #F0F2F8",
              }}
            >
              <ProjectPreviewMockup type={project.preview} />
            </Box>
            <Stack spacing={1.5} sx={{ p: 2 }}>
              <Typography sx={{ color: homeTheme.body, fontSize: 14, lineHeight: 1.65 }}>{project.desc}</Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {project.tags.map((tag) => (
                  <Box key={tag} sx={{ px: 1.1, py: 0.45, border: "1px solid #DDE1EA", borderRadius: 1, fontSize: 12 }}>
                    {tag}
                  </Box>
                ))}
              </Stack>
              <Typography sx={{ color: homeTheme.purple, fontWeight: 800, display: "flex", alignItems: "center", gap: 0.8 }}>
                <WorkspacesOutlinedIcon fontSize="small" />
                {project.result}
              </Typography>
            </Stack>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default FeaturedProjects;
