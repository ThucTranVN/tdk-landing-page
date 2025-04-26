import styled from "styled-components";

export const Container = styled("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
`;

export const StyledInput = styled("input")`
  font-size: 1rem;
  padding: 1rem 1.25rem;
  width: 100%;
  border: 1px solid var(--text-light);
  border-radius: 8px;
  background: var(--background-light);
  color: var(--text-color);
  transition: var(--transition);
  outline: none;

  &:focus,
  &:hover {
    border-color: var(--primary-blue);
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.1);
  }

  &::placeholder {
    color: var(--text-light);
    opacity: 1;
  }
`;
