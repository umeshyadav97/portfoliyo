import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import ProjectIconBadge from "./ProjectIconBadge";
import { projectTheme } from "./projectTheme";

const { purple, body, border } = projectTheme;

function ProjectPreview({ project }) {
  const cards = [
    { icon: BusinessCenterOutlinedIcon, value: project.company, label: "Company", color: project.color },
    { icon: CalendarMonthOutlinedIcon, value: project.year, label: "Timeline", color: purple },
    { icon: LanguageOutlinedIcon, value: project.industry, label: "Industry", color: "#2F80ED" },
  ];

  return (
    <Box sx={{ position: "relative", minHeight: { xs: 340, md: 390 } }}>
      <Box
        sx={{
          position: "absolute",
          inset: "7% 12% 12% 0",
          borderRadius: 3,
          bgcolor: "#15151D",
          p: 1.2,
          boxShadow: "0 28px 60px rgba(8, 11, 22, 0.22)",
        }}
      >
        <Box
          sx={{
            height: 26,
            bgcolor: "#fff",
            borderRadius: "10px 10px 0 0",
            display: "flex",
            alignItems: "center",
            gap: 0.7,
            px: 1.4,
          }}
        >
          {["#FF6B6B", "#FFB84D", "#31C48D"].map((color) => (
            <Box key={color} sx={{ width: 7, height: 7, borderRadius: "50%", bgcolor: color }} />
          ))}
        </Box>
        <Box
          sx={{
            position: "relative",
            height: "calc(100% - 26px)",
            borderRadius: "0 0 10px 10px",
            overflow: "hidden",
          }}
        >
          <Image src={project.image} alt={`${project.name} main preview`} fill style={{ objectFit: "cover" }} />
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          right: { xs: 4, md: 18 },
          bottom: 4,
          width: { xs: 98, md: 118 },
          border: "7px solid #15151D",
          borderRadius: 4,
          overflow: "hidden",
          bgcolor: "#fff",
          boxShadow: "0 18px 40px rgba(8, 11, 22, 0.22)",
        }}
      >
        <Box sx={{ position: "relative", aspectRatio: "9 / 16" }}>
          <Image src={project.image} alt={`${project.name} mobile preview`} fill style={{ objectFit: "cover" }} />
        </Box>
      </Box>
      <Stack spacing={2} sx={{ position: "absolute", right: 0, top: 14 }}>
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <Stack
              key={card.label}
              direction="row"
              spacing={1.2}
              alignItems="center"
              sx={{
                width: { xs: 154, md: 190 },
                p: 1.4,
                borderRadius: 2,
                bgcolor: "#fff",
                border: `1px solid ${border}`,
                boxShadow: "0 14px 32px rgba(35, 24, 92, 0.12)",
              }}
            >
              <ProjectIconBadge icon={Icon} color={card.color} size={36} />
              <Box sx={{ minWidth: 0 }}>
                <Typography sx={{ fontWeight: 900, fontSize: 12.5, overflowWrap: "anywhere" }}>
                  {card.value}
                </Typography>
                <Typography sx={{ color: body, fontSize: 11.5 }}>{card.label}</Typography>
              </Box>
            </Stack>
          );
        })}
      </Stack>
    </Box>
  );
}

export default ProjectPreview;
