import { Stack, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { portfolioTheme } from "./portfolioTheme";

function Checklist({
  items,
  color = portfolioTheme.body,
  accentColor = portfolioTheme.purple,
  spacing = 1.2,
  gap = 1.2,
}) {
  return (
    <Stack spacing={spacing}>
      {items.map((item) => (
        <Typography
          key={item}
          sx={{
            color,
            fontSize: 13.5,
            display: "flex",
            gap,
          }}
        >
          <CheckIcon sx={{ color: accentColor, fontSize: 17, mt: "1px" }} />
          {item}
        </Typography>
      ))}
    </Stack>
  );
}

export default Checklist;
