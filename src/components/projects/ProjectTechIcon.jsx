import { Box } from "@mui/material";
import Image from "next/image";
import { techIconMap } from "./projectData";
import { projectTheme } from "./projectTheme";

function ProjectTechIcon({ tech }) {
  const meta = techIconMap[tech] || {
    text: tech.slice(0, 2).toUpperCase(),
    color: projectTheme.purple,
  };

  if (meta.icon) {
    return <Image src={meta.icon} width={28} height={28} alt={tech} />;
  }

  return (
    <Box
      sx={{
        width: 30,
        height: 30,
        borderRadius: 1,
        bgcolor: meta.color,
        color: meta.textColor || "#fff",
        display: "grid",
        placeItems: "center",
        fontWeight: 900,
        fontSize: 11,
      }}
    >
      {meta.text}
    </Box>
  );
}

export default ProjectTechIcon;
