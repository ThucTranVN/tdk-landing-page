import styled from "styled-components";

export const Content = styled("p")`
  margin-top: 1.5rem;
`;

export const Container = styled("div")`
  position: relative;
  max-width: 700px;

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
`;

export const TextWrapper = styled("div")`
  border-radius: 3rem;
  max-width: 400px;
`;
