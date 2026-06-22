import { Box, Stack, Typography } from "@mui/material";
import ContactPromptCard from "../common/ContactPromptCard";
import AboutChecklist from "./AboutChecklist";
import AboutIcon from "./AboutIcon";
import TechTile from "./TechTile";
import { approachSections, techStack } from "./aboutData";
import { aboutTheme } from "./aboutTheme";

const { ink, body, border } = aboutTheme;

function ApproachColumn({ section, isLast }) {
  return (
    <Box sx={{ p: 2.5, borderRight: { lg: isLast ? "none" : `1px solid ${border}` } }}>
      <Stack direction="row" alignItems="center" spacing={1.4} sx={{ mb: 2 }}>
        <AboutIcon name={section.icon} size={40} />
        <Typography sx={{ color: ink, fontWeight: 900, fontSize: 17 }}>{section.title}</Typography>
      </Stack>
      <Typography sx={{ color: body, fontSize: 13.5, lineHeight: 1.75, mb: 3 }}>
        {section.description}
      </Typography>
      {section.tools ? (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 1,
          }}
        >
          {techStack.slice(0, 6).map((tech) => (
            <Box key={tech.name} sx={{ border: `1px solid ${border}`, borderRadius: 1.5 }}>
              <TechTile tech={tech} compact />
            </Box>
          ))}
        </Box>
      ) : (
        <AboutChecklist items={section.points} />
      )}
    </Box>
  );
}

function AboutApproach() {
  return (
    <Box
      sx={{
        border: `1px solid ${border}`,
        borderRadius: 2.5,
        bgcolor: "#fff",
        boxShadow: "0 20px 58px rgba(35, 24, 92, 0.06)",
        p: { xs: 2, md: 3 },
        mb: 3,
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)", lg: "1.2fr repeat(4, 1fr)" },
          gap: { xs: 2, lg: 0 },
        }}
      >
        <ContactPromptCard />
        {approachSections.map((section, index) => (
          <ApproachColumn
            key={section.title}
            section={section}
            isLast={index === approachSections.length - 1}
          />
        ))}
      </Box>
    </Box>
  );
}

export default AboutApproach;
