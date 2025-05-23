import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import i18n from "i18next";
import { useTheme } from "../../context/ThemeContext";
import { useLocation } from "react-router-dom";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
  LanguageToggle,
  LanguageToggleContainer,
  ThemeToggle,
} from "./styles";

const Header = ({ t }: { t: TFunction }) => {
  const [visible, setVisibility] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [language, setLanguage] = useState('en');
  const location = useLocation();
  const isPrivacyPage = location.pathname === "/privacy";

  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
    setLanguage(language);
  };

  const toggleButton = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      const header = document.querySelector('header') as HTMLElement;
      const headerHeight = header ? header.offsetHeight : 0;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - headerHeight - 20,
        behavior: "smooth"
      });
      setVisibility(false);
    };

    const openBlog = () => {
      window.open('https://blog.tdk.best/', '_blank');
      setVisibility(false);
    };

    return (
      <>
        {!isPrivacyPage && (
          <>
            <CustomNavLinkSmall onClick={() => scrollTo("about")}>
              <Span>{t("About")}</Span>
            </CustomNavLinkSmall>
            <CustomNavLinkSmall onClick={() => scrollTo("services")}>
              <Span>{t("Services")}</Span>
            </CustomNavLinkSmall>
            <CustomNavLinkSmall onClick={() => scrollTo("solution")}>
              <Span>{t("Solutions")}</Span>
            </CustomNavLinkSmall>
            <CustomNavLinkSmall onClick={openBlog}>
              <Span>{t("Blog")}</Span>
            </CustomNavLinkSmall>
            <CustomNavLinkSmall
              style={{ width: "180px" }}
              onClick={() => scrollTo("contact")}
            >
              <Span>
                <Button color="var(--primary-blue)">{t("Contact")}</Button>
              </Span>
            </CustomNavLinkSmall>
          </>
        )}
        <LanguageToggleContainer>
          <LanguageToggle onClick={() => handleChange(language === 'en' ? 'vi' : 'en')} aria-label="Toggle language">
            <SvgIcon
              src={language === 'en' ? 'united-states.svg' : 'vietnam.svg'}
              width="20px"
              height="20px"
            />
          </LanguageToggle>
          <ThemeToggle onClick={toggleTheme} aria-label="Toggle theme">
            <SvgIcon
              src={theme === 'light' ? 'moon.svg' : 'sun.svg'}
              width="20px"
              height="20px"
            />
          </ThemeToggle>
        </LanguageToggleContainer>
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon 
              src="favicon/ms-icon-310x310.png" 
              width="100%" 
              height="100%" 
            />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={toggleButton}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} open={visible} onClose={toggleButton}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={toggleButton}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
