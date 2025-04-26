import { SvgIconProps } from "../types";
import styled from "styled-components";

const StyledImage = styled.img<{ isSvg: boolean }>`
  ${props => !props.isSvg && `
    object-fit: contain;
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.05);
    }
  `}
`;

export const SvgIcon = ({ src, width, height }: SvgIconProps) => {
  const getImagePath = (src: string) => {
    if (src.endsWith('.svg')) {
      return `/img/svg/${src}`;
    }
    // For PNG images, check if the path already includes /img/
    if (src.startsWith('/img/')) {
      return src;
    }
    return `/img/${src}`;
  };

  const isSvg = src.endsWith('.svg');

  return (
    <StyledImage 
      src={getImagePath(src)} 
      alt={src} 
      width={width} 
      height={height}
      isSvg={isSvg}
    />
  );
};
