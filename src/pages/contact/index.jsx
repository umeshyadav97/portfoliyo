import { Box } from "@mui/material";
import ContactCTA from "../../components/contact/ContactCTA";
import ContactIntro from "../../components/contact/ContactIntro";
import ContactMethods from "../../components/contact/ContactMethods";
import PageShell from "../../components/common/PageShell";

function Contact() {
  return (
    <PageShell title="Contact Umesh Yadav">
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "0.85fr 1.15fr" },
          gap: { xs: 5, md: 8 },
          alignItems: "start",
        }}
      >
        <ContactIntro />
        <ContactMethods />
      </Box>
      <ContactCTA />
    </PageShell>
  );
}

export default Contact;
