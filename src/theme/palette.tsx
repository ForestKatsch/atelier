export type Color = string;

export interface Prominence<T> {
  primary: T;
  secondary: T;
  tertiary: T;
}

export type ProminenceLevel = keyof Prominence<never>;

export interface Palette {
  background: Color;

  text: Prominence<Color>;
  fill: Prominence<Color>;

  divider: Color;

  shadow: Color;
}

export type PaletteWithProminenceOnly = {
  [K in keyof Palette as Palette[K] extends Prominence<any> ? K : never]: Palette[K];
};

export const light: Palette = {
  background: "#fff",

  text: {
    primary: "#000",
    secondary: "#666",
    tertiary: "#bbb",
  },
  fill: {
    primary: "rgba(0, 0, 0, 0.1)",
    secondary: "rgba(0, 0, 0, 0.05)",
    tertiary: "rgba(0, 0, 0, 0.02)",
  },

  divider: "rgba(0, 0, 0, 0.02)",

  shadow: "rgba(0, 0, 0, 0.1)",
};
