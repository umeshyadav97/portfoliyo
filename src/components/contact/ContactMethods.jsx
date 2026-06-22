import { Box, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ContactIcon from "./ContactIcon";
import { contactItems } from "./contactData";
import { contactTheme } from "./contactTheme";

const { purple, ink, body, border } = contactTheme;

function ContactMethods() {
  return (
    <Stack spacing={0} className="page-animate stagger-2">
      {contactItems.map((item, index) => (
        <Box
          key={item.label}
          component="a"
          href={item.href}
          target={item.href.startsWith("http") ? "_blank" : undefined}
          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "56px 1fr 28px", sm: "84px 1fr 36px" },
            gap: { xs: 2, sm: 3 },
            alignItems: "center",
            p: { xs: 2, sm: 3.5 },
            minHeight: { xs: 104, sm: 136 },
            bgcolor: "#fff",
            color: ink,
            border: `1px solid ${border}`,
            borderBottomWidth: index === contactItems.length - 1 ? 1 : 0,
            borderRadius:
              index === 0
                ? "14px 14px 0 0"
                : index === contactItems.length - 1
                  ? "0 0 14px 14px"
                  : 0,
            boxShadow: index === contactItems.length - 1 ? "0 18px 50px rgba(35, 24, 92, 0.08)" : "none",
            transition: "transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease",
            "&:hover": {
              transform: "translateX(4px)",
              borderColor: "rgba(91, 46, 255, 0.32)",
              boxShadow: "0 18px 48px rgba(35, 24, 92, 0.08)",
              zIndex: 1,
            },
          }}
        >
          <ContactIcon name={item.icon} size={72} />
          <Box sx={{ minWidth: 0 }}>
            <Typography sx={{ color: purple, fontWeight: 900, mb: 1 }}>{item.label}</Typography>
            <Typography
              sx={{
                color: ink,
                fontSize: { xs: 18, sm: 22 },
                fontWeight: 900,
                overflowWrap: "anywhere",
              }}
            >
              {item.value}
            </Typography>
          </Box>
          <ArrowForwardIcon sx={{ color: purple, fontSize: 34 }} />
        </Box>
      ))}
    </Stack>
  );
}

export default ContactMethods;
