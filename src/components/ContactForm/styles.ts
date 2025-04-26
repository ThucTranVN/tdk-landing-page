import styled from "styled-components";

export const ContactContainer = styled("div")`
  padding: 5rem 0;
  background: linear-gradient(to right, rgba(247, 248, 252, 0.5), rgba(241, 242, 246, 0.5));
  border-radius: 20px;

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

export const FormGroup = styled("form")`
  width: 100%;
  max-width: 520px;
  background: var(--background-light);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: var(--transition);
  border: 2px solid var(--text-light);

  [data-theme="dark"] & {
    background: #2a2a2a;
    border-color: #404040;
  }

  &:hover {
    transform: translateY(-5px);
    border-color: var(--primary-blue);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  }

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`;

export const Span = styled("span")`
  display: block;
  font-weight: 600;
  color: rgb(255, 130, 92);
  height: 0.775rem;
  padding: 0 0.675rem;
  font-size: 0.875rem;
`;

export const ButtonContainer = styled("div")`
  text-align: end;
  position: relative;
  margin-top: 2rem;

  button {
    background: var(--primary-blue);
    transition: all 0.3s ease;
    
    &:hover {
      background: var(--primary-green);
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
    }
  }

  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`;
