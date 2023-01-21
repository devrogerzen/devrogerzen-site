import Layout from "../Layouts/Layout";
import { NightLifeBG } from "../components/NightLifeBG";
import { AboutMe } from "../components/AboutMe";
import { Letrero } from "../components/Letrero";

const HomePage = () => {
  return (
    <Layout>
      <NightLifeBG />
      <Letrero />
      <AboutMe />
    </Layout>
  );
};

export default HomePage;
