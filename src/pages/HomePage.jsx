import Layout from "../Layouts/Layout";
import { NightLifeBG } from "../components/NightLifeBG";
import { AboutMe } from "../components/AboutMe";
import { Letrero } from "../components/Letrero";
import { ServicesCard } from "../components/ServicesCard";

const HomePage = () => {
  return (
    <Layout>
      <NightLifeBG />
      <Letrero />
      <AboutMe />
      <ServicesCard />
    </Layout>
  );
};

export default HomePage;
