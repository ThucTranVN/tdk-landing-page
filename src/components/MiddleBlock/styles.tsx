import styled from "styled-components";

export const MiddleBlockSection = styled("section")`
  position: relative;
  padding: 5rem 0;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 4rem 0;
  }

  @media screen and (max-width: 768px) {
    padding: 3rem 0;
  }

  @media screen and (max-width: 480px) {
    padding: 2rem 0;
  }
`;

export const Content = styled("p")`
  padding: 1.5rem 0 2rem 0;
`;

export const ContentWrapper = styled("div")`
  max-width: 570px;

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

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
