import { Box, Chip, Stack, Typography } from "@mui/material";
import Image from "next/image";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import LaunchOutlinedIcon from "@mui/icons-material/LaunchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import { fallbackImages } from "./projectData";
import ProjectChecklist from "./ProjectChecklist";
import ProjectDetailCard from "./ProjectDetailCard";
import ProjectPreview from "./ProjectPreview";
import { projectTheme } from "./projectTheme";

const { purple, body, border } = projectTheme;

function MetaItem({ icon: Icon, label, value }) {
  return (
    <Stack
      direction="row"
      spacing={1.2}
      alignItems="center"
      sx={{ p: 1.2, border: `1px solid ${border}`, borderRadius: 1.4 }}
    >
      <Icon sx={{ color: purple, fontSize: 20 }} />
      <Box sx={{ minWidth: 0 }}>
        <Typography sx={{ color: body, fontSize: 11.5 }}>{label}</Typography>
        <Typography sx={{ fontWeight: 800, fontSize: 13.5, overflowWrap: "anywhere" }}>
          {value}
        </Typography>
      </Box>
    </Stack>
  );
}

function ProjectDetails({ project }) {
  const selectedScreens = project.screens.length
    ? project.screens.slice(0, 3)
    : ["Main Screen", "Dashboard", "Details"];
  const galleryImages = [project.image, ...fallbackImages].filter(Boolean);
  const screenGallery = selectedScreens.map((screen, index) => ({
    name: screen,
    image: galleryImages[index % galleryImages.length],
  }));
  const integrationItems = project.integrations.length ? project.integrations : selectedScreens;

  return (
    <Box sx={{ p: { xs: 2.4, sm: 3.5 } }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "0.85fr 1.15fr" },
          gap: { xs: 3, md: 5 },
          alignItems: "center",
          mb: 4,
        }}
      >
        <Stack spacing={2.2}>
          <Stack direction="row" spacing={1.5} alignItems="center" flexWrap="wrap" useFlexGap>
            <Typography sx={{ fontSize: { xs: 28, md: 34 }, fontWeight: 900 }}>
              {project.name}
            </Typography>
            {project.featured && (
              <Chip
                label="Featured Project"
                sx={{ bgcolor: "rgba(91, 46, 255, 0.08)", color: purple, fontWeight: 800 }}
              />
            )}
          </Stack>
          <Typography sx={{ color: body, fontSize: 17, lineHeight: 1.7 }}>{project.tagline}</Typography>
          <Typography sx={{ color: body, lineHeight: 1.75 }}>{project.description}</Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
              gap: 1.2,
            }}
          >
            <MetaItem icon={BusinessCenterOutlinedIcon} label="Company" value={project.company} />
            <MetaItem icon={PersonOutlineOutlinedIcon} label="Role" value={project.role} />
            <MetaItem icon={CalendarMonthOutlinedIcon} label="Year" value={project.year} />
            <MetaItem icon={LanguageOutlinedIcon} label="Industry" value={project.industry} />
          </Box>
          <Stack direction="row" spacing={1.2} flexWrap="wrap" useFlexGap>
            {project.techStack.map((tech) => (
              <Box
                key={tech}
                sx={{
                  px: 1.4,
                  py: 0.7,
                  borderRadius: 1,
                  border: `1px solid ${border}`,
                  color: "#27324A",
                  fontSize: 13.5,
                }}
              >
                {tech}
              </Box>
            ))}
          </Stack>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
            <Box
              component="a"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                bgcolor: purple,
                color: "#fff",
                borderRadius: 1.6,
                px: 3,
                py: 1.2,
                fontWeight: 800,
                "&:hover": { bgcolor: "#4A20E8" },
              }}
            >
              Live Preview
              <LaunchOutlinedIcon fontSize="small" />
            </Box>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                border: `1px solid ${purple}`,
                color: purple,
                borderRadius: 1.6,
                px: 3,
                py: 1.2,
                fontWeight: 800,
              }}
            >
              <AutoAwesomeOutlinedIcon fontSize="small" />
              {project.industry}
            </Box>
          </Stack>
        </Stack>

        <ProjectPreview project={project} />
      </Box>

      <Box sx={{ position: "relative", border: `1px solid ${border}`, borderRadius: 2, p: 2, mb: 3 }}>
        <Typography sx={{ fontWeight: 900, mb: 1.5 }}>Screens</Typography>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 2 }}>
          {screenGallery.map((screen) => (
            <Box key={screen.name}>
              <Box
                sx={{
                  position: "relative",
                  aspectRatio: "16 / 10",
                  borderRadius: 1.4,
                  overflow: "hidden",
                  border: `1px solid ${border}`,
                }}
              >
                <Image src={screen.image} alt={screen.name} fill style={{ objectFit: "cover" }} />
              </Box>
              <Typography sx={{ textAlign: "center", mt: 1, fontSize: 12.5, fontWeight: 800 }}>
                {screen.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(4, 1fr)" },
          border: `1px solid ${border}`,
          borderRadius: 2,
          overflow: "hidden",
          mb: 3.5,
        }}
      >
        <ProjectDetailCard
          icon={AutoAwesomeOutlinedIcon}
          color={purple}
          title="Highlights"
          description="The core product and frontend capabilities delivered."
        >
          <ProjectChecklist items={project.highlights} />
        </ProjectDetailCard>
        <ProjectDetailCard
          icon={PersonOutlineOutlinedIcon}
          color={purple}
          title="My Role"
          description="The project responsibility and ownership context."
        >
          <ProjectChecklist items={[project.role, project.company, project.year, project.industry]} />
        </ProjectDetailCard>
        <ProjectDetailCard
          icon={LanguageOutlinedIcon}
          color="#34B65B"
          title={project.integrations.length ? "Integrations" : "Screens"}
          description={
            project.integrations.length
              ? "External services and payment systems involved."
              : "Important product surfaces built for this project."
          }
        >
          <ProjectChecklist items={integrationItems} />
        </ProjectDetailCard>
        <ProjectDetailCard
          icon={TrendingUpOutlinedIcon}
          color="#FF6A3D"
          title="The Impact"
          description="Outcomes and improvements described for the selected project."
          withDivider={false}
        >
          <Stack spacing={1.3}>
            {project.impact.map((item) => (
              <Typography key={item} sx={{ color: body, fontSize: 13.5 }}>
                <Box component="span" sx={{ color: purple, fontWeight: 900, mr: 1 }}>
                  +
                </Box>
                {item}
              </Typography>
            ))}
          </Stack>
        </ProjectDetailCard>
      </Box>
    </Box>
  );
}

export default ProjectDetails;
