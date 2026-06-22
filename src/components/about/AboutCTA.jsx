import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SectionCTA from "../common/SectionCTA";
import { portfolioTheme } from "../common/portfolioTheme";

function AboutCTA() {
  return (
    <SectionCTA
      sx={{ boxShadow: portfolioTheme.ctaShadow }}
      actions={[
        {
          label: "Contact Me",
          href: "/contact",
          icon: MailOutlineIcon,
        },
        {
          label: "View Resume",
          href: "/Umesh_Yadav_Resume.pdf",
          icon: FileDownloadOutlinedIcon,
          variant: "secondary",
          download: true,
        },
      ]}
    />
  );
}

export default AboutCTA;
