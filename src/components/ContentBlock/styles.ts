import { Row } from "antd";
import styled from "styled-components";

export const ContentSection = styled("section")`
  position: relative;
  padding: 5rem 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0;
  }

  @media only screen and (max-width: 768px) {
    padding: 3rem 0;
  }

  @media only screen and (max-width: 480px) {
    padding: 2rem 0;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
`;

export const StyledRow = styled(Row)`
  flex-direction: ${({ direction }: { direction: string }) =>
    direction === "left" ? "row" : "row-reverse"};
  width: 100%;
  margin: 0 !important;
  padding: 0 !important;

  @media only screen and (max-width: 768px) {
    flex-direction: column !important;
  }
`;

export const ImageWrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 400px;
  padding: 2rem;
  margin-top: 2rem;

  img, svg {
    width: 80%;
    max-width: 500px;
    height: auto;
    object-fit: contain;
    display: block;
    transition: all 0.3s ease-in-out;

    @media only screen and (max-width: 1024px) {
      max-width: 400px;
    }

    @media only screen and (max-width: 768px) {
      max-width: 300px;
      min-height: 250px;
    }

    @media only screen and (max-width: 480px) {
      max-width: 200px;
      min-height: 200px;
    }
  }

  @media only screen and (max-width: 768px) {
    min-height: 300px;
    padding: 1.5rem;
    margin-top: 1.5rem;
  }

  @media only screen and (max-width: 480px) {
    min-height: 200px;
    padding: 1rem;
    margin-top: 1rem;
  }
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;
  z-index: 1;
  padding: 1rem 0;

  h6 {
    font-size: 2rem;
    line-height: 1.2;
    margin-bottom: 1rem;

    @media only screen and (max-width: 768px) {
      font-size: 1.5rem;
      line-height: 1.1;
      margin-bottom: 0.75rem;
    }

    @media only screen and (max-width: 480px) {
      font-size: 1.25rem;
      line-height: 1;
      margin-bottom: 0.5rem;
    }
  }

  h2 {
    font-size: 1.5rem;
    line-height: 1.4;
    margin-bottom: 1.5rem;
    color: var(--text-light);
    font-weight: 500;
    letter-spacing: 0.5px;

    @media only screen and (max-width: 768px) {
      font-size: 1.25rem;
      line-height: 1.3;
      margin-bottom: 1rem;
    }

    @media only screen and (max-width: 480px) {
      font-size: 1.1rem;
      line-height: 1.2;
      margin-bottom: 0.75rem;
    }
  }

  @media only screen and (max-width: 575px) {
    padding: 0.5rem 0;
  }
`;

export const ServiceWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin-bottom: 2.5rem;

  .ant-row {
    width: 100%;
  }

  .ant-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 2rem;

    img, svg {
      width: 120px;
      height: 120px;
      margin-bottom: 1rem;
      transition: all 0.3s ease-in-out;

      @media only screen and (max-width: 1024px) {
        width: 100px;
        height: 100px;
      }

      @media only screen and (max-width: 768px) {
        width: 80px;
        height: 80px;
      }

      @media only screen and (max-width: 480px) {
        width: 60px;
        height: 60px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    margin-bottom: rem;
  }

  @media only screen and (max-width: 480px) {
    margin-bottom: 1.5rem;
  }
`;

export const MinTitle = styled("h6")`
  font-size: 15px;
  line-height: 1.2;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: var(--text-color);
  font-family: "Motiva Sans Light", sans-serif;
  transition: color var(--transition);

  @media only screen and (max-width: 768px) {
    font-size: 13px;
    line-height: 1.1;
    padding: 0.25rem 0;
  }

  @media only screen and (max-width: 480px) {
    font-size: 12px;
    line-height: 1;
    padding: 0.2rem 0;
  }
`;

export const MinPara = styled("p")`
  font-size: 15px;
  line-height: 1.6;
  color: var(--text-color);
  margin-bottom: 1rem;
  transition: color var(--transition);

  @media only screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 0.75rem;
  }

  @media only screen and (max-width: 480px) {
    font-size: 13px;
    line-height: 1.4;
    margin-bottom: 0.5rem;
  }
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  @media only screen and (max-width: 768px) {
    margin-top: 1.5rem;
    gap: 0.75rem;
  }

  @media only screen and (max-width: 480px) {
    margin-top: 1rem;
    gap: 0.5rem;
    flex-direction: column;
  }
`;