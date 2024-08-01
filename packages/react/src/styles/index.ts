/// Configurações do Stitches

import {
  colors,
  fontWeights,
  fonts,
  fontsSizes,
  lineHeights,
  radii,
  space,
} from '@morais-ui/tokens';
import { createStitches, defaultThemeMap } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
  theme: {
    colors,
    fontSizes: fontsSizes,
    fontWeights,
    fonts,
    lineHeights,
    raii: radii, // border-radius
    space,
  },
});
