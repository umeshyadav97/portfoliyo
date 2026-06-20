import { Box, Stack, Typography } from "@mui/material";
import ProjectIconBadge from "./ProjectIconBadge";
import { projectTheme } from "./projectTheme";

const { body, border } = projectTheme;

function ProjectDetailCard({ icon, color, title, description, children, withDivider = true }) {
  return (
    <Box sx={{ p: 2.5, borderRight: { md: withDivider ? `1px solid ${border}` : "none" } }}>
      <Stack direction="row" spacing={1.4} alignItems="center" sx={{ mb: 2 }}>
        <ProjectIconBadge icon={icon} color={color} size={36} />
        <Typography sx={{ fontWeight: 900 }}>{title}</Typography>
      </Stack>
      <Typography sx={{ color: body, fontSize: 13.5, lineHeight: 1.65, mb: 2 }}>
        {description}
      </Typography>
      {children}
    </Box>
  );
}

export default ProjectDetailCard;
