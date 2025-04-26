import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        subtitle={IntroContent.subtitle}
        content={IntroContent.description}
        // button={IntroContent.button}
        icon="/img/img/homePage/TrustedPartner.png"
        id="intro"
      />
      <ContentBlock
        direction="left"
        title={AboutContent.title}
        content={AboutContent.content}
        section={AboutContent.items.map(item => ({
          title: item.title,
          content: item.content,
          icon: item.image
        }))}
        // button={AboutContent.button}
        icon="/img/img/homePage/BusinessIntelligence.png"
        id="about"
      />
      
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.content}
        button={MiddleBlockContent.button.title}
        id="services"
      />
        <ContentBlock
        direction="left"
        title={ProductContent.title}
        content={ProductContent.content}
        section={ProductContent.items.map(item => ({
          title: item.title,
          content: item.content,
          icon: item.image
        }))}
        // button={ProductContent.button}
        icon="/img/img/homePage/Success.png"
        id="solution"
      />
      <ContentBlock
        direction="right"
        title={MissionContent.title}
        content={MissionContent.content}
        // button={[MissionContent.button]}
        icon="/img/img/homePage/Mission.png"
        id="mission"
      />

      <Contact
        title={ContactContent.title}
        content={ContactContent.content}
        id="contact"
      />
    </Container>
  );
};

export default Home;
