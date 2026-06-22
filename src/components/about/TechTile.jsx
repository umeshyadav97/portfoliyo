import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

function TechTile({ tech, compact = false }) {
  return (
    <Stack
      alignItems="center"
      spacing={1.1}
      sx={{
        minHeight: compact ? 76 : 88,
        justifyContent: "center",
      }}
    >
      {tech.icon ? (
        <Image src={tech.icon} width={compact ? 26 : 30} height={compact ? 26 : 30} alt={tech.name} />
      ) : (
        <Box
          sx={{
            width: compact ? 28 : 32,
            height: compact ? 28 : 32,
            borderRadius: 1,
            bgcolor: tech.color,
            color: tech.textColor || "#fff",
            display: "grid",
            placeItems: "center",
            fontSize: 12,
            fontWeight: 900,
          }}
        >
          {tech.text}
        </Box>
      )}
      <Typography sx={{ textAlign: "center", fontSize: 12.5, fontWeight: 800 }}>{tech.name}</Typography>
    </Stack>
  );
}

export default TechTile;
