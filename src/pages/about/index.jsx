import AboutApproach from "../../components/about/AboutApproach";
import AboutCTA from "../../components/about/AboutCTA";
import AboutHero from "../../components/about/AboutHero";
import AboutTechStack from "../../components/about/AboutTechStack";
import ExperienceHighlights from "../../components/about/ExperienceHighlights";
import PageShell from "../../components/common/PageShell";

function About() {
  return (
    <PageShell title="About Umesh Yadav">
      <AboutHero />
      <AboutApproach />
      <AboutTechStack />
      <ExperienceHighlights />
      <AboutCTA />
    </PageShell>
  );
}

export default About;
