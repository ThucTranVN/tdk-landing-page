import { lazy } from "react";
import { withTranslation } from "react-i18next";
import { TFunction } from "i18next";

const Container = lazy(() => import("../common/Container"));
const ScrollToTop = lazy(() => import("../common/ScrollToTop"));

const PenguinPuzzle = ({ t }: { t: TFunction }) => {
  return (
    <Container>
      <ScrollToTop />
      <div
        style={{
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 100,
          paddingBottom: 60,
          background: "#f7f9fb"
        }}
      >
        <h1
          style={{
            fontSize: "2.8rem",
            fontWeight: 700,
            marginBottom: 32,
            color: "#222",
            letterSpacing: 1,
            textAlign: "center"
          }}
        >
          {t("penguin.title")}
        </h1>
        <p
          style={{
            fontSize: "1.25rem",
            lineHeight: 1.8,
            color: "#444",
            maxWidth: 600,
            margin: "0 auto 40px auto",
            textAlign: "center"
          }}
        >
          {t("penguin.description")}
        </p>
        <div style={{ display: "flex", gap: 24, justifyContent: "center" }}>
          <a
            href="/product/penguinpuzzle/privacy"
            style={{
              padding: "12px 28px",
              borderRadius: 8,
              background: "#1890ff",
              color: "#fff",
              fontWeight: 500,
              textDecoration: "none",
              fontSize: "1rem",
              transition: "background 0.2s",
              boxShadow: "0 2px 8px rgba(24,144,255,0.08)"
            }}
            onMouseOver={e => (e.currentTarget.style.background = '#1765ad')}
            onMouseOut={e => (e.currentTarget.style.background = '#1890ff')}
          >
            {t("penguin.privacy")}
          </a>
          <a
            href="/product/penguinpuzzle/termandcondition"
            style={{
              padding: "12px 28px",
              borderRadius: 8,
              background: "#1890ff",
              color: "#fff",
              fontWeight: 500,
              textDecoration: "none",
              fontSize: "1rem",
              transition: "background 0.2s",
              boxShadow: "0 2px 8px rgba(24,144,255,0.08)"
            }}
            onMouseOver={e => (e.currentTarget.style.background = '#1765ad')}
            onMouseOut={e => (e.currentTarget.style.background = '#1890ff')}
          >
            {t("penguin.terms")}
          </a>
        </div>
      </div>
    </Container>
  );
};

export default withTranslation()(PenguinPuzzle); 