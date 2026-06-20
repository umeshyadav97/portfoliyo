import { Stack, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { projectTheme } from "./projectTheme";

function ProjectChecklist({ items }) {
  return (
    <Stack spacing={1.2}>
      {items.map((item) => (
        <Typography
          key={item}
          sx={{ color: projectTheme.body, fontSize: 13.5, display: "flex", gap: 1.2 }}
        >
          <CheckIcon sx={{ color: projectTheme.purple, fontSize: 17, mt: "1px" }} />
          {item}
        </Typography>
      ))}
    </Stack>
  );
}

export default ProjectChecklist;
