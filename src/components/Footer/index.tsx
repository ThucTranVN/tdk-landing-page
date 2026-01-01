import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { TFunction } from "i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";
import footerContent from "../../content/FooterContent.json";

import {
  FooterSection,
  Extra,
  LogoContainer,
  FooterContainer,
  ContactInfo,
  MapContainer,
  ContactItem,
  IconWrapper,
  NavLink,
  Title,
  Content,
  ContactLink,
  CopyrightInfo,
} from "./styles";

const Footer = ({ t }: { t: TFunction }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between" align="top">
            <Col lg={8} md={8} sm={24} xs={24}>
              <Title>{t(footerContent.title)}</Title>
              <Content>{t(footerContent.content)}</Content>
            </Col>
            <Col lg={12} md={12} sm={24} xs={24}>
              <ContactInfo>
                <ContactItem>
                  <IconWrapper>
                    <SvgIcon src="location.svg" width="100%" height="100%" />
                  </IconWrapper>
                  <ContactLink 
                    href="https://maps.app.goo.gl/ogg4tiUJnXAKKPuk7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t(footerContent.address)}
                  </ContactLink>
                </ContactItem>
                <ContactItem>
                  <IconWrapper>
                    <SvgIcon src="phone.svg" width="100%" height="100%" />
                  </IconWrapper>
                  <ContactLink href={`tel:${footerContent.phone.replace(/\s/g, '')}`}>
                    {footerContent.phone}
                  </ContactLink>
                </ContactItem>
                <ContactItem>
                  <IconWrapper>
                    <SvgIcon src="email.svg" width="100%" height="100%" />
                  </IconWrapper>
                  <ContactLink href={`mailto:${footerContent.email}`}>
                    {footerContent.email}
                  </ContactLink>
                </ContactItem>
              </ContactInfo>
              <MapContainer>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.9772360422535!2d106.63820737573575!3d10.736237759932333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f80dbf11d5b%3A0xdea5136c59d5c9ba!2zQ8O0bmcgdHkgY-G7lSBwaOG6p24gZ2nhuqNpIHBow6FwIGPDtG5nIG5naOG7hyBUREs!5e0!3m2!1svi!2s!4v1745055203718!5m2!1svi!2s"
                  width="100%"
                  height="200"
                  style={{ border: 0, borderRadius: "8px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </MapContainer>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "0.5rem" }}
          >
            {/* <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="favicon/ms-icon-310x310.png"
                  aria-label="homepage"
                  width="64px"
                  height="64px"
                />
              </LogoContainer>
            </NavLink> */}
            <FooterContainer>
              <CopyrightInfo>
                <div>© {t("TDK TECHNOLOGY SOLUTIONS")}</div>
                <div>{t("Business license")}: 0316115790</div>
                <div style={{ marginTop: "0.5rem" }}>
                  {/*
                  <NavLink 
                    to="/privacy" 
                    style={{ marginRight: "1rem" }}
                    onClick={scrollToTop}
                  >
                    {t("Privacy Policy")}
                  </NavLink>
                  <NavLink 
                    to="/termandcondition"
                    onClick={scrollToTop}
                  >
                    {t("Terms & Conditions")}
                  </NavLink>
                  */}
                </div>
              </CopyrightInfo>
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
