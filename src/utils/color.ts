/**
 * Credit to [@cxa](https://github.com/cxa)
 * @edit https://github.com/cxa/enough-shadcn-ui-colors
 */

import { TinyColor } from '@ctrl/tinycolor'

type HSL = `${number} ${number | string}% ${number | string}%`

export interface ColorVars {
  'background': HSL
  'foreground': HSL
  'card': HSL
  'card-foreground': HSL
  'popover': HSL
  'popover-foreground': HSL
  'primary': HSL
  'primary-foreground': HSL
  'secondary': HSL
  'secondary-foreground': HSL
  'muted': HSL
  'muted-foreground': HSL
  'accent': HSL
  'accent-foreground': HSL
  'destructive': HSL
  'destructive-foreground': HSL
  'border': HSL
  'input': HSL
  'ring': HSL
}

const defaults: { light: ColorVars, dark: ColorVars } = {
  light: {
    'background': '0 0% 100%',
    'foreground': '240 10% 3.9%',
    'card': '0 0% 100%',
    'card-foreground': '240 10% 3.9%',
    'popover': '0 0% 100%',
    'popover-foreground': '240 10% 3.9%',
    'primary': '240 5.9% 10%',
    'primary-foreground': '0 0% 98%',
    'secondary': '240 4.8% 95.9%',
    'secondary-foreground': '240 5.9% 10%',
    'muted': '240 4.8% 95.9%',
    'muted-foreground': '240 3.8% 46.1%',
    'accent': '240 4.8% 95.9%',
    'accent-foreground': '240 5.9% 10%',
    'destructive': '0 84.2% 60.2%',
    'destructive-foreground': '0 0% 98%',
    'border': '240 5.9% 90%',
    'input': '240 5.9% 90%',
    'ring': '240 5.9% 10%',
  },
  dark: {
    'background': '240 10% 3.9%',
    'foreground': '0 0% 98%',
    'card': '240 10% 3.9%',
    'card-foreground': '0 0% 98%',
    'popover': '240 10% 3.9%',
    'popover-foreground': '0 0% 98%',
    'primary': '0 0% 98%',
    'primary-foreground': '240 5.9% 10%',
    'secondary': '240 3.7% 15.9%',
    'secondary-foreground': '0 0% 98%',
    'muted': '240 3.7% 15.9%',
    'muted-foreground': '240 5% 64.9%',
    'accent': '240 3.7% 15.9%',
    'accent-foreground': '0 0% 98%',
    'destructive': '0 62.8% 30.6%',
    'destructive-foreground': '0 0% 98%',
    'border': '240 3.7% 15.9%',
    'input': '240 3.7% 15.9%',
    'ring': '240 4.9% 83.9%',

  },
}

function toHsl(color: { h: number, s: number, l: number }): HSL {
  const { h, s, l } = new TinyColor(color).toHsl()
  return `${Math.trunc(h)} ${(s * 100).toFixed(2)}% ${(l * 100).toFixed(2)}%`
}

export function genShadcnColorVars(color: string, isDark?: boolean): ColorVars {
  const okhsl = new TinyColor(color).toHsl()
  const d = isDark ? defaults.dark : defaults.light
  const primary = toHsl(okhsl)
  const fg
    = okhsl.l > 0.7
      ? isDark
        ? d.background
        : d.foreground
      : isDark
        ? d.foreground
        : d.background
  let destructive = ''
  let destructiveFg = ''
  if (okhsl.h! > 300 || okhsl.h! < 60) {
    destructive = toHsl({
      ...okhsl,
      s: 1,
      l: isDark ? 0.1 : 0.95,
      h: 15,
    })
    destructiveFg = toHsl({ ...okhsl, s: 1, h: 15 })
  }
  else {
    destructive = toHsl({ ...okhsl, s: 1, h: 15 })
    destructiveFg = fg
  }

  return {
    ...d,
    primary,
    'primary-foreground': fg,
    'destructive': destructive as HSL,
    'destructive-foreground': destructiveFg as HSL,
    'ring': primary,
  }
}
