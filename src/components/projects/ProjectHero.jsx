import { Box, Chip, Stack, Typography } from "@mui/material";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import ProjectIconBadge from "./ProjectIconBadge";
import { projectTheme } from "./projectTheme";

const { purple, ink, body, border } = projectTheme;

const metrics = [
  { icon: CodeOutlinedIcon, value: "15+", label: "Projects Delivered", color: purple },
  { icon: GroupsOutlinedIcon, value: "1000+", label: "Customers Served", color: "#34B65B" },
  { icon: PublicOutlinedIcon, value: "3", label: "Countries Served", color: "#FF6A3D" },
  { icon: StarBorderOutlinedIcon, value: "5+", label: "Years of Experience", color: "#2F80ED" },
];

function ProjectHero() {
  return (
    <Box
      sx={{
        position: "relative",
        display: "grid",
        gridTemplateColumns: { xs: "1fr", lg: "0.88fr 1.12fr" },
        gap: { xs: 4, md: 7 },
        alignItems: "center",
        mb: { xs: 5, md: 6 },
        "&:after": {
          content: '""',
          position: "absolute",
          right: { xs: -120, lg: 70 },
          top: -90,
          width: 360,
          height: 360,
          borderRadius: "50%",
          bgcolor: "rgba(91, 46, 255, 0.07)",
          zIndex: 0,
        },
      }}
    >
      <Stack spacing={2.5} sx={{ position: "relative", zIndex: 1 }}>
        <Chip
          label="Selected Work"
          sx={{
            width: "fit-content",
            borderRadius: 1.5,
            bgcolor: "rgba(91, 46, 255, 0.1)",
            color: purple,
            fontWeight: 800,
          }}
        />
        <Typography
          component="h1"
          sx={{
            color: ink,
            maxWidth: 620,
            fontSize: { xs: 42, sm: 58, md: 64 },
            lineHeight: 1.04,
            fontWeight: 900,
          }}
        >
          Projects that solve real problems
          <Box component="span" sx={{ color: purple }}>
            .
          </Box>
        </Typography>
        <Typography sx={{ color: body, maxWidth: 600, fontSize: 17, lineHeight: 1.75 }}>
          Here are the products from my experience. Select any project to see its company,
          role, timeline, screens, tech stack, integrations, highlights, and impact.
        </Typography>
      </Stack>

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
          gap: 2.2,
        }}
      >
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <Stack
              key={metric.label}
              alignItems="center"
              spacing={1}
              sx={{
                minHeight: 170,
                justifyContent: "center",
                p: 2,
                borderRadius: 3,
                bgcolor: "#fff",
                border: `1px solid ${border}`,
                boxShadow: "0 20px 55px rgba(35, 24, 92, 0.1)",
              }}
            >
              <ProjectIconBadge icon={Icon} color={metric.color} size={54} />
              <Typography sx={{ fontSize: 26, fontWeight: 900 }}>{metric.value}</Typography>
              <Typography sx={{ color: body, textAlign: "center", fontSize: 14, lineHeight: 1.35 }}>
                {metric.label}
              </Typography>
            </Stack>
          );
        })}
      </Box>
    </Box>
  );
}

export default ProjectHero;
