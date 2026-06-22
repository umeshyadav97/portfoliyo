import { Button, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { homeTheme } from "./homeTheme";

function HomeSectionHeader({ title, action }) {
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2} sx={{ mb: 2.5 }}>
      <Typography sx={{ color: homeTheme.ink, fontSize: { xs: 22, md: 28 }, fontWeight: 800 }}>
        {title}
      </Typography>
      {action && (
        <Button href={action.href} endIcon={<ArrowForwardIcon />} sx={{ color: homeTheme.purple, fontWeight: 700 }}>
          {action.label}
        </Button>
      )}
    </Stack>
  );
}

export default HomeSectionHeader;
