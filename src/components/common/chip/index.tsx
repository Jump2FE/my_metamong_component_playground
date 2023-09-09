import { HTMLAttributes, ReactNode } from "react";

const CHIP_COLORS = {
  primary: "#007bff",
  secondary: "#6c757d",
  success: "#28a745",
  danger: "#dc3545",
  warning: "#ffc107",
  info: "#17a2b8",
  light: "#f8f9fa",
  dark: "#343a40",
};

const FONT_SIZES = {
  small: "0.75rem",
  medium: "1rem",
  large: "1.25rem",
};

const WIDTHS = {
  small: "3rem",
  medium: "4rem",
  large: "5rem",
};

const BORDER_RADII = {
  small: "1rem",
  medium: "1.5rem",
  large: "2rem",
};

export type ChipColorType = keyof typeof CHIP_COLORS;
export type ChipWidthSizeType = keyof typeof WIDTHS;
export type ChipFontSizeType = keyof typeof FONT_SIZES;
export type ChipBorderRadiusType = keyof typeof BORDER_RADII;

interface ChipProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  color?: ChipColorType;
  size?: ChipWidthSizeType;
  fontSize?: ChipFontSizeType;
  round?: ChipBorderRadiusType;
  left?: ReactNode;
  right?: ReactNode;
}

export const Chip = ({
  label,
  color = "primary",
  size = "small",
  fontSize = "medium",
  round = "medium",
  left,
  right,
  ...props
}: ChipProps) => {
  const style = {
    backgroundColor: CHIP_COLORS[color],
    minWidth: WIDTHS[size],
    width: "fit-content",
    textAlign: "center" as const,
    padding: "0.5rem 1rem",
    fontSize: FONT_SIZES[fontSize],
    borderRadius: BORDER_RADII[round],
  };

  return (
    <div {...props} style={style}>
      {left}
      <label>{label}</label>
      {right}
    </div>
  );
};
