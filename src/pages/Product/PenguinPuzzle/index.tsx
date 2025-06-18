import { lazy } from "react";
import { withTranslation } from "react-i18next";
import { TFunction } from "react-i18next";
import { Row, Col, Card, Button } from "antd";
import { useTheme } from "../../../context/ThemeContext";

const Container = lazy(() => import("../../../common/Container"));
const ScrollToTop = lazy(() => import("../../../common/ScrollToTop"));

const PenguinPuzzle = ({ t }: { t: TFunction }) => {
  const { theme } = useTheme();
  const game = {
    title: "Penguin Puzzle",
    description: "Step into the captivating world of the Penguin Puzzle game, where entertainment meets challenge! Designed with creativity and versatility in mind, this game offers ten exciting puzzle variations to keep players engaged and coming back for more.",
    features: [
      "Diverse Gameplay: Enjoy ten distinct puzzle types",
      "Endless Fun: Replay levels to master strategies",
      "Stunning Design: Immerse yourself in colorful graphics",
      "User-Friendly Interface: Suitable for all ages"
    ],
    developer: "ThucTran",
    category: "Puzzle",
    rating: "Everyone",
    downloadUrl: "https://play.google.com/store/apps/details?id=com.TDK.Penguin.Puzzle"
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
                background: theme === 'dark' ? "linear-gradient(135deg, #232b3b 0%, #3a3f5a 100%)" : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                padding: "2rem",
                textAlign: "center"
              }}>
                <img
                  src="/img/icons/LogoPenguinPuzzle.png"
                  alt="Penguin Puzzle Logo"
                  style={{ width: "80px", height: "80px", objectFit: "contain", marginBottom: 16 }}
                />
                <h2 style={{ color: "white", margin: 0, fontSize: "2rem" }}>{game.title}</h2>
              </div>
            }
          >
            <div style={{ padding: "1rem 0" }}>
              <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "1.5rem", color: "var(--text-light)" }}>{game.description}</p>
              <div style={{ marginBottom: "1.5rem" }}>
                <h4 style={{ marginBottom: "0.5rem", color: "var(--text-color)" }}>Key Features:</h4>
                <ul style={{ paddingLeft: "1.5rem", margin: 0, color: "var(--text-light)" }}>
                  {game.features.map((feature, index) => (
                    <li key={index} style={{ marginBottom: "0.5rem", lineHeight: "1.5" }}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", padding: "1rem", background: "var(--background-grey)", borderRadius: "8px" }}>
                <div>
                  <div style={{ fontSize: "0.9rem", color: "var(--text-light)" }}>Developer</div>
                  <div style={{ fontWeight: "bold", color: "var(--text-color)" }}>{game.developer}</div>
                </div>
                <div>
                  <div style={{ fontSize: "0.9rem", color: "var(--text-light)" }}>Game Category</div>
                  <div style={{ fontWeight: "bold", color: "var(--text-color)" }}>{game.category}</div>
                </div>
                <div>
                  <div style={{ fontSize: "0.9rem", color: "var(--text-light)" }}>Rating</div>
                  <div style={{ fontWeight: "bold", color: "var(--text-color)" }}>{game.rating}</div>
                </div>
              </div>
              <Button
                type="primary"
                size="large"
                style={{ 
                  width: "100%", 
                  height: "48px", 
                  borderRadius: "8px", 
                  background: theme === 'dark' ? "linear-gradient(135deg, #232b3b 0%, #3a3f5a 100%)" : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", 
                  border: "none", 
                  fontSize: "1.1rem", 
                  fontWeight: "bold",
                  color: theme === 'dark' ? '#fff' : undefined
                }}
                onClick={() => window.open(game.downloadUrl, '_blank')}
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

export default withTranslation()(PenguinPuzzle); 