import HomeBestellers from "./homeRoutes/HomeBestellers";
import HomeHero from "./homeRoutes/HomeHero";
import SpfBanner from "./homeRoutes/SpfBanner";
const Home = () => {
  return (
    <>
      <HomeHero />
      <HomeBestellers />
      <SpfBanner/>
    </>
  );
};

export default Home;
