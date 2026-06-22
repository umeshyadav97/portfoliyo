import { Box } from "@mui/material";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { contactTheme } from "./contactTheme";

const iconMap = {
  clock: AccessTimeOutlinedIcon,
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  mail: MailOutlineIcon,
  phone: PhoneOutlinedIcon,
  send: SendOutlinedIcon,
};

function ContactIcon({ name, size = 64 }) {
  const Icon = iconMap[name] || MailOutlineIcon;

  return (
    <Box
      sx={{
        width: size,
        height: size,
        borderRadius: 2,
        display: "grid",
        placeItems: "center",
        bgcolor: "rgba(91, 46, 255, 0.1)",
        color: contactTheme.purple,
        flex: "0 0 auto",
      }}
    >
      <Icon sx={{ fontSize: size > 56 ? 34 : 24 }} />
    </Box>
  );
}

export default ContactIcon;
