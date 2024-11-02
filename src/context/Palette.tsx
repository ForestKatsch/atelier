import React, { createContext, PropsWithChildren, useContext, useMemo } from "react";
import { light, Palette, PaletteWithProminenceOnly, ProminenceLevel } from "@/theme/palette";

interface PaletteProviderProps extends PropsWithChildren {
  palette: Palette;
}

interface PaletteContextData {
  palette: Palette;
}

const PaletteContext = createContext<PaletteContextData>({
  palette: light,
});

export function PaletteProvider({ palette, children }: PaletteProviderProps) {
  const memoized = useMemo(() => ({ palette }), [palette]);

  return <PaletteContext.Provider value={memoized}>{children}</PaletteContext.Provider>;
}

export function usePalette<
  TKey extends keyof PaletteWithProminenceOnly,
  TProminence extends ProminenceLevel,
>(key: TKey, prominence: TProminence): Palette[TKey][TProminence];
export function usePalette<TKey extends keyof Palette>(key: TKey): Palette[TKey];
export function usePalette(key?: never): Palette;

export function usePalette<TKey extends keyof Palette>(
  key?: TKey,
  prominence?: ProminenceLevel
): Palette | Palette[TKey] {
  const { palette } = useContext(PaletteContext);

  if (key != null) {
    if (prominence != null) {
      // This is enforced by TS and is safe provided there are no TS errors.
      return (palette[key] as any)[prominence] as any;
    }
    return palette[key];
  }

  return palette;
}
