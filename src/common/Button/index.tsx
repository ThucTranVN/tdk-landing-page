import { StyledButton } from "./styles";

interface ButtonProps {
  color?: string;
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  name?: string;
  loading?: boolean;
}

export const Button = ({ color, children, onClick, variant = "primary", name, loading }: ButtonProps) => (
  <StyledButton color={color} onClick={onClick} variant={variant} name={name} disabled={loading}>
    {loading ? "Loading..." : children}
  </StyledButton>
);
