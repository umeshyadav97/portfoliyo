import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SectionCTA from "../common/SectionCTA";

function ProjectCTA() {
  return (
    <SectionCTA
      sx={{ mt: 3 }}
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

export default ProjectCTA;
