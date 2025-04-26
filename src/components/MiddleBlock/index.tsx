import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";

interface MiddleBlockProps {
  title: string;
  content: string;
  button: string;
  t: TFunction;
  id?: string;
}

const MiddleBlock = ({ title, content, button, t, id }: MiddleBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    const offset = 100; // Same offset as in ContentBlock
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth"
    });
  };
  return (
    <MiddleBlockSection id={id}>
      <Slide direction="up" triggerOnce>
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              {button && (
                <Button name="submit" onClick={() => scrollTo("solution")}>
                  {t(button)}
                </Button>
              )}
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
