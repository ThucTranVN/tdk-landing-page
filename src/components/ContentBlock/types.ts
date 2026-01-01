import { TFunction } from "i18next";
export interface ContentBlockProps {
  icon: string;
  title: string;
  subtitle?: string;
  content: string;
  section?: {
    title: string;
    content: string;
    icon: string;
  }[];
  button?: (
    | {
        title: string;
        color?: undefined;
      }
    | {
        title: string;
        color: string;
      }
  )[] | {
    title: string;
    link?: string;
  };
  t: TFunction;
  id: string;
  direction: "left" | "right";
}
