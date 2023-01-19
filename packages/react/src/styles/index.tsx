import {
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
  colors,
} from '@coezzion/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'
import React from 'react'

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
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
  },
})

interface IThemeProvider {
  children: React.ReactNode
  theme: any
}

export const ThemeProvider = ({ children, theme }: IThemeProvider) => {
  const newTheme = createTheme(theme)

  return <div className={newTheme}>{children}</div>
}
