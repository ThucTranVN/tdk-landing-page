import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterSection = styled("footer")`
  background: var(--background-grey);
  padding: 5rem 0 3rem;
`;

export const Title = styled("h4")`
  font-size: 2rem;
  line-height: 1.2;
  color: var(--text-color);
  margin-bottom: 1rem;
  transition: color var(--transition);

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
`;

export const Content = styled("p")`
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--text-light);
  margin: 1.5rem 0 2rem 0;
  transition: color var(--transition);
`;

export const ContactLink = styled("a")`
  color: var(--text-light);
  font-size: 1rem;
  margin: 0.5rem 0;
  text-decoration: none;
  transition: var(--transition);

  &:hover {
    color: var(--primary-blue);
    text-decoration: underline;
  }
`;

export const NavLink = styled(Link)`
  display: block;
  font-size: 1rem;
  margin-bottom: 0.625rem;
  transition: var(--transition);
  color: var(--text-light);

  &:hover {
    color: var(--primary-blue);
    transform: translateX(5px);
  }
`;

export const Extra = styled("section")`
  background: var(--background-grey);
  position: relative;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 2rem;
`;

export const LogoContainer = styled("div")`
  display: flex;
  position: relative;
  
  img {
    transition: var(--transition);
    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const Para = styled("div")`
  color: var(--text-light);
  font-size: 1rem;
  margin: 0.5rem 0;
`;

export const Large = styled(Link)`
  font-size: 1rem;
  color: var(--text-light);
  cursor: pointer;
  transition: var(--transition);
  margin-bottom: 0.625rem;
  display: block;

  &:hover {
    color: var(--primary-blue);
    transform: translateX(5px);
  }
`;

export const Chat = styled("p")`
  color: var(--primary-blue);
  max-width: fit-content;
  border-bottom: 1px solid var(--primary-blue);
  cursor: pointer;
  margin-top: 1rem;
  transition: var(--transition);

  &:hover {
    color: var(--primary-green);
    border-bottom: 1px solid var(--primary-green);
    transform: translateY(-2px);
  }
`;

export const Empty = styled("div")`
  position: relative;
  height: 53px;
`;

export const FooterContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 510px;
  margin: 0 auto;
  padding: 0.5rem;
`;

export const Language = styled("h4")`
  font-size: 1.5rem;
  color: var(--text-color);
  margin-bottom: 1.5rem;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;

export const Label = styled("label")`
  font-size: 1rem;
  color: var(--text-light);
  margin-bottom: 1rem;
  display: block;
`;

export const LanguageSwitch = styled("div")`
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    transform: scale(1.1);
  }
`;

export const LanguageSwitchContainer = styled("div")`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
`;

export const ContactInfo = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const ContactItem = styled("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const IconWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  padding: 6px;

  @media only screen and (max-width: 768px) {
    width: 36px;
    height: 36px;
    padding: 7px;
  }
  
  @media only screen and (max-width: 480px) {
    width: 40px;
    height: 40px;
    padding: 8px;
    padding-top: 1rem;
  }

  img, svg {
    width: 20px;
    height: 20px;
    fill: white;
    
    @media only screen and (max-width: 768px) {
      width: 22px;
      height: 22px;
    }
    
    @media only screen and (max-width: 480px) {
      width: 24px;
      height: 24px;
    }
  }
`;

export const MapContainer = styled("div")`
  width: 100%;
  margin-top: 2rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const CopyrightInfo = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--text-light);
  font-size: 0.875rem;
  line-height: 1.2;
  text-align: center;
  padding: 0.5rem;
  width: 100%;
  margin-top: 0.5rem;
  border-radius: 8px;
  transition: var(--transition);

  div:first-child {
    font-weight: 600;
    color: var(--text-color);
    margin-bottom: 0.25rem;
  }

  div:last-child {
    color: var(--text-light);
    font-size: 0.8rem;
  }
`;

export const ThemeToggle = styled("button")`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-color);
  transition: var(--transition);
  border-radius: 50%;
  margin-left: 1rem;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: scale(1.1);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;
