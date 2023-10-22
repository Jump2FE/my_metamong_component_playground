export const THEME_COLORS = {
  primary: "#007bff",
  secondary: "#6c757d",
  success: "#28a745",
  danger: "#dc3545",
  warning: "#ffc107",
  info: "#17a2b8",
  light: "#f8f9fa",
  dark: "#343a40",
};

export const FONT_SIZES = {
  small: "0.75rem",
  medium: "1rem",
  large: "1.25rem",
};

export const WIDTHS = {
  small: "3rem",
  medium: "4rem",
  large: "5rem",
};

export const BORDER_RADII = {
  small: "1rem",
  medium: "1.5rem",
  large: "2rem",
};

export type ThemeColorType = keyof typeof THEME_COLORS;
export type WidthSizeType = keyof typeof WIDTHS;
export type FontSizeType = keyof typeof FONT_SIZES;
export type BorderRadiusType = keyof typeof BORDER_RADII;
