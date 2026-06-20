import { Box, Stack, Typography } from "@mui/material";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

function ProjectCTA() {
  return (
    <Box
      sx={{
        mt: 3,
        p: { xs: 3, md: 4 },
        borderRadius: 2,
        background: "linear-gradient(135deg, #4D21D9 0%, #6A37FF 100%)",
        color: "#fff",
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr auto" },
        gap: 3,
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Box sx={{ pl: { md: 14 } }}>
        <Typography sx={{ fontSize: { xs: 24, md: 28 }, fontWeight: 900 }}>
          Have a project in mind?
        </Typography>
        <Typography sx={{ fontSize: 18, opacity: 0.92 }}>Let&apos;s build something amazing together.</Typography>
      </Box>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
        <Box
          component="a"
          href="/contact"
          sx={{
            bgcolor: "#fff",
            color: "#5B2EFF",
            borderRadius: 1.5,
            px: 3,
            py: 1.2,
            fontWeight: 900,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            "&:hover": { bgcolor: "#F4F0FF" },
          }}
        >
          <MailOutlineIcon fontSize="small" />
          Contact Me
        </Box>
        <Box
          component="a"
          href="/Umesh_Yadav_Resume.pdf"
          download
          sx={{
            border: "1px solid rgba(255,255,255,.65)",
            color: "#fff",
            borderRadius: 1.5,
            px: 3,
            py: 1.2,
            fontWeight: 900,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            "&:hover": { borderColor: "#fff", bgcolor: "rgba(255,255,255,.1)" },
          }}
        >
          <FileDownloadOutlinedIcon fontSize="small" />
          View Resume
        </Box>
      </Stack>
    </Box>
  );
}

export default ProjectCTA;
