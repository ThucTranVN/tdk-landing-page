import { lazy, useEffect } from "react";
import { withTranslation } from "react-i18next";
import { TFunction } from "i18next";
import { Row, Col, Card, Button, Divider } from "antd";
import { SvgIcon } from "../../common/SvgIcon";
import { useHistory } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Product = ({ t }: { t: TFunction }) => {
  const history = useHistory();
  const { theme } = useTheme();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const productContent = {
    title: t("product.ourProductsTitle"),
    content: t("product.ourProductsContent"),
    items: [
      {
        title: t("product.customSoftwareTitle"),
        content: t("product.customSoftwareContent"),
        image: "/img/img/product/WebDevelopment.png"
      },
      {
        title: t("product.mobileAppsTitle"),
        content: t("product.mobileAppsContent"),
        image: "/img/img/product/MobileAppDevelopment.png"
      },
      {
        title: t("product.interactiveGamesTitle"),
        content: t("product.interactiveGamesContent"),
        image: "/img/img/product/GameDevelopment.png"
      },
      {
        title: t("product.digitalMarketingTitle"),
        content: t("product.digitalMarketingContent"),
        image: "/img/img/product/DigitalMarketing.png"
      }
    ]
  };

  const gameCard = {
    title: t("product.penguinPuzzleTitle"),
    description: t("product.penguinPuzzleDescription"),
    features: [
      t("product.penguinPuzzleFeature1"),
      t("product.penguinPuzzleFeature2"),
      t("product.penguinPuzzleFeature3"),
      t("product.penguinPuzzleFeature4")
    ],
    developer: "ThucTran",
    category: t("product.penguinPuzzleCategory"),
    rating: t("product.penguinPuzzleRating"),
    downloadUrl: "https://play.google.com/store/apps/details?id=com.TDK.Penguin.Puzzle"
  };

  const jumpoEnglishCard = {
    title: t("product.jumpoEnglishTitle"),
    description: t("product.jumpoEnglishDescription"),
    features: [
      t("product.jumpoEnglishFeature1"),
      t("product.jumpoEnglishFeature2"),
      t("product.jumpoEnglishFeature3"),
      t("product.jumpoEnglishFeature4")
    ],
    developer: "ThucTran",
    category: t("product.jumpoEnglishCategory"),
    rating: t("product.jumpoEnglishRating"),
    downloadUrl: "https://play.google.com/store/apps/details?id=com.TDK.JumpoEnglish"
  };

  const cashewCard = {
    title: t("product.nhtnTitle"),
    subtitle: t("product.nhtnSubtitle"),
    description: t("product.nhtnDescription"),
    features: [
      t("product.nhtnFeature1"),
      t("product.nhtnFeature2"),
      t("product.nhtnFeature3"),
      t("product.nhtnFeature4")
    ],
    products: [
      t("product.nhtnProduct1"),
      t("product.nhtnProduct2"),
      t("product.nhtnProduct3"),
      t("product.nhtnProduct4"),
      t("product.nhtnProduct5"),
      t("product.nhtnProduct6")
    ],
    contact: {
      address: t("product.nhtnAddress"),
      phone: ["093 111 8149", "089 875 7657"],
      fax: "0276 3822 725",
      hours: t("product.nhtnHours")
    },
    website: "https://nhathaotayninh.vn/"
  };

  return (
    <Container>
      <ScrollToTop />
      
      {/* Games Section */}
      <div style={{ marginBottom: "4rem", paddingTop: "120px", background: "var(--background-grey)" }}>
        <Row justify="center" style={{ marginBottom: "2rem" }}>
          <Col span={24}>
            <h2 style={{ textAlign: "center", fontSize: "2.5rem", marginBottom: "1rem", color: "var(--text-color)" }}>
              {t("product.gamesSectionTitle")}
            </h2>
            <p style={{ textAlign: "center", fontSize: "1.1rem", color: "var(--text-light)", maxWidth: "600px", margin: "0 auto" }}>
              {t("product.gamesSectionDesc")}
            </p>
          </Col>
        </Row>
        
        <Row gutter={[24, 24]} justify="center">
          <Col xs={24} sm={20} md={16} lg={12} xl={10}>
            <Card
              hoverable
              style={{ 
                borderRadius: "12px", 
                boxShadow: theme === 'dark' ? "0 4px 16px rgba(255,255,255,0.05)" : "0 4px 16px rgba(0,0,0,0.1)",
                overflow: "hidden",
                height: "100%",
                cursor: "pointer",
                background: "var(--background-light)",
                color: "var(--text-color)"
              }}
              onClick={() => history.push('/product/penguinpuzzle')}
              cover={
                <div style={{ 
                  background: theme === 'dark' ? "linear-gradient(135deg, #232b3b 0%, #3a3f5a 100%)" : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  padding: "1.5rem",
                  textAlign: "center"
                }}>
                  <img
                    src="/img/icons/LogoPenguinPuzzle.png"
                    alt={t("product.penguinPuzzleTitle")}
                    style={{ width: "60px", height: "60px", objectFit: "contain" }}
                  />
                </div>
              }
            >
              <div style={{ padding: "0.75rem 0" }}>
                <p style={{ fontSize: "0.9rem", lineHeight: "1.5", marginBottom: "1rem", color: "var(--text-light)" }}>
                  {gameCard.description}
                </p>
                
                <div style={{ marginBottom: "1rem" }}>
                  <h4 style={{ marginBottom: "0.5rem", color: "var(--text-color)", fontSize: "1rem" }}>{t("product.keyFeatures")}</h4>
                  <ul style={{ paddingLeft: "1.25rem", margin: 0, fontSize: "0.85rem", color: "var(--text-light)" }}>
                    {gameCard.features.map((feature, index) => (
                      <li key={index} style={{ marginBottom: "0.25rem", lineHeight: "1.4" }}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div style={{ 
                  display: "flex", 
                  justifyContent: "space-between", 
                  alignItems: "center",
                  marginBottom: "1rem",
                  padding: "0.75rem",
                  background: "var(--background-grey)",
                  borderRadius: "6px",
                  fontSize: "0.8rem"
                }}>
                  <div>
                    <div style={{ color: "var(--text-light)" }}>{t("product.developer")}</div>
                    <div style={{ fontWeight: "bold", color: "var(--text-color)" }}>{gameCard.developer}</div>
                  </div>
                  <div>
                    <div style={{ color: "var(--text-light)" }}>{t("product.gameCategory")}</div>
                    <div style={{ fontWeight: "bold", color: "var(--text-color)" }}>{gameCard.category}</div>
                  </div>
                  <div>
                    <div style={{ color: "var(--text-light)" }}>{t("product.rating")}</div>
                    <div style={{ fontWeight: "bold", color: "var(--text-color)" }}>{gameCard.rating}</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
                  <Button
                    type="primary"
                    size="middle"
                    style={{
                      flex: 1,
                      height: "40px",
                      borderRadius: "6px",
                      background: theme === 'dark' ? "linear-gradient(135deg, #232b3b 0%, #3a3f5a 100%)" : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      border: "none",
                      fontSize: "0.9rem",
                      fontWeight: "bold",
                      color: theme === 'dark' ? '#fff' : undefined
                    }}
                    onClick={e => {
                      e.stopPropagation();
                      window.open(gameCard.downloadUrl, '_blank');
                    }}
                  >
                    {t('product.downloadOnGooglePlay')}
                  </Button>
                </div>
                
                <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
                  <Button
                    type="default"
                    size="middle"
                    style={{
                      flex: 1,
                      height: "32px",
                      borderRadius: "6px",
                      fontSize: "0.8rem",
                      borderColor: theme === 'dark' ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)",
                      color: "var(--text-light)"
                    }}
                    onClick={e => {
                      e.stopPropagation();
                      history.push('/product/penguinpuzzle/privacy');
                    }}
                  >
                    {t("Privacy Policy")}
                  </Button>
                  <Button
                    type="default"
                    size="middle"
                    style={{
                      flex: 1,
                      height: "32px",
                      borderRadius: "6px",
                      fontSize: "0.8rem",
                      borderColor: theme === 'dark' ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)",
                      color: "var(--text-light)"
                    }}
                    onClick={e => {
                      e.stopPropagation();
                      history.push('/product/penguinpuzzle/termandcondition');
                    }}
                  >
                    {t("Terms & Conditions")}
                  </Button>
                </div>
              </div>
            </Card>
          </Col>
          
          <Col xs={24} sm={20} md={16} lg={12} xl={10}>
            <Card
              hoverable
              style={{ 
                borderRadius: "12px", 
                boxShadow: theme === 'dark' ? "0 4px 16px rgba(255,255,255,0.05)" : "0 4px 16px rgba(0,0,0,0.1)",
                overflow: "hidden",
                height: "100%",
                cursor: "pointer",
                background: "var(--background-light)",
                color: "var(--text-color)"
              }}
              onClick={() => history.push('/product/jumpoenglish')}
              cover={
                <div style={{ 
                  background: theme === 'dark' ? "linear-gradient(135deg, #2d4a2d 0%, #4a6b4a 100%)" : "linear-gradient(135deg, #4CAF50 0%, #8BC34A 100%)",
                  padding: "1.5rem",
                  textAlign: "center"
                }}>
                  <img
                    src="/img/icons/LogoJumpoEnglish.png"
                    alt={t("product.jumpoEnglishTitle")}
                    style={{ width: "60px", height: "60px", objectFit: "contain" }}
                  />
                </div>
              }
            >
              <div style={{ padding: "0.75rem 0" }}>
                <p style={{ fontSize: "0.9rem", lineHeight: "1.5", marginBottom: "1rem", color: "var(--text-light)" }}>
                  {jumpoEnglishCard.description}
                </p>
                
                <div style={{ marginBottom: "1rem" }}>
                  <h4 style={{ marginBottom: "0.5rem", color: "var(--text-color)", fontSize: "1rem" }}>{t("product.keyFeatures")}</h4>
                  <ul style={{ paddingLeft: "1.25rem", margin: 0, fontSize: "0.85rem", color: "var(--text-light)" }}>
                    {jumpoEnglishCard.features.map((feature, index) => (
                      <li key={index} style={{ marginBottom: "0.25rem", lineHeight: "1.4" }}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div style={{ 
                  display: "flex", 
                  justifyContent: "space-between", 
                  alignItems: "center",
                  marginBottom: "1rem",
                  padding: "0.75rem",
                  background: "var(--background-grey)",
                  borderRadius: "6px",
                  fontSize: "0.8rem"
                }}>
                  <div>
                    <div style={{ color: "var(--text-light)" }}>{t("product.developer")}</div>
                    <div style={{ fontWeight: "bold", color: "var(--text-color)" }}>{jumpoEnglishCard.developer}</div>
                  </div>
                  <div>
                    <div style={{ color: "var(--text-light)" }}>{t("product.appCategory")}</div>
                    <div style={{ fontWeight: "bold", color: "var(--text-color)" }}>{jumpoEnglishCard.category}</div>
                  </div>
                  <div>
                    <div style={{ color: "var(--text-light)" }}>{t("product.rating")}</div>
                    <div style={{ fontWeight: "bold", color: "var(--text-color)" }}>{jumpoEnglishCard.rating}</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
                  <Button
                    type="primary"
                    size="middle"
                    style={{
                      flex: 1,
                      height: "40px",
                      borderRadius: "6px",
                      background: theme === 'dark' ? "linear-gradient(135deg, #2d4a2d 0%, #4a6b4a 100%)" : "linear-gradient(135deg, #4CAF50 0%, #8BC34A 100%)",
                      border: "none",
                      fontSize: "0.9rem",
                      fontWeight: "bold",
                      color: theme === 'dark' ? '#fff' : undefined
                    }}
                    onClick={e => {
                      e.stopPropagation();
                      window.open(jumpoEnglishCard.downloadUrl, '_blank');
                    }}
                  >
                    {t('product.downloadOnGooglePlay')}
                  </Button>
                </div>
                
                <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
                  <Button
                    type="default"
                    size="middle"
                    style={{
                      flex: 1,
                      height: "32px",
                      borderRadius: "6px",
                      fontSize: "0.8rem",
                      borderColor: theme === 'dark' ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)",
                      color: "var(--text-light)"
                    }}
                    onClick={e => {
                      e.stopPropagation();
                      history.push('/product/jumpoenglish/privacy');
                    }}
                  >
                    {t("Privacy Policy")}
                  </Button>
                  <Button
                    type="default"
                    size="middle"
                    style={{
                      flex: 1,
                      height: "32px",
                      borderRadius: "6px",
                      fontSize: "0.8rem",
                      borderColor: theme === 'dark' ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)",
                      color: "var(--text-light)"
                    }}
                    onClick={e => {
                      e.stopPropagation();
                      history.push('/product/jumpoenglish/termandcondition');
                    }}
                  >
                    {t("Terms & Conditions")}
                  </Button>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>

      {/* Web Section */}
      <div style={{ marginBottom: "4rem", background: "var(--background-grey)" }}>
        <Row justify="center" style={{ marginBottom: "2rem" }}>
          <Col span={24}>
            <h2 style={{ textAlign: "center", fontSize: "2.5rem", marginBottom: "1rem", color: "var(--text-color)" }}>
              {t("product.webSectionTitle")}
            </h2>
            <p style={{ textAlign: "center", fontSize: "1.1rem", color: "var(--text-light)", maxWidth: "600px", margin: "0 auto" }}>
              {t("product.webSectionDesc")}
            </p>
          </Col>
        </Row>
        
        <Row gutter={[24, 24]} justify="center">
          <Col xs={24} sm={20} md={16} lg={12} xl={10}>
            <Card
              hoverable
              style={{ 
                borderRadius: "12px", 
                boxShadow: theme === 'dark' ? "0 4px 16px rgba(255,255,255,0.05)" : "0 4px 16px rgba(0,0,0,0.1)",
                overflow: "hidden",
                height: "100%",
                background: "var(--background-light)",
                color: "var(--text-color)"
              }}
              cover={
                <div style={{ 
                  background: theme === 'dark' ? "linear-gradient(135deg, #3a1c1c 0%, #5a3a2a 100%)" : "linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)",
                  padding: "1.5rem",
                  textAlign: "center"
                }}>
                  <img
                    src="/img/icons/LogoNHTN.png"
                    alt={t("product.nhtnTitle")}
                    style={{ width: "60px", height: "60px", objectFit: "contain" }}
                  />
                </div>
              }
            >
              <div style={{ padding: "0.75rem 0" }}>
                <p style={{ fontSize: "0.9rem", lineHeight: "1.5", marginBottom: "1rem", color: "var(--text-light)" }}>
                  {cashewCard.description}
                </p>
                
                <div style={{ marginBottom: "1rem" }}>
                  <h4 style={{ marginBottom: "0.5rem", color: "var(--text-color)", fontSize: "1rem" }}>{t("product.whyChooseUs")}</h4>
                  <ul style={{ paddingLeft: "1.25rem", margin: 0, fontSize: "0.85rem", color: "var(--text-light)" }}>
                    {cashewCard.features.map((feature, index) => (
                      <li key={index} style={{ marginBottom: "0.25rem", lineHeight: "1.4" }}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginBottom: "1rem" }}>
                  <h4 style={{ marginBottom: "0.5rem", color: "var(--text-color)", fontSize: "1rem" }}>{t("product.productRange")}</h4>
                  <div style={{ 
                    display: "flex", 
                    flexWrap: "wrap", 
                    gap: "0.25rem",
                    marginBottom: "0.5rem"
                  }}>
                    {cashewCard.products.map((product, index) => (
                      <span key={index} style={{
                        background: "var(--background-grey)",
                        padding: "0.2rem 0.5rem",
                        borderRadius: "12px",
                        fontSize: "0.75rem",
                        color: "var(--text-color)"
                      }}>
                        {product}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div style={{ 
                  marginBottom: "1rem",
                  padding: "0.75rem",
                  background: "var(--background-grey)",
                  borderRadius: "6px",
                  fontSize: "0.8rem"
                }}>
                  <h4 style={{ marginBottom: "0.5rem", color: "var(--text-color)", fontSize: "0.9rem" }}>{t("product.contact")}</h4>
                  <div style={{ lineHeight: "1.4" }}>
                    <div><strong>{t("product.phone")}</strong> {cashewCard.contact.phone.join(" / ")}</div>
                    <div><strong>{t("product.hours")}</strong> {cashewCard.contact.hours}</div>
                  </div>
                </div>
                
                <Button
                  type="primary"
                  size="middle"
                  style={{
                    width: "100%",
                    height: "40px",
                    borderRadius: "6px",
                    background: theme === 'dark' ? "linear-gradient(135deg, #3a1c1c 0%, #5a3a2a 100%)" : "linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)",
                    border: "none",
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                    color: theme === 'dark' ? '#fff' : undefined
                  }}
                  onClick={() => window.open(cashewCard.website, '_blank')}
                >
                  {t("product.visitWebsite")}
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
      <ContentBlock
        direction="right"
        title={productContent.title}
        content={productContent.content}
        section={productContent.items.map(item => ({
          title: item.title,
          content: item.content,
          icon: item.image
        }))}
        icon="/img/img/homePage/Success.png"
        id="products"
      />
    </Container>
  );
};

export default withTranslation()(Product); 