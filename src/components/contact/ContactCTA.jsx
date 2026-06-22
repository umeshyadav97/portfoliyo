import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SectionCTA from "../common/SectionCTA";
import { portfolioTheme } from "../common/portfolioTheme";

function ContactCTA() {
  return (
    <SectionCTA
      sx={{
        mt: { xs: 5, md: 7 },
        boxShadow: portfolioTheme.ctaShadow,
      }}
      contentSx={{ pl: { md: 16 } }}
      titleSx={{ fontSize: { xs: 24, md: 30 } }}
      showPattern
      actions={[
        {
          label: "Send Message",
          href: "mailto:dev.umeshyadav97@gmail.com",
          icon: MailOutlineIcon,
          sx: { py: 1.35, minWidth: 190 },
        },
        {
          label: "Schedule a Call",
          href: "tel:+918318664763",
          icon: CalendarMonthOutlinedIcon,
          variant: "secondary",
          sx: { py: 1.35, minWidth: 200 },
        },
      ]}
    />
  );
}

export default ContactCTA;
