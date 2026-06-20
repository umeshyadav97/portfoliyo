import { Box } from "@mui/material";
import { projectTheme } from "./projectTheme";

function ProjectIconBadge({ icon, color, children, size = 48 }) {
  const Icon = icon;
  const safeColor = color || projectTheme.purple;
  const bgColor = safeColor.startsWith("#") ? `${safeColor}14` : "rgba(91, 46, 255, 0.08)";

  return (
    <Box
      sx={{
        width: size,
        height: size,
        borderRadius: 2,
        display: "grid",
        placeItems: "center",
        bgcolor: bgColor,
        color: safeColor,
        fontWeight: 900,
        flex: "0 0 auto",
        fontSize: size > 44 ? 15 : 12,
      }}
    >
      {Icon ? <Icon /> : children}
    </Box>
  );
}

export default ProjectIconBadge;
