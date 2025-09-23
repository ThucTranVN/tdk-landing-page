import { lazy } from "react";
import { withTranslation } from "react-i18next";
import { TFunction } from "react-i18next";
import { Row, Col, Card, Button } from "antd";
import { useTheme } from "../../../context/ThemeContext";

const Container = lazy(() => import("../../../common/Container"));
const ScrollToTop = lazy(() => import("../../../common/ScrollToTop"));

const JumpoEnglish = ({ t }: { t: TFunction }) => {
  const { theme } = useTheme();
  const app = {
    title: "Jumpo English",
    description: "Embark on an exciting English learning journey with Jumpo English! This interactive educational app combines fun gameplay with effective language learning, making English acquisition enjoyable for learners of all ages. Join our friendly monkey mascot as you explore vocabulary, grammar, and pronunciation through engaging activities.",
    features: [
      "Interactive Learning: Engaging games and activities for vocabulary building",
      "Progressive Levels: Structured learning path from beginner to advanced",
      "Audio Support: Native pronunciation for better listening skills",
      "Visual Learning: Colorful illustrations and animations to aid memory",
      "Progress Tracking: Monitor your learning journey and achievements",
      "Offline Mode: Learn anywhere, anytime without internet connection"
    ],
    developer: "ThucTran",
    category: "Education",
    rating: "Everyone",
    downloadUrl: "https://play.google.com/store/apps/details?id=com.TDK.JumpoEnglish"
  };

  return (
    <Container>
      <ScrollToTop />
      <Row justify="center" style={{ marginTop: 80, background: "var(--background-grey)" }}>
        <Col xs={24} sm={20} md={16} lg={12} xl={10}>
          <Card
            hoverable
            style={{ 
              borderRadius: "16px", 
              boxShadow: theme === 'dark' ? "0 8px 32px rgba(255,255,255,0.05)" : "0 8px 32px rgba(0,0,0,0.1)",
              overflow: "hidden",
              background: "var(--background-light)",
              color: "var(--text-color)"
            }}
            cover={
              <div style={{ 
                background: theme === 'dark' ? "linear-gradient(135deg, #2d4a2d 0%, #4a6b4a 100%)" : "linear-gradient(135deg, #4CAF50 0%, #8BC34A 100%)",
                padding: "2rem",
                textAlign: "center"
              }}>
                <img
                  src="/img/icons/LogoJumpoEnglish.png"
                  alt="Jumpo English Logo"
                  style={{ width: "80px", height: "80px", objectFit: "contain", marginBottom: 16 }}
                />
                <h2 style={{ color: "white", margin: 0, fontSize: "2rem" }}>{app.title}</h2>
              </div>
            }
          >
            <div style={{ padding: "1rem 0" }}>
              <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "1.5rem", color: "var(--text-light)" }}>{app.description}</p>
              <div style={{ marginBottom: "1.5rem" }}>
                <h4 style={{ marginBottom: "0.5rem", color: "var(--text-color)" }}>Key Features:</h4>
                <ul style={{ paddingLeft: "1.5rem", margin: 0, color: "var(--text-light)" }}>
                  {app.features.map((feature, index) => (
                    <li key={index} style={{ marginBottom: "0.5rem", lineHeight: "1.5" }}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", padding: "1rem", background: "var(--background-grey)", borderRadius: "8px" }}>
                <div>
                  <div style={{ fontSize: "0.9rem", color: "var(--text-light)" }}>Developer</div>
                  <div style={{ fontWeight: "bold", color: "var(--text-color)" }}>{app.developer}</div>
                </div>
                <div>
                  <div style={{ fontSize: "0.9rem", color: "var(--text-light)" }}>App Category</div>
                  <div style={{ fontWeight: "bold", color: "var(--text-color)" }}>{app.category}</div>
                </div>
                <div>
                  <div style={{ fontSize: "0.9rem", color: "var(--text-light)" }}>Rating</div>
                  <div style={{ fontWeight: "bold", color: "var(--text-color)" }}>{app.rating}</div>
                </div>
              </div>
              <Button
                type="primary"
                size="large"
                style={{ 
                  width: "100%", 
                  height: "48px", 
                  borderRadius: "8px", 
                  background: theme === 'dark' ? "linear-gradient(135deg, #2d4a2d 0%, #4a6b4a 100%)" : "linear-gradient(135deg, #4CAF50 0%, #8BC34A 100%)", 
                  border: "none", 
                  fontSize: "1.1rem", 
                  fontWeight: "bold",
                  color: theme === 'dark' ? '#fff' : undefined
                }}
                onClick={() => window.open(app.downloadUrl, '_blank')}
              >
                Download on Google Play
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default withTranslation()(JumpoEnglish);
