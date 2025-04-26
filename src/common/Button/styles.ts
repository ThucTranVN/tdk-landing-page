import styled from "styled-components";

export const StyledButton = styled("button")<any>`
  background: ${(props) => {
    if (props.color) return props.color;
    if (props.variant === "secondary") return "transparent";
    return "var(--primary-blue)";
  }};
  color: ${(props) => (props.variant === "secondary" ? "var(--primary-blue)" : "#fff")};
  font-size: 1rem;
  font-weight: 500;
  width: 100%;
  border: ${(props) => (props.variant === "secondary" ? "1.5px solid var(--primary-blue)" : "none")};
  border-radius: 8px;
  padding: 13px 25px;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 180px;
  transition: var(--transition);
  text-transform: capitalize;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-decoration: none;

  span {
    text-decoration: none !important;
  }

  &:hover,
  &:active,
  &:focus {
    background: ${(props) => {
      if (props.variant === "secondary") return "var(--primary-blue)";
      return "var(--primary-green)";
    }};
    color: #fff;
    border-color: ${(props) => (props.variant === "secondary" ? "var(--primary-blue)" : "transparent")};
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    text-decoration: none;

    span {
      text-decoration: none !important;
    }
  }
`;
