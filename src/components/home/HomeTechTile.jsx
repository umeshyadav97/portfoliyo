import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

function HomeTechTile({ tech }) {
  return (
    <Stack
      spacing={1.25}
      alignItems="center"
      sx={{
        minHeight: 102,
        justifyContent: "center",
        borderRight: "1px solid #EEF1F7",
        borderBottom: { xs: "1px solid #EEF1F7", lg: "none" },
        transition: "background 180ms ease, transform 180ms ease",
        "&:hover": { bgcolor: "rgba(91, 46, 255, 0.04)", transform: "translateY(-3px)" },
      }}
    >
      {tech.icon ? (
        <Image src={tech.icon} width={34} height={34} alt={tech.name} />
      ) : (
        <Box
          sx={{
            width: 34,
            height: 34,
            borderRadius: 1,
            bgcolor: tech.color,
            color: tech.textColor || "#fff",
            display: "grid",
            placeItems: "center",
            fontWeight: 900,
          }}
        >
          {tech.text}
        </Box>
      )}
      <Typography sx={{ fontSize: 13, fontWeight: 800, textAlign: "center" }}>{tech.name}</Typography>
    </Stack>
  );
}

export default HomeTechTile;
