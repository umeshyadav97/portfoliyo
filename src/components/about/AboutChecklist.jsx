import { Stack, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { aboutTheme } from "./aboutTheme";

function AboutChecklist({ items }) {
  return (
    <Stack spacing={1.6}>
      {items.map((item) => (
        <Typography key={item} sx={{ color: aboutTheme.body, fontSize: 13.5, display: "flex", gap: 1.1 }}>
          <CheckIcon sx={{ color: aboutTheme.purple, fontSize: 17, mt: "1px" }} />
          {item}
        </Typography>
      ))}
    </Stack>
  );
}

export default AboutChecklist;
