import FeaturedProjects from "../../components/home/FeaturedProjects";
import HomeHero from "../../components/home/HomeHero";
import HomeStats from "../../components/home/HomeStats";
import HomeTechStack from "../../components/home/HomeTechStack";
import TrustedCompanies from "../../components/home/TrustedCompanies";
import WhatIDo from "../../components/home/WhatIDo";
import PageShell from "../../components/common/PageShell";

function Home() {
  return (
    <PageShell
      title="Umesh Yadav | Frontend Engineer"
      containerSx={{ pt: { xs: 6, md: 8 } }}
    >
      <HomeHero />
      <HomeStats />
      <TrustedCompanies />
      <FeaturedProjects />
      <HomeTechStack />
      <WhatIDo />
    </PageShell>
  );
}

export default Home;
