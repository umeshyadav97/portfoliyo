import { Box, Stack, Typography } from "@mui/material";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

function ContactCTA() {
  return (
    <Box
      sx={{
        mt: { xs: 5, md: 7 },
        p: { xs: 3, md: 4 },
        borderRadius: 2,
        background: "linear-gradient(135deg, #4D21D9 0%, #6A37FF 100%)",
        color: "#fff",
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr auto" },
        gap: 3,
        alignItems: "center",
        overflow: "hidden",
        boxShadow: "0 20px 50px rgba(91, 46, 255, 0.2)",
        position: "relative",
        "&:before": {
          content: '""',
          position: "absolute",
          left: 70,
          bottom: 18,
          width: 210,
          height: 90,
          opacity: 0.3,
          backgroundImage: "radial-gradient(rgba(255,255,255,.55) 1px, transparent 1px)",
          backgroundSize: "12px 12px",
        },
      }}
    >
      <Box sx={{ pl: { md: 16 }, position: "relative", zIndex: 1 }}>
        <Typography sx={{ fontSize: { xs: 24, md: 30 }, fontWeight: 900 }}>Have a project in mind?</Typography>
        <Typography sx={{ fontSize: 18, opacity: 0.92 }}>Let&apos;s build something amazing together.</Typography>
      </Box>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ position: "relative", zIndex: 1 }}>
        <Box
          component="a"
          href="mailto:umtp97@gmail.com"
          sx={{
            bgcolor: "#fff",
            color: "#5B2EFF",
            borderRadius: 1.5,
            px: 3,
            py: 1.35,
            fontWeight: 900,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            minWidth: 190,
            "&:hover": { bgcolor: "#F4F0FF" },
          }}
        >
          <MailOutlineIcon fontSize="small" />
          Send Message
        </Box>
        <Box
          component="a"
          href="tel:+918318664763"
          sx={{
            border: "1px solid rgba(255,255,255,.65)",
            color: "#fff",
            borderRadius: 1.5,
            px: 3,
            py: 1.35,
            fontWeight: 900,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            minWidth: 200,
            "&:hover": { borderColor: "#fff", bgcolor: "rgba(255,255,255,.1)" },
          }}
        >
          <CalendarMonthOutlinedIcon fontSize="small" />
          Schedule a Call
        </Box>
      </Stack>
    </Box>
  );
}

export default ContactCTA;
