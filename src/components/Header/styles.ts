import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

export const HeaderSection = styled("header")`
  padding: 1rem 0.5rem;
  position: fixed;
  width: 100%;
  z-index: 1000;
  background: var(--background-grey);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: background-color var(--transition), box-shadow var(--transition);

  .ant-row-space-between {
    align-items: center;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  transition: var(--transition);

  img, svg {
    width: 64px;
    height: 64px;
    
    @media only screen and (max-width: 768px) {
      width: 48px;
      height: 48px;
    }
    
    @media only screen and (max-width: 480px) {
      width: 40px;
      height: 40px;
    }
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export const NavLink = styled("div")`
  display: inline-block;
  text-align: center;
  transition: var(--transition);
`;

export const CustomNavLink = styled("div")`
  width: 203px;
  display: inline-block;
  transition: var(--transition);

  @media only screen and (max-width: 411px) {
    width: 150px;
  }

  @media only screen and (max-width: 320px) {
    width: 118px;
  }
`;

export const Burger = styled("div")`
  @media only screen and (max-width: 890px) {
    display: block;
  }
  display: none;
  svg {
    fill: var(--primary-blue);
    transition: fill var(--transition);
  }
`;

export const NotHidden = styled("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: var(--transition);

  @media only screen and (max-width: 890px) {
    display: none;
  }
`;

export const Menu = styled("h4")`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  color: var(--text-color);
  transition: color var(--transition);
`;

export const CustomNavLinkSmall = styled("div")`
  font-size: 1.2rem;
  color: var(--text-color);
  transition: var(--transition);
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    color: var(--primary-blue);
    transform: translateY(-2px);
  }
`;

export const Label = styled("span")`
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--text-color);
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  transition: color var(--transition);
`;

export const Outline = styled(MenuOutlined)`
  font-size: 22px;
  color: var(--text-color);
  transition: color var(--transition);
`;

export const Span = styled("span")`
  cursor: pointer;
  transition: var(--transition);
  &:hover {
    color: var(--primary-blue);
  }
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
  justify-content: flex-end;
  align-items: center;
  gap: 1.5rem;
  transition: var(--transition);
`;

export const LanguageToggleContainer = styled("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: 1rem;
`;

export const LanguageToggle = styled("button")`
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

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: scale(1.1);
  }

  svg {
    width: 20px;
    height: 20px;
  }

  @media only screen and (max-width: 768px) {
    padding: 0.75rem;
    svg {
      width: 24px;
      height: 24px;
    }
  }

  @media only screen and (max-width: 480px) {
    padding: 1rem;
    svg {
      width: 28px;
      height: 28px;
    }
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

  @media only screen and (max-width: 768px) {
    padding: 0.75rem;
    svg {
      width: 24px;
      height: 24px;
    }
  }

  @media only screen and (max-width: 480px) {
    padding: 1rem;
    svg {
      width: 28px;
      height: 28px;
    }
  }
`;
