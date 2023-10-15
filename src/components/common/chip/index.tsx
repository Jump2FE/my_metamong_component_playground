import { HTMLAttributes, ReactNode } from "react";

import { THEME_COLORS, WIDTHS, FONT_SIZES, BORDER_RADII } from "@/theme";
import type {
  BorderRadiusType,
  FontSizeType,
  ThemeColorType,
  WidthSizeType,
} from "@/theme";

interface ChipProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  color?: ThemeColorType;
  size?: WidthSizeType;
  fontSize?: FontSizeType;
  round?: BorderRadiusType;
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
    backgroundColor: THEME_COLORS[color],
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
