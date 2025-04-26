import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { ContentBlockProps } from "./types";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import {
  ContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  StyledRow,
  ButtonWrapper,
  ImageWrapper,
} from "./styles";

const ContentBlock = ({
  icon,
  title,
  content,
  section,
  button,
  t,
  id,
  direction,
  subtitle,
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
    // Add a small delay to adjust the scroll position after the initial scroll
    setTimeout(() => {
      window.scrollBy(0, -60);
    }, 100);
  };

  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        <StyledRow
          justify="space-between"
          align="middle"
          id={id}
          direction={direction}
        >
          <Col lg={11} md={11} sm={12} xs={24}>
            <ImageWrapper>
              <SvgIcon
                src={icon}
                width={icon.endsWith('.svg') ? "100%" : "auto"}
                height={icon.endsWith('.svg') ? "100%" : "auto"}
              />
            </ImageWrapper>
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              {subtitle && (
                <Fade direction="up" delay={400} triggerOnce cascade damping={0.5}>
                  <h2>{t(subtitle)}</h2>
                </Fade>
              )}
              <Content>{t(content)}</Content>
              {direction === "right" ? (
                <ButtonWrapper>
                  {Array.isArray(button) &&
                    button.map(
                      (
                        item: {
                          color?: string;
                          title: string;
                          link?: string;
                        },
                        id: number
                      ) => {
                        return (
                          <Button
                            key={id}
                            color={item.color}
                            onClick={() => scrollTo(item.link?.replace('/', '') || 'contact')}
                          >
                            {t(item.title)}
                          </Button>
                        );
                      }
                    )}
                </ButtonWrapper>
              ) : (
                <>
                  <ServiceWrapper>
                    <Row justify="space-between">
                      {typeof section === "object" &&
                        section.map(
                          (
                            item: {
                              title: string;
                              content: string;
                              icon: string;
                            },
                            id: number
                          ) => {
                            return (
                              <Col key={id} span={11}>
                                <SvgIcon
                                  src={item.icon}
                                  width={item.icon.endsWith('.svg') ? "60px" : "120px"}
                                  height={item.icon.endsWith('.svg') ? "60px" : "120px"}
                                />
                                <MinTitle>{t(item.title)}</MinTitle>
                                <MinPara>{t(item.content)}</MinPara>
                              </Col>
                            );
                          }
                        )}
                    </Row>
                  </ServiceWrapper>
                  {!Array.isArray(button) && button?.title && (
                    <ButtonWrapper>
                      <Button
                        color="var(--primary-blue)"
                        onClick={() => scrollTo(button.link?.replace('/', '') || 'mission')}
                      >
                        {t(button.title)}
                      </Button>
                    </ButtonWrapper>
                  )}
                </>
              )}
            </ContentWrapper>
          </Col>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(ContentBlock);
